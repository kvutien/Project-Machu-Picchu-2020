const Pepito = artifacts.require('Pepito');
const PepitoDisguise = artifacts.require('PepitoDisguise');
// todo: add a block 'before' and separate into 2 'describe' sections

contract('Pepito', async (accounts) => {
        // test 1 - OK passed
        it('Pepito deployed address should be different from 0', async () => {
        const pepitoInstance = await Pepito.deployed();

        // simplest test: read a public variable
        const ownerPepito = await pepitoInstance.owner();
        assert.notEqual(ownerPepito, 0, "Pepito address cannot be 0x0");
    });

    it('Initial balance should be 10', async() => {
        // test 2 - OK passed. BTW, balance not yet useful but is a placeholder for later
        let pepitoInstance = await Pepito.deployed()

        let balance = await pepitoInstance.initialBalance();
        assert.equal(balance, 10, 'Pepito`s initial balance of tokens is not 10')
    })

    it('First createPepitoDisguise() should have disguiseCount == 1', async() => {
        // test 3 - OK passed
        let pepitoInstance = await Pepito.deployed()

        await pepitoInstance.createPepitoDisguise( {from: accounts[0] })   // after we create a disguise...
        let result = (await pepitoInstance.disguiseCount1()).toNumber()    // count should be '1'
        // How can I get 'result' in a format that suits assert when comparing with '1'?
        assert.equal(result, 1, "Pepito disguiseCount1 is not incremented.")
    })

    it('Each createPepitoDisguise() should increment disguiseCount1 and give a different address', async() => {
        // test 4 - OK passed
        Pepito.deployed()
            .then( async(pepitoInstance) => {
                const disguiseInstance1 = await pepitoInstance.createPepitoDisguise( {from: accounts[0] })
                let firstCount = (await pepitoInstance.disguiseCount1()).toNumber(); // should be '1' after we create a disguise

                const disguiseInstance2 = await pepitoInstance.createPepitoDisguise( {from: accounts[0] } ) // create another PepitoDisguise
                let secondCount = (await pepitoInstance.disguiseCount1()).toNumber();     // should be '2'
                assert.equal(firstCount, 1, 'The first value of disguiseCount1 should be 1.')
                assert.equal(firstCount+1, secondCount, 'The second value of disguiseCount1 is not first + 1.')
                assert.notEqual(disguiseInstance1, disguiseInstance2, 'Addresses of 2 disguises must be different')
            })
    })

    it('Calling toggleContractActive() should toggle the circuit breaker flag', async() => {
        // test 5 - OK passed.
        var stopped = false;
        const oldValue = stopped;
        const pepitoInstance = await Pepito.deployed();

        await pepitoInstance.toggleContractActive({from: accounts[0]});     // call function 'toggle'
        stopped = await pepitoInstance.stopped();                     // should be 'true'
        assert.equal(!oldValue, stopped, "The value of stopped is not the negation of oldValue");
    })

    //--> question #1: how can I extract the address of a contract deployed from another?
    it('Calling readDisguise should return the same disguise as created', async() => {
        // test 6 - No-OK

        // deploy Pepito and ask it to create a disguise
        let pepitoInstance = await Pepito.deployed();
        disguiseInstance1 = await pepitoInstance.createPepitoDisguise( {from: accounts[0]});
        //     --> maybe use 'disguiseInstance1.address' instead of the instruction line 78?

        // retrieve the last event 'PepitoDisguiseCreated' & retrieve the last disguise address
        //-- Is it the correct ways? When I run manually, 'lastEvent' shows as an empty array
        //event logs
        const lastEvent= await disguiseInstance1.logs[0].args
        // const lastEvent = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {});
        const disguiseCount1 = lastEvent.disguiseCount1;
        const disguiseAddresses = lastEvent.disguiseAddresses;
        const disguiseAddress = disguiseAddresses[disguiseCount1 - 1];

    //--> question #2: how can I make sure I have the correct disguise?
        // retrieve the instance of the last deployed disguise
        let pepitoDisguiseInstance = await PepitoDisguise.deployed();

        // --here, 'actual" = disguiseAddress = first address in the array
        assert.equal(disguiseAddress, disguiseAddresses[disguiseCount1 - 1], "The address returned is not the address created")
        // --here 'actual" = disguiseAddress = first address in the array, but what is the 'expected' address?
        // assert.equal(disguiseAddress, pepitoDisguiseInstance.address, "The address returned is not the address created")
    })
})
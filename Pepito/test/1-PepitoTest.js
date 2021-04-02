const Pepito = artifacts.require('Pepito');
const PepitoDisguise = artifacts.require('PepitoDisguise');

contract('Pepito', async (accounts) => {

    // preparations for the global scope
    let pepitoInstance;                             // define pepitoInstance globally
    before(async() =>{
        pepitoInstance = await Pepito.deployed();   // set pepitoInstance before all tests
    })

    describe('Tests of correct contract deployment', async() => {
        it('Pepito deployed address should be different from 0', async () => {
            // test 1, retrieve an address - OK passed
            // simplest test: read a public variable
            const ownerPepito = await pepitoInstance.owner();
            console.log('       -ownerPepito:', ownerPepito);
            assert.notEqual(ownerPepito, 0, "Pepito address cannot be 0x0");
        });

        it('Initial balance should be 10', async() => {
            // test 2, retrieve a scalar - OK passed. BTW, balance not yet useful but is a placeholder for later

            const balance = (await pepitoInstance.initialBalance()).toNumber();
            console.log('       -balance:', balance);
            assert.equal(balance, 10, "Pepito's initial balance of tokens is not 10")
        })
    })

    describe('Tests of contract logic', async() => {
        it('First createPepitoDisguise() should have disguiseCount == 1', async() => {
            // test 3, again a scaler, we need toNumber() to compare it using 'equal' - OK passed

            await pepitoInstance.createPepitoDisguise( {from: accounts[0] })    // after we create a disguise...
            const result = (await pepitoInstance.disguiseCount()).toNumber()    // count should be '1'
            console.log('       -disguiseCount:', result);
            assert.equal(result, 1, "Pepito disguiseCount is not incremented")
        })

        it('Each createPepitoDisguise() should increment disguiseCount and give a different receipt', async() => {
            // test 4, retrieve an address - OK passed
            let disguiseReceipt1 = await pepitoInstance.createPepitoDisguise( {from: accounts[0] })
            const firstCount = (await pepitoInstance.disguiseCount()).toNumber(); // should be '2' since we already created a disguise
            console.log('       -firstCount:', firstCount);
            const disguiseReceipt2 = await pepitoInstance.createPepitoDisguise( {from: accounts[0] } ) // create another PepitoDisguise
            const secondCount = (await pepitoInstance.disguiseCount()).toNumber();     // should be '3'
            console.log('       -secondCount:', secondCount);

            assert.equal(firstCount, 2, 'The first value of disguiseCount should be 2')
            assert.equal(firstCount+1, secondCount, 'The second value of disguiseCount should increment the first')
            assert.notEqual(disguiseReceipt1, disguiseReceipt2, 'Receipts of 2 disguises must be different')
        })

        it('Calling toggleContractActive() should toggle the circuit breaker flag', async() => {
            // test 5, retrieve a boolean - OK passed.
            var stopped = false;
            const oldValue = stopped;

            await pepitoInstance.toggleContractActive({from: accounts[0]});     // call function 'toggle'
            stopped = await pepitoInstance.stopped();                     // should be 'true'
            console.log('       -stopped:', stopped);
            assert.equal(!oldValue, stopped, "The value of stopped is not the negation of oldValue");
        })

        it('Calling readDisguise should return the same disguise as created', async() => {
            // test 6, retrieve address array is OK, retrieve address from a child contract is OK
            // I want the instance of the last deployed disguise, in order to call its 'readDisguise'

            // ask Pepito to create a disguise
            disguiseReceipt1 = await pepitoInstance.createPepitoDisguise( {from: accounts[0]});
            // retrieve event from the args from transaction receipt & retrieve last disguise address
            const lastEvent= await disguiseReceipt1.logs[0].args
            const disguiseCount = lastEvent.disguiseCount.toNumber();
            const disguiseAddresses = lastEvent.disguiseAddresses;
            const disguiseAddress = disguiseAddresses[disguiseCount - 1];
            console.log('       -event.disguiseAddress:', disguiseAddress);

            let pepitoDisguiseInstance = await PepitoDisguise.at(disguiseAddress);
            console.log('       -pepitoDisguiseInstance.address:', pepitoDisguiseInstance.address);

            assert.equal(disguiseAddress, pepitoDisguiseInstance.address, "The address deployed is not the address created")
        })
    })
})
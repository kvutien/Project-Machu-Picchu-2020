var PepitoDisguise = artifacts.require('PepitoDisguise');

contract('PepitoDisguise', async (accounts) => {
    
    // preparations for the global scope
    let disguiseInstance;                             // define disguiseInstance globally
    before(async() =>{
        disguiseInstance = await PepitoDisguise.deployed();   // set disguiseInstance before all tests
    })

    describe('Tests of correct contract deployment', async() => {
        it('PepitoDisguise deployed address should be different from 0', async () => {
            // test 1, check deployed address - OK passed    
            const address = await disguiseInstance.address;
            console.log('       -address:', address);
            assert.notEqual(address, 0, "PepitoDisguise address cannot be 0x0");
        });
            
        it('PepitoDisguise deployed address should not be undefined', async () => {
            // test 2, check deployed address - OK passed
            const address = await disguiseInstance.address;
            assert.notEqual(address, undefined, "PepitoDisguise address cannot be undefined");
        });

        // test 3, check deployed address - OK passed
        it('PepitoDisguise deployed address should not be blank', async () => {
            const address = await disguiseInstance.address;
            assert.notEqual(address, '', "PepitoDisguise address cannot be blank");
        });

        // test 4, check deployed tokenBalance - OK passed
        it('PepitoDisguise initial balance should be 0', async () => {
            const tokenBalance = (await disguiseInstance.tokenBalance()).toNumber();
            console.log('       -tokenBalance:', tokenBalance);
            assert.equal(tokenBalance, 0, "PepitoDisguise address is not zero");
        });
    })

    describe('Tests of contract logic', async() =>{
        it('Each readDisguise should increment the balance', async() => {
            // tokenBalance before readDisguise
            const tokenBalance1 = (await disguiseInstance.tokenBalance()).toNumber();
            await disguiseInstance.readDisguise();
            const tokenBalance2 = (await disguiseInstance.tokenBalance()).toNumber();
            console.log('       -tokenBalance1:', tokenBalance1, ', tokenBalance2:', tokenBalance2);
            assert.equal(tokenBalance1 + 1, tokenBalance2, 'tokenBalance should increase');
        })

        it('Calling storeDisguise should emit event with disguiseInStore = argument of storeDisguise', async() => {
            // test 5, compare disguise stored with disguise given in argument - OK passed
            let newDisguise = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

            // store newDisguise in contract
            let disguiseReceipt1= await disguiseInstance.storeDisguise(newDisguise, {from: accounts[0]});
            //-- question: how can I retrieve the array 'disguiseInStore'?
            // arrayDisguise = await disguiseInstance.disguiseInStore();
            // console.log('       -arrayDisguise:', arrayDisguise);

            //-- in the meanwhile, I retrieve the last event 'DisguiseStored' to get the disguise there
            const lastEvent= await disguiseReceipt1.logs[0].args
            // console.log('       -lastEvent:', lastEvent);
            const storedDisguise = lastEvent.disguise.map(e=>e.toNumber());
            console.log('       -newDisguise:', newDisguise);
            console.log('       -storedDisguise:', storedDisguise);
            assert.deepEqual(newDisguise, storedDisguise, "The stored disguise should equal the new disguise.")
        })

        it('Calling readDisguise should return the same disguise as stored', async() => {
            // test 6, compare disguise read with disguise stored - OK 
            let newDisguise = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

            //-- same question as above. I want to retrieve the disguise as stored to compare with the one as read
            await disguiseInstance.storeDisguise(newDisguise, {from: accounts[0]});
            let disguiseReceipt1 = await disguiseInstance.readDisguise({from: accounts[0]});
            //-- in the meanwhile, I retrieve the last event 'DisguiseStored' to get the disguise there
            const lastEvent= await disguiseReceipt1.logs[0].args
            console.log('       -disguiseAddress:', lastEvent.disguiseAddress);
            const returnedDisguise = lastEvent.disguise.map(e=>e.toNumber());
            console.log('       -newDisguise:', newDisguise);
            console.log('       -returnedDisguise:', returnedDisguise);

            assert.deepEqual(newDisguise, returnedDisguise, "The read disguise should equal the stored disguise.")
        })
    })

    // it('Calling updateDisguise should do something', async() => {
    //      updateDisguise is not yet implemented    
    // })
})
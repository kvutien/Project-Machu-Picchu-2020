var PepitoDisguise = artifacts.require('PepitoDisguise');

contract('PepitoDisguise', async (accounts) => {
    // test 1 - OK passed
    it('PepitoDisguise deployed address should be different from 0', async () => {
        const disguiseInstance = await PepitoDisguise.deployed();

        const address = await disguiseInstance.address;
        assert.notEqual(address, 0, "PepitoDisguise address cannot be 0x0");
    });
    
    // test 1bis - OK passed
    it('PepitoDisguise deployed address should not be undefined', async () => {
        const disguiseInstance = await PepitoDisguise.deployed();

        const address = await disguiseInstance.address;
        assert.notEqual(address, undefined, "PepitoDisguise address cannot be undefined");
    });

    // test 1ter - OK passed
    it('PepitoDisguise deployed address should not be blank', async () => {
        const disguiseInstance = await PepitoDisguise.deployed();

        const address = await disguiseInstance.address;
        assert.notEqual(address, '', "PepitoDisguise address cannot be blank");
    });

    it('Calling storeDisguise should set disguiseInStore to the same value as argument', async() => {
        // test 2 - No-OK 
        let newDisguise = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const disguiseInstance = await PepitoDisguise.deployed();

        await disguiseInstance.storeDisguise(newDisguise, {from: accounts[0]});
        //-- question: how can I retrieve the array 'disguiseInStore'?
        arrayDisguise = await disguiseInstance.disguiseInStore();

        //-- question: if the above doesn't work, how can I retrieve the last event 'DisguiseStored' to get the disguise there?
        const lastEvent= await disguiseInstance.logs[0].args
        const storedDisguise = lastEvent.disguise;

        assert.equal(newDisguise, storedDisguise, "The stored disguise should equal the new disguise.")
    })

    it('Calling readDisguise should return the same disguise as stored', async() => {
        // test 3 - No-OK 
        let newDisguise = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const disguiseInstance = await PepitoDisguise.deployed();

        //-- same question as above. I want to retrieve the disguise as stored to compare with the one as read
        await disguiseInstance.storeDisguise(newDisguise, {from: accounts[0]});
        //-- question: why is returnedDisguise an object instead of an array?
        let returnedDisguise = await disguiseInstance.readDisguise({from: accounts[0]});

        assert.equal(newDisguise, returnedDisguise, "The read disguise should equal the stored disguise.")
    })

    // it('Calling updateDisguise should do something', async() => {
        
    // })
})
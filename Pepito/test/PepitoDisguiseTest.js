contract('PepitoDisguise', async (accounts) => {
    it('Calling setTopType(0) should set storedDisguise.top in storage to Eyepatch', async() => {
        let newValue = 0;
        let instance = await PepitoDisguise.deployed()

        instance.setTop(newValue, {from: accounts[0]})
        let returnedValue = await instance.storedDisguise.topType.call()    // not sure that call() can return a struct?

        assert.equal(newValue, returnedValue, "The returned value should equal the new value.")
    })

    it('Calling storeDisguise(x) should do something', async() => {

    })

    it('Calling readDisguise(x) should do something', async() => {

    })

    it('Calling updateDisguise(x) should do something', async() => {
        
    })
})
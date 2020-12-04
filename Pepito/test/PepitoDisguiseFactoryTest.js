contract('PepitoDisguiseFactory', async (accounts) => {
    it('Calling setTop(x) should set storedData in storage to x', async() => {
        let newValue = 'NoHair';
        let instance = await PepitoDisguise.deployed()

        instance.setTop(newValue, {from: accounts[0]})
        let returnedValue = await instance.storedData.call() // not sure that call() can return a string?

        assert.equal(newValue, returnedValue, "The returned value should equal the new value.")
    })

    it('Calling createPepitoDisguise(x) should do something', async() => {
        //
    })

    it('Calling getPepitoDisguises(x) should do something', async() => {
        //
    })
})
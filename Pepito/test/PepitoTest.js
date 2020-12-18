contract('Pepito', async (accounts) => {
  it('Calling toggle() should toggle value of "stopped"', async() => {
      let stopped = false;
      let newValue = stopped;
      let instance = await Pepito.deployed()

    instance.toggle(, {from: accounts[0]})          // call function 'toggle'
      let result = await instance.stopped.call()    // should be 'true'

      assert.equal(!newValue, stopped, "The value of stopped should be negation of newValue.")
  })

  it('Calling createPepitoDisguise(x) should increment disguiseNumber', async() => {
      //
      let instance = await Pepito.deployed()
      instance.createPepitoDisguise(, {from: accounts[0]})  // call function 'createPepitoDisguise'
      let result = await instance.disguiseNumber.call()     // should be '1'

      assert.equal(result, 1, "The value of disguiseNumber should be 1.")
  })

  it('Calling getPepitoDisguises(x) should return the same disguise as created', async() => {
      //
      let instance = await Pepito.deployed()
      instance.createPepitoDisguise(, {from: accounts[0]})          // call function 'createPepitoDisguise'
      let disguiseCreated = await instance.pepitoDisguises[0].call() // first disguise created
      let disguiseRead = await instance.getPepitoDisguise(0, {from: accounts[0]}) // get the disguise created

      assert.equal(disguiseCreated, disguiseRead, "The address returned should be address created.")
  })
})
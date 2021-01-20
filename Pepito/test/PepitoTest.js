var Pepito = artifacts.require('Pepito');
// here I use the syntax of web3 v1.x while the examples of truffle docs call web3 v0.x
// https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
// contractInstance.methods.publicVariable().call() instead of contractInstance.publicVariable.call()
// contractInstance.methods.txFunction(arg).send() instead of contractInstance.txFunction.send(arg, {from: anyAccount})

contract('Pepito', async (accounts) => {
    it('Calling toggle() should toggle value of "stopped"', async() => {
        // test 1
        var stopped = false;
        let oldValue = stopped;
        let instance = await Pepito.deployed()

        instance.methods.toggle().send({from: accounts[0]})                        // call function 'toggle'
        stopped = await instance.methods.stopped().call()       // should be 'true'
        assert.equal(!oldValue, stopped, "The value of stopped is not the negation of oldValue.")
    })

    // it('Initial balance should be 10', async() => {
    //     // test 2 - balance not yet useful but can later track the performance of Pepito's disguise as a whole
    //     let instance = await Pepito.deployed()

    //     let balance = await instance.methods.initialBalance().call()
    //     assert.equal(balance, 10, 'Pepito`s initial balance of tokens is not 10')
    // })

    // it('Calling createPepitoDisguise() should increment disguiseCount1', async() => {
    //     // test3 - disguiseCount1 because disguiseCount is maintained by SafeMath, that is still not working yet
    //     let instance = await Pepito.deployed()

    //     await instance.methods.createPepitoDisguise().send( {from: accounts[0] })  // call function 'createPepitoDisguise'
    //     let result = await instance.methods.disguiseCount1().call()     // should be '1'
    //     assert.equal(result, 1, "The disguiseCount1 is not starting at 1.")
    // })

    // it('Calling createPepitoDisguise() should increment disguiseCount1', async() => {
    //     // test 4 - chained 2 tests
    //     Pepito.deployed()
    //         .then( instance => {
    //             instance.methods.createPepitoDisguise().send( {from: accounts[0] })
    //             return instance
    //         } ) // call 'createPepitoDisguise'
    //         .then( async(instance) => {
    //             let firstCount = await instance.methods.disguiseCount1().call()     // should be '1'
    //             console.log('firstCount', firstCount)
    //             assert.equal(firstCount, 1, "The first value of disguiseCount1 should be 1.")
    //             return firstCount       // chain firstCount in the `then` blocks to assert at the last one
    //         })
    //         .then( async (firstCount) => {
    //             await instance.methods.createPepitoDisguise().send( {from: accounts[0] } ) // call again 'createPepitoDisguise'
    //             return firstCount
    //         })
    //         .then( async (firstCount) => {
    //             let secondCount = await instance.methods.disguiseCount1().call()     // should be '2'
    //             assert.equal(firstCount+1, secondCount, "The second value of disguiseCount1 is not first + 1.")
    //         })
    // })

    // it('Calling getPepitoDisguises(x) should return the same disguise as created', async() => {
    //     // test 5
    //     let instance = await Pepito.deployed()
    //     await instance.methods.createPepitoDisguise().send( {from: accounts[0]})        // call function 'createPepitoDisguise'
    //     let disguiseCreated = await instance.methods.pepitoDisguises().call()           // first disguise created
    //     let disguiseRead = await instance.getPepitoDisguise(0).call( {from: accounts[0]}) // get the disguise created

    //     assert.equal(disguiseCreated[0], disguiseRead, "The address returned is not the address created.")
    // })
})
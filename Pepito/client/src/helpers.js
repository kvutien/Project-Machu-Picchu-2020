// helper JavaScript functions of Dec 31, 2020
// - under test, calling setState directly (incorrect design and doesn't work). 
// Not integrated yet with App.js
import getWeb3 from "./getWeb3";          // to call web3 API
import Pepito from "./contracts_abi/Pepito.json";                 // to call web3 API

export function tryIt () {
    /**
    * @notice simple trial helper functions for App.js
    * @dev clean design: returns an object that App.js will insert in this.state
    * @dev the text will be displayed in the button "Generate disguise"
    * @dev tested and validated Dec 31 
    */
    return {myWord: ', please!'};
}


export function getRandomDisguise(options) {
    /** 
     * @notice set & return the disguise options based on random number
     * @dev generate pseudo random values of uint32, to retrieve random disguise options
     * @dev not truly random but good enough for demo purposes
     * @dev tested and validated Dec 30
    */
    const getRandomValues = require("../node_modules/get-random-values");	/// @dev import JS random generator from npm
    const array = new Uint32Array(1);
    getRandomValues(array);               /// @dev fill array with random numbers
    const randomBigNumber = array[0];     /// @dev use 1st random number in the array
    /** @dev transform the random into ranks in the arrays */
    const idxTopType = randomBigNumber % Object.values(options.topType).length;
    const idxHatColor = randomBigNumber % Object.values(options.hatColor).length;
    const idxAccessoriesType = randomBigNumber % Object.values(options.accessoriesType).length;
    const idxHairColor = randomBigNumber % Object.values(options.hairColor).length;
    const idxFacialHairType = randomBigNumber % Object.values(options.facialHairType).length;
    const idxfacialHairColor = randomBigNumber % Object.values(options.facialHairColor).length;
    const idxClotheType = randomBigNumber % Object.values(options.clotheType).length;
    const idxClotheColor = randomBigNumber % Object.values(options.clotheColor).length;
    const idxEyeType = randomBigNumber % Object.values(options.eyeType).length;
    const idxEyebrowType = randomBigNumber % Object.values(options.eyebrowType).length;
    const idxMouthType = randomBigNumber % Object.values(options.mouthType).length;
    const idxSkinColor = randomBigNumber % Object.values(options.skinColor).length;

    const disguise = {
        randomBigNumber: randomBigNumber,	/// @dev random number for use directly by getData()
        idxTopType: idxTopType,
        topType: options.topType[idxTopType],
        idxHatColor: idxHatColor,
        hatColor: options.hatColor[idxHatColor],
        idxAccessoriesType: idxAccessoriesType,
        accessoriesType: options.accessoriesType[idxAccessoriesType],
        idxHairColor: idxHairColor,
        hairColor: options.hairColor[idxHairColor],
        idxFacialHairType: idxFacialHairType,
        facialHairType: options.facialHairType[idxFacialHairType],
        idxfacialHairColor: idxfacialHairColor,
        facialHairColor: options.facialHairColor[idxfacialHairColor],
        idxClotheType: idxClotheType,
        clotheType: options.clotheType[idxClotheType],
        idxClotheColor:idxClotheColor,
        clotheColor: options.clotheColor[idxClotheColor],
        idxEyeType: idxEyeType,
        eyeType: options.eyeType[idxEyeType],
        idxEyebrowType: idxEyebrowType,
        eyebrowType: options.eyebrowType[idxEyebrowType],
        idxMouthType: idxMouthType,
        mouthType: options.mouthType[idxMouthType],
        idxSkinColor: idxSkinColor,
        skinColor: options.skinColor[idxSkinColor],
    }
    console.log("setRandomDisguise randomBigNumber", randomBigNumber);
    console.log("topType:", disguise.topType, ", hatColor:", disguise.hatColor, ", accessoriesType:", disguise.accessoriesType);
    console.log("clotheColor:", disguise.clotheColor, ", eyeType:", disguise.eyeType, ", eyebrowType:", disguise.eyebrowType);
    console.log("hairColor:", disguise.hairColor, ", facialHairType:", disguise.facialHairType, ", clotheType:", disguise.clotheType);
    console.log("mouthType:", disguise.mouthType, ", skinColor:", disguise.skinColor);
    console.log("disguise", disguise)
    return disguise;
}

export const makePepito = async () => {
    /**
     * @notice connect web3 API and create Pepito contract
     * @dev not yet validated
    */
    try {
        /// @dev access to blockchain via Metamask
        /// @dev get network provider and web3 instance by trying several channels 
        const web3 = await getWeb3();
        /// @dev ***** TODO: check error when getWeb3 returns, in case Matamask not connected
        /// @dev use web3 to get the account of the user
        const accounts = await web3.eth.getAccounts();
        console.log("0.user account", accounts);
  
        /// @dev create a Pepito singleton contract instance
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Pepito.networks[networkId];
        const pepitoInstance = new web3.eth.Contract(
          Pepito.abi,
          deployedNetwork && deployedNetwork.address,
        );
        const ownerPepito = await pepitoInstance.methods.owner().call();
        var web3Connect = true;
  
        /// @dev set web3, accounts, and contract to the state 
        const web3Pepito = { web3, accounts, contract: pepitoInstance, pepitoAddress: deployedNetwork.address, web3Connect, ownerPepito } 
        console.log("1.user account", web3Pepito.accounts,
            ".\n 3.makePepito().Pepito contract", web3Pepito.contract,
            ".\n  3.Pepito contract address", web3Pepito.pepitoAddress,
            ".\n   3.web3Connect", web3Pepito.web3Connect,
            ".\n    3.'owner' variable in Pepito", web3Pepito.ownerPepito);
        return web3Pepito;
    } catch (error) {
        /// @dev catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
    }
}

export const storeDisguise = async () => {
    /** 
    * @notice create a PepitoDisguise and store the options of this disguise
    * @dev WIP - to be refined and tested in App.js before transferring here in helpers.js
    */
    const { accounts, contract, web3Connect, ownerPepito } = this.state;
    console.log("storeDisguise, user account", accounts,
      ".\n 2.storeDisguise, Pepito contract", contract,
      ".\n  2.storeDisguise, web3Connect", web3Connect,
      ".\n   2.storeDisguise, 'owner' variable in Pepito", ownerPepito);

    if(web3Connect){
      const pepitoDisguise = await contract.methods.createPepitoDisguise();
      /// @dev bug to be changed: pepitoDisguise is currently a transaction object, not an address
      console.log("instance pepitoDisguise created by Pepito", pepitoDisguise);
      var HatColor = 1;    //  test value, should be the rank in the array of HatColor
      await pepitoDisguise.methods.setHatColor().call({ from: accounts[0] });
      const storedDisguise = await pepitoDisguise.methods.storedDisguise().call();
      console.log("storedDisguise", storedDisguise);

      /* 
      await pepitoDisguise.methods.setTopType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setHatColor().call({ from: accounts[0] });
      await pepitoDisguise.methods.setAccessoriesType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setHairColor().call({ from: accounts[0] });
      await pepitoDisguise.methods.setFacialHairType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setFacialHairColor().call({ from: accounts[0] });
      await pepitoDisguise.methods.setClotheType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setClotheColor().call({ from: accounts[0] });
      await pepitoDisguise.methods.setEyeType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setEyebrowType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setMouthType().call({ from: accounts[0] });
      await pepitoDisguise.methods.setSkinColor().call({ from: accounts[0] });
      */
    } else alert("Please reload page first, to get connected to local blockchain");
}

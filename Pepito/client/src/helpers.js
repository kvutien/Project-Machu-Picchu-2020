// helper JavaScript functions of Dec 28, 2020
// - to be tested. Not integrated yet with App.js
import getWeb3 from "./getWeb3";          // to call web3 API
import Pepito from "./contracts_abi/Pepito.json";                 // to call web3 API

export function setRandomDisguise() {
    /** 
     * @notice set the disguise options based on random number
     * @dev generate pseudo random values of uint32, to retrieve random disguise options
     * @dev not truly random but good enough for demo purposes
    */
    var getRandomValues = require("../node_modules/get-random-values");	/// @dev import JS random generator from npm
    var array = new Uint32Array(1);
    getRandomValues(array);             /// @dev fill array with random numbers
    let randomBigNumber = array[0]; 	/// @dev use 1st random number in the array
    var idxTopType = randomBigNumber % Object.values(this.options.topType).length;
    var idxHatColor = randomBigNumber % Object.values(this.options.hatColor).length;
    var idxAccessoriesType = randomBigNumber % Object.values(this.options.accessoriesType).length;
    var idxHairColor = randomBigNumber % Object.values(this.options.hairColor).length;
    var idxFacialHairType = randomBigNumber % Object.values(this.options.facialHairType).length;
    var idxfacialHairColor = randomBigNumber % Object.values(this.options.facialHairColor).length;
    var idxClotheType = randomBigNumber % Object.values(this.options.clotheType).length;
    var idxClotheColor = randomBigNumber % Object.values(this.options.clotheColor).length;
    var idxEyeType = randomBigNumber % Object.values(this.options.eyeType).length;
    var idxEyebrowType = randomBigNumber % Object.values(this.options.eyebrowType).length;
    var idxMouthType = randomBigNumber % Object.values(this.options.mouthType).length;
    var idxSkinColor = randomBigNumber % Object.values(this.options.skinColor).length;

    this.setState({
        randomBigNumber: randomBigNumber,	/// @dev random number for use directly by getData()
        idxTopType: idxTopType,
        topType: this.options.topType[idxTopType],
        idxHatColor: idxHatColor,
        hatColor: this.options.hatColor[idxHatColor],
        idxAccessoriesType: idxAccessoriesType,
        accessoriesType: this.options.accessoriesType[idxAccessoriesType],
        idxHairColor: idxHairColor,
        hairColor: this.options.hairColor[idxHairColor],
        idxFacialHairType: idxFacialHairType,
        facialHairType: this.options.facialHairType[idxFacialHairType],
        idxfacialHairColor: idxfacialHairColor,
        facialHairColor: this.options.facialHairColor[idxfacialHairColor],
        idxClotheType: idxClotheType,
        clotheType: this.options.clotheType[idxClotheType],
        idxClotheColor:idxClotheColor,
        clotheColor: this.options.clotheColor[idxClotheColor],
        idxEyeType: idxEyeType,
        eyeType: this.options.eyeType[idxEyeType],
        idxEyebrowType: idxEyebrowType,
        eyebrowType: this.options.eyebrowType[idxEyebrowType],
        idxMouthType: idxMouthType,
        mouthType: this.options.mouthType[idxMouthType],
        idxSkinColor: idxSkinColor,
        skinColor: this.options.skinColor[idxSkinColor],
    }
    ,() => {
        console.log("setRandomDisguise randomBigNumber", randomBigNumber);
        console.log("topType:", this.state.topType, ", hatColor:", this.state.hatColor, ", accessoriesType:", this.state.accessoriesType);
        console.log("hairColor:", this.state.hairColor, ", facialHairType:", this.state.facialHairType, ", clotheType:", this.state.clotheType);
        console.log("clotheColor:", this.state.clotheColor, ", eyeType:", this.state.eyeType, ", eyebrowType:", this.state.eyebrowType);
        console.log("mouthType:", this.state.mouthType, ", skinColor:", this.state.skinColor);
      });
}

export const makePepito = async () => {
    /**
    * @notice connect web3 API and create Pepito contract
    */
    try {
        /// @dev access to blockchain via Metamask
        /// @dev get network provider and web3 instance by trying several channels 
        const web3 = await getWeb3();
        //console.log("web3", web3);
        /// @dev use web3 to get the account of the user
        const accounts = await web3.eth.getAccounts();
  
        /// @dev create a Pepito singleton contract instance
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Pepito.networks[networkId];
        const instance = new web3.eth.Contract(
          Pepito.abi,
          deployedNetwork && deployedNetwork.address,
        );
        const ownerPepito = await instance.methods.owner().call();
        var web3Connect = true;
  
        /// @dev set web3, accounts, and contract to the state 
        this.setState({ web3, accounts, contract: instance, pepitoAddress: deployedNetwork.address, web3Connect, ownerPepito } 
          ,() => {
            console.log("1.user account", accounts,
            ".\n 1.makePepito().Pepito contract", instance,
            ".\n  1.Pepito contract address", this.state.pepitoAddress,
            ".\n   1.web3Connect", web3Connect,
            ".\n    1.'owner' variable in Pepito", ownerPepito);
          });
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
    * @dev WIP - to be refined and tested
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

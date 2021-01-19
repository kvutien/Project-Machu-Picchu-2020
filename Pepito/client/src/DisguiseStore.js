/**  class DisguiseStore - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice send transaction to deploy a disguiseContract
 * @notice store disguise on blockchain
 * @dev disguiseCount1 is the count in smart contract, done without safeMath
*/
import React from 'react';
import './App.css';
import PepitoDisguise from "./contracts_abi/PepitoDisguise.json";   // to call web3 API

class DisguiseStore extends React.Component{
    constructor() {
        super();
    }

    storeDisguise = async () => {
        const web3Connected = this.props.web3Connected;
        //console.log("--> 2.storeDisguise, web3Connected", web3Connected);
      
        if(web3Connected){      // add a try-catch here
            /** @dev    get the Factory contract */
            const pepitoInstance = this.props.pepitoInstance;
            //console.log("      2.storeDisguise.Pepito instance", pepitoInstance);            

            /** @dev    tell the Factory contract to deploy a PepitoDisguise contract */
            const disguiseReceipt = await pepitoInstance.methods.createPepitoDisguise()
                .send({from: this.props.ownerPepito});
            //console.log('   2.storeDisguise-state.disguiseReceipt', disguiseReceipt)
            
            /** @dev    obtain array of disguise addresses from last event of type PepitoDisguiseCreated */
            const lastEvent = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {});
            const disguiseCount = lastEvent[0].returnValues.disguiseCount;
            const disguiseCount1 = lastEvent[0].returnValues.disguiseCount1;
            const disguiseAddresses = lastEvent[0].returnValues.disguiseAddresses;
            const disguiseAddress = lastEvent[0].returnValues.disguiseAddresses[disguiseCount1-1];
            console.log('...     2.storeDisguise.lastEvent, count =', disguiseCount,
                ', count1 =', disguiseCount1, 
                ', disguise addresses', disguiseAddresses);

            /** @dev    build the array of options of features of this disguise to store it
             * @dev     today we hard-code the features and their options to reduce blockchain storage
             * @dev     when we'll be on IPFS, we'll use key-value pairs
             */
            const {idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor} = this.props.idxDisguise;
            const disguise2store = [idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor];
            console.log('        2.storeDisguise.disguise2store =', disguise2store);
            /** Note: we could also make a single string of 24 characters with the 12 numbers by using string cat on
                const pad2 = (num) => String(num).padStart(2, '0');
                const disguise2store = pad2(idxTopType)+pad2(idxHatColor)+pad2(idxAccessoriesType) etc. */

            /** @dev    return to App.js the count of disguises, their addresses & the disguise's options */
            this.props.deployedDisguise(disguiseCount1, disguiseAddresses, disguise2store);

            /** create with web3 a connection to the last pepitoDisguise; */
            const pepitoDisguise = new this.props.web3.eth.Contract(
                    PepitoDisguise.abi,
                    disguiseAddress,
            );
            /** @dev tell the PepitoDisguise contract to store the array of indexes of its features */
            const storeDisguiseReceipt = await pepitoDisguise.methods.storeDisguise(disguise2store)
                .send({from: this.props.ownerPepito });
            //console.log("stored Disguise", storeDisguiseReceipt, disguise2store);
            
      
        } else alert("Please get first the blockchain interface & Pepito credentials");  
    }

    render() {
        return(
            <>
                <button className="btn btn-lg btn-secondary mb-5" 
                    onClick={this.storeDisguise}>Store disguise on blockchain
                </button>
            </>
        )
    }
}

export default DisguiseStore;
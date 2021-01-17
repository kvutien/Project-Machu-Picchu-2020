/**  class DisguiseStore - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice send transaction to deploy a disguiseContract
 * @notice store disguise on blockchain - Work in progress
 * @dev disguiseCount1 is the count in smart contract done without safeMath
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
      
        if(web3Connected){
            /** @dev    get the Factory contract */
            const pepitoInstance = this.props.pepitoInstance;
            //console.log("      2.storeDisguise.Pepito instance", pepitoInstance);            

            /** @dev    tell the Factory contract to deploy a PepitoDisguise contract */
            const disguiseReceipt = await pepitoInstance.methods.createPepitoDisguise()
                .send({from: this.props.ownerPepito});
            //console.log('   2.storeDisguise-state.disguiseReceipt', disguiseReceipt)
            
            /** @dev    retrieve all disguises addresses from last event of type PepitoDisguiseCreated */
            const lastEvent = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {});
            const disguiseCount = lastEvent[0].returnValues.disguiseCount;
            const disguiseCount1 = lastEvent[0].returnValues.disguiseCount1;
            const disguiseAddresses = lastEvent[0].returnValues.disguiseAddresses;
            const disguiseAddress = lastEvent[0].returnValues.disguiseAddresses[disguiseCount1-1];
            console.log('...     2.storeDisguise.lastEvent, count =', disguiseCount,
                ', count1 =', disguiseCount1, 
                ', disguise addresses', disguiseAddresses);

            /** @dev    build the array of options of features of this disguise to store it
             * @dev     we hard code the features and their options to reduce blockchain storage
             * @dev     when we'll be on IPFS, we'll use kay-value pairs
             */
            const {idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor} = this.props.idxDisguise;
            const disguise2store = [idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor];
            console.log('        2.storeDisguise.disguise2store =', disguise2store);

            /** @dev    return the count of disguise, their addresses & the disguise options to store */
            this.props.deployedDisguise(disguiseCount1, disguiseAddresses, disguise2store);

        /** create with web3 a connection to the last pepitoDisguise;
            const pepitoDisguise = new web3.eth.Contract(
                    PepitoDisguise.abi,
                    disguiseAddress,
            );
            const storeDisguiseReceipt = await pepitoDisguise.methods.storedDisguise()
                .send({from: this.props.ownerPepito, data: disguise2store });
            console.log("stored Disguise", storeDisguiseReceipt, disguise2store);
         */
      
        } else alert("Please get connected first to local blockchain");  
    }

    render() {
        return(
            <>
                <button className="btn btn-lg btn-secondary mb-5" 
                    onClick={this.storeDisguise}>Store disguise on blockchain <br />(WIP - Reload page if crash)
                </button>
            </>
        )
    }
}

export default DisguiseStore;
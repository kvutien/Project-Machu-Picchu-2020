/**  class DisguiseStore - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice store disguise on blockchain - Work in progress
 * @notice send transaction to deploy a disguiseContract
 * @dev disguiseCount1 is the count in smart contract done without safeMath
*/
import React from 'react';
import './App.css';

class DisguiseStore extends React.Component{
    constructor() {
        super();
    }

    storeDisguise = async () => {
        const web3Connected = this.props.web3Connected;
        //console.log("--> 2.storeDisguise, web3Connected", web3Connected);
      
        if(web3Connected){
            const pepitoInstance = this.props.pepitoInstance;
            //console.log("      2.storeDisguise.Pepito instance", pepitoInstance);            

            const disguiseReceipt = await pepitoInstance.methods.createPepitoDisguise()
                .send({from: this.props.ownerPepito});
            //console.log('   2.storeDisguise-state.disguiseReceipt', disguiseReceipt)
            
            // ask the blockchain for all past events of type 'PepitoDisguiseCreated'
            const allEvents = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {fromBlock:0});
            //console.log('        2.storeDisguise.allEvents =', allEvents);
            const lastEvent = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {});
            const disguiseCount = lastEvent[0].returnValues.disguiseCount;
            const disguiseCount1 = lastEvent[0].returnValues.disguiseCount1;
            const addressDisguise = lastEvent[0].returnValues.addressDisguise;
            console.log('        2.storeDisguise.lastEvent, count =', disguiseCount,
                ', count1 =', disguiseCount1, 
                ', disguise address', addressDisguise);

            // build the array of disguise options to store
            const {idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor} = this.props.idxDisguise;
            const disguise2store = [idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor];
            console.log('        2.storeDisguise.disguise2store =', disguise2store);

            // return the count & address of disguise, + the array summarry of disguise options
            this.props.deployedDisguise(disguiseCount1, addressDisguise, disguise2store);

        //     await pepitoDisguise.methods.setHatColor().call({ from: accounts[0] });
        //     const storedDisguise = await pepitoDisguise.methods.storedDisguise().call();
        //     console.log("storedDisguise", storedDisguise);
      
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
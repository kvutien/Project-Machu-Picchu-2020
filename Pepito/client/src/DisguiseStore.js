/**  class DisguiseStore - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice store disguise on blockchain
*/
import React from 'react';
import './App.css';

class DisguiseStore extends React.Component{

    storeDisguise = () => {
        alert('storing Disguise on-chain');
        // const { accounts, pepitoContract, web3Connect, ownerPepito } = this.state;
        // console.log("storeDisguise, user account", accounts,
        //   ".\n 2.storeDisguise, Pepito contract", pepitoContract,
        //   ".\n  2.storeDisguise, web3Connect", web3Connect,
        //   ".\n   2.storeDisguise, 'owner' variable in Pepito", ownerPepito);
        //   const { accounts, pepitoContract, web3Connect, ownerPepito } = this.state;
        //   console.log("storeDisguise, user account", accounts,
        //     ".\n 2.storeDisguise, Pepito contract", pepitoContract,
        //     ".\n  2.storeDisguise, web3Connect", web3Connect,
        //     ".\n   2.storeDisguise, 'owner' variable in Pepito", ownerPepito);
      
        // if(web3Connect){
        //     const pepitoDisguise = await pepitoContract.methods.createPepitoDisguise();
        //     /// @dev bug to be changed: pepitoDisguise is currently a transaction object, not an address
        //     console.log("instance pepitoDisguise created by Pepito", pepitoDisguise);
        //     var HatColor = 1;    //  test value, should be the rank in the array of HatColor
        //     await pepitoDisguise.methods.setHatColor().call({ from: accounts[0] });
        //     const storedDisguise = await pepitoDisguise.methods.storedDisguise().call();
        //     console.log("storedDisguise", storedDisguise);
      
        //     /* 
        //     await pepitoDisguise.methods.setTopType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setHatColor().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setAccessoriesType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setHairColor().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setFacialHairType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setFacialHairColor().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setClotheType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setClotheColor().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setEyeType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setEyebrowType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setMouthType().call({ from: accounts[0] });
        //     await pepitoDisguise.methods.setSkinColor().call({ from: accounts[0] });
        //     */
        // } else alert("Please reload page first, to get connected to local blockchain");  
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
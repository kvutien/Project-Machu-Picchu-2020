/**  class DisguiseStore - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice store disguise on blockchain - Work in progress
*/
import React from 'react';
import './App.css';

class DisguiseStore extends React.Component{

    storeDisguise = () => {
        const web3Connected = this.props.web3Connected;
        console.log("--> ",
            ".\n 2.storeDisguise, web3Connected", web3Connected,   // <-- needed
            );
      
        if(web3Connected){
            const pepitoInstance = this.props.pepitoInstance;
            console.log("--> ",
            ".\n  2.storeDisguise.Pepito instance", pepitoInstance, // <-- needed
            );
            // below we subscribe to a websocket event
            // pepitoInstance.events.PepitoDisguiseCreated ((err, event) => {console.log('2.storeDisguise.event', event)});
                // .on('data', (event) => {
                //     console.log(event);
                // })
                // .on('error', console.error);
            // below we ask for all past events
            // const allEvents = pepitoInstance.getPastEvents('PepitoDisguiseCreated', {fromBlock:0});
            // console.log('--- allEvents =', allEvents);

            /* replace below with const disguiseTransaction = pepitoInstance.methods.createPepitoDisguise()
                    .send({from: owner}) */;
            const disguiseTransaction = pepitoInstance.methods.createPepitoDisguise();
            this.setState({disguiseTransaction: disguiseTransaction}, ()=>{
                console.log('   2.storeDisguise-state.disguiseTransaction', disguiseTransaction)
            })
            console.log('   2.storeDisguise.disguiseTransaction returned', disguiseTransaction);
        //     //bug: pepitoDisguise is currently a transaction object, not an address
               //we have to store the instance of pepitoDisguise in solidity and retrieve it here
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
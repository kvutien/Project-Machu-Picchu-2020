/**  class App - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice React root component
 * @dev refactored to move out most of the functions
*/
import React, { Component } from 'react';
//import Disguise from './Disguise';
import DisguiseControls from './DisguiseControls';
import DrawAvataar from './DrawAvataar';
import OptionTable from './OptionTable';

class App extends Component {
    constructor() {             // constructor is called whenever App.js code is changed and saved
        super();
        this.state = {web3Connected: false, 
            disguise:{},        // initialise disguise so that DrawAvataar has an object in first render
            web3: {},
            pepitoInstance: {},
            disguiseAddresses: []
        };
    }

    setDisguise = async (randomBigNumber, idxDisguise, disguise) => {
    /** @notice record in state the values received from Disguise.js as arguments */
        this.setState({
            randomBigNumber: randomBigNumber,
            idxDisguise: idxDisguise,   // disguise options in key-value format
            disguise: disguise          // disguise features in key-value format
        }, () => {
            console.log('---> state after App.setDisguise()/Disguise', Object.keys(this.state), Object.values(this.state));
        });
    }

    connectedB = async (web3, accounts, pepitoInstance, pepitoAddress, web3Connected, ownerPepito) => {
    /** @notice record in state the values received from makePepito.js as arguments */
        this.setState({
            accounts: accounts, 
            pepitoAddress: pepitoAddress, 
            pepitoInstance: pepitoInstance,
            web3Connected: web3Connected, 
            web3: web3,
            ownerPepito: ownerPepito
        }, () => {
            console.log('---> state after App.connectedB()/makePepito', Object.keys(this.state), Object.values(this.state));
        });
        //console.log('in App.connectedB(): web3', this.state.web3, ',\n Instance', this.state.pepitoInstance);
    }

    deployedDisguise = async (count, disguiseAddresses, disguiseStored) => {
    /** @notice record in state the addresses of disguises received from DisguiseStore.js as arguments */ 
        this.setState({
            disguiseCount: count,
            disguiseAddresses: disguiseAddresses,
            disguiseAddress: disguiseAddresses[count-1],
            disguiseStored: disguiseStored
        }, () => {
            console.log('---> state after App.deployedDisguise/DisguiseStore', Object.keys(this.state), Object.values(this.state));
        });
    }

    retrievedDisguise = async (disguiseAddress, idxDisguise, disguise) => {
        this.setState({
            disguiseAddress: disguiseAddress,
            idxDisguise: idxDisguise,
            disguise: disguise
        }, () => {
            console.log('---> state after App.retrievedDisguise/DisguiseRetrieve', Object.keys(this.state), Object.values(this.state));
        });
    }

    render() {
        const disguise = this.state.disguise;
        return (
            <div className='container text-center'>
                <header>
                    <h1 className='m-5'>Pepito Disguise<sup>on blockchain</sup></h1>
                </header>
                <div>
                    <DisguiseControls 
                        setDisguise={this.setDisguise}              // used to return the disguise
                        connectedB={this.connectedB}                // used to return the web3 and pepito
                        pepitoAddress={this.state.pepitoAddress}    // will be displayed on screen
                        disguiseAddress={this.state.disguiseAddress}    // will be displayed on screen
                        web3Connected={this.state.web3Connected}
                        web3={this.state.web3}
                        pepitoInstance={this.state.pepitoInstance}
                        ownerPepito={this.state.ownerPepito}
                        disguiseAddresses={this.state.disguiseAddresses}    //to retrieve a disguise
                        idxDisguise={this.state.idxDisguise}
                        deployedDisguise={this.deployedDisguise}    // used to return disguise count & address
                        retrievedDisguise={this.retrievedDisguise}  // used to return the disguise as indexes in arrays of options
                    />
                    <DrawAvataar disguise={disguise} />
                    <small>This disguise= <br/>{Object.values(disguise)}</small>
                    <p>Options (modifiable soon)</p>
                    <OptionTable disguise={disguise} />
                </div>
            </div>
        );
    }
}

export default App;
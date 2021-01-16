/**  class App - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice root class
 * @dev refactored to move out most of the functions
*/
import React, { Component } from 'react';
//import Disguise from './Disguise';
import DisguiseControls from './DisguiseControls';
import DrawAvataar from './DrawAvataar';
import OptionTable from './OptionTable';

class App extends Component {
    constructor() {
        super();
        this.state = {web3Connected: false, 
            disguise:{},             // initialise disguise so that DrawAvataar has an object in first render
            web3: {},
            pepitoInstance: {}
        };
    }

    setDisguise = async (randomBigNumber, idxDisguise, disguise) => {
    /** @notice record in state the values received as arguments */
    this.setState({randomBigNumber: randomBigNumber});
        this.setState({idxDisguise: idxDisguise});
        this.setState({disguise: disguise}, () => {console.log('---> state in App.setDisguise()', Object.keys(this.state), Object.values(this.state));});
    }

    connectedB = async (web3, accounts, pepitoInstance, pepitoAddress, web3Connected, ownerPepito) => {
    /** @notice record in state the values received as arguments */
        this.setState({
            accounts: accounts, 
            pepitoAddress: pepitoAddress, 
            pepitoInstance: pepitoInstance,
            web3Connected: web3Connected, 
            web3: web3,
            ownerPepito: ownerPepito
        }, () => {
            console.log('state web3 updated', Object.keys(this.state), Object.values(this.state));
        });
        console.log('in App.connectedB(): web3', this.state.web3, ', Instance', this.state.pepitoInstance);
    }

    retrievedDisguise = async (idxDisguise) => {
        this.setState(idxDisguise, () => {console.log('disguise retrieved', Object.keys(this.state), Object.values(this.state));});
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
                        web3Connected={this.state.web3Connected}
                        pepitoInstance={this.state.pepitoInstance}
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
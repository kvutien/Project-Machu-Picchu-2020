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
        this.state = {};
        this.disguise = {};         // object Disguise from fillDisguise
        this.web3 = {};             // object Web3 from makepepito
        this.pepitoInstance = {};   // object Contract from makepepito
    }

    setDisguise = async (randomBigNumber, idxDisguise, disguise) => {
        this.setState({randomBigNumber: randomBigNumber});
        this.setState(idxDisguise);
        this.disguise = disguise;
        this.setState(disguise, () => {console.log('---> state disguise updated', Object.keys(this.state), Object.values(this.state));});
    }

    // this.props.connectedB(web3, accounts, pepitoInstance, deployedNetwork.address,  web3Connect, ownerPepito);
    connectedB = async (web3, accounts, pepitoInstance, pepitoAddress, web3Connected, ownerPepito) => {
        this.setState({
            accounts: accounts, 
            pepitoAddress: pepitoAddress, 
            web3Connected: web3Connected, 
            ownerPepito: ownerPepito
        }, () => {
            console.log('state web3 updated', Object.keys(this.state), Object.values(this.state));
        });
        this.web3 = web3;               // object Web3 from makepepito
        this.pepitoInstance = pepitoInstance;   // object Contract from makepepito
        console.log('web3, Instance', this.web3, this.pepitoInstance);
    }

    retrievedDisguise = async (idxDisguise) => {
        this.setState(idxDisguise, () => {console.log('disguise retrieved', Object.keys(this.state), Object.values(this.state));});
    }

    render() {
        return (
            <div className='container text-center'>
                <header>
                    <h1 className='m-5'>Pepito Disguise<sup>not yet on blockchain</sup></h1>
                </header>
                <div>
                    <DisguiseControls 
                        setDisguise={this.setDisguise} 
                        connectedB={this.connectedB}
                        pepitoAddress={this.state.pepitoAddress}
                        retrievedDisguise={this.retrievedDisguise}
                    />
                    <DrawAvataar disguise={this.disguise} />
                    <small>This disguise= <br/>{Object.values(this.disguise)}</small>
                    <p>Options (modifiable soon)</p>
                    <OptionTable disguise={this.disguise} />
                </div>
            </div>
        );
    }
}

export default App;
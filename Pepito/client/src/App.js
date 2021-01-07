/**  class App - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice root class
 * @dev refactored to move out most of the functions
*/
import React, { Component } from 'react';
import Disguise from './Disguise';
import DisguiseControls from './DisguiseControls';
import DrawAvataar from './DrawAvataar';
import OptionTable from './OptionTable';

class App extends Component {
    constructor() {
        super();
        this.state = {};
        this.disguise = {};
    }

    setDisguise = async (randomBigNumber, idxDisguise, disguise) => {
        this.setState({randomBigNumber: randomBigNumber});
        this.setState(idxDisguise);
        this.disguise = disguise;
        console.log('this.disguise', this.disguise);
        this.setState(disguise, () => {console.log('state updated', Object.keys(this.state), Object.values(this.state));});
    }

    connectedB = async (web3, accounts, pepitoContract) => {
        // this.setState({web3, accounts, pepitoContract})
        alert('Connect to Blockchain and create Pepito');
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
/**  class MakePepito - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice connect to Web3, call App.connectB to store on App.state
*/
import React from 'react';
import getWeb3 from "./getWeb3";                    // to call web3 API
import Pepito from "./contracts_abi/Pepito.json";   // to call web3 API
import './App.css';

class MakePepito extends React.Component{
    constructor() {
        super();
        this.web3 = {};
        this.accounts = [];
    }

    makePepito = async () => {
        /**
        * @notice connect web3 API and create Pepito contract
        * @dev this way to define makePepito as property of App is typical of React, to bind 'this'
        */

        // don't do anything if props.web3Connected == true
        if(!this.props.web3Connected) {
            console.log('>>>> makePepito: this.props.web3Connected', this.props.web3Connected);
            try {
                /**
                 * @dev via Metamask, get blockchain network provider & web3 instance by trying several channels
                 * @dev get the user account address
                 */
                this.web3 = await getWeb3();
                this.accounts = await this.web3.eth.getAccounts();
            } catch (error) {
                /// @dev catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts. Check console for error details.`,
                );
                console.error(error);
            }

            try {
                /// @dev create a Pepito singleton contract instance
                const web3 = this.web3;
                const accounts = this.accounts;
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = Pepito.networks[networkId];
                const pepitoInstance = new web3.eth.Contract(
                    Pepito.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                const ownerPepito = await pepitoInstance.methods.owner().call();
                var web3Connected = true;

                /// @dev set web3, accounts, and pepitoContract of the state variable
                console.log("1.user account", accounts,
                    ".\n 1.makePepito().Pepito contract", pepitoInstance,
                    ".\n  1.Pepito contract address", deployedNetwork.address,
                    ".\n   1.web3Connected", web3Connected,
                    ".\n    1.'owner' variable in Pepito", ownerPepito);
                this.props.connectedB(web3, accounts, pepitoInstance, deployedNetwork.address,  web3Connected, ownerPepito);
            } catch (error) {
                /// @dev catch any errors for any of the above operations.
                alert(
                    `Failed to create pepitoContract. Check console for details.`,
                );
                console.error(error);
            }
        } else alert('no need: blockchain connected and Pepito already created');
    }

    render() {
        return(
            <>
                <button className="btn btn-lg btn-secondary mb-5" 
                    onClick={this.makePepito}>Connect to blockchain & create Pepito</button>
            </>
        )
    }
}

export default MakePepito;
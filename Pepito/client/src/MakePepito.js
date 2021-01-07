/**  class MakePepito - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice connect to Web3, call App.connectB to store on App.state
*/
import React from 'react';
import './App.css';

class MakePepito extends React.Component{

    makePepito = () => {
        this.props.connectedB(/*web3, accounts, pepitoContract*/);
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
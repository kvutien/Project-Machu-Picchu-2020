/**  class DisguiseRetrieve - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice retrieve disguise from blockchain
 * @dev TO BE DONE
*/
import React from 'react';
import './App.js';

class DisguiseRetrieve extends React.Component{
    retrieveDisguise = () => {
        let idxDisguise = {};
        this.props.retrievedDisguise(idxDisguise);
    }

    render() {
        return(
            <>
                <button className="btn btn-lg btn-secondary mb-5 disabled" 
                    onClick={this.retrieveDisguise}>Retrieve disguise from blockchain <br /> INACTIVE - WIP -
                </button>
            </>
        )
    }
}

export default DisguiseRetrieve;
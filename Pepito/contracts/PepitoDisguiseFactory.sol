// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
/*
    Placeholder for a factory of PepitoDisguise - inspired from the MetaCoinFactory of Truffle box
    Remix compiled successfully 2020-12-04
*/

import "./Pepito.sol";
import "./PepitoDisguise.sol";

contract PepitoDisguiseFactory {
    /* the main interest of a factory is to maintain an array or mapping of addresses of child contracts
        specially useful for persons-in-need because their contract will be their virtual secretary
        and will maintain their balance of tokens 
        and weill execute the limited number of orders sent by SMS
    */
    PepitoDisguise[] public pepitoDisguiseAddresses;            // array of addresses of PepitoDisguise
    event PepitoDisguiseCreated(PepitoDisguise pepitoDisguise);
    /*address private disguiseOwner;*/                  // unused, disguiseOwner is Pepito, sent when creating disguise

    constructor(/*address _pepitoIsOwner */) public {
       /* disguiseOwner = _pepitoIsOwner ;*/            // disguiseOwner is Pepito, sent to createPepitoDisguise
    }

    function createPepitoDisguise(address _owner, uint256 _initialBalance) external {
        require (_owner == msg.sender);             // the transaction caller must be _owner Pepito
        require (_initialBalance != uint256(0));    // initial balance must not be nil
        PepitoDisguise pepitoDisguise = new PepitoDisguise(_owner, _initialBalance);
        // disguise is a future virtual secretary of persons-in-need, so its address is useful
        pepitoDisguiseAddresses.push(pepitoDisguise);   // record address of disguise
        emit PepitoDisguiseCreated(pepitoDisguise);
    }

    function getPepitoDisguises() external view returns (PepitoDisguise[] memory) {
        return pepitoDisguiseAddresses;
    }
}
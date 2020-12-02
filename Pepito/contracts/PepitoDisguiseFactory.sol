// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

/*
    Placeholder for a factory of PepitoDisguise - inspired from the MetaCoinFactory of Truffle box
*/

import "./PepitoDisguise.sol";

contract PepitoDisguiseFactory {
    /* the main interest of a factory is to maintain an array or mapping of addresses of child contracts
        specially useful for persons-in-need because their contract will be their virtual secretary
        and will maintain their balance of tokens 
        and weill execute the limited number of orders sent by SMS
    */
    PepitoDisguise[] public pepitoDisguiseAddresses;            // array of addresses of PepitoDisguise
    event PepitoDisguiseCreated(PepitoDisguise pepitoDisguise);

    address private pepitoDisguiseOwner;

    constructor(address _pepitoDisguiseOwner ) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner ;
    }

    function createPepitoDisguise(uint256 initialBalance) external {
        PepitoDisguise pepitoDisguise = new PepitoDisguise(pepitoDisguiseOwner, initialBalance);

        pepitoDisguiseAddresses.push(pepitoDisguise);
        emit PepitoDisguiseCreated(pepitoDisguise);
    }

    function getPepitoDisguises() external view returns (PepitoDisguise[] memory) {
        return pepitoDisguiseAddresses;
    }
}
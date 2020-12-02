// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

/*
    Placeholder for a factory of PepitoDisguise - inspired from the MetaCoinFactory of Truffle box
*/

import "./PepitoDisguise.sol";

contract PepitoDisguiseFactory {
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
// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
*/
pragma solidity >=0.4.22 <0.8.0;

contract PepitoDisguise {
    // state variables
    uint public storedData;         // test data, to be removed
    address pepitoDisguiseOwner
    uint initialBalance
    
    constructor(address _pepitoDisguiseOwner, uint _initialBalance) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner;
        initialBalance = _initialBalance;
    }
    
    // functions
    function set(uint x) public {   // test function, to be removed
        storedData = x;
    }

    function createDisguise() public payable {
        // to be filled
    }

    function readDisguise() public {
        // to be filled
    }

    function updateDisguise() public payable {
        // to be filled
    }
    
}

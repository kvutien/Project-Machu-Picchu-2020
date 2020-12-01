// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
*/
pragma solidity >=0.4.22 <0.8.0;

contract PepitoDemo {
    constructor() public {}
    
    // state variables
    var storedData;                 // test data
    
    // functions
    function set(uint x) public {   // test function
        storedData = x;
    }
    
}

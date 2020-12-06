// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
    Remix compiled successfully 2020-12-04
*/
pragma solidity >=0.4.22 <0.8.0;

contract PepitoDisguise {
    /*
        A disguise of Pepito is composed of many features
        Copy this contract to generate also persons-in-need (farmers, refugees, homeless etc.)
    */
    // state variables
    string public storedData;           // test data, to be replaced by a struct describing a disguise
    // address pepitoDisguiseOwner;     // check if really needed?
    uint balance;                       // will be used for person-in-need, not for disguise
    
    constructor(address _pepitoDisguiseOwner, uint _initialBalance) public {
        // pepitoDisguiseOwner = _pepitoDisguiseOwner;  // check if really needed?
        balance = _initialBalance;      // in future versions, balance will be a mapping of tokens of various names
    }
    
    // functions
    function setTop(string memory x) public {   // test function, set one character feature in the struct
        storedData = x;                         // replace by adequate
    }
    function setClothe(string memory x) public {}
    function setAccessories(string memory x) public {}
    function setFacialHair(string memory x) public {}
    function setEyes(string memory x) public {}
    function setEyebrows(string memory x) public {}
    function setMouth(string memory x) public {}
    function setNose(string memory x) public {}
    function setSkin(string memory x) public {}

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

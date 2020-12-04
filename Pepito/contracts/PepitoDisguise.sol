// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
*/
pragma solidity >=0.4.22 <0.8.0;

contract PepitoDisguise {
    /*
    First example of a character, that can be copied to generate farmers, refugees, homeless etc.
    */
    // state variables
    string public storedData;         // test data, to be replaced by a struct describing a dsguise
    address pepitoDisguiseOwner;
    uint initialBalance;
    
    constructor(address _pepitoDisguiseOwner, uint _initialBalance) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner;
        initialBalance = _initialBalance;
    }
    
    // functions
    function setTop(string memory x) public {   // test function, set one character feature in the struct
        storedData = x;                     // replace by adequate
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

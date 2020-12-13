// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
    Remix compiled successfully 2020-12-04
*/
pragma solidity >=0.4.22 <0.8.0;

/** Solidity NatSpec format
    @title  PepitoDisguise. Demo dApp for Machu Picchu. Also Final Project of
    @author Vu Tien Khang
    @notice Pepito is a Caribbian corsair. He can create up to 512 PepitoDisguise
    @notice A disguise is composed of many features
    @notice Copy this contract to generate also farmers, refugees, homeless etc.
    @dev    PepitoDisguise's function is similar to ENS Resolver.sol, Pepito to ENS Registry.sol

    @dev    Remix-compiled successfully 2020-12-06
*/

contract PepitoDisguise {
    // state variables
    address pepitoDisguiseOwner;/// @dev    the owner of the disguise is Pepito
    uint balance;               /// @dev    running balance of pepitoTokens of this disguise
    /// @dev    when transposed to person-in-need, balance will be a mapping of tokens from many helperInstitutions
    string public storedData;   /// @dev    test data, to be replaced by a struct describing a disguise
    
    constructor(address _pepitoDisguiseOwner, uint _initialBalance) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner;
        balance = _initialBalance;
    }
    
    /// @dev    functions to set elements of the struct storedData with data of the disguise
    function setTop(string memory x) public {   /// @dev    test function, set one character feature in the struct
        storedData = x;                         /// @dev    to be replaced by adequate when finalised
    }
    function setClothe(/*string memory x*/) public {}
    function setAccessories(/*string memory x*/) public {}
    function setFacialHair(/*string memory x*/) public {}
    function setEyes(/*string memory x*/) public {}
    function setEyebrows(/*string memory x*/) public {}
    function setMouth(/*string memory x*/) public {}
    function setNose(/*string memory x*/) public {}
    function setSkin(/*string memory x*/) public {}

    function createDisguise() public payable {
        /// @dev    write the struct storedData in IPFS database
        /// @dev    to be filled
    }

    function readDisguise() public {
        /// @dev    retrieves the struct storedData from IPFS database
        /// @dev    to be filled
    }

    function updateDisguise() public payable {
        /// @dev    read, update, write back the struct storedData in IPFS database
        /// @dev    to be filled
    }
    
}

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
    struct storedDisguise {
        string topType;   // 'Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair' etc.
        string hatColor;  // 'Black', 'Blue01', 'Blue02' etc.
        string accessoriesType; // 'Round', 'Sunglasses', 'Wayfarers' etc.
        string hairColor;   // 'PastelYellow', 'Pink', 'Red', 'White' etc.
        string facialHairType;   // 'BeardMedium', 'Blank', 'MoustacheFancy', 'MoustacheMagnum' etc.
        string clotheType;   // 'BlazerSweater', 'CollarSweater', 'GraphicShirt' etc.
        string clotheColor;   // 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White' etc.
        string eyeType;   // 'Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll' etc.
        string eyebrowType;   // 'Angry', 'AngryNatural', 'Default','RaisedExcited' etc.
        string mouthType;   // 'Concerned', 'Default', 'Disbelief','Eating' etc.
        string skinColor;   // 'Tanned', 'Yellow', 'Pale', 'Light', 'Brown' etc.
    }
    
    constructor(address _pepitoDisguiseOwner, uint _initialBalance) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner;
        balance = _initialBalance;
    }
    
    /// @dev    functions to set elements of the struct storedData with data of the disguise
    function setTop(string memory x) public {   /// @dev    test function, set one character feature in the struct
        storedData = x;                         /// @dev    to be replaced by adequate when finalised
    }
    function setTopType(/*string memory x*/) public {}
    function setHatColor(/*string memory x*/) public {}
    function setAccessoriesType(/*string memory x*/) public {}
    function setHairColor(/*string memory x*/) public {}
    function setFacialHairType(/*string memory x*/) public {}
    function setClotheType(/*string memory x*/) public {}
    function setClotheColor(/*string memory x*/) public {}
    function setEyeType(/*string memory x*/) public {}
    function setEyebrowType(/*string memory x*/) public {}
    function setMouthType(/*string memory x*/) public {}
    function setSkinColor(/*string memory x*/) public {}

    function storeDisguise() public payable {
        /// @dev    write the struct storedData in blockchain first, IPFS database in future
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

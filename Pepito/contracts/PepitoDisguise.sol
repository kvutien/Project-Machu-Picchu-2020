// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

/** Solidity NatSpec format
    @title  PepitoDisguise. Demo dApp for Machu Picchu. Also Final Project of
    @author Vu Tien Khang
    @notice Pepito is a Caribbian corsair. He can create up to 64 PepitoDisguise in this demo
    @notice A disguise is composed of many features, each feature has many options
    @notice Currently, features and options are hard-coded in a array to optise blockchain storage
    @notice     ... once moved to IPFS, features and options will be key-value pairs, open-ended
    @notice Copy this contract to generate also farmers, refugees, homeless etc.
    @dev    PepitoDisguise's function is similar to ENS Resolver.sol, Pepito to ENS Registry.sol

    @dev    Remix-compiled successfully 2021-01-17
*/

contract PepitoDisguise {
    // state variables
    address pepitoDisguiseOwner;        /// @dev    the owner of the disguise is Pepito
    uint256 balance;                    /// @dev    running balance of pepitoTokens of this disguise
    uint256[12] private disguiseInStore;    /// @dev    the disguise, fixed array of 12 feature indexes

    /// @dev    when transposed to person-in-need, balance will be a mapping of tokens from many helperInstitutions
    // enum TopTypes {Eyepatch, Hat, Hijab, LongHairBigHair, LongHairBob, LongHairBun, LongHairCurly, LongHairCurvy, LongHairDreads, LongHairFrida, LongHairFro, LongHairFroBand, LongHairMiaWallace, LongHairNotTooLong, LongHairShavedSides, LongHairStraight, LongHairStraight2, LongHairStraightStrand, NoHair, ShortHairDreads01, ShortHairDreads02, ShortHairFrizzle, ShortHairShaggy, ShortHairShaggyMullet, ShortHairShortCurly, ShortHairShortFlat, ShortHairShortRound, ShortHairShortWaved, ShortHairSides, ShortHairTheCaesar, ShortHairTheCaesarSidePart, Turban, WinterHat1, WinterHat2, WinterHat3, WinterHat4}
    // enum HatColors {Black, Blue01, Blue02, Blue03, Gray01, Gray02, Heather, PastelBlue, PastelGreen, PastelOrange, PastelRed, PastelYellow, Pink, Red, White}
    // enum AccessoriesTypes {Blank, Kurt, Prescription01, Prescription02, Round, Sunglasses, Wayfarers}
    // enum HairColors {Auburn, Black, Blonde, BlondeGolden, Brown, BrownDark, PastelPink, Platinum, Red, SilverGray}
    // enum FacialHairTypes {BeardLight, BeardMagestic, BeardMedium, Blank, MoustacheFancy, MoustacheMagnum}
    // enum FacialHairColors {Auburn, Black, Brown, BrownGolden, brownBlack, Platinum, red}
    // enum ClotheTypes {BlazerShirt, BlazerSweater, CollarSweater, GraphicShirt, Graphics, Hoodie, Overall, ShirtCrewNeck, ShirtScoopNeck, ShirtVNeck}
    // enum ClotheColors {Black, Blue01, Blue02, Blue03, Gray01, Gray02, Heather, PastelBlue, PastelGreen, PastelOrange, PastelRed, PastelYellow, Pink, Red, White}
    // enum EyeTypes {Close, Cry, Default, Dizzy, EyeRoll, Happy, Hearts, Side, Squint, Surprised, Wink, WinkWacky}
    // enum EyebrowTypes {Angry, AngryNatural, Default, DefaultNatural, FlatNatural, FrownNatural, RaisedExcited, RaisedExcitedNatural, SadConcerned, SadConcernedNatural, UnibrowNatural, UpDown, UpDownNatural}
    // enum MouthTypes {Concerned, Default, Disbelief,Eating, Grimace, Sad, ScreamOpen, Serious, Smile, Tongue, Twinkle, Vomit}
    // enum SkinColors{ Tanned, Yellow, Pale, Light, Brown, DarkBrown, Black}
    // struct Disguise {
    //     TopTypes topType;       // 'Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair' etc.
    //     HatColors hatColor;     // 'Black', 'Blue01', 'Blue02' etc.
    //     AccessoriesTypes accessoriesType; // 'Round', 'Sunglasses', 'Wayfarers' etc.
    //     HairColors hairColor;   // 'PastelYellow', 'Pink', 'Red', 'White' etc.
    //     FacialHairTypes facialHairType;   // 'BeardMedium', 'Blank', 'MoustacheFancy', 'MoustacheMagnum' etc.
    //     FacialHairColors facialHairColor; // Auburn', 'Black', 'Brown' etc.
    //     ClotheTypes clotheType; // 'BlazerSweater', 'CollarSweater', 'GraphicShirt' etc.
    //     ClotheColors clotheColor; // 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White' etc.
    //     EyeTypes eyeType;       // 'Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll' etc.
    //     EyebrowTypes eyebrowType; // 'Angry', 'AngryNatural', 'Default','RaisedExcited' etc.
    //     MouthTypes mouthType;   // 'Concerned', 'Default', 'Disbelief','Eating' etc.
    //     SkinColors skinColor;   // 'Tanned', 'Yellow', 'Pale', 'Light', 'Brown' etc.
    // }
    // Disguise public storedDisguise;
    
    constructor(address _pepitoDisguiseOwner/*, uint _initialBalance*/) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner;
        // balance = _initialBalance;
        balance = 0;
    }
    
    function storeDisguise(uint256[12] memory _disguise2store) public {
        /// @dev    write the struct storedData in blockchain first, IPFS database in future
        disguiseInStore = _disguise2store;
    }

    function readDisguise() public view returns(uint256[12] memory) {
        /// @dev    in the future, retrieves the global variable disguiseInStore from IPFS database
        return disguiseInStore;
    }

    function updateDisguise() public payable {
        /// @dev    read, update, write back the struct storedData in IPFS database
        /// @dev    TODO: to be filled
    }
    
    /// @dev    functions to set elements of the struct storedData with data of the disguise
    // function setTopType(TopTypes x) public {    /// @dev    test function, set one character feature in the struct
    //     storedDisguise.topType = x;             /// @dev    to be replaced by adequate when finalised
    // }
    // function setHatColor(HatColors x) public { storedDisguise.hatColor = x; }
    // function setAccessoriesType(AccessoriesTypes x) public { storedDisguise.accessoriesType = x; }
    // function setHairColor(HairColors x) public { storedDisguise.hairColor = x; }
    // function setFacialHairType(FacialHairTypes x) public {storedDisguise.facialHairType = x; }
    // function setClotheType(ClotheTypes x) public {storedDisguise.clotheType = x; }
    // function setClotheColor(ClotheColors x) public {storedDisguise.clotheColor = x; }
    // function setEyeType(EyeTypes x) public {storedDisguise.eyeType = x; }
    // function setEyebrowType(EyebrowTypes x) public {storedDisguise.eyebrowType = x; }
    // function setMouthType(MouthTypes x) public {storedDisguise.mouthType = x; }
    // function setSkinColor(SkinColors x) public {storedDisguise.skinColor = x; }

}

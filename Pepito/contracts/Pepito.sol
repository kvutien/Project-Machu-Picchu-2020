// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
/*  Order of contract elements
    1.	    Pragma statements
    2.	    Import statements
    3.	    Interfaces
    4.	    Libraries
    5.	    Contracts
*/

/**
    @title  Pepito. Demo dApp for Machu Picchu. Also Final Project of
    @author Vu Tien Khang
    @notice Pepito is a Caribbian corsair. He can create up to 512 PepitoDisguise
    @notice Pepito's function is similar to ENS Registry.sol, PepitoDisguise is similar to ENS Resolver.sol
    @dev    Pepito's Circuit Breaker stops creating disguises if Hernadez de La Banane discovers the trick :-)
    @dev    The circuit breaker is called to halt everything in case of serious unsolved contract exploit
    @dev    contract Pepito is a factory of disguises.
    @dev    - the main interest of a factory is to maintain an array or mapping of addresses of child contracts
    @dev    - specially useful for persons-in-need because their contract will be their virtual secretary
    @dev        and will maintain their balance of tokens 
    @dev        and will execute the few orders sent via SMS by the persons-in-need
    @dev Pepito contract only manages the array of addresses of disguise samrt contract

    @dev    Remix-compiled successfully 2020-12-06
*/

import "./PepitoDisguise.sol";

contract Pepito {
/* order of statements inside de contract
    1.	    State variables
    2.	    Struct, Arrays or Enums
    3.	    Events
    4.	    Function Modifiers
    5.	    Constructor
    6.	    Fallback — Receive function
    7.	    External visible functions
    8.	    Public visible functions
    9.	    Internal visible functions
    10.	    Private visible functions

order of function modifiers
    1.	    Visibility
    2.	    Mutability
    3.	    Virtual
    4.	    Override
    5.	    Custom modifiers
*/

    bool public stopped;            /// @dev    the circuit breaker
    address public owner;           /// @dev    account that deployed Pepito
    uint256 public initialBalance;  /// @dev    initial balance of all disguises
    uint256 public disguiseNumber;  /// @dev    running number of disguises in array pepitoDisguiseAddresses
    address[512] public pepitoDisguises;    /// @dev    array of contracts pepitoDisguise
    /// @dev    array is used because disguises will be iterated and displayed
    /// @dev    mapping may be used when disguises are transposed into people-in-need that won't be iterated
    /// @dev    for the demo, we limit array size to 512; in real, disguises will be in IPFS database w/o number limit

    event PepitoDisguiseCreated(address aDisguise);
    
    modifier isAdmin() {
        require(owner == msg.sender);   /// @dev    the caller of the function must be Pepito
        _;
    }
    modifier stopInEmergency() {    /// @dev    the caller of the breaker must be Pepito
        if(!stopped) _;
    }
    modifier onlyInEmergency() {    /// @dev    the caller of the breaker must be Pepito
        if(stopped) _;
    }

    constructor() public {
        stopped = false;
        owner = msg.sender;     /// @dev    the owner is the EOA that deployed Pepito
        initialBalance = 10;    /// @dev    initial balance is 10 Pepito tokens
        disguiseNumber = 0;     /// @dev    initial number of disguises created
    }
    
    function toggleContractActive() public isAdmin {
        /// @dev    Circuit breaker to stop the smart contract in desperate cases & restart it
        /// @dev    In the future we can add an additional modifier that restricts stopping a contract to be
        /// @dev    based on another action, such as a vote of users
        stopped = !stopped;
    }
    
    function registerDisguise() public payable stopInEmergency {
        /// @dev    create a disguise and (future) record it in IPFS
        /// @dev    stop all creation of new disguise if circuit breaker activated
        createPepitoDisguise();
    }
    
    function withdraw () onlyInEmergency public payable {
        /// @dev    withdraw balances of all tokens when situation is desperate
        /// @dev    change 'public' to 'external' to reduce gas if never called inside this contract
        /// @dev    add some code to withdraw all tokens from all disguises if circuit breaker activated
        /// @dev    and contract is hopelessly FOOBAR
   }
    
    function createPepitoDisguise() public returns(PepitoDisguise) {
        /// @dev    deploy an instance of PepitoDisguise with properties transferred from caller
        require (owner == msg.sender, "the transaction caller must be Pepito");
        /// @dev future improvement: require (initialBalance != uint256(0), "initial balance of disguise cannot be zero");
        require (disguiseNumber < 512, "there has been already 512 disguises created");
        PepitoDisguise pepitoDisguise = new PepitoDisguise(owner/*, initialBalance*/);
        /// @dev    disguise is a future virtual secretary of persons-in-need, so its contract address is useful
        /// @dev    the disguise is instantiated here, will be filled by functions in pepitoDisguise()
        pepitoDisguises[disguiseNumber] = address(pepitoDisguise);   // record disguise smart contract
        disguiseNumber += 1;
        emit PepitoDisguiseCreated(address(pepitoDisguise));
        return pepitoDisguise;
    }
    
    function getPepitoDisguise(uint i) external view returns(address) {
        /// @dev    this function will be called from a JavaScript loop
        /// @dev    i is loop index, rank in the array of disguises
        /// @return one instance of pepitoDisguiseAddress, function to retrieve its data is exposed in pepitoDisguide
        require (i < 512, "cannot exist more than 512 disguises");
        return pepitoDisguises[i];
    }
}

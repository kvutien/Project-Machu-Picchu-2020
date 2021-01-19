// SPDX-License-Identifier: MIT
// version of Jan 17, 2021 - structure follows CodeTemplate.sol
pragma solidity >=0.4.22 <0.8.0;

/**
    @title  Pepito. Demo dApp for Machu Picchu. Also Final Project of
    @author Vu Tien Khang
    @notice Pepito is a Caribbian corsair. He can create up to 64 PepitoDisguise in this version
    @notice Pepito's function is similar to ENS Registry.sol, PepitoDisguise is similar to ENS Resolver.sol
    @dev    Pepito's Circuit Breaker stops creating disguises if Hernadez de La Banane discovers the trick :-)
    @dev    The circuit breaker is called to halt everything in case of serious unsolved contract exploit
    @dev    contract Pepito is a factory of disguises.
    @dev    - the main interest of a factory is to maintain an array or mapping of addresses of child contracts
    @dev    - specially useful for persons-in-need because their contract will be their virtual secretary
    @dev        and will maintain their balance of tokens 
    @dev        and will execute the few orders sent via SMS by the persons-in-need
    @dev Pepito contract only manages the array of addresses of disguise smart contracts
    @dev PepitoDisguise contract actually manages the array the disguise options, the personal data

    @dev    Remix-compiled successfully 2021-01-17
*/

import "./PepitoDisguise.sol";
import "../client/node_modules/@openzeppelin/contracts/math/SafeMath.sol";
//import "./SafeMath.sol";      // used to compile in Remix

contract Pepito {
    using SafeMath for uint256;

    bool public stopped;            /// @dev    the circuit breaker
    address public owner;           /// @dev    account that deployed Pepito
    uint256 public initialBalance;  /// @dev    initial balance of all disguises
    uint256 public disguiseCount;   /// @dev    running number of disguises in array pepitoDisguiseAddresses
    uint256 public disguiseCount1;  /// @dev    same but incremented without SafeMath
    address[64] public disguiseAddresses;    /// @dev    array of addresses of contracts pepitoDisguise
    /// @dev    array is used because disguises will be iterated and displayed
    /// @dev    mapping may be used when disguises are transposed into people-in-need that won't be iterated
    /// @dev    for the demo, we limit array size to 64; in real, disguises will be in IPFS database w/o number limit

    event PepitoDisguiseCreated(uint256 disguiseCount, uint256 disguiseCount1, address[64] disguiseAddresses);
    
    modifier isAdmin() {
        require(owner == msg.sender);   /// @dev    the caller of the function must be Pepito
        _;
    }
    modifier stopInEmergency() {        /// @dev    the caller of the breaker must be Pepito
        if(!stopped) _;
    }
    modifier onlyInEmergency() {        /// @dev    the caller of the breaker must be Pepito
        if(stopped) _;
    }

    constructor() public {
        stopped = false;
        owner = msg.sender;     /// @dev    the owner is the EOA that deployed Pepito
        initialBalance = 10;    /// @dev    initial balance is 10 Pepito tokens
        disguiseCount = 0;      /// @dev    number of disguises created, maintained with SafeMath
        disguiseCount1 = 0;     /// @dev    currently used, unsafe arithmetic
    }
        
    function createPepitoDisguise() public payable returns(PepitoDisguise) {
        /// @notice deploy an instance of PepitoDisguise with properties transferred from caller
        require (owner == msg.sender, "the transaction caller must be Pepito");
        /// @dev    future improvement: require (initialBalance != uint256(0), "initial balance of disguise cannot be zero");
        require (disguiseCount1 < 64, "there has been already 64 disguises created");
        PepitoDisguise pepitoDisguise = new PepitoDisguise(owner/*, initialBalance*/);
        /// @dev    disguise is a future virtual secretary of persons-in-need, so its contract address is useful
        /// @dev    the disguise is instantiated here, will be filled by functions in pepitoDisguise()
        disguiseAddresses[disguiseCount1] = address(pepitoDisguise);
        disguiseCount.add(1);   ///@dev used by SafeMath, but not working well yet
        disguiseCount1 += 1;
        emit PepitoDisguiseCreated(disguiseCount, disguiseCount1, disguiseAddresses); // emit the complete array of addresses
        return pepitoDisguise;  ///@dev verify if this return is useful somewhere
    }
        
        function toggleContractActive() public isAdmin {
        /// @dev    Circuit breaker to stop the smart contract in desperate cases & restart it
        /// @dev    In the future we can add an additional modifier that restricts stopping a contract to be
        /// @dev    based on another action, such as a vote of users
        stopped = !stopped;
    }
    
    function withdraw () onlyInEmergency public payable {
        /// @dev    withdraw balances of all tokens when situation is desperate
        /// @dev    change 'public' to 'external' to reduce gas if never called inside this contract
        /// @dev    add some code to withdraw all tokens from all disguises if circuit breaker activated
        /// @dev    and contract is hopelessly FOOBAR
   }
}

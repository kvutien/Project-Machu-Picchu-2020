// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./PepitoDisguise.sol";

/**
    @title  Demo dApp for Machu Picchu. Also Final Project of
    @author Vu Tien Khang
    @notice Pepito is a Caribbian corsair. He can create up to 512 PepitoDisguise
    @dev    Pepito's Circuit Breaker stops creating disguises if Hernadez de La Banane discovers the trick
    @dev    The circuit breaker is called to halt everything in case of serious unsolved contract exploit
    @dev    He is also a factory of disguises.
    @dev    - the main interest of a factory is to maintain an array or mapping of addresses of child contracts
    @dev    - specially useful for persons-in-need because their contract will be their virtual secretary
    @dev        and will maintain their balance of tokens 
    @dev        and will execute the few orders sent via SMS by the persons-in-need

    @dev    Remix-compiled successfully 2020-12-06
*/
contract Pepito {
    bool public stopped;            /// @dev    the circuit breaker
    address public owner;           /// @dev    account that deployed Pepito
    uint256 public initialBalance;  /// @dev    initial balance of all disguises
    uint256 public disguiseNumber;  /// @dev    running number of disguises in array pepitoDisguiseAddresses
    address[512] public pepitoDisguises;    /// @dev    array of contracts pepitoDisguise
    /// @dev    array is used because disguises will be iterated and displayed
    /// @dev    mapping may be used when disguises are transposed into people-in-need that won't be iterated
    /// @dev    for the demo, we limit array size to 512; in real, disguises will be in IPFS database w/o number limit
    event PepitoDisguiseCreated(address aDisguise);
    
    constructor() public {
        stopped = false;
        owner = msg.sender;     /// @dev    the owner is the EOA that deployed Pepito
        initialBalance = 10;    /// @dev    initial balance is 10 Pepito tokens
        disguiseNumber = 0;     /// @dev    initial number of disguises created
    }
    
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

    function toggleContractActive() isAdmin public {
        /// @dev    Circuit breaker to stop the smart contract in desperate cases & restart it
        /// @dev    In the future we can add an additional modifier that restricts stopping a contract to be
        /// @dev    based on another action, such as a vote of users
        stopped = !stopped;
    }
    
    function registerDisguise() stopInEmergency public payable {
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
    
    function createPepitoDisguise() public {
        /// @dev    deploy an instance of PepitoDisguise with properties transferred from caller
        require (owner == msg.sender, "the transaction caller must be Pepito");
        require (initialBalance != uint256(0), "initial balance of disguise cannot be zero");
        require (disguiseNumber < 512, "there has been already 512 disguises created");

        PepitoDisguise pepitoDisguise = new PepitoDisguise(owner, initialBalance);
        /// @dev    disguise is a future virtual secretary of persons-in-need, so its contract address is useful
        pepitoDisguises[disguiseNumber] = pepitoDisguise;   // record disguise smart contract
        disguiseNumber += 1;
        emit PepitoDisguiseCreated(address(pepitoDisguise));
    }
    
    function getPepitoDisguise(uint i) external view returns(address) {
        /// @dev    this function will be called from a JavaScript loop
        /// @dev    i is loop index, rank in the array of disguises
        /// @return one instance of pepitoDisguiseAddress
        require (i < 512, "cannot exist more than 512 disguises");
        return pepitoDisguises[i];
    }
}

// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
    Pepito is a Caribbian corsair. He can create PepitoDisguise using PepitoDisguiseFactory
    Pepito has a Circuit Breaker to stop creating disguises if Hernadez de La Banane discovers
*/
pragma solidity >=0.4.22 <0.8.0;

// import "./PepitoDisguiseFactory.sol";    // integrate PepitoDisguiseFactory in Pepito
import "./PepitoDisguise.sol";


contract Pepito {
    /*
        Pepito is the owner of the whole system
        He calls PepitoDisguiseFactory to create a disguise
        He has a circuit breaker to halt everything in case of serious unsolved bug
        He is also a factory of disguises.
        - the main interest of a factory is to maintain an array or mapping of addresses of child contracts
        - specially useful for persons-in-need because their contract will be their virtual secretary
            and will maintain their balance of tokens 
            and will execute the few orders sent via SMS by the persons-in-need

        Remix-compiled successfully 2020-12-05
    */
    bool public stopped;        // the circuit breaker
    address public owner;       // Pepito is the owner of the whole system
    uint256 public initialBalance;  // initial balance of a disguise
    uint256 public disguiseNumber;  // number of disguises in array pepitoDisguiseAddresses
    address[512] public pepitoDisguiseAddresses;   // array of addresses of PepitoDisguise
    // array is used because disguises will be iterated and displayed
    // mapping may be used when disguises are transposed into people-in-need
    // for the demo we limit array size to 512; in real disguises will be in IPFS database
    event PepitoDisguiseCreated(address pepitoDisguise);
    
    constructor() public {
        stopped = false;
        owner = msg.sender;     // the owner is the EOA that created Pepito
        initialBalance = 10;    // initial balance is 10 Pepito tokens
        disguiseNumber = 0;     // initial number of disguises created
    }
    
    modifier isAdmin() {
        require(owner == msg.sender);
        _;
    }
    modifier stopInEmergency() {
        if(!stopped) _;
    }
    modifier onlyInEmergency() {
        if(stopped) _;
    }

    function toggleContractActive() isAdmin public {
        // You can add an additional modifier that restricts stopping a contract to be
        // based on another action, such as a vote of users
        stopped = !stopped;
    }
    
    function registerDisguise() stopInEmergency public payable {
        // stop creating new disguise if circuit breaker activated
        createPepitoDisguise();
    }
    
    function withdraw () onlyInEmergency public payable {   // change to external if never called inside contract
        // some code to withdraw all tokens from all disguises if circuit breaker activated
        // and is hopelessly FOOBAR
    }
    
    function createPepitoDisguise() public {
        require (owner == msg.sender, "the transaction caller must be Pepito");
        require (initialBalance != uint256(0), "initial balance of disguise cannot be zero");
        require (disguiseNumber < 512, "there has been already 512 disguises created");
        PepitoDisguise pepitoDisguise = new PepitoDisguise(owner, initialBalance);
        // disguise is a future virtual secretary of persons-in-need, so its address is useful
        pepitoDisguiseAddresses[disguiseNumber] = address(pepitoDisguise);   // record address of disguise
        disguiseNumber += 1;
        emit PepitoDisguiseCreated(address(pepitoDisguise));
    }
    
    function getPepitoDisguises(uint i) external view returns(address) {
        // this function will be called inb a JavaScript loop
        require (i < 512, "cannot exist more than 512 disguises");
        return pepitoDisguiseAddresses[i];
    }
}

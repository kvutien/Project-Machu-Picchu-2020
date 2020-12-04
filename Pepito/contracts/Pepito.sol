// SPDX-License-Identifier: MIT
/*
    Demo dApp for Machu Picchu. Also Final Project of Vu Tien Khang
    Pepito is a Caribbian corsair. He can create PepitoDisguise using PepitoDisguiseFactory
    Pepito has a Circuit Breaker to stop creating disguises if Hernadez de La Banane discovers
    Remix compiled successfully 2020-12-04
*/
pragma solidity >=0.4.22 <0.8.0;

import "./PepitoDisguiseFactory.sol";


contract Pepito {
    /*
        Pepito is the owner of the whole system
        He calls PepitoDisguiseFactory to create a disguise
        He has a circuit breaker to halt everything in case of serious unsolved bug
    */
    bool public stopped;        // the circuit breaker
    address public owner;       // Pepito is the owner of the whole system
    uint256 public initialBalance;  // initial balance of a disguise
    
    constructor() public {
        stopped = false;
        owner = msg.sender;     // the owner is the EOA that created Pepito
        initialBalance = 10;    // initial balance is 10 Pepito tokens
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
    
    function registerDisguise(PepitoDisguiseFactory factory) stopInEmergency public payable {
        // stop creating new disguise if circuit breaker activated
        factory.createPepitoDisguise (owner, initialBalance);
    }
    
    function withdraw () onlyInEmergency public payable {
        // some code to withdraw all tokens from all disguises if circuit breaker activated
        // and is hopelessly FOOBAR
    }
}

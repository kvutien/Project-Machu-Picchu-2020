/* Contract to manage Machu Picchu persons in need
*/
pragma solidity ^0.5.0;
// import './HelperInstitution.sol';
// import './HelpWallet.sol';

contract Community {
    address public owner;
    mapping(address => bool) public personsInNeed; // today we use bool; will be IPFS hash in the future
    HelperInstitution[] public helperInstitutions;
    HelpWallet[] public helpWallets;    // each person in need has a wallet, to be further analysed

    constructor () public {
        owner = msg.sender;
    }

    function addPersonInNeed(address _personInNeed) {
        require(_personInNeed != 0x0);
        require(msg.sender == owner);
        personsInNeed[_personInNeed] = true;  // today we use 'true'; will be IPFS hash in the future
        HelperInstitution helperInstitution = new HelperInstitution(_personInNeed);
        // there will be a contract to associate a personInNeed with a helperInstitution
        // a helperInstitution may help n persons in need; a person in need may receive aid from n institutions
        helperInstitutions.push(helperInstitution);
        // do the same for helpWallets
    }
}

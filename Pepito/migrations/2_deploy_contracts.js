const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Pepito);
    /* this deployment here is required only to use truffle test */
    const userAddress = accounts[0];    // any account is OK, here my Metamask account
    deployer.deploy(PepitoDisguise, userAddress); 
        /* pepitoDisguise constructor expects the address of the owner of disguise,
        the actual address is given in the frontend call in DisguiseStore.js */
};


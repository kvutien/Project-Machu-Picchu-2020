const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Pepito);
    const userAddress = accounts[1];              // my Metamask account with Kovan ETH
    deployer.deploy(PepitoDisguise, userAddress); /* pepitoDisguise constructor expects disguiseOwnerAddress,
        but since all disguises are dynamically deployed by Pepito, the actual address is given in the frontend call
        this deployment here is mandatory only to use truffle test */
};


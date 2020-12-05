const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

module.exports = function (deployer) {
  deployer.deploy(PepitoDisguise);
  deployer.deploy(Pepito);
};

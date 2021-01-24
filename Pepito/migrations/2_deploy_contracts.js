const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

module.exports = function (deployer, network, accounts) {
  const userAddress = accounts[3];
  deployer.deploy(PepitoDisguise, userAddress);
  deployer.deploy(Pepito);
};

// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };

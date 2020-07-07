const NetworkContract = artifacts.require("Network");

module.exports = function(deployer) {
  deployer.deploy(NetworkContract);
};

var OracleI = artifacts.require("./OracleI.sol");
var DPCLaim = artifacts.require("./DPClaim.sol");

module.exports = function(deployer) {
  deployer.deploy(OracleI);
  deployer.link(OracleI, DPCLaim);
};

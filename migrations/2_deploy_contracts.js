var RainbowToken = artifacts.require("./RainbowToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(RainbowToken, "RainbowToken", "BOW");
};

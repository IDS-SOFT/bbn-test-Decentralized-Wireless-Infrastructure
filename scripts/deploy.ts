// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.



const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const WirelessInfrastructure = await hre.ethers.getContractFactory("WirelessInfrastructure");
  const wirelessInfrastructure = await WirelessInfrastructure.deploy("abc",123);

  await wirelessInfrastructure.deployed();

  console.log("WirelessInfrastructure contract deployed to:", wirelessInfrastructure.address);

  // Store the contract addresses for later use
  const addresses = {
    wirelessInfrastructure: wirelessInfrastructure.address,
  };

  // Store the contract addresses in a JSON file for easy access
  const fs = require("fs");
  fs.writeFileSync("deployedAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("Contract addresses written to deployedAddresses.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
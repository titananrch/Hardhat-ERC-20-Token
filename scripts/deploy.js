import hre from "hardhat";
import TitanCoreModule from "../ignition/modules/TitanCoreModule.js";

async function main() {
  const connection = await hre.network.connect();

  console.log("Deploying TitanCore with Ignition...");

  const { titanCore } = await connection.ignition.deploy(TitanCoreModule);

  console.log("TitanCore deployed at:", await titanCore.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
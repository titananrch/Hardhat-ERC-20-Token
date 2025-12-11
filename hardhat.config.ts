import { defineConfig } from "hardhat/config";
import * as dotenv from "dotenv";
import HardhatIgnitionEthersPlugin from "@nomicfoundation/hardhat-ignition-ethers";

dotenv.config();

const ALCHEMY_SEPOLIA_URL = process.env.ALCHEMY_SEPOLIA_URL || "";
const PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY || "";

export default defineConfig({
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    sepolia: {
      type: "http",
      url: ALCHEMY_SEPOLIA_URL,
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [],
    },
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  plugins: [HardhatIgnitionEthersPlugin],
});

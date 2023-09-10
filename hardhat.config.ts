import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";
require('dotenv').config();
configDotenv

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY]
    },
  }
};

export default config;
// 0xDA47A7Df69774c7E767271c43066F0fbdf21B00C
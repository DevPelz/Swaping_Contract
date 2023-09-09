import { ethers } from "hardhat";

async function main() {
  const lockedAmount = ethers.parseEther("0.001");

  const TokenA = await ethers.deployContract("TokenA", []);

  await TokenA.waitForDeployment();

  console.log(
`Token deployed to ${TokenA.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

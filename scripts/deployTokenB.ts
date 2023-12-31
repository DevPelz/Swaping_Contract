import { ethers } from "hardhat";

async function main() {
  const lockedAmount = ethers.parseEther("0.001");

  const TokenB = await ethers.deployContract("TokenB", []);

  await TokenB.waitForDeployment();

  console.log(
`Token deployed to ${TokenB.target}`
  );
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

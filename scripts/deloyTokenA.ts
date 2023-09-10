import { ethers } from "hardhat";

async function main() {
  const lockedAmount = ethers.parseEther("0.001");

  const TokenA = await ethers.deployContract("TokenA", []);

  await TokenA.waitForDeployment();

  console.log(
`Token deployed to ${TokenA.target}`
  );
}
0x5FbDB2315678afecb367f032d93F642f64180aa3
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

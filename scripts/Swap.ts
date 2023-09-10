import { ethers } from "hardhat";

async function main() {
//   const lockedAmount = ethers.parseEther("0.001");
const tokenA = "0xDA47A7Df69774c7E767271c43066F0fbdf21B00C";
const owner1 = "0x764693DD666E8dD9275CDE8F05C6B07446B1d941";
const tokenB = "0x209Fe51e2fa3Ad43fE5723760DEfC70843c86b28";
const owner2 = "0xa7CE10aef4171Ecf82E77Ddf8fb148f25B73DCEA"


  const Swap = await ethers.deployContract("Swap", [tokenA, owner1, tokenB, owner2]);
  await Swap.waitForDeployment();

  console.log(
`Token deployed to ${Swap.target}`
  );
  
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// tokenA = 0xDA47A7Df69774c7E767271c43066F0fbdf21B00C
// tokenB = 0x209Fe51e2fa3Ad43fE5723760DEfC70843c86b28
import { ethers } from "hardhat";

async function main() {
//   const lockedAmount = ethers.parseEther("0.001");
const tokenA = "0xDA47A7Df69774c7E767271c43066F0fbdf21B00C";
const owner1 = "0x764693DD666E8dD9275CDE8F05C6B07446B1d941";
const tokenB = "0x209Fe51e2fa3Ad43fE5723760DEfC70843c86b28";
const owner2 = "0xa7CE10aef4171Ecf82E77Ddf8fb148f25B73DCEA";


//   const Swap = await ethers.deployContract("Swap", [tokenA, owner1, tokenB, owner2]);
//   await Swap.waitForDeployment();

//   console.log(
// `Token deployed to ${Swap.target}`
//   );

  const tokenAContract = await ethers.getContractAt("IERC", "0xDA47A7Df69774c7E767271c43066F0fbdf21B00C")
  const tokenBContract = await ethers.getContractAt("IERC", "0x209Fe51e2fa3Ad43fE5723760DEfC70843c86b28")
  
  const SwapContract = await ethers.getContractAt("ISwap", "0x9323784139698935D2ac35d16E7dcA345E2eE1fC")
  const approveAmt = 1000;
  const owner1Sign = await ethers.getImpersonatedSigner(owner1);
  const owner2Sign = await ethers.getImpersonatedSigner(owner2);
  await tokenAContract.connect(owner1Sign).approve(SwapContract, ethers.parseUnits(String(approveAmt), 0))
  await tokenBContract.connect(owner2Sign).approve(SwapContract, ethers.parseUnits(String(approveAmt), 0))

  console.log(await tokenAContract.allowance(owner1, SwapContract));
//   const owner1Sign = await ethers.getImpersonatedSigner(owner1);
//@ts-ignore
   await network.provider.send('hardhat_setBalance', [
    owner1,
    '0xF3F20BA9435527E000',
  ])

  //@ts-ignore
     await network.provider.send('hardhat_setBalance', [
    owner2,
    '0xF3F20BA9435527E000',
  ])
  

  console.log("balance of owner1 tokenB before swap" +  " " + await tokenBContract.balanceOf("0x764693DD666E8dD9275CDE8F05C6B07446B1d941"));
  console.log("balance of owner2 tokenA before swap" +  " " + await tokenAContract.balanceOf("0xa7CE10aef4171Ecf82E77Ddf8fb148f25B73DCEA"));
  console.log("===========================================================");
    const swaptokenA = ethers.parseUnits(String(200), 0)
    const swaptokenB = ethers.parseUnits(String(400), 0)

    await SwapContract.connect(owner1Sign).swap(swaptokenA, swaptokenB);
    console.log("swapping...")
    console.log("===========================================================");

    console.log("balance of owner1 tokenB after swap" + " " + await tokenBContract.balanceOf("0x764693DD666E8dD9275CDE8F05C6B07446B1d941"));
    console.log("balance of owner2 tokenA after swap" + " " + await tokenAContract.balanceOf("0xa7CE10aef4171Ecf82E77Ddf8fb148f25B73DCEA"));
    console.log("===========================================================");
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// tokenA = 0xDA47A7Df69774c7E767271c43066F0fbdf21B00C
// tokenB = 0x209Fe51e2fa3Ad43fE5723760DEfC70843c86b28
// swap = 0x9323784139698935D2ac35d16E7dcA345E2eE1fC
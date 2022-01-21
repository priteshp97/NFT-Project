const { ethers } = require("hardhat");

const CONTRACT_NAME = "UndeadPastelClub";

const deploy = async () => {
  const Contract = await ethers.getContractFactory(CONTRACT_NAME);
  return await Contract.deploy("UndeadPastelClub", "UPC", "hi");
};

async function main() {
  const myAddress = (await ethers.getSigner()).address;
  console.log("My Address:", myAddress);

  const contract = await deploy();
  console.log("Contract address:", contract.address);

  // receipt = await contract.setBaseURI(
  //   "ipfs://QmfRgqVC8ZJ9g3RP6CyAdzkXYmZBKUAaZQFZFQFmJ5J3na/"
  // );
  // await receipt.wait();
  // console.log("base done");

  receipt = await contract.mint(2, {
    value: ethers.utils.parseEther("0.02"),
  });
  await receipt.wait();
  console.log("Gas:", receipt.gasLimit);

  // receipt = await contract.addAddressToWhitelist(myAddress);
  // await receipt.wait();
  // console.log("Tx addToWhitelistReceipt hash:", receipt.hash);

  // receipt = await contract.startSale();
  // await receipt.wait();
  // console.log("Tx startSale hash:", receipt.hash);

  // receipt = await contract.mint(4, { value: ethers.utils.parseEther("0.32") });
  // await receipt.wait();
  // console.log("Tx mint hash:", receipt.gasLimit.toString());

  // Check the balance, should be 1
  // const balance = await contract.balanceOf(myAddress);
  // console.log(`Balance:`, balance.toString());
}

main();

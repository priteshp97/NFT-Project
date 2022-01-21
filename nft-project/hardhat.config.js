/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    kovan: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

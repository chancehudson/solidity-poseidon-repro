require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./build/artifacts",
  },
  networks: {
    hardhat: {
      blockGasLimit: 12000000,
    },
    local: {
      url: "http://localhost:8545",
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/hfFfXlX8rR8YvrALiJ8b7ZtIPRGY1GTM",
      accounts: [
        "2094f6bcbe5f1262264e4effb04cd0ec4b5925cb3366fd829d6f4aefbfff1e7d",
      ],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          optimizer: { enabled: true, runs: 2 ** 32 - 1 },
        },
      },
    ],
  },
};

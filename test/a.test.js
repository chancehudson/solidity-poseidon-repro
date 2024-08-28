const { ethers } = require("hardhat");

describe("asfas", () => {
  it("should execute", async () => {
    const poseidonFactory = await ethers.getContractFactory("PoseidonT3");
    const PoseidonT3 = await poseidonFactory.deploy();
    await PoseidonT3.deployed();
    const testFactory = await ethers.getContractFactory("Test", {
      libraries: {
        PoseidonT3: PoseidonT3.address,
      },
    });
    const Test = await testFactory.deploy();
    await Test.deployed();
    console.log(Test.address);

    await Test.test();
  });
});

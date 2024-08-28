const { ethers } = require("hardhat");

describe("asfas", () => {
  it("should execute", async () => {
    const testFactory = await ethers.getContractFactory("Test", {});
    const Test = await testFactory.deploy();
    await Test.deployed();
    console.log(Test.address);

    await Test.test();
  });
});

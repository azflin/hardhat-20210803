const { expect } = require("chai");

describe("Greeter", function () {
  it("Should add correctly", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    let tx = await greeter.add(1);
    // tx.wait();

    expect(await greeter.x()).to.equal(43);
  });
});

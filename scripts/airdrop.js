import hre from "hardhat";

async function main() {
  const tokenAddress = "0xD76d73e736Ce41668E3147E8c2541EA869e10FeF";
  const contractName = "TitanCore";

  const recipients = [
    "0xf94dab5be345e3ed1d17f802eddbf85f10b2cd61",
    "0xc911c8da48df6ef50440d3ca5e29a64d8f38d29b"
  ];

  const connection = await hre.network.connect();

  const amount = connection.ethers.parseUnits("100", 18);

  const token = await connection.ethers.getContractAt(contractName, tokenAddress);

  console.log(`\nStarting airdrop of 100 tokens each from: ${tokenAddress}\n`);

  for (const recipient of recipients) {
    console.log(`Sending 100 TITC to ${recipient}...`);

    const tx = await token.transfer(recipient, amount);
    await tx.wait();

    console.log(`✅ Sent to ${recipient}`);
  }

  console.log("\n🎉 Airdrop complete!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

# 💳 TitanCore ERC-20 Token

A minimal ERC-20 token project built during the Alchemy University course.
<br>This repo includes:
- An OpenZeppelin-based ERC-20 token (TitanCore.sol)
- Hardhat v3 configuration using Alchemy Sepolia RPC
- Deployment using **Hardhat Ignition**
- A custom **airdrop script** to send tokens programmatically

## 🚀 Tech Stack
- Hardhat v3 (Ignition deployment engine)
- Alchemy (Sepolia RPC)
- OpenZeppelin Contracts
- Node.js + dotenv
- Sepolia Testnet

## 📦 Installation
```
git clone https://github.com/titananrch/Hardhat-ERC-20-Token.git
cd Hardhat-ERC-20-Token
npm install
```
## 🔐 Environment Setup

Create a **.env** file in the project root:
```
ALCHEMY_SEPOLIA_URL=your_alchemy_rpc_url_here
PRIVATE_KEY=your_sepolia_wallet_private_key
```

>⚠️ Never share your private key with anyone or commit it to Git.

## 📁 Project Structure
```
contracts/
  TitanCore.sol
scripts/
  deploy.js        ← Ignition-based deployment
  airdrop.js       ← Script to send tokens to multiple wallets
ignition/
  modules/
    TitanCoreModule.js
hardhat.config.ts
```
## 📝 ERC-20 Contract

TitanCore.sol is a simple ERC-20 token based on OpenZeppelin:
- **Name:** [TitanCore](https://sepolia.etherscan.io/address/0xD76d73e736Ce41668E3147E8c2541EA869e10FeF)
- **Symbol:** TITC
- **Initial Supply:** 300 TITC (with 18 decimals)
- **Address:** 0xD76d73e736Ce41668E3147E8c2541EA869e10FeF

## 🚚 Deployment (Sepolia)

Deploy your token using Hardhat:
```
npx hardhat run scripts/deploy.js --network sepolia
```

After deployment, you can view your token contract on:

>🔗 https://sepolia.etherscan.io/

## 🎁 Airdrop Script (Send Tokens Programmatically)

This project includes an airdrop script that uses Hardhat Ignition to send tokens to multiple addresses:
```
npx hardhat run scripts/airdrop.js --network sepolia
```

The script:
- Connects to your deployed TitanCore contract
- Sends **100 TITC** to each recipient wallet
- Prints transaction status to the console

## 🦊 Add Your Token to MetaMask

1. Open MetaMask → Select **Sepolia**
2. Click Import Tokens
3. Paste your contract address (from deployment)
4. TitanCore (TITC) will appear in your wallet

You can now send TITC to any address manually.

## 📚 Based On Alchemy University Course

This project follows the Alchemy guide:

- Setting up Hardhat
- Creating an ERC-20 token with OpenZeppelin
- Deploying on the Sepolia testnet
- Writing a script to send tokens

## 🎉 What's Next?
- Expand the token (minting, burning, pausing)
- Verify the contract on Etherscan
- Build a frontend to display balances
- Deploy additional scripts using Ignition

import { ethers } from "ethers";

// chain id
// Ethereum: 1
// Polygon: 137
// Optimism: 10
const getProvider = function (chainId) {
    let rpcEndPoint = "";
    if (chainId == 137) {
        rpcEndPoint = "https://polygon-mainnet.infura.io/v3/0b82cfff3bb949d8beec6e329fe14d7c";
    } else if (chainId == 10) {
        rpcEndPoint = "https://optimism-mainnet.infura.io/v3/0b82cfff3bb949d8beec6e329fe14d7c";
    }

    return ethers.getDefaultProvider(rpcEndPoint, {
        infura: {
            projectId: process.env.VUE_APP_INFURA_PROJECT_ID,
            projectSecret: process.env.VUE_APP_INFURA_SECRET,
        },
    })
}

// 取得最新區塊數
export const getBlockNumber = function (chainId) {
    const provider = getProvider(chainId);
    return new Promise((resolve, reject) => {
        resolve(provider.getBlockNumber());
    })
}

// 查詢區塊內容
export const getBlock = function (chainId, blockNumber) {
    const provider = getProvider(chainId);
    return new Promise((resolve, reject) => {
        resolve(provider.getBlock(blockNumber));
    })
}

// 查詢交易
export const getTransaction = function (chainId, txHash) {
    const provider = getProvider(chainId);
    return new Promise((resolve, reject) => {
        resolve(provider.getTransaction(txHash));
    })
}
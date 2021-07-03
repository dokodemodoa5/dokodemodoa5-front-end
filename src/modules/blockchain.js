import axios from "axios";
import { ethers } from "ethers";

const covalent_url = "https://api.covalenthq.com";
// chainId
// ethereum: 1
// bsc: 56

export const getTransaction = function (chainId, transactionHash) {
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/${chainId}/transaction_v2/${transactionHash}/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result)
        })
    })
}

export const getChainStatus = function (chainId) {
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/chains/status/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result.data.data.items.find(element => element.chainId == chainId))
        })
    })
}

export const getABlock = function (chainId, height) {
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/${chainId}/block_v2/${height}/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result)
        })
    })
}

export const getRecentBlocks = function (chainId) {
    let start = new Date();
    let end = new Date(start - 0.01 * 3600 * 1000); // 10 min
    console.log(start, end);
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/${chainId}/block_v2/${end.toISOString()}/latest/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result)
        })
    })
}

const getProvider = function () {
    let rpcEndPoint = "https://mainnet.infura.io/v3/0b82cfff3bb949d8beec6e329fe14d7c";
    return ethers.getDefaultProvider(rpcEndPoint, {
        infura: {
            projectId: process.env.VUE_APP_INFURA_PROJECT_ID,
            projectSecret: process.env.VUE_APP_INFURA_SECRET,
        },
    })
}

export const ethereum = {
    // 取得最新區塊數
    getBlockNumber: function () {
        const provider = getProvider();
        return new Promise((resolve, reject) => {
            resolve(provider.getBlockNumber());
        })
    },

    // 查詢區塊內容
    getBlock: function (blockNumber) {
        const provider = getProvider();
        return new Promise((resolve, reject) => {
            resolve(provider.getBlock(blockNumber));
        })
    },

    // 查詢交易
    getTransaction: function (txHash) {
        const provider = getProvider();
        return new Promise((resolve, reject) => {
            resolve(provider.getTransaction(txHash));
        })
    }
}
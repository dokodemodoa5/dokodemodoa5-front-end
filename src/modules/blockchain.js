import axios from "axios";

const covalent_url = "https://api.covalenthq.com";
// chain_id
// ethereum: 1
// bsc: 56

export const getTransaction = function (chain_id, transactionHash) {
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/${chain_id}/transaction_v2/${transactionHash}/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result)
        })
    })
}

export const getChainStatus = function (chain_id) {
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/chains/status/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result.data.data.items.find(element => element.chain_id == chain_id))
        })
    })
}

export const getRecentBlocks = function (chain_id) {
    let start = new Date();
    let end = new Date(start - 0.1 * 3600 * 1000); // 10 min
    console.log(start, end);
    return new Promise((resolve, reject) => {
        axios.get(
            `${covalent_url}/v1/${chain_id}/block_v2/${end.toISOString()}/${start.toISOString()}/?key=${process.env.VUE_APP_COVALENT_KEY}`
        ).then((result) => {
            resolve(result)
        })
    })
}
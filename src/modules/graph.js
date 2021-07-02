import axios from "axios";

export const umbrella = {
    getAssetPairPriceData: function () {
        var data = JSON.stringify({
            query: `{
                prices(first: 20) {
                    id
                    assetPair {
                        id
                    }
                    timestamp
                    price
                }
            }`,
            variables: {}
        });

        var config = {
            method: "post",
            url: "https://api.thegraph.com/subgraphs/name/cfengliu/umbrella",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then(function (response) {
                    resolve(response.data.data.prices);
                })
                .catch(function (error) {
                    console.log(error);
                    reject([])
                });
        });
    },
    getLogMintsData: function () {
        var data = JSON.stringify({
            query: `{
                logMints(first: 20) {
                    id
                    minter
                    blockId
                    staked
                }
            }`,
            variables: {}
        });

        var config = {
            method: "post",
            url: "https://api.thegraph.com/subgraphs/name/cfengliu/umbrella",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then(function (response) {
                    resolve(response.data.data.logMints);
                })
                .catch(function (error) {
                    console.log(error);
                    reject([])
                });
        });
    }
}

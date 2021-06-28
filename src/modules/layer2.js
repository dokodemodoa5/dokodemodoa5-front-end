import axios from "axios";

export const getMaticData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
            validators(first: 10){
            id
            owner
            totalStaked
          }
        }`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/maticnetwork/mainnet-root-subgraphs",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.validators);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}
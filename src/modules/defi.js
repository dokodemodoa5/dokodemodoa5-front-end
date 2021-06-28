import axios from "axios";

export const getUniSwapData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
tokens(first: 10) {
  id
  symbol
  name
  totalValueLocked
}
}`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-testing",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.tokens);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}

export const getUmaData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
tokens(first: 10){
    id
    address
    name
    symbol
  }
}`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/umaprotocol/uma",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.tokens);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}

export const getCompoundData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
markets(first: 10){
    id
    borrowRate
    exchangeRate
    name
    supplyRate
    symbol
    totalBorrows
    totalSupply
  }
}`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.markets);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}


export const getNexusData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
            projectRewards(first: 10) {
              id
              rewardAmount
              timestamp
            }
            userRewards(first: 10) {
              id
              rewardAmount
              timestamp
            }
          }
          `,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/nexusmutual/nexus-mutual",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(
                    {
                        projectRewards: response.data.data.projectRewards,
                        userRewards: response.data.data.userRewards
                    }
                );
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}

export const get88MphData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
            mphs(first: 5){
            id
            totalHistoricalReward
            rewardPerSecond
            rewardPerMPHPerSecond
          }
        }`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/bacon-labs/eighty-eight-mph",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.mphs);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}

export const getLiquityData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
            global(id: "only") {
              numberOfOpenTroves
              numberOfActiveLQTYStakes
              totalLQTYTokensStaked
              totalBorrowingFeesPaid
              totalRedemptionFeesPaid
              currentSystemState {
                totalCollateral
                totalDebt
                totalCollateralRatio
                tokensInStabilityPool
              }
            }
            tokens(first: 5){
              id
              name
              symbol
              totalSupply
              balances{
                balance
              }
              allowances{
                value
              }
            }
          }`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/liquity/liquity",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(
                    {
                        global: response.data.data.global,
                        tokens: response.data.data.tokens
                    });
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}

export const getAkropolisData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
            users(first: 10) {
              id
              lBalance
              pBalance
              pInterestSum
            }
          }`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/in19farkt/akropolis-os-mainnet",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.users);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}

export const getIdleFinanceData = function () {
    const vm = this;
    var data = JSON.stringify({
        query: `{
            tokens(first:10){
            id
            name
            decimals
            lastPrice
            totalSupply
          }
        }`,
        variables: {}
    });

    var config = {
        method: "post",
        url: "https://api.thegraph.com/subgraphs/name/idle-finance/idle",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response.data.data.tokens);
            })
            .catch(function (error) {
                console.log(error);
                reject([])
            });
    });
}
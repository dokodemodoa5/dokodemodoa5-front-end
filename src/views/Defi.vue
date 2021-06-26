<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="cryptocurrencies"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-btn @click="getUNIData">get uniswap</v-btn>
    <v-data-table
      :headers="headers_uniswap"
      :items="content_uniswap"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Defi",
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "center",
          value: "name"
        },
        {
          text: "Price",
          align: "center",
          value: "price"
        }
      ],
      cryptocurrencies: [
        { name: "UNI", price: 0 },
        { name: "BTC", price: 0 },
        { name: "ETH", price: 0 }
      ],
      headers_uniswap: [
        {
          text: "Name",
          align: "center",
          value: "name"
        },
        {
          text: "Symbol",
          align: "center",
          value: "symbol"
        },
        {
          text: "TVL",
          align: "center",
          value: "totalValueLocked"
        }
      ],
      content_uniswap: []
    };
  },
  mounted() {
    let symbols = "";
    this.cryptocurrencies.forEach((element) => {
      symbols += `${element.name},`;
    });
    const vm = this;
    axios
      .get(
        `http://localhost:8080/api/v1/cryptocurrency/quotes/latest?symbol=${symbols}`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"
          }
        }
      )
      .then((response) => {
        vm.cryptocurrencies.forEach((element) => {
          element.price = response.data.data[element.name].quote.USD.price;
        });
      });
  },
  methods: {
    getUNIData() {
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

      axios(config)
        .then(function (response) {
          vm.content_uniswap = response.data.data.tokens;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>
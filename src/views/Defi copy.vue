<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="cryptocurrencies"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-btn @click="getUniSwapData">get UNISWAP</v-btn>
    <v-btn @click="getUmaData">get UMA</v-btn>
    <v-btn @click="getCompoundData">get COMPOUND</v-btn>
    <v-btn @click="getNexusData">get Nexus Mutual</v-btn>
    <v-btn @click="get88MphData">get 88MPH</v-btn>
    <v-btn @click="getLiquityData">get Liquity</v-btn>
    <v-btn @click="getAkropolisData">get Akropolis</v-btn>
    <v-btn @click="getIdleFinanceData">get Idle Finance</v-btn>

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
import { getPrices } from "../modules/price";
import * as defi from "../modules/defi";
export default {
  name: "Defi",
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "center",
          value: "name",
        },
        {
          text: "Price",
          align: "center",
          value: "price",
        },
      ],
      cryptocurrencies: [
        { name: "BTC", price: 0 },
        { name: "ETH", price: 0 },
        { name: "RARI", price: 0 },
        { name: "MATIC", price: 0 },
        { name: "UNI", price: 0 },
        { name: "AAVE", price: 0 },
        { name: "1INCH", price: 0 },
        { name: "UMA", price: 0 },
        { name: "COMP", price: 0 },
        { name: "NXM", price: 0 },
        { name: "MPH", price: 0 },
        { name: "LQTY", price: 0 },
        { name: "AKRO", price: 0 },
        { name: "IDLE", price: 0 },
      ],
      headers_uniswap: [
        {
          text: "Name",
          align: "center",
          value: "name",
        },
        {
          text: "Symbol",
          align: "center",
          value: "symbol",
        },
        {
          text: "TVL",
          align: "center",
          value: "totalValueLocked",
        },
      ],
      content_uniswap: [],
    };
  },
  mounted() {
    Promise.resolve(getPrices(this.cryptocurrencies)).then((result) => {
      console.log(result);
    });
  },
  methods: {
    getUniSwapData() {
      Promise.resolve(defi.getUniSwapData()).then((result) => {
        console.log(result);
      });
    },
    getUmaData() {
      Promise.resolve(defi.getUmaData()).then((result) => {
        console.log(result);
      });
    },
    getCompoundData() {
      Promise.resolve(defi.getCompoundData()).then((result) => {
        console.log(result);
      });
    },
    getNexusData() {
      Promise.resolve(defi.getNexusData()).then((result) => {
        console.log(result);
      });
    },
    get88MphData() {
      Promise.resolve(defi.get88MphData()).then((result) => {
        console.log(result);
      });
    },
    getLiquityData() {
      Promise.resolve(defi.getLiquityData()).then((result) => {
        console.log(result);
      });
    },
    getAkropolisData() {
      Promise.resolve(defi.getAkropolisData()).then((result) => {
        console.log(result);
      });
    },
    getIdleFinanceData() {
      Promise.resolve(defi.getIdleFinanceData()).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
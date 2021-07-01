<template>
  <div>
    <toolbar />

    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <div v-if="content != null">
          <br />

          <v-row align="center" justify="center" style="text-align: start">
            <v-col cols="10" md="12">
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getUniSwapData"
                >UNISWAP</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getUmaData"
                >UMA</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getCompoundData"
                >COMPOUND</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getNexusData"
                >Nexus Mutual</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="get88MphData"
                >88MPH</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getLiquityData"
                >Liquity</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getAkropolisData"
                >Akropolis</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getIdleFinanceData"
                >Idle Finance</v-btn
              >
            </v-col>
          </v-row>

          <br />

          <v-row align="center" justify="center" style="text-align: center">
            <v-col cols="10" md="12">
              <v-text-field
                v-model="search_item"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
              ></v-text-field>

              <br />
            </v-col>
            <v-col cols="10" md="12">
              <v-data-table
                width="100%"
                :search="search_item"
                :headers="headers"
                :items="content"
                style="border: 1px solid #de699e"
              >
              </v-data-table>
            </v-col>
          </v-row>
        </div>
        <div v-else><br /><br />{{ "尚無資料...." }}</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import toolbar from "../components/toolbar";
import * as defi from "../modules/defi";
export default {
  name: "Defi",
  components: {
    toolbar,
  },
  data() {
    return {
      //
      search_item: "",

      headers: [],
      content: [],
    };
  },
  methods: {
    getUniSwapData() {
      Promise.resolve(defi.getUniSwapData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
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
        ];
        this.content = result;
      });
    },
    getUmaData() {
      Promise.resolve(defi.getUmaData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
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
        ];
        this.content = result;
      });
    },
    getCompoundData() {
      Promise.resolve(defi.getCompoundData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
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
            text: "TotalBorrows",
            align: "center",
            value: "totalBorrows",
          },
          {
            text: "TotalSupply",
            align: "center",
            value: "totalSupply",
          },
        ];
        this.content = result;
      });
    },
    getNexusData() {
      Promise.resolve(defi.getNexusData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
          {
            text: "RewardAmount",
            align: "center",
            value: "rewardAmount",
          },
          {
            text: "Timestamp",
            align: "center",
            value: "timestamp",
          },
        ];
        this.content = result.projectRewards;
      });
    },
    get88MphData() {
      Promise.resolve(defi.get88MphData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
          {
            text: "RewardPerMPHPerSecond",
            align: "center",
            value: "rewardPerMPHPerSecond",
          },
          {
            text: "RewardPerSecond",
            align: "center",
            value: "rewardPerSecond",
          },
          {
            text: "TotalHistoricalReward",
            align: "center",
            value: "totalHistoricalReward",
          },
        ];
        this.content = result;
      });
    },
    getLiquityData() {
      Promise.resolve(defi.getLiquityData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
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
            text: "TotalSupply",
            align: "center",
            value: "totalSupply",
          },
        ];
        this.content = result.tokens;
      });
    },
    getAkropolisData() {
      Promise.resolve(defi.getAkropolisData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
          {
            text: "LBalance",
            align: "center",
            value: "lBalance",
          },
          {
            text: "PBalance",
            align: "center",
            value: "pBalance",
          },
          {
            text: "PInterestSum",
            align: "center",
            value: "pInterestSum",
          },
        ];
        this.content = result;
      });
    },
    getIdleFinanceData() {
      Promise.resolve(defi.getIdleFinanceData()).then((result) => {
        console.log(result);

        // load data
        this.headers = [
          {
            text: "Name",
            align: "center",
            value: "name",
          },
          {
            text: "LastPrice",
            align: "center",
            value: "lastPrice",
          },
          {
            text: "TotalSupply",
            align: "center",
            value: "totalSupply",
          },
          {
            text: "Decimals",
            align: "center",
            value: "decimals",
          },
        ];
        this.content = result;
      });
    },
  },
  created: function () {
    this.getUniSwapData();
  },
};
</script>
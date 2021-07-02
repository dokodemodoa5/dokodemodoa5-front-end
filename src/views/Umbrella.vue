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
                @click="getAssetPairPriceData"
                >Asset Pair Price</v-btn
              >
              &ensp;
              <v-btn
                style="margin-bottom: 8px"
                color="#de699e"
                dark
                @click="getLogMintsData"
                >Mint Logs</v-btn
              >
            </v-col>
          </v-row>

          <br />

          <v-row align="center" justify="center" style="text-align: center">
            <v-col cols="10" md="12">
              <v-data-table
                width="100%"
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
import * as graph from "../modules/graph";
export default {
  name: "Umbrella",
  components: {
    toolbar
  },
  data() {
    return {
      headers: [],
      content: []
    };
  },
  methods: {
    getAssetPairPriceData() {
      Promise.resolve(graph.umbrella.getAssetPairPriceData()).then((result) => {
        this.headers = [
          {
            text: "Id",
            align: "center",
            value: "id"
          },
          {
            text: "AssetPair",
            align: "center",
            value: "assetPair.id"
          },
          {
            text: "Price",
            align: "center",
            value: "price"
          },
          {
            text: "TimeStamp",
            align: "center",
            value: "timestamp"
          }
        ];
        this.content = result;
      });
    },
    getLogMintsData() {
      Promise.resolve(graph.umbrella.getLogMintsData()).then((result) => {
        this.headers = [
          {
            text: "Id",
            align: "center",
            value: "id"
          },
          {
            text: "Minter",
            align: "center",
            value: "minter"
          },
          {
            text: "BlockId",
            align: "center",
            value: "blockId"
          },
          {
            text: "Staked",
            align: "center",
            value: "staked"
          }
        ];
        this.content = result;
      });
    }
  },
  created() {
    this.getAssetPairPriceData();
  }
};
</script>
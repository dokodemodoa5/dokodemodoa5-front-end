<template>
  <div>
    <toolbar />

    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <div v-if="uniswap != null">
          <br />

          <v-text-field
            v-model="search_item"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            outlined
            dark
          ></v-text-field>

          <br />

          <v-data-table
            dark
            :search="search_item"
            :headers="headers"
            :items="uniswap"
            style="width: 80vw; border: 1px solid #de699e"
          >
            <!-- <template v-slot:item.name="{ item }">
              <a></a>
            </template> -->
          </v-data-table>
        </div>
        <div v-else><br /><br />{{ "尚無資料...." }}</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import toolbar from "../components/toolbar";

export default {
  name: "Home",

  components: {
    toolbar,
  },

  data: () => ({
    //
    search_item: "",
    // table
    headers: [
      { text: "Name", value: "name", align: "left", width: "33%" },
      { text: "Symbol", value: "symbol", align: "left", width: "33%" },
      { text: "TLV", value: "TVL", align: "left", width: "34%" },
    ],
    items: null,

    // blockchain: [
    //   { name: "UNI", price: 16.17688326284973 },
    //   { name: "BTC", price: 33338.84623435097 },
    //   { name: "ETH", price: 1856.478730412263 },
    // ],

    uniswap: [
      { name: "TopBidder", symbol: "BID", TVL: 45.690660599764812617 },
      { name: "Chi Gastoken by 1inch", symbol: "CHI", TVL: 425 },
      { name: "TrueUSD", symbol: "TUSD", TVL: 59919.545973943827483158 },
      { name: "Tokenlon", symbol: "LON", TVL: 0.00245384400000001 },
      { name: "Merkle Network Token", symbol: "MERKLE", TVL: 0 },
    ],
  }),
};
</script>

<style scoped>
.div_card {
  background-color: #de699e;
  height: 120px;
  width: 320px;
  border-radius: 10px;
  border: 1px solid black;

  color: white;
}

.div_card:hover {
  background-color: white;
  height: 120px;
  width: 320px;
  border-radius: 10px;
  border: 1px solid #de699e;

  color: #de699e;
}
</style>



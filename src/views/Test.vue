<template>
  <div>
    <toolbar />

    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <v-col cols="10">
          <p style="font-size: 2em">Explore Blockchains</p>

          <!-- blockchain -->
          <v-row
            align="center"
            justify="center"
            style="text-align: start"
            :key="i"
            v-for="i in Math.ceil(blockchain.length / 3)"
          >
            <v-col cols="12" md="4" :key="k" v-for="k in 3">
              <a>
                <div
                  class="div_card"
                  v-if="i * 3 - (3 - k) - 1 < blockchain.length"
                >
                  <v-container fill-height>
                    <v-row
                      justify="center"
                      align="center"
                      style="text-align: center"
                    >
                      <span>
                        {{ blockchain[k - 1 + (i - 1) * 3].name }}
                        <br />
                        Price:
                        {{ blockchain[k - 1 + (i - 1) * 3].price.toFixed(5) }}
                      </span>
                    </v-row>
                  </v-container>
                </div>
              </a>
            </v-col>
          </v-row>

          <br />

          <p style="font-size: 2em">
            Explore <span style="color: rgb(255, 0, 122)">UNISWAP </span>
          </p>

          <!-- uniswap -->
          <v-row
            align="center"
            justify="center"
            style="text-align: start"
            :key="i"
            v-for="i in Math.ceil(uniswap.length / 3)"
          >
            <v-col cols="12" md="4" :key="k" v-for="k in 3">
              <a>
                <div
                  class="div_card"
                  v-if="i * 3 - (3 - k) - 1 < uniswap.length"
                >
                  <v-container fill-height>
                    <v-row
                      justify="center"
                      align="center"
                      style="text-align: center"
                    >
                      <span>
                        {{ uniswap[k - 1 + (i - 1) * 3].name }}
                        <br />
                        Symbol: {{ uniswap[k - 1 + (i - 1) * 3].symbol }}
                        <br />
                        TVL: {{ uniswap[k - 1 + (i - 1) * 3].TVL.toFixed(5) }}
                      </span>
                    </v-row>
                  </v-container>
                </div>
              </a>
            </v-col>
          </v-row>
        </v-col>
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
    blockchain: [
      { name: "UNI", price: 16.17688326284973 },
      { name: "BTC", price: 33338.84623435097 },
      { name: "ETH", price: 1856.478730412263 },
    ],

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



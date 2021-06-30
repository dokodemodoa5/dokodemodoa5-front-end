<template>
  <div>
    <toolbar />
    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <div v-if="content != null">
          <br />
          <v-row align="center" justify="center" style="text-align: start">
            <v-col cols="12">
              <v-slide-group show-arrows style="width: 100%">
                <v-btn-toggle mandatory>
                  <v-btn
                    v-if="ethereumStatus != null"
                    class="div_card"
                    style="height: 120px"
                    @click="getEthereumData"
                  >
                    <span>
                      Ethereum
                      <br />
                      Height: {{ this.ethereumStatus.synced_block_height }}
                      <br />
                      Signed_At:
                      {{ this.ethereumStatus.synced_blocked_signed_at }}
                    </span>
                  </v-btn>
                  <v-btn
                    v-if="binanceStatus != null"
                    :value="2"
                    class="div_card"
                    style="height: 120px"
                    @click="getBinanceData"
                  >
                    <span>
                      Binance Smart Chain (BSC)
                      <br />
                      Height: {{ this.binanceStatus.synced_block_height }}
                      <br />
                      Signed_At:
                      {{ this.binanceStatus.synced_blocked_signed_at }}
                    </span>
                  </v-btn>
                </v-btn-toggle>
              </v-slide-group>
            </v-col>
          </v-row>

          <br />

          <v-row align="center" justify="center" style="text-align: start">
            <v-col cols="8">
              <v-text-field
                v-model="search_item"
                append-icon="mdi-magnify"
                label="Search transactions..."
                single-line
                hide-details
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-select
                :items="items"
                v-model="item"
                outlined
                hide-details="auto"
              ></v-select>
            </v-col>
            <v-col cols="2">
              <v-btn width="100%" text plain @click="submit"> Search </v-btn>
            </v-col>
          </v-row>

          <br />

          <v-data-table
            :headers="headers"
            :items="content"
            style="width: 80vw; border: 1px solid #de699e"
          >
          </v-data-table>
        </div>
        <div v-else><br /><br />{{ "尚無資料...." }}</div>
      </v-row>
    </v-container>

    <!-- dialog -->
    <v-dialog max-width="90vw" v-model="dialog" content-class="vdialognew">
      <div max-width="90vw" style="height: 80vh; background: white">
        <v-container fluid v-if="detail_item != null">
          <v-row>
            <v-col cols="12">
              <span style="font-size: 1.5em">Transaction Details</span>
            </v-col>

            <!-- tx_hash -->
            <v-col cols="5"> Transaction Hash </v-col>
            <v-col cols="7">
              {{ detail_item.tx_hash }}
            </v-col>

            <!-- block_height -->
            <v-col cols="5"> Block </v-col>
            <v-col cols="7">
              {{ detail_item.block_height }}
            </v-col>

            <!-- successful -->
            <v-col cols="5"> Status </v-col>
            <v-col cols="7">
              <v-icon v-if="detail_item.successful == true" style="color: teal"
                >mdi-check-circle
              </v-icon>
              <v-icon v-else style="color: red">mdi-close </v-icon>
            </v-col>

            <!-- block_signed_at -->
            <v-col cols="5"> Timestamp </v-col>
            <v-col cols="7">
              {{ detail_item.block_signed_at }}
            </v-col>

            <!-- value -->
            <v-col cols="5"> Value </v-col>
            <v-col cols="7">
              {{ (detail_item.value * 0.000000000000000001).toFixed(3) }} ETH
            </v-col>

            <!-- from_address -->
            <v-col cols="5"> From </v-col>
            <v-col cols="7">
              {{ detail_item.from_address }}
            </v-col>

            <!-- to_address -->
            <v-col cols="5"> To </v-col>
            <v-col cols="7">
              {{ detail_item.to_address }}
            </v-col>

            <!-- gas_price -->
            <v-col cols="5"> Gas Price </v-col>
            <v-col cols="7">
              {{ detail_item.gas_price * 0.000000001 }} Gwei
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import toolbar from "../components/toolbar";
import * as blockchain from "../modules/blockchain";
import * as layer2 from "../modules/layer2";
export default {
  name: "Defi",
  components: {
    toolbar,
  },
  data() {
    return {
      ethereumStatus: null,
      binanceStatus: null,

      // search
      search_item: null,
      items: ["Ethereum", "BSC"],
      item: "Ethereum",

      headers: [
        {
          text: "Height",
          align: "center",
          value: "height",
          width: "50%",
        },
        {
          text: "Signed_At",
          align: "center",
          value: "signed_at",
          width: "50%",
        },
      ],
      content: [],

      // dialog
      dialog: false,
      detail_item: null,
    };
  },
  methods: {
    getEthereumStatus() {
      Promise.resolve(blockchain.getChainStatus(1)).then((result) => {
        console.log(result);

        this.ethereumStatus = result;
      });
    },

    getBinanceStatus() {
      Promise.resolve(blockchain.getChainStatus(56)).then((result) => {
        console.log(result);

        this.binanceStatus = result;
      });
    },

    getEthereumData() {
      Promise.resolve(blockchain.getRecentBlocks(1)).then((result) => {
        console.log(result);

        this.content = result.data.data.items;
      });
    },

    getBinanceData() {
      Promise.resolve(blockchain.getRecentBlocks(56)).then((result) => {
        console.log(result);

        this.content = result.data.data.items;
      });
    },

    submit() {
      let chain_id = 1;

      if (this.item === "BSC") {
        chain_id = 56;
      }

      Promise.resolve(
        blockchain.getTransaction(chain_id, this.search_item)
      ).then((result) => {
        console.log(result);
        this.detail_item = result.data.data.items[0];
      });

      this.dialog = true;
    },
    test() {
      Promise.resolve(
        layer2.getTransaction(
          137,
          "0xbfa2d54005e7e22bc3c2017d2acbbee971cd7b16b01f48ef1f8992ac2792078f"
        )
      ).then((result) => {
        console.log(result);
      });
    },
    test2() {
      Promise.resolve(
        blockchain.ethereum.getTransaction(
          "0xf9fc36b52f73cae07c5399064b6c978998bdd62ec3d4f7c090ea7b82ec10e1b4"
        )
      ).then((result) => {
        console.log(result);
      });
    },
  },
  created: function () {
    this.getEthereumStatus();
    this.getBinanceStatus();

    this.getEthereumData();
  },
};
</script>

<style scoped>
.div_card {
  background-color: black;
  width: 40vw;
  border-radius: 10px;
  border: 1px solid white;

  color: gray;
}

.div_card:hover {
  border: 3px solid #de699e;
  color: #de699e;
}
</style>
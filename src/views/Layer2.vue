<template>
  <div>
    <toolbar />
    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <v-col cols="12">
          <span style="font-size: 1.3em"> The LAYER2 EXPLORER </span>
        </v-col>
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

        <v-col cols="12">
          <v-slide-group show-arrows style="width: 100%">
            <v-btn-toggle mandatory>
              <v-btn class="div_card" @click="getData(137)">
                <span> Polygon </span>
              </v-btn>
              <v-btn class="div_card" @click="getData(10)">
                <span> Optimism </span>
              </v-btn>
            </v-btn-toggle>
          </v-slide-group>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-card-text>Latest Blocks</v-card-text>
            <hr />
            <v-card-text v-for="(block_index, i) in block" :key="i">
              <v-row>
                <v-col cols="6">
                  <!-- <a> -->
                  {{ block_index.blocknum }}
                  <!-- </a -->
                  ><br />
                  {{
                    new Date(block_index.timestamp * 1000).toLocaleDateString()
                  }}

                  {{
                    new Date(block_index.timestamp * 1000).toLocaleTimeString()
                  }}
                </v-col>
                <v-col cols="6">
                  <!-- <a> -->
                  Miner
                  <!-- </a> -->
                  <br />
                  <!-- <a> -->
                  {{ block_index.transactions.length }} txns
                  <!-- </a> -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-card-text>Latest Transactions</v-card-text>
            <hr />
            <v-card-text v-for="i in transactions.length" :key="i">
              <v-row v-if="tran_detail.length > 0">
                <v-col cols="4">
                  <a @click="submit(transactions[i - 1])"
                    >{{ transactions[i - 1].substr(0, 20) }}...</a
                  >
                  <br />
                  {{ new Date(block[0].timestamp * 1000).toLocaleDateString() }}

                  {{ new Date(block[0].timestamp * 1000).toLocaleTimeString() }}
                </v-col>
                <v-col cols="8">
                  From
                  <a @click="submit(tran_detail[i - 1].from)"
                    >{{ tran_detail[i - 1].from.substr(0, 35) }}...</a
                  >
                  <br />
                  To
                  <a @click="submit(tran_detail[i - 1].to)"
                    >{{ tran_detail[i - 1].to.substr(0, 35) }}...</a
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
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
              {{ detail_item.hash }}
            </v-col>

            <!-- block_height -->
            <v-col cols="5"> Block </v-col>
            <v-col cols="7">
              {{ detail_item.blockNumber }}
            </v-col>

            <!-- Confirmations -->
            <v-col cols="5"> Confirmations </v-col>
            <v-col cols="7">
              {{ detail_item.confirmations }}
            </v-col>

            <!-- from_address -->
            <v-col cols="5"> From </v-col>
            <v-col cols="7">
              {{ detail_item.from }}
            </v-col>

            <!-- to_address -->
            <v-col cols="5"> To </v-col>
            <v-col cols="7">
              {{ detail_item.to }}
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import toolbar from "../components/toolbar";
import * as layer2 from "../modules/layer2";
export default {
  name: "Defi",
  components: {
    toolbar,
  },
  data() {
    return {
      // search
      search_item: null,
      items: ["Polygon", "Optimism"],
      item: "Polygon",

      chain: null,
      blocknum: null,
      block: [],
      transactions: [],
      tran_detail: [],

      polygon_num: null,
      polygon_block: [],
      polygon_tran: [],
      polygon_tran_detail: [],

      optimism_num: null,
      optimism_block: [],
      optimism_tran: [],
      optimism_tran_detail: [],

      // dialog
      dialog: false,
      detail_item: null,
    };
  },
  methods: {
    async getPolygon() {
      this.polygon_num = await layer2.getBlockNumber(137);

      let list = [];

      for (let i = 1; i <= 10; i++) {
        let result = await layer2.getBlock(137, this.polygon_num - i);
        result.blocknum = this.polygon_num - i;

        this.polygon_block.push(result);
        list = list.concat(result.transactions);
      }

      // tran
      this.polygon_tran = list.slice(0, 10);
      for (let j = 0; j < this.polygon_tran.length; j++) {
        let result = await layer2.getTransaction(137, this.polygon_tran[j]);

        this.polygon_tran_detail.push(result);
        console.log(result);
      }
      console.log(this.polygon_tran_detail);
    },

    async getOptimism() {
      this.optimism_num = await layer2.getBlockNumber(10);

      let list = [];

      for (let i = 1; i <= 10; i++) {
        let result = await layer2.getBlock(10, this.optimism_num - i);
        result.blocknum = this.optimism_num - i;

        this.optimism_block.push(result);
        list = list.concat(result.transactions);
      }

      // tran
      this.optimism_tran = list.slice(0, 10);
      for (let j = 0; j < this.optimism_tran.length; j++) {
        let result = await layer2.getTransaction(10, this.optimism_tran[j]);

        this.optimism_tran_detail.push(result);
        console.log(result);
      }
      console.log(this.optimism_tran_detail);
    },

    getData(child) {
      this.chain = child;

      if (child === 10) {
        this.blocknum = this.optimism_num;
        this.block = this.optimism_block;
        this.transactions = this.optimism_tran;
        this.tran_detail = this.optimism_tran_detail;
      } else {
        this.blocknum = this.polygon_num;
        this.block = this.polygon_block;
        this.transactions = this.polygon_tran;
        this.tran_detail = this.polygon_tran_detail;
      }

      console.log(this.transactions);
      console.log(this.tran_detail);
    },

    async submit(hash) {
      this.dialog = true;
      let result = await layer2.getTransaction(this.chain, hash);
      console.log(result);
      this.detail_item = result;
    },
  },
  created: async function () {
    await this.getPolygon();
    this.getOptimism();
    this.getData(137);
  },
};
</script>

<style scoped>
.div_card {
  border-radius: 10px;
  border: 1px solid black;

  color: gray;
}

.div_card:hover {
  border: 3px solid #de699e;
  color: #de699e;
}
</style>

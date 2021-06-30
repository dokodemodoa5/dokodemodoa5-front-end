<template>
  <div>
    <toolbar />
    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <v-col cols="12">
          <span style="font-size: 1.3em"> The Layer2 Explorer </span>
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
          <v-btn width="100%" text plain @click="search"> Search </v-btn>
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

        <v-col cols="6" v-if="block.length > 0">
          <v-card>
            <v-card-text>Latest Blocks</v-card-text>
            <hr />
            <v-card-text v-for="(block_index, i) in block" :key="i">
              <v-row>
                <v-col cols="6">
                  <a @click="getBlock(block_index.number)">
                    {{ block_index.number }}
                  </a>
                  <br />
                  {{
                    new Date(block_index.timestamp * 1000).toLocaleDateString()
                  }}

                  {{
                    new Date(block_index.timestamp * 1000).toLocaleTimeString()
                  }}
                </v-col>
                <v-col cols="6">
                  Miner
                  <br />
                  <a @click="getTrans(block_index.transactions)">
                    {{ block_index.transactions.length }} txns
                  </a>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="6"
          v-if="transactions.length > 0 && tran_detail.length > 0"
        >
          <v-card>
            <v-card-text>Latest Transactions</v-card-text>
            <hr />
            <v-card-text v-for="i in transactions.length" :key="i">
              <v-row>
                <v-col cols="4">
                  <a @click="getHash(transactions[i - 1])"
                    >{{ transactions[i - 1].substr(0, 20) }}...</a
                  >
                  <br />
                  {{ new Date(block[0].timestamp * 1000).toLocaleDateString() }}

                  {{ new Date(block[0].timestamp * 1000).toLocaleTimeString() }}
                </v-col>
                <v-col cols="8">
                  From
                  <a @click="getHash(tran_detail[i - 1].from)"
                    >{{ tran_detail[i - 1].from.substr(0, 35) }}...</a
                  >
                  <br />
                  To
                  <a @click="getHash(tran_detail[i - 1].to)"
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
      <div style="height: 80vh; background: white">
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

    <!-- dialog_block -->
    <v-dialog
      max-width="90vw"
      v-model="dialog_block"
      content-class="vdialognew"
    >
      <div style="height: 80vh; background: white">
        <v-container fluid v-if="detail_block != null">
          <v-row>
            <v-col cols="12">
              <span style="font-size: 1.5em">Block Details</span>
            </v-col>

            <!-- block_height -->
            <v-col cols="5"> Block </v-col>
            <v-col cols="7">
              {{ detail_block.number }}
            </v-col>

            <!-- tx_hash -->
            <v-col cols="5"> Transaction Hash </v-col>
            <v-col cols="7">
              {{ detail_block.hash }}
            </v-col>

            <!-- Difficulty -->
            <v-col cols="5"> Difficulty </v-col>
            <v-col cols="7">
              {{ detail_block.difficulty }}
            </v-col>

            <!-- Timestamp -->
            <v-col cols="5"> TimeStamp </v-col>
            <v-col cols="7">
              {{ new Date(detail_block.timestamp * 1000).toLocaleDateString() }}

              {{ new Date(detail_block.timestamp * 1000).toLocaleTimeString() }}
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-dialog>

    <!-- dialog of trans -->
    <v-dialog
      max-width="90vw"
      v-model="dialog_trans"
      content-class="vdialognew"
    >
      <div max-width="90vw" style="background: white">
        <v-container fluid v-if="detail_trans != null">
          <v-row>
            <v-col cols="12">
              <span style="font-size: 1.5em">Transactions</span>
              <br /><br />

              <a
                v-for="x in detail_trans.length"
                :key="x"
                @click="getHash(detail_trans[x - 1])"
              >
                <p>
                  {{ detail_trans[x - 1] }}
                </p>
              </a>
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

      // dialog
      dialog: false,
      detail_item: null,

      // dialog of trans
      dialog_trans: false,
      detail_trans: null,

      // dialog of block
      dialog_block: false,
      detail_block: null,
    };
  },
  methods: {
    async getData(chainId) {
      this.chain = chainId;
      this.blocknum = await layer2.getBlockNumber(chainId);

      let list = [];
      let caller = [];
      let caller2 = [];
      let vm = this;

      for (let i = 1; i <= 10; i++) {
        caller.push(layer2.getBlock(chainId, this.blocknum - i));
      }
      Promise.all(caller)
        .then((result) => {
          vm.block = Object.assign([], result);

          for (let j = 0; j < 10; j++) {
            list = list.concat(result[j].transactions);
          }
          vm.transactions = list.slice(0, 10);
        })
        .then(() => {
          // get transaction
          for (let k = 0; k < 10; k++) {
            caller2.push(layer2.getTransaction(chainId, vm.transactions[k]));
          }
          Promise.all(caller2).then((result) => {
            vm.tran_detail = Object.assign([], result);

            console.log(vm.block);
          });
        });
    },

    async search() {
      this.dialog = true;

      let id = 137;
      if (this.item === "Optimism") {
        id = 10;
      }
      let result = await layer2.getTransaction(id, this.search_item);
      console.log(result);
      this.detail_item = result;
    },

    async getBlock(block) {
      this.dialog_block = true;
      let result = await layer2.getBlock(this.chain, block);
      console.log(result);
      this.detail_block = result;
    },

    getTrans(items) {
      this.dialog_trans = true;
      this.detail_trans = items;
    },

    async getHash(hash) {
      this.dialog = true;
      let result = await layer2.getTransaction(this.chain, hash);
      console.log(result);
      this.detail_item = result;
    },
  },
  created: async function () {
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

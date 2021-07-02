<template>
  <div>
    <toolbar />
    <v-container fluid fill-height>
      <v-row align="center" justify="center" style="text-align: start">
        <v-col cols="12">
          <span style="font-size: 1.3em"> The Blockchain Explorer </span>
        </v-col>
        <v-col cols="12" md="8">
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
        <v-col cols="6" md="2">
          <v-select
            :items="items"
            v-model="item"
            outlined
            hide-details="auto"
          ></v-select>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn color="#de699e" width="100%" text plain @click="search">
            Search
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-slide-group show-arrows style="width: 100%">
            <v-btn-toggle mandatory color="#de699e">
              <v-btn plain class="div_card" @click="getData()">
                <span> Ethereum </span>
              </v-btn>
              <v-btn plain class="div_card" @click="gethook()">
                <span> BSC </span>
              </v-btn>
            </v-btn-toggle>
          </v-slide-group>
        </v-col>

        <v-col cols="6" md="3" v-if="hook != false">
          <v-img src="@/assets/hook.png"> </v-img>
        </v-col>

        <v-col cols="12" md="6" v-if="hook != true && block.length > 0">
          <v-card style="border: 1px solid #de699e">
            <v-card-text style="background: #de699e; color: white"
              >Latest Blocks</v-card-text
            >
            <hr />
            <v-card-text v-for="(block_index, i) in block" :key="i">
              <v-row>
                <v-col cols="6">
                  <a
                    style="color: #de699e"
                    @click="getBlock(block_index.number)"
                  >
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
                  <a style="color: #de699e" @click="getMiner(block_index.miner)"
                    >Miner</a
                  >
                  <br />
                  <a
                    style="color: #de699e"
                    @click="getTrans(block_index.transactions)"
                  >
                    {{ block_index.transactions.length }} txns
                  </a>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="6"
          v-if="
            hook != true && transactions.length > 0 && tran_detail.length > 0
          "
        >
          <v-card style="border: 1px solid #de699e">
            <v-card-text style="background: #de699e; color: white"
              >Latest Transactions</v-card-text
            >
            <hr />
            <v-card-text v-for="i in transactions.length" :key="i">
              <v-row>
                <v-col cols="4">
                  <a
                    style="color: #de699e"
                    @click="getHash(transactions[i - 1])"
                    >{{ transactions[i - 1].substr(0, 20) }}...</a
                  >
                  <br />
                  {{ new Date(block[0].timestamp * 1000).toLocaleDateString() }}

                  {{ new Date(block[0].timestamp * 1000).toLocaleTimeString() }}
                </v-col>
                <v-col cols="8">
                  From
                  <a
                    style="color: #de699e"
                    @click="getHash(tran_detail[i - 1].from)"
                    >{{ tran_detail[i - 1].from.substr(0, 35) }}...</a
                  >
                  <br />
                  To
                  <a
                    style="color: #de699e"
                    @click="getHash(tran_detail[i - 1].to)"
                    >{{ tran_detail[i - 1].to.substr(0, 35) }}...</a
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-overlay absolute :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </v-row>
    </v-container>

    <!-- dialog_search -->
    <v-dialog
      max-width="90vw"
      v-model="dialog_search"
      content-class="vdialognew"
    >
      <div style="height: 80vh; background: white">
        <v-container fluid v-if="detail_search != null">
          <v-row>
            <v-col cols="12">
              <span style="font-size: 1.5em">Transaction Details</span>
            </v-col>

            <!-- tx_hash -->
            <v-col cols="5"> Transaction Hash </v-col>
            <v-col cols="7">
              {{ detail_search.tx_hash }}
            </v-col>

            <!-- block_height -->
            <v-col cols="5"> Block </v-col>
            <v-col cols="7">
              {{ detail_search.block_height }}
            </v-col>

            <!-- successful -->
            <v-col cols="5"> Status </v-col>
            <v-col cols="7">
              <v-icon
                v-if="detail_search.successful == true"
                style="color: teal"
                >mdi-check-circle
              </v-icon>
              <v-icon v-else style="color: red">mdi-close </v-icon>
            </v-col>

            <!-- block_signed_at -->
            <v-col cols="5"> Timestamp </v-col>
            <v-col cols="7">
              {{ detail_search.block_signed_at }}
            </v-col>

            <!-- value -->
            <v-col cols="5"> Value </v-col>
            <v-col cols="7">
              {{ (detail_search.value * 0.000000000000000001).toFixed(3) }} ETH
            </v-col>

            <!-- from_address -->
            <v-col cols="5"> From </v-col>
            <v-col cols="7">
              {{ detail_search.from_address }}
            </v-col>

            <!-- to_address -->
            <v-col cols="5"> To </v-col>
            <v-col cols="7">
              {{ detail_search.to_address }}
            </v-col>

            <!-- gas_price -->
            <v-col cols="5"> Gas Price </v-col>
            <v-col cols="7">
              {{ detail_search.gas_price * 0.000000001 }} Gwei
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-dialog>

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
    <v-dialog v-model="dialog_block" content-class="vdialognew">
      <div style="background: white">
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

    <!-- dialog of miner -->
    <v-dialog
      max-width="90vw"
      v-model="dialog_miner"
      content-class="vdialognew"
    >
      <div max-width="90vw" style="background: white">
        <v-container fluid v-if="detail_miner != null">
          <v-row>
            <v-col cols="12">
              <span style="font-size: 1.5em">Miner</span>
              <br /><br />

              {{ detail_miner }}
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
import * as blockchain from "../modules/blockchain";
export default {
  name: "Defi",
  components: {
    toolbar
  },
  data() {
    return {
      // bsc
      hook: false,

      // search
      search_item: null,
      items: ["Ethereum", "BSC"],
      item: "Ethereum",

      blocknum: null,
      block: [],
      transactions: [],
      tran_detail: [],

      // dialog_search
      dialog_search: false,
      detail_search: null,

      // dialog
      dialog: false,
      detail_item: null,

      // dialog of miner
      dialog_miner: false,
      detail_miner: null,

      // dialog of trans
      dialog_trans: false,
      detail_trans: null,

      // dialog of block
      dialog_block: false,
      detail_block: null,

      overlay: true
    };
  },
  methods: {
    async getData() {
      this.overlay = true;
      this.hook = false;
      this.blocknum = await blockchain.ethereum.getBlockNumber();

      let list = [];
      let caller = [];
      let caller2 = [];
      let vm = this;

      for (let i = 1; i <= 10; i++) {
        caller.push(blockchain.ethereum.getBlock(this.blocknum - i));
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
            caller2.push(
              blockchain.ethereum.getTransaction(vm.transactions[k])
            );
          }
          Promise.all(caller2).then((result) => {
            vm.tran_detail = Object.assign([], result);

            console.log(vm.block);
            vm.overlay = false;
          });
        });
    },

    async search() {
      this.overlay = true;
      this.dialog_search = true;

      let chain_id = 1;
      if (this.item === "BSC") {
        chain_id = 56;
      }

      console.log(chain_id);
      console.log(this.search_item);

      let result = await blockchain.getTransaction(chain_id, this.search_item);
      console.log(result);
      this.detail_search = result.data.data.items[0];
      this.overlay = false;
    },

    async getBlock(block) {
      this.overlay = true;
      this.dialog_block = true;
      let result = await blockchain.ethereum.getBlock(block);
      console.log(result);
      this.detail_block = result;
      this.overlay = false;
    },

    getMiner(item) {
      this.dialog_miner = true;
      this.detail_miner = item;
      console.log(this.detail_miner);
    },

    getTrans(items) {
      this.dialog_trans = true;
      this.detail_trans = items;
    },

    async getHash(hash) {
      this.overlay = true;
      this.dialog = true;
      let result = await blockchain.ethereum.getTransaction(hash);
      console.log(result);
      this.detail_item = result;
      this.overlay = false;
    },

    gethook() {
      this.hook = true;
    }
  },
  created: async function () {
    this.getData();
  }
};
</script>

<style scoped>
.div_card {
  width: 120px;
  border-radius: 10px;
  border: 1px solid black;
}

.div_card:hover {
  border: 3px solid #de699e;
}

.v-btn--active .v-btn__content {
  color: red;
}
</style>

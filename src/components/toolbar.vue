<template>
  <!-- <div style="background: #de699e; border-bottom: 1px solid black"> -->
  <div>
    <v-toolbar class="elevation-0" color="rgb(255,255,255,0)">
      <!-- <a @click="render('Home')">
        <v-img
          class="mx-2"
          src="@/assets/logo.png"
          max-height="150"
          max-width="150"
          contain
        ></v-img>
      </a> -->

      <v-row align="center" justify="center" style="text-align: center">
        <v-btn plain class="div_btn" depressed rounded @click="render('Home')">
          <!-- <span>Dokodemodoa</span> -->
          <v-img
            class="mx-2"
            src="@/assets/logo.png"
            max-height="150"
            max-width="150"
            contain
          ></v-img>
        </v-btn>

        &ensp;

        <v-btn plain text @click="render('Blockchain')">
          <span>Blockchain</span>
        </v-btn>
        |
        <v-btn plain text @click="render('Layer2')">
          <span>Layer2</span>
        </v-btn>
        |
        <v-btn plain text @click="render('Defi')">
          <span>Defi</span>
        </v-btn>
        |
        <v-btn plain text @click="render('Umbrella')">
          <span>Our Cool Subgraph 🥳</span>
        </v-btn>

        <!-- <v-btn plain text>
          <v-menu open-on-hover offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="#de699e" v-bind="attrs" v-on="on"
                >mdi-earth</v-icon
              >
            </template>
            <v-list style="text-align: center">
              <v-list-item-group>
                <v-list-item v-for="(lang_index, i) in lang" :key="i">
                  <v-list-item-content @click="render(lang_index.url)">
                    <v-list-item-title
                      v-text="lang_index.name"
                      class="btn_text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-btn> -->
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "toolbar",

  data: () => ({
    lang: [
      { name: "繁體中文", url: "" },
      { name: "English", url: "" }
    ]
  }),
  methods: {
    render(path_url) {
      console.log(path_url);
      this.$router.push({ name: path_url });
    }
  },
  created: function () {},
  computed: {},
  watch: {}
};
</script>


<style scoped>
.div_btn {
  background-color: white;
  height: 120px;
  width: 320px;
  border-radius: 10px;
  border: 1px solid white;

  color: white;
}

.div_btn:hover {
  background-color: white;
  height: 120px;
  width: 320px;
  border-radius: 10px;
  border: 1px solid #de699e;

  color: #de699e;
}
</style>

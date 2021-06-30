<template>
  <div>
    <toolbar />
    <v-parallax
      dark
      src="https://images.unsplash.com/photo-1510120845667-42d863b9568c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      style="height: 80vh"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">DOKODEMODOA</h1>
          <h4 class="subheading">All-in-One Blockchain Explorer</h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import toolbar from "../components/toolbar";

export default {
  name: "Home",
  components: {
    toolbar
  },
  data() {
    return {};
  },
  methods: {},
  created: function () {}
};
</script>
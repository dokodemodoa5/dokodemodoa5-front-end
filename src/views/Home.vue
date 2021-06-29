<template>
  <div>
    <toolbar />

    <v-container fluid fill-height> </v-container>
  </div>
</template>

<script>
import toolbar from "../components/toolbar";

export default {
  name: "Home",
  components: {
    toolbar,
  },
  data() {
    return {};
  },
  methods: {},
  created: function () {},
};
</script>
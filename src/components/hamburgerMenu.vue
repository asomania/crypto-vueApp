<template>
  <v-navigation-drawer v-model="eDrawer" temporary>
    <leftBar />
  </v-navigation-drawer>
</template>
<script>
import leftBar from "./leftBar.vue";
export default {
  components: {
    leftBar,
  },
  inject: ["$drawer"],

  computed: {
    eDrawer() {
      return this.$drawer();
    },
  },
};
</script>

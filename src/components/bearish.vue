<template>
  <v-card class="mx-auto" max-width="300">
    <v-list>
      <v-list-subheader>Bearish Crypto Coin</v-list-subheader>

      <v-list-item v-for="(coin, i) in newArray2" :key="i">
        <template v-slot:prepend>
          <v-img :src="coin.image" class="align-end" height="30px" width="30px">
          </v-img>
        </template>
        <template class="d-flex justify-space-between">
          <v-list-item-title v-text="coin.name"></v-list-item-title>
          <v-list-item-title
            v-text="coin.price_change_percentage_24h"
          ></v-list-item-title>
          <v-icon icon="mdi-chevron-triple-down"> </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  inject: ["$coinData"],
  computed: {
    coinDatax() {
      this.newArray = this.$coinData();
      return this.newArray;
    },
  },
  mounted() {
    setTimeout(() => {
      this.coinDatax.sort((a, b) => {
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
      });
      // just 5 element
      this.newArray2 = this.coinDatax.slice(0, 5);
    }, 1000);
  },
  data: () => ({
    newArray: [],
    newArray2: [],
  }),
};
</script>

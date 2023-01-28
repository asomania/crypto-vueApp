<template>
  <v-layout>
    <v-app-bar color=""><header /></v-app-bar>
    <v-navigation-drawer color=" " permanent><leftBar /></v-navigation-drawer>
    <v-main> <cards-coin /></v-main>
  </v-layout>
</template>

<script>
import cardsCoin from "./cardsCoin.vue";
import header from "./header.vue";
import leftBar from "./leftBar.vue";
//
export default {
  components: {
    cardsCoin,
    header,
    leftBar,
  },

  data() {
    return {
      coins: [],
      filteredCoins: [],
      titles: ["#", "Coin", "Price", "Price Chane", "24 Volume"],
      textSearch: "",
    };
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    );
    const data = await res.json();
    console.log(data);
    this.coins = data;
    this.filteredCoins = data;
  },
  methods: {},
  provide() {
    return {
      $coinData: () => this.coins,
    };
  },
};
</script>

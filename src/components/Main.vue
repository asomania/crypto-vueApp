<template>
  <v-layout>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon icon="mdi-hand-coin-outline"></v-app-bar-nav-icon>
        <v-app-bar-nav-icon
          @click.stop="change"
          :icon="icons[drawer ? 0 : 1]"
          class="d-flex d-lg-none d-xl-flex"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>CoinWallet</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-wallet-outline"></v-btn>
      </template>
    </v-app-bar>
    <hamburgerMenu />
    <v-navigation-drawer class="d-none d-lg-flex d-xl-none"
      ><leftBar
    /></v-navigation-drawer>
    <v-main> <cards-coin /></v-main>
  </v-layout>
</template>

<script>
import cardsCoin from "./cardsCoin.vue";
import header from "./header.vue";
import leftBar from "./leftBar.vue";
import hamburgerMenu from "./hamburgerMenu.vue";
//
export default {
  components: {
    cardsCoin,
    header,
    leftBar,
    hamburgerMenu,
  },

  data() {
    return {
      icons: ["mdi-close-thick", "mdi-menu"],
      drawer: false,
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
  methods: {
    change() {
      this.drawer = !this.drawer;
    },
  },
  provide() {
    return {
      $drawer: () => this.drawer,
      $coinData: () => this.coins,
    };
  },
};
</script>

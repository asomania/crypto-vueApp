<template>
  <v-container>
    <h1 class="d-flex justify-center align-center">Coins</h1>
    <br />
    <v-row>
      <v-col v-for="coin in coinData">
        <v-card
          height="160px"
          width="150px"
          class="d-flex justify-center align-center flex-column"
          :class="
            coin.price_change_percentage_24h > 0
              ? 'bg-success'
              : 'bg-red-lighten-1'
          "
        >
          <v-img
            :src="coin.image"
            class="align-end"
            height="100px"
            width="70px"
          >
          </v-img>
          <v-card-text>
            <h3 class="text-black font-weight-bold">{{ coin.name }}</h3>
            <p class="font-weight-bold d-flex">
              {{ coin.current_price }} <v-icon icon="mdi-currency-usd"></v-icon>
            </p>
            <p class="font-weight-bold d-flex">
              % {{ Math.round(coin.price_change_percentage_24h * 100) / 100 }}
              <v-icon
                :icon="
                  coin.price_change_percentage_24h > 0 ? icons[0] : icons[1]
                "
              ></v-icon>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  inject: ["$coinData"],
  data() {
    return {
      icons: ["mdi-trending-up", "mdi-trending-down"],
    };
  },
  computed: {
    coinData() {
      return this.$coinData();
    },
  },
  mounted() {
    // bullish de veriler yanlis siralaniyor
    setTimeout(() => {
      this.coinData.sort((a, b) => {
        return a.market_cap_rank - b.market_cap_rank;
      });
    }, 1000);
  },
};
</script>

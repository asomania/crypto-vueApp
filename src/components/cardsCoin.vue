<template>
  <v-container>
    <h1 class="d-flex justify-center align-center">Coins</h1>
    <br />
    <v-row>
      <v-col v-for="coin in coinData">
        <v-card
          height="200px"
          width="200px"
          class="d-flex justify-center align-center flex-column"
        >
          <v-img
            :src="coin.image"
            class="align-end"
            height="100px"
            width="70px"
          >
          </v-img>
          <v-card-text>
            <h3 class="text-primary">{{ coin.name }}</h3>
            <p>{{ coin.current_price }}</p>
            <p>{{ coin.price_change_percentage_24h }}</p>
            <p>{{ coin.total_volume }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  inject: ["$coinData"],
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
  watch: {
    coinData(oldValue, newValue) {
      console.log(oldValue, newValue);
    },
  },
};
</script>

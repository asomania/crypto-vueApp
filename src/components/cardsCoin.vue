<template>
  <v-container>
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
          <v-card-text class="text-black">
            <h3>{{ coin.name }}</h3>
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
};
</script>

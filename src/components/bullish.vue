<template>
  <v-card class="mx-auto" max-width="300">
    <v-list :items="items"> </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { type: "subheader", title: "Bullish Crypto Coin" },
      {
        title: "Item #1",
        value: 1,
        props: {
          appendIcon: "mdi-chevron-triple-up",
        },
      },
      {
        title: "Item #2",
        value: 2,
        props: {
          appendIcon: "mdi-chevron-double-up",
        },
      },
      {
        title: "Item #2",
        value: 3,
        props: {
          appendIcon: "mdi-chevron-double-up",
        },
      },
      {
        title: "Item #2",
        value: 4,
        props: {
          appendIcon: "mdi-chevron-double-up",
        },
      },
      {
        title: "Item #3",
        value: 5,
        props: {
          color: "blue",
          appendIcon: "mdi-chevron-up",
        },
      },
    ],
  }),
};
</script>

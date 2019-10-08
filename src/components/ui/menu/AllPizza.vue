<template>
  <!-- <v-layout align-space-around justify-start column fill-height>
    <OnePizza :pizza="pizza" xs3 d-flex :key="pizza.id.$oid" v-for="pizza in pizzaList"></OnePizza>
  </v-layout>-->
  <v-layout row>
    <v-flex>
      <v-list three-line subheader width="40%">
        <v-subheader class="font-weight-medium title" center inset>Піцца</v-subheader>
        <v-list-tile v-for="pizza in allPizzas" :key="pizza.id.$oid" avatar>
          <v-avatar
            :tile="false"
            :size="70"
            rotation="90"
            color="grey lighten-4"
            style="margin-right:20px"
            lazy-src
          >
            <img :src="getImgUrl(pizza)">
          </v-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="green--text">{{ pizza.name }}</v-list-tile-title>
            <v-list-tile-sub-title
              class="font-weight-thin caption"
              width="40%"
            >{{ pizza.ingredients.join(", ") }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">shopping_cart</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: "allpizza",
  props: ["allPizzas"],
  data() {
    return {
      pizzaPic: require("../../../assets/pizza_img/1D4C0F53-9703-46B4-8A38-65A2727193A8.jpeg")
    };
  },
  methods: {
    getImgUrl(pizza) {
      return require("../../../assets/pizza_img/" + pizza.image);
    }
  },
};
</script>

<style scoped>
</style>
<template>
  <!-- <v-layout align-space-around justify-start column fill-height>
    <OnePizza :pizza="pizza" xs3 d-flex :key="pizza.id.$oid" v-for="pizza in pizzaList"></OnePizza>
  </v-layout>-->
  <v-layout row>
    <v-flex>
      <v-list three-line subheader width="40%">
        <v-subheader class="font-weight-medium title" center inset>Піца</v-subheader>
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

          <div class="wrapper">
         
            <img 
              :src="getImgUrl(pizza)"
              class="pizza-size-small"
             />
            <v-list-tile-sub-title 
              class="font-weight-thin caption"
              width="20%">40&nbsp;cм
            </v-list-tile-sub-title>

            <img 
              :src="getImgUrl(pizza)"
              class="pizza-size-big"
             />
             <v-list-tile-sub-title 
              class="font-weight-thin caption nowrap"
              width="40%">55&nbsp;cм
            </v-list-tile-sub-title>
          </div>
         <!-- <v-list-tile-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">shopping_cart</v-icon>
            </v-btn>
          </v-list-tile-action> -->
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
.wrapper{
  display:flex;
  flex-direction: row;
  min-width: 27%;
  align-items: baseline;
  align-content: center;
  font-size: 12px;
  padding-left: 7px;
}
.pizza-size-small{
  max-width: 15px;
  padding-right:3px;
}
.pizza-size-big{
  max-width: 20px;
  padding-right:3px;
}
</style>
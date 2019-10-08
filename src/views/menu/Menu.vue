<template>
  <div style="height:100vh" flex inline class="menu" app>
    <Header/>
    <!-- <v-img
      app
      style="height:100vh"
      :src="require('../../assets/background_img/background_hor3.jpg')"
    />-->

    <v-container class="container" fluid>
      <transition name="slide-fade">
        <v-layout column hidden-sm-and-down>
          <v-flex>
            <div class="resultContainer">
              <v-layout align-center justify-space-around row fill-height>
                <div class="item"></div>

                <div class="item white">
                  <AllPizza :allPizzas="allPizzas"/>
                </div>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </transition>
      <v-layout column hidden-md-and-up style="margin-top:45%">
        <v-flex xs12>
          <div class="resultContainer">
            <v-layout align-center justify-space-between column fill-height>
              <div class="item1"></div>

              <div class="white">
                <AllPizza :allPizzas="allPizzas"/>
              </div>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Header from "../../components/ui/header/MainHeader";
import AllPizza from "../../components/ui/menu/AllPizza";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "menu",
  components: {
    Header,
    AllPizza
  },
  methods: { ...mapActions(["getPizzas"]) },
  computed: mapGetters(["allPizzas"]),
  async created() {
    this.getPizzas();
  }
  // async created() {
  //   this.pizzaList = await Queries.getPizzas();
  // }
};
</script>

<style scoped>
.about {
  background-image: url("../../assets/background_img/background_hor3.jpg");
  background-size: cover;
}

.container {
  padding: 0;
  margin-top: 67px;
}

.resultContainer {
  max-height: 91vh;
  overflow-y: auto;
}

.item {
  min-height: 100%;
  min-width: 50%;
  margin: 2px;
}

.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
</style>



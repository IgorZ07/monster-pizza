import Vue from 'vue'
import Vuex from 'vuex'
import pizzas from "./modules/pizzas"
import order from "./modules/order"



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pizzas,
    order
  }
})



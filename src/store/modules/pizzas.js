import axios from "axios"

const state = {
    pizzasList: []
};

const getters = {
    allPizzas: state => state.pizzasList
};

const actions = {
    async getPizzas({ commit }) {

        const response = await axios.get("http://localhost:8081/data/menu.json")
        commit("setPizzas", response.data)
    }
}

const mutations = { setPizzas: (state, pizzas) => (state.pizzasList = pizzas) };

export default {
    state,
    getters,
    actions,
    mutations
}


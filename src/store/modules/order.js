

const state = {
    pizzaOrder: []
};


const getters = {

};

const actions = {
    addPizza(context) {
        context.commit('addOrder')
    },
    removePizza(context) {
        context.commit('deleteOrder')
    }

}

const mutations = {
    addOrder: function (state, id) {
        console.log("Adding order working!")

        state.pizzaOrder = state.pizzaOrder.push(id)
    },
    deleteOrder: function (state, id) {
        console.log("Delete order working!")

        let index = state.pizzaOrder.numberOf(id)
        state.pizzaOrder.splice(index, 1)
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}


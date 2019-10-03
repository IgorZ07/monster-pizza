import axios from "axios"

/**
 * GetPizzas
 * 
 * This function return you the list of pizza
 * 
 * @return {Array}
 */
const getPizzas = async () => {
    const pizzas = [];
    const response = await axios.get("http://localhost:8080/data/menu.json")

    response.data.forEach(item => {
        pizzas.push(item)
    })
    return pizzas
}

// const addCoaches
// const updateCoache = async id 


export default { getPizzas: getPizzas }
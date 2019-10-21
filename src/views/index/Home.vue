<template>
    <div class="home">
      <Header />
      <div class="separator"></div>
      <div class="container-wrapper">
        
        <div class="about">
          <span>
            "Monster Pizza - це мережа піцерій в форматі "pizza to go". Наша мета - робити піцу швидко, якісно, та за доступною ціною. <br> Ми готуємо тонке тісто за класичним італійським рецептом на українському борошні вищого ґатунку. <br> Соус - наша гордість, адже ми використовуємо лише натуральні інгредієнти. <br> Класичний томатний, пікантний гірчичний, або ніжний барбекю - обирати Вам. <br> Смачного, та до зустрічі!
          </span>
        </div>
        <div class="body">
          <div class="cardSm" v-for="pizza in allPizzas" :key="pizza.id.$oid" >
              <div class="wrapper" >
              <img :src="getImgUrl(pizza)" class="image">
                <div class="details">
                  <div class="details-separator">
                    <p class="pizza-name">{{ pizza.name }}</p>
                    <div class="bottom">
                      <span class="ingredients">{{ pizza.ingredients.join(", ") }}</span>
                    </div>
                    </div>
                    <div class="offer-wrapper">
                      <div class="offer">
                        <img  :src="require('../../assets/svg/pizza.png')" alt="size 30 cm" :class="['img-small', pizza.add]">
                        <div class="weight">{{ pizza.weight30 }}</div>
                        <p class="price">{{ pizza.price30 }}</p>
                      </div>

                    <div class="offer">
                        <img :src="require('../../assets/svg/pizza.png')" alt="size 36 cm" 
                        :class="['img-big', pizza.add]">
                        <div class="weight">{{ pizza.weight36 }}</div>
                        <p :class="['price', pizza.add ? 'additional' : '']">{{ pizza.price36 }}</p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>
import Header from "../../components/ui/header/MainHeader";
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'home',
  components: {
    Header
  },
    methods: { 
    ...mapActions(["getPizzas"]),
    getImgUrl(pizza) {
      return require("../../assets/pizza_img/" + pizza.image);
    } },
  computed: 
  mapGetters(["allPizzas"]),
  async created() {
    this.getPizzas();
  },
  data() {
    return {
      pizzaPic: require("../../assets/pizza_img/1D4C0F53-9703-46B4-8A38-65A2727193A8.jpeg"),
//       allPizzas1: [
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000000"},
//         "name":"Маргарита",
//         "ingredients":["тісто","томатний соус","сир моцарела","помідори"],
//         "image":"001.png",
//         "weight30":"450 грам",
//         "weight36":"600 грам",
//         "price30":"49 грн",
//         "price36":"79 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000001"},
//         "name":"Monster pizza",
//         "ingredients":["тісто","гірчичний соус","сир моцарела","мисливські ковбаски","балик","гриби","огірки солоні"],
//         "image":"002.png",
//         "weight30":"520 грам",
//         "weight36":"690 грам",
//         "price30":"69 грн",
//         "price36":"99 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000002"},
//         "name":"М'ясна до пива",
//         "ingredients":["тісто","гірчичний соус","сир моцарела","салямі","курка","балик","мисливські ковбаски","цибуля"],
//         "image":"003.png",
//         "weight30":"550 грам",
//         "weight36":"750 грам",
//         "price30":"79 грн",
//         "price36":"109 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000007"},
//         "name":"Гавайська",
//         "ingredients":["тісто","томатний соус","сир моцарела","ананаси","помідори","курка"],
//         "image":"004.png",
//         "weight30":"520 грам",
//         "weight36":"680 грам",
//         "price30":"69 грн",
//         "price36":"99 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000003"},
//         "name":"Салямі",
//         "ingredients":["тісто","томатний соус","сир моцарела","салямі"],
//         "image":"005.png",
//         "weight30":"480 грам",
//         "weight36":"640 грам",
//         "price30":"69 грн",
//         "price36":"99 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000004"},
//         "name":"Шинка з грибами",
//         "ingredients":["тісто","соус барбекю","сир моцарела","балик","гриби"],
//         "image":"006.png",
//         "weight30":"490 грам",
//         "weight36":"650грам",
//         "price30":"69 грн",
//         "price36":"99 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000005"},
//         "name":"Курка з грибами",
//         "ingredients":["тісто","соус барбекю","сир моцарела","курка","гриби","помідори","маслини/перець чілі"],
//         "image":"007.png",
//         "weight30":"520 грам",
//         "weight36":"690 грам",
//         "price30":"69 грн",
//         "price36":"99 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000006"},
//         "name":"4 сири",
//         "ingredients":["тісто","гірчичний соус","сир моцарела","сир пармезан","сир лазур","сир гауда"],
//         "image":"008.png",
//         "weight30":"450 грам",
//         "weight36":"600 грам",
//         "price30":"79 грн",
//         "price36":"109 грн",
//         "pizzaLogo": "pizza.png"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000009"},
//         "name":"Гриби, помідори, ананаси, маслини, перець чілі, цибуля, огірки солоні",
//         "ingredients":[""],
//         "image":"add10.png",
//         "price36":"+ 10 грн",
//         "add": "add"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000010"},
//         "name":"Мисливські ковбаски, балик, салямі, курка",
//         "ingredients":[""],
//         "image":"add15.png",
//         "price36":"+ 15 грн",
//         "add":"add"
//     },
//     {
//         "id":{"$oid":"5cc7428afc13ae1899000011"},
//         "name":"Сир на вибір",
//         "ingredients":[""],
//         "image":"add20.png",
//         "price36":"+ 20 грн",
//         "add": "add"
//     }
// ]
    };
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  background-image: url("../../assets/background_img/background_hor8.jpg");
  background-size: cover;
}

@media screen and (min-width: 992px) {
  
  .container-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
    height:85vh;
    overflow-y: auto;
  }
  .separator{
    height:15vh;
    overflow-y: auto;
  }
  .about{
    display: flex;
    text-align: center;
    padding: 5%;
    font-size: 32px;
    width:67%;
  }
  .body{
    display: flex;
    flex-flow: row wrap;
    /* padding-top: 12%; */
    align-self:flex-end;
    justify-content: center;
  }
  .cardSm{
    display: flex;
    flex-flow: row wrap;
    margin:5px;
    background-color: rgb(233, 233, 233);
    box-shadow: -3px 4px 11px 1px rgba(0,0,0,0.57);
    width:22%;
  }
  .wrapper {
    display:flex;
    flex-direction:column;
     justify-content: space-between;
  }
  .image {
    width: 100%;
    min-height:auto;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    padding :10px;
  }
  .offer-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    align-items: flex-end;
    align-content: space-between;
    font-size: 18px;
    padding-top: 5%;
    
  }
  .offer{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .pizza-name{
    font-size: 25px;
    padding:0;
  }
  .price{
    font-size: 20px;
  }
  .weight{
    font-size: 16px;
  }
  .ingredients {
    font-size: 16px;
  }
  .bottom {
    margin-top: 14px;
    line-height: 18px;
  }
  .additional{
  font-size: 30px;
}
}

@media screen and (max-width: 992px) {
  .container-wrapper{
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    height:85vh;
    overflow-y: auto;
  }
  .separator{
    height:15vh;
    overflow-y: auto;
  }
  .about{
    display: flex;
    text-align: center;
    padding: 5%;
    font-size: 20px;
    width:67%;
  }
  .body{
    display: flex;
    flex-flow: row wrap;
    padding: 0 2%;
    justify-content: center;
  }
  .cardSm{
    display: flex;
    flex-flow: row wrap;
    margin: 5px;
    background-color: rgb(233, 233, 233);
    box-shadow: -3px 4px 11px 1px rgba(0,0,0,0.57);
    width:100%;
    min-height:110px;
  }
  .wrapper {
    display:flex;
    flex-direction: row;
    align-items: center;
    height:100%;
    width:100%;
    align-content: space-between;
  }
  .image {
    max-width: 20%;
  }
  .details {
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    align-items:center;
    width:100%;
  }
  .details-separator{
    width: 60%;
  }
  .offer-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    align-items: flex-end;
    align-content: space-between;
    font-size: 18px;
    width: 30%;
  }
  .offer{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .pizza-name{
    font-size: 20px;
    padding:0;
    margin:0;
  }
  .price{
    font-size: 14px;
    margin:0;
  }
  .weight{
    font-size: 12px;
  }
  .ingredients {
    font-size: 10px;
  }
  .bottom {
    margin-top: 5px;
    line-height: 18px;
  }
  .additional{
  font-size: 22px;
}
}

@media screen and (max-width: 600px) {
  .container-wrapper{
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    height:85vh;
    overflow-y: auto;
  }
  .separator{
    height:15vh;
    overflow-y: auto;
  }
  .about{
    display: flex;
    text-align: center;
    padding: 5%;
    font-size: 8px;
    width:67%;
  }
  .body{
    display: flex;
    flex-flow: row wrap;
    padding: 0 2%;
    justify-content: center;
    align-self:flex-end;
  }
  .cardSm{
    display: flex;
    flex-flow: row wrap;
    margin: 5px;
    background-color: rgb(233, 233, 233);
    box-shadow: -3px 4px 11px 1px rgba(0,0,0,0.57);
    width:100%;
  }
  .wrapper {
    display:flex;
    flex-direction: row;
    align-items: center;
    height:100%;
  }
  .image {
    max-width: 20%;
  }
  .details {
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    align-items:center;
    padding :5px;
    width:100%;
  }
  .offer-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    align-items: flex-end;
    align-content: space-between;
    font-size: 18px;
    width:50%;
  }
  .offer{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .pizza-name{
    font-size: 12px;
    padding:0;
  }
  .price{
    font-size: 8px;
    margin:0;
  }
  .weight{
    font-size: 8px;
  }
  .ingredients {
    font-size: 8px;
  }
  .bottom {
    margin-top: 5px;
    line-height: 10px;
  }
  .additional{
  font-size: 14px;
}
}


.ingredients {
  color: #999;
}

.additions-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:70%;
  background-color: white;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
.price-add-wrap{
  display: flex;
  flex-direction: row nowrap;
}

.price-add{
  font-size: 18px;
}
.img-small{
  width:15px;
  padding-bottom:5px;
}
.add{
   display: none; 
}
.img-big{
  width:23px;
  padding-bottom:5px;
}
.price{
  color:#0ACA04;
  font-weight: 700;
}
.cardSm{
  border-radius: 12px;
}
</style>

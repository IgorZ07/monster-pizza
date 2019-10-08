<template>
  <div style="height:100vh" class="home">
    <Header/>
    <div class="body">
      <span>
        "Monster Pizza - це мережа піцерій в форматі "pizza to go". Наша мета - робити піцу швидко, якісно, та за доступною ціною. <br> Ми готуємо тонке тісто за класичним італійським рецептом на українському борошні вищого ґатунку. <br> Соус - наша гордість, адже ми використовуємо лише натуральні інгредієнти. <br> Класичний томатний, пікантний гірчичний, або ніжний барбекю - обирати Вам. <br> Смачного, та до зустрічі!
      </span>
    </div>
  </div>
</template>

<script>
import Header from "../../components/ui/header/MainHeader";

export default {
  name: 'home',
  components: {
    Header
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("../../assets/background_img/background_hor3.jpg");
  background-size: cover;
}

.body{
  color: white;
  width:57%;
  align-self: center;
  background: linear-gradient(
      to top,
      rgba(104, 104, 104, 0.027) 70%,
      rgba(56, 56, 56, 0.712) 90%
    );
    font-size:32px;

    
}

@media screen and (max-width: 992px) {
  .body{
      font-size: 20px;
  }
}

@media screen and (max-width: 600px) {
  .body{
      font-size: 12px;
  }
}

</style>

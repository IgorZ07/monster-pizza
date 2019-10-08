<template>
  <v-toolbar color="rgba(225,225,225,0)" class="elevation-0 toolbar" dark fixed app>
    <img
      :src="require('../../../assets/monster_pizza_logo_transparent.png')"
      contain
      class="logo"
    />
    <span class="phone-number">095-541-31-91</span>
    <v-toolbar-title class="display-1"></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down links">
      <v-btn v-for="item in mainMenu" :key="item.icon" :to="item.link" flat large>
        {{
        item.title
        }}
      </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in mainMenu" :key="item.icon" :to="item.link">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

  
  </v-toolbar>
</template>


<script>
export default {
  name: "MainHeader",
  data() {
    return {
      mainMenu: [
        { icon: "home", title: "Monster pizza", link: "/" },
        { icon: "about", title: "Піцца", link: "/about" },
        { icon: "menu", title: "Меню", link: "/menu" },
        { icon: "contact", title: "Контакт", link: "/contact" }
      ]
    };
  },
};
</script>

<style  scoped>
.toolbar{
  font-size: 20px;
}
.logo {
  position: relative;
  height: 150px;
  top: 50px;
  left: -30px;
}
.phone-number {
  color:rgb(247, 240, 240);
  font-size: 28px;
  
}
  v-btn {
    font-size: 40px !important;
  }

@media screen and (max-width: 992px) {
  .phone-number {
      font-size: 20px;
  }
  .logo{
    top: 30px;
    height: 100px;
    left: -20px;
  }
  .links {
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) {
  .phone-number {
    min-width:50px;
    font-size: 12px;
  }
  .logo{
    top: 10px;
    height: 70px;
    left: -20px;
  }
}
</style>
<template>
  <v-toolbar color="rgba(225,225,225,0)" class="elevation-0 toolbar" light fixed >
    <img
      :src="require('../../../assets/mp_logo.png')"
      contain
      class="logo"
    />
    <div class="contacts-wrapper">
    <a class="phone-number" href="tel:0501343797">050-134-37-97  (Зигіна)</a>
    <a class="phone-number" href="tel:0955413191">095-541-31-91  (Поділ)</a>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down links">
      <v-btn class="title" v-for="item in mainMenu" :key="item.icon" :to="item.link" flat large>
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
            <v-list-tile-title class="title" >{{ item.title }}</v-list-tile-title>
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
        { icon: "contact", title: "Контакти", link: "/contact" }
      ]
    };
  }
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
.contacts-wrapper{
  padding-top: 2%;
  display:flex;
  flex-direction: column;
}
.phone-number {
  color:red;
  font-weight: 700;
  text-decoration: none;
}


@media screen and (min-width: 991px) {
.phone-number {
  font-size: 28px;
}
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
    font-size: 12px;
  }
  .logo{
    top: 10px;
    height: 70px;
    left: -20px;
  }
} 
</style>
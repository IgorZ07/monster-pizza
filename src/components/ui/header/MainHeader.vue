<template>
  <v-toolbar color="rgba(225,225,225,0)" class="elevation-0" dark fixed app>
    <v-img
      :src="require('../../../assets/monster_pizza_logo_transparent.png')"
      contain
      height="200"
      class="logo"
    ></v-img>
    <v-toolbar-title class="display-1"></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in mainMenu" :key="item.icon" :to="item.link" flat>
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

    <v-btn color="rgba(225,225,225,0)" class="elevation-0" icon>
      <v-badge overlap color="orange">
        <template v-slot:badge>
          <!-- <span v-if="$store.state.pizzaOrder.length>0">{{ $store.state.pizzaOrder.length }}</span> -->
          <span>7</span>
        </template>
        <v-icon medium color="light">shopping_cart</v-icon>
      </v-badge>
    </v-btn>
  </v-toolbar>
</template>


<script>
export default {
  name: "MainHeader",
  mixins: [],
  components: {},
  props: {},
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
  computed: {},
  methods: {},
  watch: {},
  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style  scoped>
.logo {
  position: relative;
  top: 70px;
  left: -70px;
}
</style>
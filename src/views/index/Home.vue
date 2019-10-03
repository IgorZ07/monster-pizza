<template>
  <div style="height:100vh" app>
    <Header/>
    <v-img
      app
      style="height:100vh"
      :src="require('../../assets/background_img/background_hor2.jpg')"
    />
  </div>
</template>

<script>
import Header from "../../components/ui/header/MainHeader";

export default {
  components: {
    Header
  }
};
</script>

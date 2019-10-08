<template>
  <div style="height:100vh" flex inline class="about" app>
    <Header/>
    <v-container class="container" fluid>
      <transition name="slide-fade">
        <v-layout column hidden-sm-and-down>
          <v-flex>
            <div class="resultContainer">
              <v-layout align-center justify-space-around row fill-height>
                <div class="item"></div>
                <div class="item white">
                  <v-flex>
                    <v-card>
                      <v-img :src="require('../../assets/contacts/map.png')"></v-img>

                      <v-img
                        :src="require('../../assets/contacts/building_sotnya.png')"
                        aspect-ratio="2.75"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">Монстр піцца Поділ</h3>
                          <div>Полтава, вул. Небесної Сотні, 100</div>
                          <div>Телефон: +380 95 541 3191</div>
                        </div>
                      </v-card-title>

                      <v-card-actions>
                        <v-btn flat color="orange">
                          <v-icon>phone</v-icon>Подзвонити
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                  <v-flex>
                    <v-card>
                      <v-img
                        :src="require('../../assets/contacts/building_zigina.jpg')"
                        aspect-ratio="2.75"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">Монстр піцца Зигіна</h3>
                          <div>Полтава, вул. Степана Халтуріна, 11</div>
                          <div>Телефон: +380 50 134 3797</div>
                        </div>
                      </v-card-title>

                      <v-card-actions>
                        <v-btn flat color="orange">
                          <v-icon>phone</v-icon>Подзвонити
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </div>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </transition>
    </v-container>
  </div>
</template>

<script>
import Header from "../../components/ui/header/MainHeader";

export default {
  name: "contact",
  components: {
    Header
  },
};
</script>

<style  scoped>
.about {
  background-image: url("../../assets/background_img/background_hor6.jpg");
  background-size: cover;
}

.container {
  padding: 0;
  margin-top: 67px;
}

.resultContainer {
  max-height: 91vh;
  overflow-y: auto;
}

.item {
  min-height: 100%;
  min-width: 50%;
  margin: 2px;
}

.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
</style>
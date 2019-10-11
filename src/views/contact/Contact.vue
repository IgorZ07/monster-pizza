<template>
  <div class="contact" style="height:100%">
    <Header/>
    <v-container fluid style="height:100%" class="d-flex align-center">
        <v-layout inline hidden-sm-and-down>
          <div class="d-flex flex-column" style="width:100%; padding-top:10%">
                <v-card style="width:30%" class="pa-2  align-content-center">
                <img  :src="require('../../assets/contacts/map.png')" class="align-self-center"
                style="height:100%;width:100%"/>
                </v-card>
                <v-card class="wrapper d-flex pa-2" style="width:30%">

                    <v-card class=" pa-2 flex-column" >
                      <v-img
                        :src="require('../../assets/contacts/building_sotnya.png')"
                        aspect-ratio="2.75"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">Монстр піца Поділ</h3>
                          <div>Полтава, вул. Небесної Сотні, 100</div>
                          <div>Телефон: +380 95 541 3191</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="green">
                          <v-icon>phone</v-icon>Подзвонити
                        </v-btn>
                      </v-card-actions>
                    </v-card>

                    <v-card class=" pa-2 flex-column">
                      <v-img
                        :src="require('../../assets/contacts/building_zigina.jpg')"
                        aspect-ratio="2.75"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">Монстр піца Зигіна</h3>
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
            
                </v-card>
         
          </div>
        </v-layout>

        <v-layout class="small" >
          <div class="" style="padding-top:20%; width:100%; max-height: 100%; overflow-y: auto; ">
                <v-card style="width:100%" class="pa-2  align-content-start">
                <img  :src="require('../../assets/contacts/map.png')" class="align-self-start"
                style="height:100%;width:100%"/>
                </v-card>

                <v-card class="wrapper  pa-2" >

                    <v-card class="pa-2 flex-column" >
                      <v-img
                        :src="require('../../assets/contacts/building_sotnya.png')"
                        aspect-ratio="2.75"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h4 class="overline mb-2">Монстр піца Поділ</h4>
                          <div class="body-1">Полтава, вул. Небесної Сотні, 100</div>
                          <div class="body-1">Телефон: +380 95 541 3191</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange">
                          <v-icon>phone</v-icon>Подзвонити
                        </v-btn>
                      </v-card-actions>
                    </v-card>

                    <v-card class=" pa-2 flex-column">
                      <v-img
                        :src="require('../../assets/contacts/building_zigina.jpg')"
                        aspect-ratio="2.75"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h4 class="subtitle-1 mb-0">Монстр піца Зигіна</h4>
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
            
                </v-card>
         
          </div>
        </v-layout>
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
.contact {
  background-image: url("../../assets/background_img/background_hor8.jpg");
  background-size: cover;
}

@media screen and (min-width: 960px) {
  .small{
    display:none;
  }
}
.small{
 
}

/* .container {
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
} */
/* 
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
} */
/* .slide-fade-enter, .slide-fade-leave-to
.slide-fade-leave-active below version 2.1.8 {
  transform: translateX(40px);
  opacity: 0;
} */

</style>
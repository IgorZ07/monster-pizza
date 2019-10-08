<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-list>
          <template>
            <v-list-tile-avatar>
              <img :src="pizza.image">
            </v-list-tile-avatar>
            <v-list-tile-title v-html="pizza.name"></v-list-tile-title>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: "onepizza",
  props: ["pizza"],
};
</script>

<style scoped>
</style>
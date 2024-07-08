<template>
  <v-app>
    <v-layout>
      <v-main>
        <v-container>
          <Avatar/>
          <hr>
          <Details/>
          <hr>
          <Preferences/>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import Avatar from './components/Extra01/Avatar.vue';
import Details from './components/Extra01/Details.vue';
import Preferences from './components/Extra01/Preferences.vue';
import {ref} from 'vue';

const name = ref('Jon Snow')
</script>

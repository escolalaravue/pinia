<template>
  <div>
    {{ me.name }} <br>
    <button @click="save">Save</button>
  </div>
</template>

<script setup>
import {useMeStore} from '../../store/me.js';
import {storeToRefs} from 'pinia';
const meStore = useMeStore()
const { me } = storeToRefs(meStore)


function save() {
  me.value.name = 'Novo nome da preferencia'
}
</script>

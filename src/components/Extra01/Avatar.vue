<template>
  <div>
    <button @click="meStore.getMe()">
      Get me
    </button>
    <br>
  </div>
</template>

<script setup>
import {useMeStore} from '../../store/me.js';

const meStore = useMeStore()

</script>

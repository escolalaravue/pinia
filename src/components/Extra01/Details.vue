<template>
  <div>
    <button @click="meStore.getMe()">
      Get details
    </button>
  </div>
</template>

<script setup>
import {useMeStore} from '../../store/me.js';

const meStore = useMeStore()
</script>

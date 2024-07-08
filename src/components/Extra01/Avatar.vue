<template>
  <div>
    {{ me.name }}
  </div>
</template>

<script setup>
import {useMeStore} from '../../store/me.js';
import {storeToRefs} from 'pinia';

const meStore = useMeStore()
const { me } = storeToRefs(meStore)


</script>

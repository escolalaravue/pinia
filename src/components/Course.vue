<template>
  <div>
    <h2>Curso de Pinia</h2>

    <Modules/>
  </div>
</template>
<script setup>
import Modules from './Modules.vue';
import {useCourseStore} from '../store/course.js';
import {storeToRefs} from 'pinia';

const courseStore = useCourseStore()
const {course} = storeToRefs(courseStore)
</script>

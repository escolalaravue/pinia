<template>
  <div>
    Aula 1 <br>
    <button @click="update">Update lessons</button>
    <pre>
      {{ course }}
    </pre>
  </div>
</template>

<script setup>
import {useCourseStore} from '../store/course.js';
import {storeToRefs} from 'pinia';

const courseStore = useCourseStore()
const {course} = storeToRefs(courseStore)

function update() {
  course.value.lessons_count = 10
}
</script>

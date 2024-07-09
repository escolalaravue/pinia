<template>
  <div>
    <h2>Curso de Pinia</h2>

    <Modules
      :course="course"
      @lessons-count="update"
    />
  </div>
</template>
<script setup>
import Modules from './Modules.vue';
import {ref} from 'vue';

const course = ref({
  name: 'Curso de Pinia',
  lessons_count: 20
})

function update(vl) {
  course.value.lessons_count = vl
}
</script>

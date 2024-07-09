<template>
  <div>
    <Aula
      :course="course"
      @lessons-count="update"
    />
    <Aula :course="course"/>
    <Aula :course="course"/>
    <Aula :course="course"/>
  </div>
</template>
<script setup>
import Aula from './Aula.vue';

const emit = defineEmits(['lessons-count'])
defineProps({
  course: Object
})

function update(vl) {
  emit('lessons-count', vl)
}
</script>

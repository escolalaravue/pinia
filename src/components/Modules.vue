<template>
  <div>
    <h4>Módulo 1</h4>
    <Aulas
      :course="course"
      @lessons-count="update"
    />
    <h4>Módulo 2</h4>
    <Aulas
      :course="course"
    />
    <h4>Módulo 3</h4>
    <Aulas
      :course="course"
    />
  </div>
</template>
<script setup>
import Aulas from './Aulas.vue';

const emit = defineEmits(['lessons-count'])
defineProps({
  course: Object
})

function update(vl) {
  emit('lessons-count', vl)
}
</script>

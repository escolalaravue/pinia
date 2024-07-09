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
const emit = defineEmits(['lessons-count'])
defineProps({
  course: Object
})

function update() {
  emit('lessons-count', 10)
}
</script>

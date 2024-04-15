import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    first_name: 'Jon',
    last_name: 'Snow'
  })

  function changeName(name) {
    user.value.first_name = name
  }

  // Getters
  const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

  return {
    user,
    changeName,
    fullName,
  }
})

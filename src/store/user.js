import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useUserStore = defineStore('user', () => {
  // State
  const firstName = ref('Jon')
  const lastName = ref('Snow')
  const age = ref(30)


  const user = ref({
    first_name: 'Jon',
    last_name: 'Snow'
  })

  // Actions
  function $reset() {
    firstName.value = 'Jon'
    lastName.value = 'Snow'
    age.value = 30
  }
  function changeName(name) {
    user.value.first_name = name
  }

  // Getters
  const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

  return {
    firstName,
    lastName,
    age,
    $reset,

    user,
    changeName,
    fullName,
  }
})

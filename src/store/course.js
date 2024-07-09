import {defineStore} from 'pinia';

export const useCourseStore = defineStore('course', {
  state: () => ({
    course: {
      name: 'Curso de Pinia',
      lessons_count: 20
    }
  }),
  actions: {},
  getters: {}
})

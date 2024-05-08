import {defineStore} from 'pinia';

export const useServiceOrderStore = defineStore('serviceOrder', {
  state: () => ({
    orderDetails: {
      number: 0,
      due_date: null,
      status: ''
    },
    client: {},
    services: [],
    description: '',
    discount_type: 'R$',
    discount_value: 0
  }),

  actions: {},

  getters: {}
})

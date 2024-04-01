import {defineStore} from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [
      {
        name: 'Iphone',
        amount: 10
      },
      {
        name: 'Macbook',
        amount: 100
      }
    ]
  }),
  actions: {},
  getters: {},
})

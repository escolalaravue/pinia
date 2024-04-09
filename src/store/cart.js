import {defineStore} from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    address: {},
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
  actions: {
    addProduct() {},
    removeProduct() {}
  },
  getters: {
    total: () => 110
  },
})

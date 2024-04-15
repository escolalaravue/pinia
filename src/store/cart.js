import {defineStore} from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    address: {},
    products: []
  }),
  actions: {
    addProduct(product) {
      // AJAX
      if (!this.products.some(o => o.id === product.id)) {
        this.products.push(product)
      }
    },
    removeProduct() {}
  },
  getters: {
    total: (state) => state.products.reduce((total, obj) => total += obj.amount, 0),

    getProductByName: (state) => {
      return (name) => state.products.find(o => o.name === name)
    }
  },
})

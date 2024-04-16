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

      return new Promise((resolve) => {
        return setTimeout(() => {
          resolve('OK')
        }, 2000)
      })
    },

    removeProduct(product) {
      // Primeira forma de remover
      // const idx = this.products.findIndex(o => o.id === product.id)
      // this.products.splice(idx, 1)

      // Segunda forma de remover
      this.products = this.products.filter(o => o.id !== product.id)
    }
  },
  getters: {
    total: (state) => state.products.reduce((total, obj) => total += obj.amount, 0),

    getProductByName: (state) => {
      return (name) => state.products.find(o => o.name === name)
    }
  },
})

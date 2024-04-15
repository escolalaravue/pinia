<template>
  <div>
    <h1>Curso de Pinia</h1>

    <h3>Carrinho</h3>

    <div class="cart">
      <div
          v-for="product in cartStore.products"
          :key="product.name"
          class="cart-item"
      >
        {{ product.name }} <br>
        R$ {{ product.amount }} <br>
        <button @click="removeFromCart(product)">Remover</button>
      </div>
    </div>

    <hr>

    <h3>Lista de produtos</h3>

    <div class="cart">
      <div
          v-for="product in products"
          :key="product.name"
          class="cart-item"
      >
        {{ product.name }} <br>
        R$ {{ product.amount }} <br>
        <button @click="addToCart(product)">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from './store/cart.js';
import {ref} from 'vue';

const cartStore = useCartStore();
const products = ref([
  {
    id: 1,
    name: 'Iphone',
    amount: 10
  },
  {
    id: 2,
    name: 'Macbook',
    amount: 100
  },
  {
    id: 3,
    name: 'Ipad',
    amount: 1000
  }
])

function addToCart(product) {
  cartStore.addProduct(product)
}

function removeFromCart(product) {
  cartStore.removeProduct(product)
}
</script>

<style>
.cart {
  display: flex;
  gap: 10px;
}
.cart-item {
  width: 100px;
  padding: 4px;
  background-color: #fefefe;
  border: 1px solid #1a1a1a;
}
.cart-item button {
  font-size: 12px;
  padding: 4px;
}
</style>

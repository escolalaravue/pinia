<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    <input type="text" v-model="userStore.user.first_name">
    <pre>
      {{ userStore.user }}
    </pre>
    <br><br>
    <h4>Cart store</h4>
    <pre>{{cartStore.products}}</pre>
  </div>
</template>

<script setup>
import {useUserStore} from './store/user.js';
import {useCartStore} from './store/cart.js';

const userStore = useUserStore();
const cartStore = useCartStore();

cartStore.products[0].name = 'Iphone 15'
cartStore.products.push({
  name: 'iMac',
  amount: 200
},)
</script>

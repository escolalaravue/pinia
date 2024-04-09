<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    <input type="text" v-model="userStore.firstName"> <br>
    <input type="text" v-model="userStore.lastName"> <br>
    {{ userStore.firstName }} <br>
    {{ userStore.lastName }} <br>
    {{ userStore.age }} <br>
    <button @click="userStore.$reset">Resetar store user</button>

    <br><br>
    <h4>Cart store</h4>
    <pre>{{cartStore.products}}</pre>
    <button @click="cartStore.$reset">Resetar store cart</button>
  </div>
</template>

<script setup>
import {useUserStore} from './store/user.js';
import {useCartStore} from './store/cart.js';
import {watch} from 'vue';

const userStore = useUserStore();
const cartStore = useCartStore();

watch(userStore, (vl) => {
  console.log(vl)
})

watch(() => userStore.firstName, (vl) => {
  console.log(vl)
})

userStore.$patch({
  firstName: 'Tiago',
  lastName: 'Matos',
})

cartStore.$patch((state) => {
  state.products.push({
    name: 'iMac',
    amount: 100
  })
})
</script>

<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    {{firstName}} <br>
    <input type="text" v-model="firstName"> <br>
    <input type="text" v-model="lastName"> <br>
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
import {storeToRefs} from 'pinia';

const userStore = useUserStore();
const {firstName, lastName} = storeToRefs(userStore)
const cartStore = useCartStore();
</script>

<template>
  <div>
    <h1>Curso de Pinia</h1>
    {{ userStore.fullName }} <br>
    <input
        v-model="userStore.user.first_name"
        type="text"
    >
    <br><br><br><br>
    <div>
      TOTAL: {{ cartStore.total }}
    </div>
    {{ cartStore.getProductByName('Macbook') }}
    <br>
    <button
        @click="changeIphoneValue(100)"
    >
      Alterar valor Iphone
    </button>
  </div>
</template>

<script setup>
import {useCartStore} from './store/cart.js';
import {useUserStore} from './store/user.js';

const userStore = useUserStore()
const cartStore = useCartStore();

function changeIphoneValue(vl) {
  cartStore.products[0].amount = vl
}
</script>

<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    <pre>
      {{userStore.user}}
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
</script>


<!--<script>-->
<!--import {useUserStore} from './store/user.js';-->
<!--import {useCartStore} from './store/cart.js';-->

<!--export default {-->
<!--  setup() {-->
<!--    const userStore = useUserStore();-->
<!--    const cartStore = useCartStore();-->

<!--    return {-->
<!--      userStore,-->
<!--      cartStore-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

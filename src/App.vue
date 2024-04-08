<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    <pre>
      {{ userStore }}
    </pre>
    <pre>
      {{ fullName }}
    </pre>
    <br><br>
    <h4>Cart store</h4>
    <pre>{{products}}</pre>
  </div>
</template>

<script>
import {mapState} from 'pinia';
import {useUserStore} from './store/user.js';
import {useCartStore} from './store/cart.js';

export default {
  computed: {
    ...mapState(useUserStore, {
      userStore: 'user',
      fullName: store => `${store.user.first_name} ${store.user.last_name}`,
    }),
    ...mapState(useCartStore, ['products'])
  }
}
</script>

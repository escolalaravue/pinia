<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    <input type="text" v-model="user.first_name">
    <pre>
      {{ user }}
    </pre>
    <button @click="changeFirstName('Test')">Change first name</button>
    <br><br>
    <h4>Cart store</h4>
    <pre>{{products}}</pre>
  </div>
</template>

<script>
import {mapState, mapWritableState} from 'pinia';
import {useUserStore} from './store/user.js';
import {useCartStore} from './store/cart.js';

export default {
  computed: {
    ...mapWritableState(useUserStore, ['user']),
    ...mapState(useCartStore, ['products'])
  },
  methods: {
    changeFirstName(name) {
      this.user.first_name = name
    }
  }
}
</script>

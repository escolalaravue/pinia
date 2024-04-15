<template>
  <div>
    <h1>Curso de Pinia</h1>
    <div>
      TOTAL: {{ total }}
    </div>
    {{ getProductByName('Macbook') }}
  </div>
</template>

<script>
import {useCartStore} from './store/cart.js';
import {mapState} from 'pinia';

export default {
  computed: {
    ...mapState(useCartStore, ['total', 'getProductByName'])
  },
}
</script>

<template>
  <div id="app">
    <Cart v-if="cartOpen" />
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cart from '@/components/Cart.vue'
export default {
  components: {
    Cart,
  },
  computed: {
    ...mapGetters({
      cartOpen: "cartOpen",
    }),
  }
}
</script>
<style lang="scss" src="@/assets/scss/Global.scss"></style>

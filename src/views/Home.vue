<template>
  <div class="home">
    <Header />
    <Merchant />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Merchant from '@/components/Merchant.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Merchant,
  }
}
</script>

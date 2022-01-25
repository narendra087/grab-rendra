<template>
  <div class="home">
    <Header />
    <Merchant />
    <ListFood />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Merchant from '@/components/Merchant.vue'
import ListFood from '@/components/ListFood.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Merchant,
    ListFood,
    Footer,
  }
}
</script>

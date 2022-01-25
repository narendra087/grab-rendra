<template>
  <div class="cart">
    <div class="cart__overlay"></div>
    <div class="cart__content">
      <div @click="toggleCart" class="cart__close">
        <img src="@/assets/images/icon-close-thin.svg" alt="">
      </div>
      <div class="cart__empty">
        <img src="@/assets/images/ilus-basket-empty.svg" alt="">
        <p class="cart__empty__title">Start Grabbing Food!</p>
        <p class="cart__empty__subtitle">Add items to your basket and place order here.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      toggleCart: 'toggleCart',
    }),
  },
}
</script>

<style lang="scss" scoped>
  .cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    &__overlay {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.25);
    }
    &__content {
      position: fixed;
      top: 0;
      right: 0;
      width: 40%;
      background: #FFF;
      height: 100%;
      padding: 20px;
      @media screen and (min-width: 320px) and (max-width: 991px) {
        width: 60%;
      }
      @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
      }
    }
    &__close {
      position: absolute;
      top: 20px;
      left: 20px;
      cursor: pointer;
    }
    &__empty {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
      }
      &__title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      &__subtitle {
        font-size: 14px;
        color: #9A9A9A;
      }
    }
  }
</style>
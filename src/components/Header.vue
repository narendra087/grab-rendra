<template>
  <div class="header__sticky">
    <div class="container">
      <div class="container__content">
        <div class="header">
          <div class="header__section header__section__left">
            <div class="header__img">
              <img src="@/assets/images/logo-grabfood2.svg" alt="logo">
            </div>
            <div class="header__search">
              <div class="header__search__button">Type your location</div>
            </div>
          </div>
          <div class="header__section header__section__right">
            <div @click="toggleCart()" class="header__cart">
              <img src="@/assets/images/cart.png" alt="cart">
            </div>
            <div class="header__user">
              Login/Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formFocus: false,
    }
  },
  methods: {
    ...mapActions({
      toggleCart: 'toggleCart',
    }),
  },
}
</script>
<style lang="scss" scoped>
  .header {
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    &__sticky {
      position: sticky;
      top: 0;
      background: #FFF;
      z-index: 99;
    }
    &__section {
      display: flex;
      align-items: center;
      &__left {
        width: 100%;
      }
    }
    &__img {
      img {
        width: auto;
        height: 50px;
      }
    }
    &__search {
      margin: 0 50px;
      width: 100%;
      &__button {
        height: 40px;
        max-width: 360px;
        border: 1px solid #c5c5c5;
        border-radius: 6px;
        color: #c5c5c5;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__cart {
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border: 1px solid #c5c5c5;
        border-radius: 6px;
      }
    }
    &__user {
      border: 1px solid #c5c5c5;
      border-radius: 6px;
      height: 40px;
      width: max-content;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
</style>
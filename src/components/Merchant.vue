<template>
  <div class="container">
    <div class="container__content">
      <div class="merchant">
        <div class="merchant__image mobile__elm"></div>
        <div class="merchant__navigation">
          <div v-for="(nav, index) in navigation" :key="index" class="navigation__item">
            {{nav}} <img src="@/assets/images/icon-next.svg" alt="next-icon">
          </div>
          <div class="navigation__item navigation__item--current">
            {{merchantName}}
          </div>
        </div>
        <div class="merchant__info">
          <div class="merchant__info__preferred">
            <img src="@/assets/images/icon-preferred-merchant.svg" alt="preferred_merchant">
            <p>Preferred Merchant</p>
          </div>
          <p class="merchant__info__name">{{merchantName}}</p>
          <p class="merchant__info__category">Seafood, Snack</p>
          <div class="merchant__info__rating">
            <div class="info__rating">
              <img src="@/assets/images/icon-star.svg" alt="rating">
              <p class="info__rating__value">4.7</p>
            </div>
            <div class="info__distance">664.1 km</div>
          </div>
          <div class="merchant__info__opening">
            <p class="info__opening__hours">Opening Hours <span>Today 13.00 - 22.00</span></p>
          </div>
          <div class="merchant__info__promotion">
            <img src="@/assets/images/icon-promo-tag.svg" alt="" class="info__promotion__icon">
            <p class="info__promotion__list">DUKUNGUMKM 60% | HEMAT40 40% | HEMAT35 35%</p>
            <p class="info__promotion__details">See details</p>
          </div>
          <div class="merchant__info__additional">
            <img src="@/assets/images/icon-info.svg" alt="" class="info__additional__icon">
            <p>Order fee of Rp3.000 applies for this restaurant.</p>
          </div>
        </div>
        <div class="merchant__available">
          <div class="merchant__available__item"><img src="@/assets/images/icon-calendar.svg" alt=""> Deliver date: Today</div>
          <div class="merchant__available__item"><img src="@/assets/images/icon-clock.svg" alt="">Deliver time: Now</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      navigation: ['Home', 'Restaurant'],
      merchantName: 'Do Yan Seafood - Sumbersekar',
    }
  }
}
</script>

<style lang="scss" scoped>
  .merchant {
    padding: 30px 0;
    text-align: left;
    &__navigation {
      display: flex;
      align-items: center;
      color: #00a5cf;
      .navigation__item {
        display: flex;
        align-items: center;
        cursor: pointer;
        &--current {
          color: #1c1c1c;
          cursor: default;
        }
      }
      img {
        margin: 0 15px;
      }
    }

    &__info {
      &__preferred {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 15px 0 5px;
        p {
          color: #00b14f;
        }
      }
      &__name {
        font-size: 36px;
        font-weight: 700;
      }
      &__category {
        margin: 5px 0 15px;
        font-size: 14px;
        color: #676767;
      }
      &__rating {
        display: flex;
        align-items: center;
        .info__rating {
          margin-right: 40px;
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
            position: relative;
            bottom: 2px;
          }
          p {
            font-size: 14px;
          }
        }
      }
      &__opening {
        margin: 10px 0;
        p {
          font-weight: 700;
          font-size: 14px;
          span {
            display: inline-block;
            font-weight: normal;
            margin-left: 40px;
          }
        }
      }
      &__promotion {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 14px;
        img {
          width: 24px;
          height: 24px;
        }
        .info__promotion__details {
          color: #00a5cf;
          font-weight: 700;
        }
      }
      &__additional {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 14px;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }

    &__available {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 10px 0 20px;
      &__item {
        display: flex;
        align-items: center;
        height: 46px;
        min-width: 350px;
        border-radius: 8px;
        border: 1px solid #c5c5c5;
        padding: 0 10px;
        cursor: pointer;
        img {
          margin-right: 10px;
        }
      }
    }
  }
</style>
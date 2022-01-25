<template>
  <div class="footer">
    <div class="footer__text">
      We're always working to get the most accurate information. Let us know if you come across anything that's outdated!
    </div>
    <div class="footer__top">
      <div class="container">
        <div class="container__content">
          <div class="ft">
            <div class="ft__image">
              <img src="@/assets/images/logo-grabfood-mono.svg" alt="">
            </div>
            <div class="ft__links">
              <div class="ft__links__item">
                <p class="ft__link__name">Frequently Searched</p>
                <div class="ft__link__list">
                  <p v-for="index in 8" :key="index">dummy link</p>
                </div>
              </div>
              <div class="ft__links__item">
                <p class="ft__link__name">Popular Cuisines</p>
                <div class="ft__link__list">
                  <p v-for="index in 6" :key="index">dummy link</p>
                </div>
              </div>
              <div class="ft__links__item">
                <p class="ft__link__name">About Grab</p>
                <div class="ft__link__list">
                  <p v-for="index in 3" :key="index">dummy link</p>
                </div>
              </div>
              <div class="ft__links__item">
                <p class="ft__link__name">Support</p>
                <div class="ft__link__list">
                  <p v-for="index in 4" :key="index">dummy link</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="container__content">
          <div class="fb">
            <div class="fb__section">
              <div class="fb__section__first">
                <p class="fb__first__title">Countries with GrabFood</p>
                <p class="fb__first__country">Indonesia | Philippines | Thailand | Myanmar | Singapore | Malaysia | Myanmar</p>
              </div>
              <div class="fb__first__item">

              </div>
            </div>
            <div class="fb__section__second">
              <div class="fb__first__item">
                <p class="fb__first__subtitle">© Grab 2022</p>
                <p class="fb__first__tos">Terms of Service - Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    &__text {
      font-size: 14px;
      text-align: center;
      background: #f7f7f7;
      padding-bottom: 25px;
    }
    &__top {
      text-align: left;
      padding: 40px 0;
      background: #eaeff2;
      .ft {
        &__image {
          padding-bottom: 40px;
        }
        &__links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          .ft__link__name {
            margin-bottom: 20px;
            font-size: 14px;
            font-weight: 700;
          }
          .ft__link__list {
            display: grid;
            gap: 5px;
            font-size: 14px;
            color: #909090;
          }
        }
      }
    }
    
    &__bottom {
      text-align: left;
      background: #363a45;
      color: #FFF;
      .fb {
        padding: 40px 0;
        &__section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          &__first {
            margin-bottom: 40px;
          }
        }
        &__first {
          &__title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          &__country {
            font-size: 14px;
          }
          &__subtitle {
            color: #afb0b4;
            margin-bottom: 10px;
          }
          &__tos {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="food">
    <div class="food__card">
      <div class="fc__image"><img :src="foodData ? foodData.image : ''" alt="food-images"></div>
      <div class="fc__info">
        <p class="fc__name">{{foodData ? foodData.name : ''}}</p>
        <p class="fc__desc">{{foodData ? foodData.desc : ''}}</p>
      </div>
      <div class="fc__action">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    foodData: Object,
  }
}
</script>

<style lang="scss" scoped>
  .food {
    &__card {
      width: 100%;
      padding: 15px;
      display: grid;
      grid-template-columns: auto 1fr;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      gap: 15px;
      &:hover {
        border: 1px solid #10b65b;
        padding: 14px;
      }
      .fc {
        &__image {
          img {
            width: 120px;
            height: 120px;
          }
        }
        &__name {
          font-weight: 700;
          margin-bottom: 10px;
        }
        &__action {
          position: relative;
          width: 30px;
          height: 30px;
          background: #00b14f;
          padding: 10px;
          grid-column: 2;
          justify-self: end;
          cursor: pointer;
          &:before, &:after {
            content: "";
            position: absolute;
            background-color: #fff;
          }
          &:before {
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 4px;
            height: 60%;
          }
          &:after {
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 60%;
            height: 4px;
          }
        }
      }
    }
  }
</style>
<template>
<div class="container">
  <div class="container__content">
    <div class="list__food">
      <div class="lf__header">
        <div v-for="(category, index) in categories" :key="index" class="lf__header__item" :class="{'lf__content__item--active': true}">
          {{category.name}}
        </div>
      </div>
      <div class="lf__content">
        <div v-for="(category, index) in categories" :key="index" class="lf__content__item">
          <p class="lf__content__category">{{category.name}}</p>
          <div class="lf__content__wrapper">
            <FoodCard v-for="(fd, index) in filterFood(category.id)" :key="index" :foodData="fd" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import foods from '@/mock/food.json';
import FoodCard from '@/components/FoodCard.vue'

export default {
  components: {
    FoodCard,
  },
  data() {
    return {
      foods,
      categories: [
        {id: 1, name: 'Aigo'},
        {id: 2, name: 'Chingu'},
        {id: 3, name: 'Seerameon Ikan'},
        {id: 4, name: 'Samjang Gami ( Extra Pedas )'},
        {id: 5, name: 'Sea Monster'},
        {id: 6, name: 'Omo'},
        {id: 7, name: 'Saranghaeyo'},
        {id: 8, name: 'Chaeso'},
        {id: 9, name: 'Drink (Ice / Hot)'},
        {id: 10, name: 'Addon'}
      ]
    }
  },
  methods: {
    filterFood(ctgry){
      if (ctgry) {
        let tempFood = this.foods.filter(obj => obj.categoryId === ctgry)
        return tempFood
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .list__food {
    text-align: left;
    .lf__header {
      display: flex;
      align-items: center;
      overflow: hidden;
      
      &__item {
        padding: 14px 24px;
        white-space: nowrap;
        &--active {
          border-bottom: 1px solid #c5c5c5;
        }
      }
    }
    .lf__content {
      background: #f7f7f7;
      margin: 0 -40px;
      padding: 40px 40px;
      display: grid;
      height: fit-content;
      gap: 50px;
      &__category {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 30px;
      }
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
      }
    }
  }
</style>
<template>
  <div class="list__food">
    <div class="list__food__sticky">
      <div class="container">
        <div class="container__content">
          <div class="lf__navigation">
            <img @click="moveLeft()" src="@/assets/images/icon-next.svg" alt="prev" class="lf__navigation__prev">
            <div id="lf__header" class="lf__header">
              <div :id="`data-category${category.id}`" @click="activeItem = category.id" v-scroll-to="{ element: `#category${category.id}`, offset: -165 }" v-for="(category, index) in categories" :key="index" class="lf__header__item" :class="{'lf__header__item--active': index === 0}">
                {{category.name}}
              </div>
            </div>
            <img @click="moveRight()" src="@/assets/images/icon-next.svg" alt="next" class="lf__navigation__next">
          </div>
        </div>
      </div>
    </div>
    <div class="lf__content">
      <div class="container">
        <div class="container__content">
          <div class="lf__content__wrapper">
            <div v-for="(category, index) in categories" :key="index" class="lf__content__item">
              <section :id="`category${category.id}`">
                <p class="lf__content__category">{{category.name}}</p>
                <div class="lf__content__card">
                  <FoodCard v-for="(fd, index) in filterFood(category.id)" :key="index" :foodData="fd" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import throttle from 'lodash/throttle';
import foods from '@/mock/food.json';
import FoodCard from '@/components/FoodCard.vue'

Vue.use(VueScrollTo)

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
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    filterFood(ctgry){
      if (ctgry) {
        let tempFood = this.foods.filter(obj => obj.categoryId === ctgry)
        return tempFood
      }
    },
    moveLeft() {
      const elm = document.getElementById('lf__header')
      console.log(elm)
      if (elm) {
        elm.scrollBy({
          left: -100,
          behavior: 'smooth'
        })
      }
      
    },
    moveRight() {
      const elm = document.getElementById('lf__header')
      console.log(elm)
      if (elm) {
        elm.scrollBy({
          left: +100,
          behavior: 'smooth'
        })
      }
    },
    handleScroll: throttle(function() {
      const sections = document.querySelectorAll("section[id]");
      if (!sections) {return}
      let scrollPosition = window.scrollY

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        const sectionId = current.getAttribute("id");
        
        if (
          (scrollPosition > sectionTop &&
          scrollPosition <= sectionTop + sectionHeight) ||
          (sectionId === 'category1' && scrollPosition <= sectionTop)
          
        ){
          document.querySelector(".lf__header__item[id=data-" + sectionId + "]").classList.add("lf__header__item--active");
        } else {
          document.querySelector(".lf__header__item[id=data-" + sectionId + "]").classList.remove("lf__header__item--active");
        }
      });
    }, 250),
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .list__food {
    text-align: left;
    &__sticky {
      position: sticky;
      top: 88px;
      background: #FFF;
      z-index: 99;
      @media screen and (min-width: 320px) and (max-width: 991px) {
        top: 60px;
      }
    }
    .lf__navigation {
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
        width: 50px;
        height: 25px;
      }
      &__prev {
        transform: rotate(180deg);
      }
    }
    .lf__header {
      display: flex;
      align-items: center;
      overflow: hidden;
      
      &__item {
        padding: 14px 24px;
        white-space: nowrap;
        cursor: pointer;
        &--active {
          color: #00b14f;
          border-bottom: 2px solid #00b14f;
          font-weight: 700;
        }
      }
    }
    .lf__content {
      background: #f7f7f7;
      padding: 70px 0;
      @media screen and (min-width: 320px) and (max-width: 991px) {
        background: #FFF;
        padding: 40px 0;
        border-top: 1px solid #C5C5C5;
      }
      &__wrapper {
        display: grid;
        gap: 50px;
        height: fit-content;
      }
      &__category {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 30px;
        @media screen and (min-width: 320px) and (max-width: 991px) {
          font-size: 20px;
        }
      }
      &__card {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        @media screen and (min-width: 320px) and (max-width: 991px) {
          grid-template-columns: unset;
        }
      }
    }
  }
</style>
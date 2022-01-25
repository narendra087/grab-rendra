import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    cartOpen: false,
  },
  getters: {
    cart: (state) => state.cart,
    cartOpen: (state) => state.cartOpen,
  },
  actions: {
    addCart({commit}, data) {
      commit('addCart', data)
    },
    removeCart({commit}, data) {
      commit('removeCart', data)
    },
    toggleCart({commit}) {
      commit('setCart')
    } 
  },
  mutations: {
    addCart: (state, data) => {
      state.cart.unshift(data)
    },
    removeCart: (state, data) => {
      return data
    },
    setCart: (state) => {
      state.cartOpen = !state.cartOpen
    }
  },
})

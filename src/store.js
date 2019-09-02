import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,//分数
  },
  mutations: {
    updateScore(state, n){
      state.score = n;
    }
  },
  actions: {

  }
})

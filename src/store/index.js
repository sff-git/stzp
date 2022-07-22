import Vue from "vue";
import vuex, { createStore } from "vuex";

Vue.use(vuex);

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations:{
    increment(state){
        state.count++
    }
  },
  actions:{
     increment({commit,data}){
        commit("increment",data)
     }
  }
});

export default store

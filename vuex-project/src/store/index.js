import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        appName: "Simple E-Commerce"
    },
    getters: {
        getAppName: state => {
            return state.appName
        }
    },
    mutations: {
      
    },
    actions: {
      
    }
  })

  export default store;
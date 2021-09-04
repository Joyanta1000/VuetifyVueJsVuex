import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        appName: "Simple E-Commerce",
        cart: []
    },
    getters: {
        getAppName: state => {
            return state.appName;
        },
        getCart: state => {
            //localStorage.setItem('cart', JSON.stringify(state.cart))
            return state.cart;
        }
    },
    mutations: {
      addToCart(state, payload) {
          //console.log(state)
          //console.log(payload)
          state.cart.push(payload);
      }
    },
    actions: {
      
        // fetchProducts ({commit}) {

        //     return new Promise((resolve) => {
    
        //         shop.getProducts(() => {
        //             commit('setProducts'. products)
        //             resolve()
        //         })
    
        //     })
                
        // },

        // getPosts({ commit }) {
        //     axios.get('https://jsonplaceholder.typicode.com/posts')
        //         .then(response => {
        //             commit('SET_POSTS', response.data)
        //     })
        // }

    }
  })

  export default store;
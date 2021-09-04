import Vue from 'vue';
import Vuex from 'vuex';
import shop from '@/api/shop'
//import store from '/store/index.js';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //todoList: [],
    todoList: [],
  },
  mutations: {
    //   addTodo(state, status) {
    //     state.todoList = [
    //         state.todoList,
    //         {
    //           id: Math.random(),
    //           status,
    //           completed: false,
    //         },
    //       ];
    // },
    
    // addTodos(state, todos) {
    //   state.todoList = todos;
    // },
    // updateTodo(state, todoId) {
    //   state.todoList = state.todoList.map((item) => {
    //     if (item.id === todoId) {
    //       item.completed = !item.completed;
    //     }
    //     return item;
    //   });
    // },

    setProducts (state, products) {
        state.products = products
    }

  },
  // This should be pasted after the mutations property
getters: {
    // completeTodosLength: (state) => {
    //     const completeTodos = state.todoList.filter((item) => item.completed);
    //     return completeTodos.length;
    //   },

    availableProducts (state) {
        return state.products.filter(product => product.inventory > 0)
    }

  },

  actions: {
    // getTodos({ commit }) {
    //   fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    //     .then((res) => res.json())
    //     .then((data) => commit('addTodos', data))
    //     .catch((error) => console.log(error));
    // },
    fetchProducts ({commit}) {

        return new Promise((resolve) => {

            shop.getProducts(() => {
                commit('setProducts'. products)
                resolve()
            })

        })
            // context.commit()
            // shop.getProducts(products => {
            //     console.log(products)
            //     commit('setProducts', products)
            // })
    },

    // addToCart (context, product) {
    //     // this.state.products = products
    //     if (product.inventory > 0)
    //     {
    //         context.commit('pushProductToCart', product)
    //     }
    // }
},

});
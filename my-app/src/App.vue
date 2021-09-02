<template>
  
   <v-app>
  

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</v-app>
</template>



<script>


import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    posts: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              console.log(response)
                commit('SET_POSTS', response.data)
        })
    }
}

//to handle mutations
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})


</script>

<script>
//import HelloWorld from "./components/HelloWorld";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default ({
  name: 'App',
  data(){
    return {
    //   appTitle: 'Template',
    //   sidebar: false,
    //   menuItems: [
    //       { title: 'Home', path: '/home', icon: 'home' },
    //       { title: 'Sign Up', path: '/signup', icon: 'face' },
    //       { title: 'Sign In', path: '/signin', icon: 'lock_open' }
    //  ],
     
        
    }
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },

});

// export default {
//   name: 'App',
//   data(){
//     return {
//     //   appTitle: 'Template',
//     //   sidebar: false,
//     //   menuItems: [
//     //       { title: 'Home', path: '/home', icon: 'home' },
//     //       { title: 'Sign Up', path: '/signup', icon: 'face' },
//     //       { title: 'Sign In', path: '/signin', icon: 'lock_open' }
//     //  ],
//      items: [
//           { title: 'Dashboard', path: '/home', icon: 'dashboard' },
//           { title: 'Photos', path: '/photos', icon: 'image' },
//           { title: 'About', path: '/about', icon: 'view_agenda' },
//           { title: 'Contact', path: '/contact', icon: 'contacts' },
//           { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
//         ],
//       items_list: [
//           { title: 'Profile', path: '/profile', icon: 'account' },
//         ],
        
//     }
//   },
// };
</script>
<style>
.vicon{
  color: rgb(0, 0, 0);
}
.v_menu{
  right: 20px;
}
</style>

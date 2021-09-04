// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
//   vuetify,
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
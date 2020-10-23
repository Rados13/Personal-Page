import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {firestorePlugin} from 'vuefire'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    this.$store.dispatch('loadDatabase')
    this.$store.dispatch('loadFiles')
  }
}).$mount('#app')

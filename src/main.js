import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  store, // iliti store: store, i ovim je store dodata u root vue instancu
  render: h => h(App)
}).$mount('#app')

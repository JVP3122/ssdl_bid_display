import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import 'es6-promise/auto'

Vue.use(Vuetify);
Vue.use(Vuex);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

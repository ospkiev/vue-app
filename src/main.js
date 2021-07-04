import Vue from 'vue';
import App from './App';
import router from './router';
require('./assets/app.css');
import { store } from './store/store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Notifications from 'vue-notification';

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

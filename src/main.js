import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Notifications from 'vue-notification';
import { store } from './store/store';
import router from './router';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

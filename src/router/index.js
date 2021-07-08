import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Users from '@/components/Users';
import Page404 from '@/components/Page404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '*',
      name: 'page404',
      component: Page404,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/home/home.vue';
import City from '@/views/city/city.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
});

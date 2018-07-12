import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/home/home.vue';
import City from '@/views/city/city.vue';
import Detail from '@/views/detail/detail.vue';
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
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
});

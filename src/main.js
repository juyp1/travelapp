import Vue from 'vue';
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import router from './router';
import * as FastClick from 'fastclick';
import './styles/global.css';
import './styles/reset.css';
import './styles/border.css';
import './assets/iconfont/iconfont.css';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

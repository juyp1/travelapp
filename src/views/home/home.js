import headerBar from '../../components/headerBar/headerBar.vue';
import awesomeSwiper from '../../components/awesome-swiper/awesome-swiper.vue';
import icons from '../../components/icons/icons.vue';
export default {
  components: {
    'headerBar': headerBar,
    'awesomeSwiper': awesomeSwiper,
    'icons': icons
  },
  data () {
    return {
      msg: 'hello home'
    };
  }
};

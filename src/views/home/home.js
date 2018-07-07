import headerBar from '../../components/headerBar/headerBar.vue';
import awesomeSwiper from '../../components/awesome-swiper/awesome-swiper.vue';
import icons from '../../components/icons/icons.vue';
import recommend from '../../components/recommend/recommend.vue';
export default {
  components: {
    'headerBar': headerBar,
    'awesomeSwiper': awesomeSwiper,
    'icons': icons,
    'recommend': recommend
  },
  data () {
    return {
      msg: 'hello home'
    };
  }
};

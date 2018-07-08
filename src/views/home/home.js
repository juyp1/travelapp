import headerBar from '../../components/home/headerBar/headerBar.vue';
import awesomeSwiper from '../../components/home/awesome-swiper/awesome-swiper.vue';
import icons from '../../components/home/icons/icons.vue';
import recommend from '../../components/home/recommend/recommend.vue';
import weekend from '../../components/home/weekend/weekend.vue';
import axios from 'axios';
export default {
  components: {
    'headerBar': headerBar,
    'awesomeSwiper': awesomeSwiper,
    'icons': icons,
    'recommend': recommend,
    'weekend': weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekProductList: []
    };
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if (res.ret && res.data) {
        this.city = res.data.city;
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekProductList = res.data.weekendList;
      }
    }
  },
  mounted () {
    this.getHomeInfo();
  }
};

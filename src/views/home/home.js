import headerBar from '../../components/headerBar/headerBar.vue';
import awesomeSwiper from '../../components/awesome-swiper/awesome-swiper.vue';
import icons from '../../components/icons/icons.vue';
import recommend from '../../components/recommend/recommend.vue';
import weekend from '../../components/weekend/weekend.vue';
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
      console.log(res);
    }
  },
  mounted () {
    this.getHomeInfo();
  }
};

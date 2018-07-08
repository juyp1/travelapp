export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    };
  },
  computed: {
    showSwiper () {
      return this.swiperList.length;
    }
  }
}
;

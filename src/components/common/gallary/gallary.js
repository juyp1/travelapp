export default {
  name: 'gallary',
  props: {
    swiperList: {
      type: Array,
      default () {
        return [];
      }
    },
    showgallary: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      },
      isShow: false

    };
  },
  computed: {
    isgallary () {
      this.isShow = this.showgallary;
      return this.isShow;
    }

  },
  methods: {
    handleClick () {
      console.log('111');
      this.$emit('close');
    }
  }
};

import Bscroll from 'better-scroll';
export default {
  name: 'listCity',
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    }
  },
  data () {
    return {

    };
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};

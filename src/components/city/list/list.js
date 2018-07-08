import Bscroll from 'better-scroll';
export default {
  name: 'listCity',
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    },
    letter: {
      type: String
    }
  },
  data () {
    return {

    };
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};

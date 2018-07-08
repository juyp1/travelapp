import Bscroll from 'better-scroll';
export default {
  name: 'listCity',
  data () {
    return {

    };
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};

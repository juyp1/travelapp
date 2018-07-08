export default {
  name: 'headerBar',
  props: {
    city: {
      type: String,
      default: '北京'
    }
  },
  data () {
    return {

    };
  },
  methods: {
    gocity () {
      this.$router.push('/city');
    }
  }
};

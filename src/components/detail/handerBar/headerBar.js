
export default {
  name: 'headerBar',
  data () {
    return {
      showAbs: false,
      opacityeStyle: {
        opactity: 0
      }
    };
  },
  activated () {
    console.log('scroll');
    window.addEventListener('scroll', this.handlesSroll);
  },
  deactivated () {
    window.removeEventListener('scroll', this.handlesSroll);
  },
  methods: {
    back () {
      this.$router.push('/');
    },
    handlesSroll () {
      const top = document.documentElement.scrollTop;
      if (top > 80) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityeStyle = {
          opacity
        };
        this.showAbs = true;
      } else {
        this.showAbs = false;
      }
    },
    handleIndex () {
      this.$router.push('/');
    }
  }
};

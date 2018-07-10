import Bscroll from 'better-scroll';
export default {
  name: 'searchCity',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    };
  },
  watch: {
    keyword () {
      // 节流函数
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
          this.list = result;
        }
      }, 100);
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {});
  }
};

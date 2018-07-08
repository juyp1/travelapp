export default {
  name: 'ICONS',
  props: {
    iconList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {

      }

    };
  },
  computed: {
    pages () {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};

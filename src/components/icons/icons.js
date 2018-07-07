export default {
  name: 'ICONS',
  data () {
    return {
      swiperOption: {

      },
      iconList: [{
        id: '0001',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        keywords: '景点门票'
      }, {
        id: '0002',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        keywords: '必游榜单'
      }, {
        id: '0003',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        keywords: '夏日玩水'
      }, {
        id: '0004',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        keywords: '故宫'
      }, {
        id: '0005',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        keywords: '一日游'
      }, {
        id: '0006',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        keywords: '公园'
      }, {
        id: '0007',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        keywords: '主题乐园'
      }, {
        id: '0008',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        keywords: '动植物园'
      }, {
        id: '0009',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        keywords: '游乐场'
      }, {
        id: '0010',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        keywords: '全部'
      }]

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

import gallary from '../../components/common/gallary/gallary.vue';
import HeaderBar from '../../components/detail/handerBar/headerBar.vue';
import DetailList from '../../components/detail/list/list.vue';
import FadeAnimation from '../../components/detail/fadeanimation/fadeanimation.vue';
export default {
  name: 'Detail',
  components: {
    'HeaderBar': HeaderBar,
    'gallary': gallary,
    'DetailList': DetailList,
    'FadeAnimation': FadeAnimation
  },
  data () {
    return {
      swiperList: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg', 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png'],
      isShowGallary: false,
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆票',
          children: [{
            title: '三馆（1）'
          }, {
            title: '三馆（2）'
          }]
        }, {
          title: '成人五馆票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    };
  },
  methods: {
    handleGallaryShow () {
      this.isShowGallary = true;
    },
    handleClose () {
      this.isShowGallary = false;
    }
  }

};

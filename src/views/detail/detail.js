import gallary from '../../components/common/gallary/gallary.vue';
import HeaderBar from '../../components/detail/handerBar/headerBar.vue';
export default {
  name: 'Detail',
  components: {
    'HeaderBar': HeaderBar,
    'gallary': gallary
  },
  data () {
    return {
      swiperList: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg', 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png'],
      isShowGallary: false
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

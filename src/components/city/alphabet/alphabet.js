export default {
  name: 'alphabetCity',
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    letters () {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchStart () {
      this.touchStatus = true;
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 90;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd () {
      this.touchStatus = false;
    }

  }
};

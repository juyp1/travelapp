import HeaderBar from '../../components/city/headerBar/headerBar.vue';
import SearchCity from '../../components/city/search/search.vue';
import ListCity from '../../components/city/list/list.vue';
import AlphabetCity from '../../components/city/alphabet/alphabet.vue';
import axios from 'axios';
export default {
  name: 'city',
  components: {
    'HeaderBar': HeaderBar,
    'SearchCity': SearchCity,
    'ListCity': ListCity,
    'AlphabetCity': AlphabetCity
  },
  data () {
    return {
      cities: {},
      hotCities: []
    };
  },
  methods: {
    getCityinfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc (res) {
      if (res.data.ret && res.data) {
        const data = res.data.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    }
  },
  mounted () {
    this.getCityinfo();
  }
};

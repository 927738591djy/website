import Vue from 'vue'
import App from './App.vue'
import router from '@/router' //引入路由对象
import '@/assets/css/reset.css'
import Swiper from "swiper"
import '../node_modules/swiper/swiper-bundle.min.css'
Vue.config.productionTip = false

new Vue({
  router, //vue中使用路由对象
  Swiper,
  render: h => h(App),
}).$mount('#app')
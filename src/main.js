import Vue from 'vue'
import App from './App.vue'
import router from '@/router' //引入路由对象
import '@/assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router, //vue中使用路由对象
  render: h => h(App),
}).$mount('#app')
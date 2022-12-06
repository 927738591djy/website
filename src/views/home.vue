<template>
  <div class="home">
    <Banner></Banner>
    <Ability></Ability>
    <div class="swiper-po">
      <Swiper></Swiper>
    </div>
    <We></We>
    <Idea></Idea>
    <div class="advert-po">
      <Advert></Advert>
    </div>
    <div class="footer-po-home">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Banner from './banner.vue'
import Ability from './ability.vue'
import Swiper from './swiper.vue'
import We from './we.vue'
import Idea from './idea.vue'
import Advert from '../components/advert.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Banner, Ability, Swiper, We, Idea, Advert, Footer
  },
 
}
</script>

<style>
.home {
  /* position: relative; */
}

.swiper-po {
  position: absolute;
  top: 1490px;
  width: 100%;
  height: 662px;
}

.footer-po-home {
  position: absolute;
  top: 3576px;
  width: 100%;
  height: 347px;
}

.advert-po {
  position: absolute;
  top: 3416px;
  width: 100%;
  height: 160px;
}
</style>
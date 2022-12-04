<template>
  <div class="home">
    <Banner></Banner>
    <Ability></Ability>
    <Swiper></Swiper>
    <We></We>
  </div>
</template>

<script>
import Banner from './banner.vue'
import Ability from './ability.vue'
import Swiper from './swiper.vue'
import We from './we.vue'
export default {
components:{
    Banner,Ability,Swiper,We
}
}
</script>

<style>
.home{
  /* position: relative; */
}

</style>
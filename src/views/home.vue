<template>
  <div class="home">
    <Banner></Banner>
    <Ability></Ability>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Banner from './banner.vue'
import Ability from './ability.vue'
import Swiper from './swiper.vue'
export default {
components:{
    Banner,Ability,Swiper
}
}
</script>

<style>
.home{
  /* position: relative; */
}

</style>
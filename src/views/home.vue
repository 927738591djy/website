<template>
  <div class="home">
    <Banner></Banner>
    <Ability></Ability>
  </div>
</template>

<script>
import Banner from './banner.vue'
import Ability from './ability.vue'
export default {
components:{
    Banner,Ability
}
}
</script>

<style>
.home{
  /* position: relative; */
}

</style>
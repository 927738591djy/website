<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
export default {
  name: 'App',
  components: {
   Top
  }
}
</script>

<style>
#app{
  position: relative;
}
</style>

<template>
  <div id="app">
    <Xheader></Xheader>
    <Xnavigation></Xnavigation>
    <Xbanner></Xbanner>
    <Xfooter></Xfooter>
    <router-view></router-view>
  </div>
</template>

<script>
import Xheader from './components/Xheader.vue'
import Xnavigation from './components/Xnavigation.vue'
import Xfooter from './components/Xfooter.vue'
import Xbanner from './components/Xbanner.vue'

export default {
  name: 'app',
  components: {
    Xheader,
    Xnavigation,
    Xfooter,
    Xbanner
  }
}
</script>

<style>

</style>

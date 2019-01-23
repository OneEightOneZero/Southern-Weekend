<template>
  <div id="app">
    <Xheader></Xheader>
    <Xnavigation></Xnavigation>
    <router-view></router-view>
    <Xfooter></Xfooter>
    <router-view></router-view>
  </div>
</template>

<script>
import Xheader from './components/Xheader.vue'
import Xnavigation from './components/Xnavigation.vue'
import Xfooter from './components/Xfooter.vue'

export default {
  name: 'app',
  components: {
    Xheader,
    Xnavigation,
    Xfooter
  }
}
</script>

<style>

</style>

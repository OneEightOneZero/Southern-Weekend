<template>
  <div id="app">
    <Xheader></Xheader>
    <Xnavigation></Xnavigation>
    <Xmainsearch></Xmainsearch>
    <router-view></router-view>
    <Xfooter></Xfooter>
  </div>
</template>

<script>
import Xheader from './components/Xheader.vue'
import Xnavigation from './components/Xnavigation.vue'
import Xfooter from './components/Xfooter.vue'
import Xmainsearch from './components/Xmainsearch.vue'


export default {
  name: 'app',
  components: {
    Xheader,
    Xnavigation,
    Xfooter,
    Xmainsearch
  }
}
</script>

<style>

</style>

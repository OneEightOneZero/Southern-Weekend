<template>
  <div id="app">
    <Xheader></Xheader>
    <Xnavigation></Xnavigation>
    <router-view></router-view>
    <Xfooter></Xfooter>
    <Abc></Abc>
  </div>
</template>

<script>
import Xheader from './components/Xheader.vue'
import Xnavigation from './components/Xnavigation.vue'
import Xfooter from './components/Xfooter.vue'

import Abc from './1.vue'

export default {
  name: 'app',
  components: {
    Xheader,
    Xnavigation,
    Xfooter,
    Abc
  }
}
</script>

<style>

</style>

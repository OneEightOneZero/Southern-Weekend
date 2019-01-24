<template>
  <ul data-v-8e74bc8a class="van-nav">
    <li @click="changeActive(idx)" v-for="(val,idx) in list" v-text="val" data-v-8e74bc8a class="van-nav-item" :class="active==idx?'van-nav-item--active':''" :key="idx"></li>
  </ul>
</template>
<script>
export default {
  data(){
    return{
      list:['推荐','新闻','观点','文化','人物','影像','专题','生活'],
      routerlink:['recommend','new','viewpoint','culture','people','image','special','live'],
      active:0
    }
  },
  methods:{
    changeActive(idx){
      this.$router.push({name:this.routerlink[idx]}),
      this.active=idx
    }
  }
};
</script>
<style>
.van-nav{
  position:fixed;
  z-index: 5;
  width:100%;
  top:46px;
}
</style>



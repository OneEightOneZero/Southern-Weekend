<template>
  <div class="weui-search-bar" :class="{'weui-search-bar_focusing':isshow}" id="searchBar">
    <form class="weui-search-bar__form" @click="showsearch">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          ref="foc"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        >
        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label
        class="weui-search-bar__label"
        id="searchText"
        style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="showsearch">取消</a>
  </div>
</template>
<script>
import 'weui';
export default {
  data(){
    return {
      isshow:false
    }
  },
  methods:{
    showsearch(){
      this.$refs.foc.focus();
      this.isshow=!this.isshow;
    }
  }
};
</script>
<style scoped>
#searchBar{
  position:fixed;
  width:100%;
  left:0;
  top:39px;
}
</style>



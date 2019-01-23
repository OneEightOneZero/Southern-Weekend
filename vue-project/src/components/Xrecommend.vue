<template>
  <div data-v-7ffed230 class="menu">
    <h2 data-v-7ffed230 class="menu__title">更多栏目</h2>
    <button v-for="(val,idx) in listButton" :key="idx"
      data-v-7ffed230
      class="van-button van-button--default van-button--normal van-button--circle"
    >
      <span class="van-button__text">
        <span data-v-7ffed230 v-text="val"></span>
      </span>
    </button>
  </div>
</template>
<script>
//引入recommendSearch样式
import '../css/recommendSearch.css'
export default {
    data(){
        return{
            listButton:['推荐','新闻','观点','文化','人物','影像','专题','生活','社会','法治','公益','时局','天下','教育','政经','公司','财经','阅读']
        }
    }
};
</script>
<style scoped>
.van-button__text{
    display:inline-block;
    border:1px solid #000;
    width:80px;
    height:30px;
    border-radius:10%;
    line-height:30px;
    font-size:18px;
}
.van-button__text:active{
    background-color:#ccc;
}
</style>



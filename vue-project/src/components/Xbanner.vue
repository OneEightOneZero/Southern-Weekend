<template>
  <el-carousel height="150px" :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in imglist" :key="index">
        <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import img1 from '../assets/149482.jpeg';
import img2 from '../assets/149716.jpeg';
import img3 from '../assets/149817.jpeg';
import img4 from '../assets/banner1.jpeg';
export default {
    data(){
        return {
            imglist:[img1,img2,img3,img4]
        }
    }
}
</script>

<style scoped>
  .el-carousel{
    position: relative;
    top:92px;
  }
  .el-carousel__item img {
    width:100%;
    height: 150px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
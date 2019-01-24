<template>
  <div id="con">
      <h2 v-text="getData.short_subject"></h2>
      <span v-text="getData.author" class="txt"></span>&nbsp;&nbsp;
      <span v-text="getData.publish_time"></span>
      <img v-for="(val,idx) in getData.file_path" :src="'http://images.infzm.com/medias/'+val+'@660x440'" v-if="val" />
      <p v-text="getData.introtext"></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [],
      index: 0,
      getData:{}
    };
  },
  methods: {
    // 获取数据
    async getNews() {
      let data = await this.$axios.get("http://localhost:3000/setting/getNews");
      this.news = this.news.concat(data.data);
      this.getData=this.news[this.index]
      console.log(this.getData)
    }
  },
  created() {
    this.index = this.$route.params.id;
    this.getNews();
  }
};
</script>
<style scoped>
*{margin:0;padding:0;box-sizing:border-box;}
#con{
    padding:30px;
}
h2{
    font-size:20px;
}
.txt{
    display:inline-block;
    line-height:60px;
}
p{
    font-size:18px;
}
img{
    width: 310px;
}
</style>


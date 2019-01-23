<template>

</template>
<script>
export default {
  methods: {
    // 获取数据
    async getNews() {
      let data = await this.$axios.get("http://localhost:3000/getNews");
      this.news = this.news.concat(data.data.data);
    }
  },
  created() {
    this.getNews();
  }
};
</script>
<style scoped>
</style>


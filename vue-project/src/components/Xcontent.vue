<template>
  <div data-v-8e74bc8a class="contents contents--border">
    <router-link :to="'/details/'+idx" data-v-8e74bc8a href="#/content/144205" class="contents__item" v-for="(val,idx) in news" :key="idx" v-if="val.short_subject.indexOf(searchInput)+1">
      <section data-v-29d876ad data-v-8e74bc8a class="infzm-content-item infzm-content-item--right">
        <div data-v-29d876ad class="infzm-content-item__text" v-text="val.short_subject">
          <span data-v-29d876ad></span>
          <span data-v-29d876ad></span>
          <span data-v-29d876ad></span>
        </div>
        <div data-v-29d876ad class="infzm-content-item__medias" v-if="val.file_path">
          <div data-v-29d876ad class="media-object media-object--full-for-width">
            <div class="media-object__videoicon"></div>
            <div class="media-object__inner">
              <img
                :data-src="'http://images.infzm.com/medias/'+val.file_path[0]+'@660x440'"
                :src="'http://images.infzm.com/medias/'+val.file_path[0]+'@660x440'"
                lazy="loaded"
              >
            </div>
          </div>
        </div>
        <div data-v-29d876ad class="infzm-content-item__meta">
          <span data-v-29d876ad></span>
          <span data-v-29d876ad class="meta__time">刚刚</span>
        </div>
      </section>
    </router-link>
    <p @click="getNews">查看更多 >></p>
  </div>
</template>
<script>
//引入content样式
import '../css/content.css'
import observer from '../libs/observer.js'
export default {
  data() {
    return {
      news: [],
      // 从xsearch组件获取
      searchInput:""
    };
  },
  methods: {
    // 获取数据
    async getNews() {
      let data = await this.$axios.get("http://localhost:3000/setting/getNews");
      this.news = this.news.concat(data.data);
    }
  },
  created() {
    this.getNews();
    // 订阅者
    observer.on('search',(data)=>{
      this.searchInput = data
    })
  }
};
</script>
<style scoped>
.contents{
  position:relative;
  top:150px;
}
p{
  color:#aaa;
  font-size:16px;
  line-height:20px;
}
</style>


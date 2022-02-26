<template>
  <div>
    <div class="sidebar">
      <div class="title">
        <h5>
          <span class="tp_title">
            Danh mục tin tức
          </span>
        </h5>
      </div>
      <div class="category">
        <router-link to="/News">Tin tức </router-link>
      </div>
      <div class="title">
        <h5>
          <span class="tp_title">
            Có thể bạn quan tâm
          </span>
        </h5>
      </div>
      <div class="Related_posts" v-for="(nn, index) in news" :key="index">
        <div class="related" v-for="(n, index) in nn" :key="index"  @mousedown="view_news(n)">
          <div class="img">
            <router-link :to="link_view"
              ><img :src="require(`@/${n.cover_image}`)" alt=""
            /></router-link>
          </div>
          <div class="title_Related">
            <div class="tt_related">
              <router-link :to="link_view"
              >{{ n.title_introduce }}</router-link
            >
            </div>
            <div class="date_time">
              <span>{{ n.date_time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{view_news()}} -->
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {
      link_view:'/View-news',
      news: [],
    };
  },
  methods:{
    ...mapGetters([
      'dataNews',
    ]),
    ...mapMutations([
      'to_viewNews'
    ]),
    getNews(){
      this.news = this.dataNews()
    },
    view_news(n){
      this.to_viewNews([n])
    }
  },
    created(){
      this.getNews()
      // console.log(this.to_viewNews())
    }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.title {
  content: "";
  left: 0;
  right: 0;
  border-bottom: 3px solid #ebebeb;
}
.title h5 {
  margin: 0;
}
h5::before {
  position: absolute;
  content: "";
  bottom: -5px;
  left: 0;
  right: 0;
}
.tp_title {
  position: relative !important;
  color: #000;
  transition: all ease 0.3s;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: default;
}
/* .tp_title:hover {
  color: #459a07;
} */
.tp_title::after {
  content: "";
  position: absolute;
  border-bottom: 3px solid #459a07;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 3px;
}
.category {
  margin: 20px 0px;
  padding: 20px;
  background: #ebebeb;
}
.category a {
  transition: all 0.3s ease-in-out;
  color: #000;
}
.category a:hover {
  color: #ff9f00;
}
.Related_posts {
  margin: 20px 0px;
  background: #ebebeb;
}
.related {
  padding: 20px;
  display: flex;
  height: 100px;
  border-bottom: 1px dashed white;
  display: flex;
  align-items: center;
}
.img img {
  width: 110px;
  height: 80px;
}
.title_Related {
  margin: 0 10px;
}
.tt_related{
  height: 45px;
  overflow: hidden;
}
.title_Related a {
  height: 45px;
  color: #000;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.title_Related a:hover {
  color: #ff9f00;
}
.date_time{
  font-size: 14px;
  margin: 10px 0px;
  color: #a5a5a5;
}
</style>
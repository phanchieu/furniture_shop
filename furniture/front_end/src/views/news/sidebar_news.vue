<template>
  <div>
    <div class="sidebar">
      <div class="title">
        <h5>
          <a href="" class="tp_title">
            Danh mục tin tức
          </a>
        </h5>
      </div>
      <div class="category">
        <router-link to="/News">Tin tức </router-link>
      </div>
      <div class="title">
        <h5>
          <a href="" class="tp_title">
            Có thể bạn quan tâm
          </a>
        </h5>
      </div>
      <div class="Related_posts">
        <div class="related" v-for="(news, index) in news" :key="index">
          <div class="img">
            <a href=""
              ><img :src="require(`@/assets/images/news/${news.img}`)" alt=""
            /></a>
          </div>
          <div class="title_Related">
            <a href=""
              >{{ news.title }}</a
            >
            <div class="date_time">
              <span>{{ news.date_time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          img: "1.jpg",
          title: "15 Xu Hướng Thiết Kế Nội Thất Mới Nhất",
          date_time: "21/12/2019",
        },
        {
          img: "2.jpg",
          title: "Giải pháp thiết kế nội thất nhà ống hiện đại",
          date_time: "21/12/2019",
        },
      ],
    };
  },
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
}
.tp_title:hover {
  color: #459a07;
}
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
  width: 100px;
  max-height: 100px;
}
.title_Related {
  margin: 0 10px;
}
.title_Related a {
  color: #000;
  transition: all 0.3s ease-in-out;
}
.title_Related a:hover {
  color: #ff9f00;
}
</style>
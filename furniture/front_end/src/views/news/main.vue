<template>
  <div>
      <div class="news" v-for="(nn,index) in news" :key="index">
         <div class="list_news" v-for="(n,index) in nn" :key="index" @mousedown="view_news(n)">
              <div class="img" >
                <router-link :to="link_view"> <img :src="require(`@/${n.cover_image}`)" alt=""> </router-link>
              </div>
              <div class="title_datetime">
                <div class="title">
                <router-link :to="link_view">{{ n.title_introduce }}</router-link>
              </div>
              <div class="datetime">
                <span>{{ n.date_time }}/{{n.year}}</span>
              </div>
              <div class="buttons-coll">
                  <router-link :to="link_view" class="custom-btn view_now"
                    ><span>Đọc thêm</span></router-link
                  >
                </div>
              </div>
            </div>
      </div>
      <!-- {{view_news()}} -->
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
data(){
    return{
      hidden:false,
      link_view:'/View-news',
      news:[],
    }
  },
  methods:{
    ...mapGetters([
      'dataNews',
    ]),
    ...mapMutations([
      'to_viewNews',
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
      // console.log(this.news.news[0].id)
    }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.container{
  max-width: 1140px;
}
.news .list_news{
  padding-bottom: 20px;
  margin: 0 0 20px;
  border-bottom: 1px dashed #ebebeb;
  display: flex;
}
.news .list_news:last-child{
  border-bottom: none;

}

.img img{
  max-width: 300px;
}
.title_datetime{
  margin: 0 0 0 10px;
}
.title {
  height: 50px;
  overflow: hidden;
}
.title a {
  font-size: 14px;
  font-weight: 600;
  color: black;
  transition: all .3s ease-in-out;
}
.title a:hover{
  color: #ff9f00;
}
.datetime{
  font-size: 14px;
  color: #a5a5a5;
  }

.buttons-coll {
  margin: 20px 0px;
}

.custom-btn {
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  background-color: #459a07;
  opacity: 0.8;
  font-size: 14px;
  color: white;
}
.custom-btn:hover {
  background-color: white;
  color: #459a07;
}
.view_now {
  width: 125px;
  height: 40px;
  padding: 0;
  border: none;
  text-align: center;
}
.view_now span {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.view_now:before,
.view_now:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #459a07;
  transition: all 0.5s ease;
}
.view_now:before {
  height: 0%;
  width: 2px;
}
.view_now:after {
  width: 0%;
  height: 2px;
}
.view_now:hover:before {
  height: 100%;
}
.view_now:hover:after {
  width: 100%;
}
.view_now span:before,
.view_now span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #459a07;
  transition: all 0.5s ease;
}
.view_now span:before {
  width: 2px;
  height: 0%;
}
.view_now span:after {
  width: 0%;
  height: 2px;
}
.view_now span:hover:before {
  height: 100%;
}
.view_now span:hover:after {
  width: 100%;
}
.banner_for_new_product {
  padding: 30px 0px;
}
.custom-b {
  cursor: pointer;
  width: 98%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 1%;
}
.buttons-coll {
  margin: 20px 0px;
}
@media only screen and (max-width: 500px) {
 .list_news{
   height: auto !important;
   display: inline !important;
 }
 .img img{
  max-width: 100%;
}
.title_datetime{
  margin: 0;
}
  
}
</style>
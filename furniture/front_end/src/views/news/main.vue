<template>
  <div>
       <div class="noName" v-for="(news,index) in news" :key="index">
              <div class="img">
                <a href=""> <img :src="require(`@/assets/images/news/${news.img}`)" alt=""> </a>
              </div>
              <div class="title_datetime">
                <div class="title">
                <a href="">{{ news.title }}</a>
              </div>
              <div class="datetime">
                <span>{{ news.date_time }}</span>
              </div>
              <div class="buttons-coll">
                  <a href="" class="custom-btn view_now"
                    ><span>Đọc thêm</span></a
                  >
                </div>
              </div>
            </div>
  </div>
</template>

<script>
export default {
data(){
    return{
      hidden:false,
      news:[
        {
        img:'1.jpg',
        title:'15 Xu Hướng Thiết Kế Nội Thất Mới Nhất',
        date_time:'21 / 12 / 2019'
        },
        {
        img:'2.jpg',
        title:'Giải pháp thiết kế nội thất nhà ống hiện đại',
        date_time:'21 / 12 / 2019'
        },
        {
        img:'3.jpg',
        title:'Trang trí không gian nội thất đẹp với chất liệu gỗ cao cấp',
        date_time:'21 / 12 / 2019'
        },
        {
        img:'4.jpg',
        title:'SẢN PHẨM NỘI THẤT THÔNG MINH CHẤT LƯỢNG TẠI HÀ NỘI',
        date_time:'21 / 12 / 2019'
        },
        
      ],
    }
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
.news .noName{
  height: 222px;
  padding-bottom: 20px;
  margin: 0 0 20px;
  border-bottom: 1px dashed #ebebeb;
  display: flex;
}
.news .noName:last-child{
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
 .noName{
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
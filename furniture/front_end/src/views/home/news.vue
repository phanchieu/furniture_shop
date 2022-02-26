<template>
  <div>
    <div id="news">
      <div class="container">
        <div class="title">
          <h5>
            <a class="tp_title">
             Tin tức
            </a>
          </h5>
        </div>
      </div>
   <div class="news">
     <div class="container">
       <carousel :autoplay="false" :nav="false" :dots="false" :responsive="{0:{items:1},600:{items:3,margin:20}}">
         <div v-for="(news,index) in data_news" :key="index">
           <div class="index_news" @mousedown="view_news(news)">
             <div class="img_news">
               <router-link :to="link_view"><img :src="require(`@/${news.cover_image}`)" alt=""></router-link>
             </div>
             <div class="dateMonth"><span>{{ news.date_time }} <br> {{news.year}}</span></div>
             <div class="text">
             <div class="title_news"><router-link :to="link_view"><h6>{{news.title_introduce}}</h6></router-link></div>
             <div class="content_news"><p>{{news.content_introduce}}</p></div>
             <router-link :to="link_view" class="info">Xem thêm</router-link>

             </div>
           </div>
         </div>

      </carousel>
     </div>
   </div>
  
    </div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
import {mapGetters, mapMutations} from 'vuex'

export default {
    components: { carousel },
    data(){
      return{
        link_view:'/View-news',
        data_news:[
          {
          id:1,
          cover_image:'assets/images/image_home/news/1.jpg',
          title_introduce:'15 Xu Hướng Thiết Kế Nội Thất Mới Nhất',
          content_introduce:'Bạn đã sẵn sàng để đón nhận những thứ sẽ trở thành xu hướng thiết kế nội thất trong năm sau và nhiều nhiều năm sau nữa?Một năm mới lại tới với những sự khởi đầu mới, tại sao không bắt đầu từ ngay trong chính căn nhà của bạn? Khi nhắc đến những chất liệu và thiết kế là xu hướng của các năm trước, chắc chắn những chuyên gia, stylish không chỉ về nội thất mà còn là designer, kiến trúc sư, decorator là những người hiểu rõ hơn ai hết.',
          date_time:'21/12',
          year:'2021'
          },
          {
          id:2,
          cover_image:'assets/images/image_home/news/2.jpg',
          title_introduce:'Giải pháp thiết kế nội thất nhà ống hiện đại',
          content_introduce:'Nhà ống là hình thể của loại hình nhà phố phổ biến hiện nay, đặc điểm chung của nhà ống là không gian nhà chật hẹp, thiếu ánh sáng, không khí tự nhiên. Tuy nhiên, với cách thiết kế nội thất hài hòa về kiến trúc và môi trường xung quanh hợp lý trong cách bố trí, sắp xếp nội thất sẽ giúp căn nhà của bạn trở nên sang trọng, hiện đại.',
          date_time:'22/12',
          year:'2021'
          },
          {
          id:3,
          cover_image:'assets/images/image_home/news/3.jpg',
          title_introduce:'Trang trí không gian nội thất đẹp với chất liệu gỗ cao cấp',
          content_introduce:'Gỗ là chất liệu quen thuộc và gần gũi với cuộc sống của người Việt từ xưa đến nay. Vì thế, trang trí không gian nội thất đẹp với chất liệu gỗ tự nhiên hay công nghiệp chắc chắn sẽ là sự lựa chọn của nhiều gia đình.',
          date_time:'10/10',
          year:'2021'
          },
          {
          id:4,
          cover_image:'assets/images/image_home/news/4.jpg',
          title_introduce:'SẢN PHẨM NỘI THẤT THÔNG MINH CHẤT LƯỢNG TẠI HÀ NỘI',
          content_introduce:'Để có một ngôi nhà đẹp thì nội thất chính là yếu tố quyết định. Những đồ nội thất bạn sở hữu trong ngôi nhà của bạn sẽ nói lên tính cách, gu thẩm mỹ và năng lực về tài chính của bạn. Nhất là trong cuộc sống hiện nay, xu hướng ở những căn hộ chung cư cao thường là rất nhiều. Vì thế cho nên những sản phẩm về nội thất thông minh là lựa chọn tuyệt vời để tiết kiệm không gian cho ngôi nhà.',
          date_time:'14/11',
          year:'2021'
          },
        ],
      }
    },
    methods:{
      ...mapGetters([
        'dataNews'
      ]),
      ...mapMutations([
        'to_viewNews'
      ]),
      getNews(){
        let get_news = this.data_News = this.dataNews() 
        this.data_news = get_news.news
      },
      view_news(news){
        this.to_viewNews([news])
      }
    },
    created(){
      this.getNews()
    }
}

</script>

<style scoped>
.container {
  max-width: 1140px;
}
a {
  text-decoration: none !important;
}
h5{
  margin: 0;
}
li {
  list-style: none;
}
#news {
  padding: 30px 0px;
}
.title {
  content: "";
  left: 0;
  right: 0;
  border-bottom: 3px solid #ebebeb;
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
.news{
  margin-top: 30px;
}
.index_news{
  position: relative;
  border: 1px solid #ebebeb;
  border-radius: 10px;
}
.index_news:hover .dateMonth{
  background-color: #ff9f00;
  opacity: .9;
  transition: all .3s ease-in-out;
}
.img_news a img{
height: 200px;
}
.text{
  padding: 10px;
  border-top: none;
}
.title_news a h6{
  font-weight: 500;
  font-size: .9rem;
  color: #000;
  transition: all .2s ease-in-out;
  padding: 10px 0px;

}
.title_news{
  height: 45px;
  margin-bottom: 5px ;
  overflow: hidden;
}
.title_news a h6:hover{
  color: #ff9f00;
}
.content_news {
  max-width: 100%;
  height: 75px;
  overflow: hidden;
}
.content_news p{
  font-size: 13px;
  font-weight: 500;
  color: #a5a5a5;
  line-height: 18px;
}
.info{
  color: #ff9f00;
  font-weight: 600;
  font-size: .8rem;
}
.dateMonth{
width: 70px;
height: 70px;
background: black;
position: absolute;
top: 3%;
left: 3%;
opacity: .7;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50% !important;
text-align: center;
}
.dateMonth span{
color: white;
line-height: 15px;
}

@media only screen and (max-width: 425px) {
  .index_news{
    max-width: 100%;
    margin: 0;
  }
}
</style>

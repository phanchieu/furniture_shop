<template>
  <div class="carousel-bottom">
    <div class="bgr_carousel">
      <div class="background">
       
      </div>
    </div>

    <div class="container-fluid">
      <carousel :autoplay="false" :nav="false" :dots="false" :items="1" :loop="true">
  <div v-for="(reviews,index) in product_reviews" :key="index"> 
   <div class="reviews">
     <div class="img">
       <img :src="require(`@/assets/images/image_home/evaluate/${reviews.img}`)" alt="">
     </div>
     <div class="evaluate_content">
       <div class="content"><p>{{ reviews.content }}</p></div>
       <div class="AddressAndName"> <h5>{{ reviews.name }} - {{ reviews.address }}</h5> </div>
     </div>
   </div>
  </div>
</carousel>
    </div>

  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    data(){
      return{
        product_reviews:[
          {img:'1.jpg',
          content:'Mọi thứ thật tuyệt vời. Ở đây tôi có thể tìm thấy mọi thứ mình mong muốn.',
          name:'Kirsty Hartley',
          address:'Chorley, United Kingdom',},
          {img:'2.jpg',
          content:'Dịch vụ tuyệt vời, sản phẩm tuyệt vời, lại còn free ship nữa chứ !',
          name:'Craig Walsh',
          address:'Portland, Oregon',},
          {img:'3.jpg',
          content:'Tôi rất yêu thích phong cách và chất lượng các sản phẩm được bán tại đây.',
          name:'Lynn Gordon',
          address:'London, England',},
        ],
      }
    }
}

</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bgr_carousel{
  padding: 0;
  background-color: black;

}
.container-fluid{
  position: absolute;
  top: 30%;
  
  
}
.carousel-bottom{
  max-width: 100%;
  overflow: hidden;
  padding: 30px 0px;
  position: relative;

}
.background{
  background-image: url('../../assets/images/image_home/banner_background/banner_index_feedback_background.jpg');
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .7;
}

.reviews{
  text-align: center;
  padding: 0 5px;
}
.reviews .img{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;

}
.reviews img{
  border: 5px solid white;
  border-radius: 50%;
  max-width: 100px;
  max-height: 100px;
}
.evaluate_content .content{
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
}
.evaluate_content .AddressAndName{
  color: white;
  font-weight: 500;
  font-size: 1rem;
}
@media only screen and (max-width: 425px) {
  .container-fluid{
    top: 20%;
  }
}
</style>
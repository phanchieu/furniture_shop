<template>
  <div>
      <div class="marketer">
        <div class="container-fluid">
          <div class="container">
            <carousel :autoplay="false" :nav="false" :dots="false" :responsive="{0:{items:3,margin:10},600:{items:5,nav:false,margin:50}}" >

                <div class="img_marketer" v-for="(marketer,index) in marketer" :key="index" >
                  <img :src="require(`@/assets/images/image_home/marketer/${marketer.img}`)" alt="">
                </div>

            </carousel>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    data(){
      return{
        marketer:[
          {img:'1.png'},
          {img:'2.png'},
          {img:'3.png'},
          {img:'4.png'},
          {img:'5.png'},
          {img:'6.png'},
        ],
      }
    }
}

</script>

<style scoped>
.container{
  max-width: 1140px;
  padding: 0;
}
.marketer{
  padding: 30px 0px;
  border-top: 1px solid #ebebee;
  background: #fafafa;
  margin-top: 30px;
}
.img_marketer{
  display: flex;
  align-items: center;
  height: 90px;
}
.img_marketer img{
  max-width: 100%;
  max-height: 100%;
}

</style>
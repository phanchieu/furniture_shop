<template>
  <div class="slider">
    <div class="carousel">
      <carousel :items="1" :nav="false" :loop="true" :autoplay="true">
        <div class="img" v-for="(img_slide, index) in imgs_slide" :key="index">
          <img
            :src="
              require(`@/assets/images/image_home/slider/${img_slide.image}`)
            "
          />
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      imgs_slide: [
        { image: "slider_img1.jpg" },
        { image: "slider_img2.jpg" },
        { image: "slider_img3.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  height: 80vh;
  width: 100%;
}
.img img {
  max-width: 100%;
  height: 80vh;
}
@media only screen and (max-width: 800px) {
  .carousel {
  width: 100%;
  height: 50vh;

}
.img img {
  width: 150%;
  height: 50vh;
  
}
}
</style>

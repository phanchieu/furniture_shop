<template>
  <div>
    <div class="banner_category">
      <div class="container-fluid">
        <div class="slide">
          <div class="container">
            <div class="category">
              <carousel 
              :autoplay="false" 
              :nav="false" 
              :dots="false"
              :responsive="{0:{items:2,margin:10},350:{items:2,margin:15},600:{items:3,margin:30},900:{items:4,margin:30}}">
                <div
                  class="hover14"
                  v-for="(img_banner, index) in imgs_banner"
                  :key="index"
                >
                  <figure>
                    <a :href="img_banner.link"
                      ><img
                        :src="
                          require(`@/assets/images/image_home/banner_category/${img_banner.img}`)
                        "
                    /></a>
                    <div class="title">
                      <a :href="img_banner.link"
                        ><h3>{{ img_banner.title }}</h3>
                        <span>Tìm hiểu thêm</span></a
                      >
                    </div>
                  </figure>
                </div>
              </carousel>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      imgs_banner: [
        { img: "1.jpg", title: "phòng ăn", link: "#" },
        { img: "2.jpg", title: "phòng khách", link: "#" },
        { img: "3.jpg", title: "phòng bếp", link: "#" },
        { img: "4.jpg", title: "phòng làm việc", link: "#" },
        { img: "5.jpg", title: "phòng ngủ", link: "#" },
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.banner_category {
  padding: 30px 0px;
}
.container-fluid {
  padding: 0;
  background: black;
}
.slide {
  background-image: url("../../assets/images/image_home/banner_background/banner_index_category_background.png");
  background-size: cover;
  opacity: 0.95;
  height: 400px;
  display: flex;
  align-items: center;
  width: 100%;
}

.container {
  max-width: 1140px;
}
.category {
}

.hover14 figure {
  position: relative;
}
figure {
  overflow: hidden;
}
.hover14 figure::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
.hover14 figure:hover::before {
  -webkit-animation: shine 0.7s;
  animation: shine 0.7s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}
figure img {
  max-width: 100%;
  height: 300px;
}
.title:hover a h3 {
  text-shadow: 1px 1px 1px #ff9f00;
}
.title {
  position: absolute;
  top: 70%;
  text-align: center;
  padding: 5px 0px;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.title a {
  padding: 5px 0px;
}

.title h3 {
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  text-shadow: 1px 1px 1px #459a07;
}
.title span {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

@media only screen and (max-width: 768px) {
  
  .title h3 {
    font-weight: 600;
    font-size: 0.8rem;
  }
  .title span {
    color: white;
    font-weight: 600;
    font-size: 0.7rem;
  }
  figure img {
    max-width: 100%;
  }
}
@media only screen and (max-width: 425px) {
  
  figure img {
    max-width: 100%;
    max-height: 45vh;
  }
}

</style>

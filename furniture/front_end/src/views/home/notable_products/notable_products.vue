<template>
  <div>
    <div id="notable_product">
      <div class="container">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
              Sản phẩm đáng chú ý 
            </a>
          </h5>
          <div class="group_tab">
            <ul class="tabs">
              <li
                class="tab"
                @click="active = 1"
                :class="{ active: active == 1 }"
              >
                <router-link to="/">Nổi bật</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 2"
                :class="{ active: active == 2 }"
              >
                <router-link to="/">Mới</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 3"
                :class="{ active: active == 3 }"
              >
                <router-link to="/">Được ưa thích</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    
   <FeaturedProducts :active="active"></FeaturedProducts>
   <NewProducts :active="active"></NewProducts>
   <FavoriteProducts :active="active"></FavoriteProducts>
    <div class="banner_for_new_product">
      <div class="container">
        <div class="row">
          <div class="banner col-6" v-for="(img, index) in imgs_banner" :key="index">
            <img
              class=""
              :src="require(`@/assets/images/image_home/banner/${img.img}`)"
              alt=""
            />
            <div class="custom-b custom_banner">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import carousel from 'vue-owl-carousel';
import FeaturedProducts from './new_products.vue';
import NewProducts from './featured_products.vue';
import FavoriteProducts from './favorite_products.vue';

export default {
    components: { 
      // carousel , 
      FeaturedProducts,
      NewProducts,
      FavoriteProducts,
     },
  data() {
    return {
      active: 1,
      imgs_banner: [
        { img: "banner_index_bottom_left.jpg" },
        { img: "banner_index_bottom_right.jpg" },
      ],
      products: [
        {
          img: "1.jpg",
          name: "Tủ TV FreeStyle",
          price: "6990000",
        },
        {
          img: "2.jpg",
          name: "Bộ bàn ăn Stefano",
          price: "14950000",
        },

        {
          img: "3.jpg",
          name: "Bộ bàn ăn Edward",
          price: "3990000",
        },
        {
          img: "4.jpg",
          name: "Bàn cafe Cabaret",
          price: "1390000",
        },
        {
          img: "5.jpg",
          name: "Bàn cafe Cabaret",
          price: "1390000",
        },
        {
          img: "6.jpg",
          name: "Ghế bành Bogart",
          price: "5490000",
        },
        {
          img: "7.jpg",
          name: "Ghế bành Connemara",
          price: "7490000",
        },
      ],
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto !important;
}
a {
  text-decoration: none !important;
}
ul{
  margin: 0;
  padding: 0;
}
h5{
  margin: 0;
}
li {
  list-style: none;
}
#notable_product {
  padding-top: 30px;
}
.title {
  border-bottom: 3px solid #ebebeb;
  display: flex;
  justify-content: space-between;
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
.group_tab {
  display: flex;
}
.tabs {
  display: flex;
}
.tabs::before {
  position: absolute;
  content: "";
  bottom: -5px;
  left: 50%;
  right: 0;
}
.tabs span {
  margin: 0px 10px;
}
.tab {
  position: relative !important;
  color: #000;
  transition: all ease 0.3s;
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}
.tab a {
  text-align: center;
  color: #000;
}
.tab:hover a {
  transition: all 0.3s ease-in-out;
}
.tab::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 3px;
}
.active a {
  color: #ff9f00;
}
.active::after {
  border-bottom: 3px solid #ff9f00;
  transition: all 0.2s ease-in-out;
}
.banner_for_new_product {
  padding: 30px 0px;
}
.custom-b {
  cursor: pointer;
  width: 92%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 4%;
}

.custom_banner div {
  display: block;
  height: 98%;
}
.custom_banner:before,
.custom_banner:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: white;
  transition: all 0.5s ease;
}
.custom_banner:before {
  height: 0%;
  width: 1px;
}
.custom_banner:after {
  width: 0%;
  height: 1px;
}
.custom_banner:hover:before {
  height: 100%;
}
.custom_banner:hover:after {
  width: 100%;
}
.custom_banner div:before,
.custom_banner div:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: white;
  transition: all 0.5s ease;
}
.custom_banner div:before {
  width: 1px;
  height: 0%;
}
.custom_banner div:after {
  width: 0%;
  height: 1px;
}
.custom_banner div:hover:before {
  height: 100%;
}
.custom_banner div:hover:after {
  width: 100%;
}
.banner {
  position: relative;
  padding: 0 10px;
}
.banner img {
  max-width: 100%;
}

@media only screen and (max-width: 425px) {
  .title {
    display: inline-block;
  }
  .group_tab {
  display: flex;
  margin-top: 10px;
}
}
</style>

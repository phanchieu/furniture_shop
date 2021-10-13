<template>
  <div>
    <div id="featured_category">
      <div class="container">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
              Danh mục nổi bật
            </a>
          </h5>
          <div class="group_tab">
            <ul class="tabs">
              <li
                class="tab"
                @click="active = 1"
                :class="{ active: active == 1 }"
              >
                <router-link to="">Phòng khách</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 2"
                :class="{ active: active == 2 }"
              >
                <router-link to="">Phòng ăn</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 3"
                :class="{ active: active == 3 }"
              >
                <router-link to="">Phòng ngu</router-link>
              </li>
              <span>|</span>
              
              <li
                class="tab"
                @click="active = 4"
                :class="{ active: active == 4 }"
              >
                <router-link to="">phong lam viec</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="container">
    <div class="res1">
      <carousel :autoplay="true" :nav="false" :dots="false" :items="6">
        <div
          class="product_new"
          v-for="(product, index) in products"
          :key="index"
        >
          <a href="" class="img">
            <img
              :src="
                require(`@/assets/images/image_home/img_new_product/${product.img}`)
              "
              alt=""
              class="img_product"
            />
          </a>
          <div class="product_info">
            <div class="vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h6 class="product_name">
              <a href="">{{ product.name }}</a>
            </h6>
            <div class="price">
              {{ formatPrice(product.price) }}<span>đ</span>
            </div>
            <div class="buttons-coll">
              <a href="" class="custom-btn view_now"><span>Xem ngay</span></a>
            </div>
          </div>
        </div>
      </carousel>
    </div>

  <div class="res2">
      <carousel :autoplay="true" :nav="false" :dots="false" :items="4">
        <div
          class="product_new"
          v-for="(product, index) in products"
          :key="index"
        >
          <a href="" class="img">
            <img
              :src="
                require(`@/assets/images/image_home/img_new_product/${product.img}`)
              "
              alt=""
              class="img_product"
            />
          </a>
          <div class="product_info">
            <div class="vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h6 class="product_name">
              <a href="">{{ product.name }}</a>
            </h6>
            <div class="price">
              {{ formatPrice(product.price) }}<span>đ</span>
            </div>
            <div class="buttons-coll">
              <a href="" class="custom-btn view_now"><span>Xem ngay</span></a>
            </div>
          </div>
        </div>
      </carousel>
    </div>

    <div class="res3">
      <carousel :autoplay="true" :nav="false" :dots="false" :items="2">
        <div
          class="product_new"
          v-for="(product, index) in products"
          :key="index"
        >
          <a href="" class="img">
            <img
              :src="
                require(`@/assets/images/room/living_room/${product.img}`)
              "
              alt=""
              class="img_product"
            />
          </a>
          <div class="product_info">
            <div class="vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h6 class="product_name">
              <a href="">{{ product.name }}</a>
            </h6>
            <div class="price">
              {{ formatPrice(product.price) }}<span>đ</span>
            </div>
            <div class="buttons-coll">
              <a href="" class="custom-btn view_now"><span>Xem ngay</span></a>
            </div>
          </div>
        </div>
      </carousel>
    </div>


  </div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
      data() {
    return {
      active:1,
      products: [
        {
          img: "1.jpg",
          name: "Kệ TV Batista",
          price: "5990000",
        },
        {
          img: "2.jpg",
          name: "Sofa giường",
          price: "2990000",
        },

        {
          img: "3.jpg",
          name: "Ghế bành Viking Freja",
          price: "1100000",
        },
        {
          img: "4.jpg",
          name: "Đôn mềm Connemara",
          price: "4490000",
        },
        {
          img: "5.jpg",
          name: "Ghế bành NanJing",
          price: "1492500",
        },
        {
          img: "6.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
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
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1140px;
}
a {
  text-decoration: none !important;
}
li {
  list-style: none;
}
#featured_category {
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
/* css copy new_product */
a {
  text-decoration: none !important;
}
li {
  list-style: none;
}
#new_product {
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

.buttons-coll {
  text-align: center;
  margin: 20px 0px;
}

.custom-btn {
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  background-color: #459a07;
  opacity: 0.8;
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
}
.custom-btn:hover {
  background-color: white;
  color: #459a07;
}
.product {
  text-align: center;
}
.product_new {
  overflow: hidden;
  text-align: center;
}
.img {
  overflow: hidden;
}
.img_product {
  max-width: 100%;
  transition: linear 0.2s;
  background: transparent;
}
.img_product:hover {
  transform: scale(1.05);
}
.product_info {
  padding: 10px 0px;
}
.vote {
  color: #cacaca;
  font-size: 0.6rem;
  padding: 5px 0px;
}
.product_name {
  font-size: 1rem;
  font-weight: 700;
  height: 50px;
}
.product_name a {
  color: #000;
  transition: linear 0.3s;
  padding: 10px 0px;
}
.product_name a:hover {
  color: #ff9f00;
}
.price {
  color: #ff9f00;
  font-weight: 700;
  font-size: 1rem;
}
.price span {
  text-decoration-line: underline;
  font-size: 0.9rem;
  top: 1px;
}
.view_now {
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
}
.view_now span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
}
.view_now span:hover{
  color: #459a07 !important;
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
}
.banner img {
  max-width: 100%;
}
.res2 {
  display: none;
}
.res3{
  display: none;
}
/* end css copy */
@media only screen and (max-width: 800px) {
  .res1 {
    display: none;
  }

  .res2 {
    display: block;
  }
  .res3{
    display: none;
  }
}
@media only screen and (max-width: 425px) {
  .res1 {
    display: none;
  }

  .res2 {
    display: none;
  }
  .res3 {
    display: block;
  }
  .title {
    display: inline-block;
  }
  .group_tab {
  display: flex;
  margin-top: 10px;
}
}

</style>

<template>
  <div class="container" v-if="active == 2">
    <div class="">
      <carousel :autoplay="true" :nav="false" :dots="false" :responsive="{0:{items:2},600:{items:4},1000:{items:6}}">
        <div
          class="product_new"
          v-for="(product, index) in products"
          :key="index"
        >
          <a href="" class="img">
            <img
              :src="
                require(`@/assets/images/room/dining_room/${product.img}`)
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
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    props:['active'],
      data() {
    return {
      img_banner:'banner_index_intro_top.jpg',
      products: [
        {
          img: "1.jpg",
          name: "Bộ bàn ăn Stefano",
          price: "14950000",
        },
        {
          img: "2.jpg",
          name: "Bộ bàn ăn Marryland",
          price: "3990000",
        },

        {
          img: "3.jpg",
          name: "Bộ bàn ăn Edward",
          price: "1290000",
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
.container {
  max-width: 1140px;
  margin-top: 30px;
}
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
  min-height: 186px !important;
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

</style>

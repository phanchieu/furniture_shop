<template>
  <div>
    <div class="living_room">
      <div class="container">
        <div class="row">
          <div class="sidebar col-3">
            <Sidebar />
          </div>
          <div class="banner_and_product col-12 col-lg-9">
            <div class="banner">
              <img
                :src="require(`@/assets/images/banner_category/${img_banner}`)"
                alt=""
              />
              <div class="title"><h1>PHÒNG KHÁCH</h1></div>
            </div>
            <div class="filter">
              <span>Sắp xếp</span>
              <div class="select">
                <select name="select-tag" id="select-tag">
                  <option selected>Mặc định</option>
                  <option value="1">Giá tăng dần</option>
                  <option value="2">Giá giảm dần</option>
                  <option value="3">A - Z</option>
                  <option value="4">Z - A</option>
                </select>
              </div>
            </div>
            <div class="products">
              <b-row>
                <div
                  class="col-6 col-md-4 col-lg-3 product"
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
                      <a href="" class="custom-btn view_now"
                        ><span>Xem ngay</span></a
                      >
                    </div>
                  </div>
                </div>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer.vue";
import Sidebar from "../../components/sidebar.vue";

export default {
  components: { Footer, Sidebar },
  data() {
    return {
      img_banner: "banner_category.jpg",
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
        {
          img: "7.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "8.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "9.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "10.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "11.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "12.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "13.jpg",
          name: "Sofa giường Temasek",
          price: "1990000",
        },
        {
          img: "14.jpg",
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
};
</script>

<style scoped>
.living_room {
  padding: 30px 0px;
}
.container {
  max-width: 1140px;
}
a {
  text-decoration: none !important;
}
.banner {
  position: relative;
  background-color: black;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.banner img {
  opacity: 0.5;
}

.title {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.title h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
}
.filter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ebebeb;
  height: 50px;
  padding: 0 30px;
}
.filter span {
  padding: 0 10px;
}
select {
  border: 1px solid transparent;
  outline: none;
  padding: 3px 10px;
}
#select-tag * {
  border: none !important;
  outline: none;
  padding: 3px 10px;
}
.product {
  overflow: hidden;
  text-align: center;
}
.img {
  overflow: hidden;
}
.img_product {
  max-width: 100%;
  height: 186px;
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
  text-align: center;
  margin: 20px 0px;
}

.custom-btn {
  font-weight: 600;
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
@media only screen and (max-width: 800px) {
  .sidebar {
    display: none;
  }
  h1 {
    font-size: 2rem !important;
  }
}
@media only screen and (max-width: 425px) {
  h1 {
    font-size: 1.5rem !important;
  }
}
</style>

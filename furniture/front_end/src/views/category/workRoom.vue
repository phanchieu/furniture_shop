<template>
  <div>
    <div class="work_room">
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
              <div class="title"><h1>Phòng làm việc</h1></div>
            </div>
            <div class="filter">
              <span>Sắp xếp</span>
              <div class="select" @click="list_sort_on = !list_sort_on">
                <div class="sort" v-if="sort_default == true">
                  <span>Mặc định</span><i class="fas fa-angle-down"></i>
                </div>
                <div class="sort" v-if="sort_price_up == true">
                  <span>Giá tăng dần</span><i class="fas fa-angle-down"></i>
                </div>
                <div class="sort" v-if="sort_price_down == true">
                  <span>Giá giảm dần</span><i class="fas fa-angle-down"></i>
                </div>
                <div class="sort" v-if="sort_a_to_z == true">
                  <span>A - Z</span><i class="fas fa-angle-down"></i>
                </div>
                <div class="sort" v-if="sort_z_to_a == true">
                  <span>Z - A</span><i class="fas fa-angle-down"></i>
                </div>
              </div>
              <div
                class="list_sort"
                :class="{ list_sort_on: list_sort_on == true }"
                @click="list_sort_on = !list_sort_on"
              >
                <ul>
                  <!-- <li @click="sortDefault()">Mặc định</li> -->
                  <li @click="prices_gradually_increase()">Giá tăng dần</li>
                  <li @click="price_descending()">Giá giảm dần</li>
                  <li @click="a_to_z()">A - Z</li>
                  <li @click="z_to_a()">Z - A</li>
                </ul>
              </div>
            </div>
            <div class="products">
              <b-row>
                <div
                  class="col-6 col-md-4 col-lg-3 product"
                  v-for="(product, index) in computedProducts"
                  :key="index"
                  @mousedown="view(product)"
                >
                  <router-link :to="link_view_product" class="img">
                    <img
                      :src="require(`@/${product.img}`)"
                      alt=""
                      class="img_product"
                    />
                  </router-link>
                  <div class="product_info">
                    <div class="vote">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h6 class="product_name">
                      <router-link :to="link_view_product">{{
                        product.name
                      }}</router-link>
                    </h6>
                    <div class="price">
                      {{ formatPrice(product.price) }}<span>đ</span>
                    </div>
                    <div class="buttons-coll" @mousedown="view(product)">
                      <router-link
                        :to="link_view_product"
                        class="custom-btn view_now"
                        ><span>Xem ngay</span></router-link
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
import { mapMutations, mapGetters } from "vuex";

export default {
  components: { Footer, Sidebar },
  data() {
    return {
      sort_default: true,
      sort_a_to_z: false,
      sort_z_to_a: false,
      sort_price_up: false,
      sort_price_down: false,
      list_sort_on: false,
      link_view_product: "/View-product",
      img_banner: "workroom_category.jpg",
      products: [],
    };
  },
  computed: {
    ...mapGetters(["fil_color", "fil_size", "fil_material"]),
    computedProducts: function() {
      var color = this.fil_color;
      var size = this.fil_size;
      var material = this.fil_material;

      return this.products.filter((item) => {
        return (
          (color.length === 0 ||
            color.includes(item.colors[0]) ||
            color.includes(item.colors[1]) ||
            color.includes(item.colors[2]) ||
            color.includes(item.colors[3]) ||
            color.includes(item.colors[4]) ||
            color.includes(item.colors[5]) ||
            color.includes(item.colors[6]) ||
            color.includes(item.colors[7]) ||
            color.includes(item.colors[8]) ||
            color.includes(item.colors[9])) &&
          (size.length === 0 ||
            size.includes(item.sizes[0]) ||
            size.includes(item.sizes[1]) ||
            size.includes(item.sizes[2])) &&
          (material.length === 0 ||
            material.includes(item.materials[0]) ||
            material.includes(item.materials[1]) ||
            material.includes(item.materials[2]))
        );
      });
    },
  },
  methods: {
    ...mapMutations(["viewProduct"]),
    ...mapGetters(["ProductsWorkroom"]),
    getProducts() {
      let products_workroom = this.ProductsWorkroom();
      this.products = products_workroom.products;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    view(product) {
      let Data = [product];
      this.viewProduct(Data);
    },
    prices_gradually_increase() {
      this.sort_price_up = true;
      if (this.sort_price_up == true) {
        this.sort_price_down = false;
        this.sort_default = false;
        this.sort_a_to_z = false;
        this.sort_z_to_a = false;
        this.products.sort((a, b) => {
          return a.price - b.price;
        });
      }
    },
    price_descending() {
      this.sort_price_up = false;
      this.sort_price_down = true;
      this.sort_default = false;
      this.sort_a_to_z = false;
      this.sort_z_to_a = false;
      if (this.sort_price_down == true) {
        this.products.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    a_to_z() {
      this.sort_price_up = false;
      this.sort_price_down = false;
      this.sort_default = false;
      this.sort_a_to_z = true;
      this.sort_z_to_a = false;
      if (this.sort_a_to_z == true) {
        this.products.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
      }
    },
    z_to_a() {
      this.sort_price_up = false;
      this.sort_price_down = false;
      this.sort_default = false;
      this.sort_a_to_z = false;
      this.sort_z_to_a = true;
      if (this.sort_z_to_a == true) {
        this.products.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          return 0;
        });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.getProducts();
    this.scrollToTop();
  },
};
</script>

<style scoped>
.work_room {
  padding: 30px 0px;
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
ul,
ol {
  padding: 0;
  margin: 0;
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
  margin: 0 0 20px;
  position: relative;
}
.filter span {
  padding: 0 10px;
}
.select {
  width: 150px !important;
  background: white;
  border-radius: 3px 0px;
  user-select: none;
}
.sort {
  padding: 3px 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sort span {
  font-size: 15px;
  font-weight: 500;
  padding: 0;
}
.list_sort {
  background: white;
  z-index: 1;
  position: absolute;
  top: 15%;
  width: 150px;
  border-radius: 0px 0px 5px 5px;
  border: 1px solid #ebebeb;
  overflow: hidden;
  height: 0px;
  transition: 0.3s ease-in-out;
  font-size: 15px;
  font-weight: 500;
  user-select: none;
  margin-top: 30px;
}
.list_sort ul li {
  padding: 0px 10px;
  cursor: pointer;
}
.list_sort ul li:hover {
  background: #ff9f00;
}
.list_sort_on {
  height: 90px !important;
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
  object-fit: cover !important;
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

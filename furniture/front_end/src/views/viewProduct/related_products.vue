<template>
  <div>
    <div id="related_product">
      <div class="container">
        <div class="title">
          <h5>
            <a class="tp_title">
              Sản phẩm liên quan
            </a>
          </h5>
        </div>
        <div class="product">
          <b-row>
            <div
              class="col-6 col-md-4 col-lg-2"
              v-for="(product, index) in getProducts"
              :key="index"
              @mousedown="view(product)"
            >
              <router-link :to="link_view_product" class="img">
                <img
                  :src="
                    require(`@/${product.img}`)
                  "
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
                  <router-link :to="link_view_product">{{ product.name }}</router-link>
                </h6>
                <div class="price">
                  {{ formatPrice(product.price) }}<span>đ</span>
                </div>
                <div class="buttons-coll">
                  <router-link :to="link_view_product" class="custom-btn view_now"
                    ><span>Xem ngay</span></router-link
                  >
                </div>
              </div>
            </div>
          </b-row>
        </div>
        <!-- <button @click="test()">test</button> -->
      </div>
    </div>
    <!-- {{getProducts}} -->
    {{getPrd()}}
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  data() {
    return {
      link_view_product:'/View-product',
      products:[],
      get_related_prd:[],
      category_fil:'',
    };
  },
  computed: {
    getProducts: function () {
      var prd = this.get_related_prd.filter((item)=>{
        return item != this.category_fil[0]
      })
      return prd.slice(0,6).reverse()
    }
  },
  methods: {
     ...mapMutations([
      'viewProduct',
      'viewed_products_mutation'
    ]),
    ...mapGetters([
      'all_prd',
      'related_products_getter',
      'viewProduct_getter'
    ]),
    getPrd(){
     this.get_related_prd = this.related_products_getter()
     this.category_fil = this.viewProduct_getter()
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    view(product){
      let Data = [product]
      this.viewProduct(Data);
      this.scrollToTop()
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    test(){ 
        // var ctgr_product = this.category_fil 
        // var all_products = this.get_related_prd
        // var fil = all_products.filter((item)=>{
        //   return item.category == ctgr_product[0].category
        // })
        // // return fill
        // console.log(fil) 
       
    }
  },
  created(){
    // this.test()
    // this.getPrd()
  }
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
.title h5{
  margin: 0;
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
  height: 5px;
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
  margin-top: 10px !important;
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
</style>

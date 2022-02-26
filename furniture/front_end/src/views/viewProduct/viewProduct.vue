<template>
  <div>
      <div class="viewProduct">
        <!-- <form action="" method=""> -->
           <div class="container">
            <div class="row" v-for="(product,index) in info_product" :key="index">
              <div class="col-12 col-md-6">
                <div class="img_product">
                  <img :src="require(`@/${product.view_img_product[view_img]}`)" alt="">
                </div>
                <div class="slide_img">
                  <!-- <VueSlickCarousel v-bind="settings">
                  <img v-for="(slide_img,i) in product.view_img_product" :key="i" :src="require(`@/${slide_img}`)"  @click="change_img(i)">
                  </VueSlickCarousel> -->
                  <VueSlickCarousel  v-bind="settings">
                    <img v-for="(slide_img,i) in product.view_img_product" :key="i" :src="require(`@/${slide_img}`)"  @click="change_img(i)">
                  </VueSlickCarousel>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="info_product">
                  <div class="name_product">
                    <h3> {{ product.name }} </h3>
                  </div>
                  <div class="star">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                  </div>
                  <div class="price_product">
                    <span>{{ formatPrice(product.price) +'₫'}}</span>
                  </div>
                  <div class="info">
                    <div class="product_code">
                      <span>Mã sản phẩm:</span> <strong>D34</strong>
                    </div>
                    <div class="status">
                      <span>Tình trạng:</span> <strong>Còn hàng</strong>
                    </div>
                    <div class="product_type">
                      <span>Danh mục:</span> <strong>{{product.category}}</strong>
                    </div>
                    <div class="Manufacturer">
                      <span>Hãng sản xuất:</span> <strong>Uma</strong>
                    </div>
                  </div>
                  <div class="introduce_product" :class="{view_introduce:view_introduce==true}">
                      <div class="text" @click="view_introduce=!view_introduce">
                      <strong>Giới thiệu sản phẩm</strong> <span><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <p>Đang cập nhật...</p>
                  </div>
                  <div class="select_info">
                    <div class="colors">
                    <strong>Màu sắc:</strong>
                      <select v-model="Data.color">
                        <option value="" selected disabled>vui lòng chọn màu</option>
                        <option v-for="(color,index) in product.colors" :key="index"> {{ color }} </option>
                      </select>
                    </div>
                     <div class="size">
                    <strong>Kích thước:</strong>
                      <select v-model="Data.size">
                        <option value="" selected disabled>vui lòng chọn kích thước</option>
                        <option v-for="(size,i) in product.sizes" :key="i">{{ size }}</option>
                      </select>
                    </div>
                     <div class="quantity">
                    <strong>Số lượng:</strong>
                     <div>
                        <span @click="quantity_down(index)">-</span>
                      <input type="text" v-model="product.quantity">
                      <span @click="product.quantity++">+</span>
                     </div>
                    </div>
                     <transition name="fade">
                    <div class="validate">
                      <span>{{ validate }}</span>
                    </div>
                    </transition>
                    <div class="buttons-coll">
                      <button class="custom-btn btn-3" @click="pushData()"><span>Thêm vào giỏ hàng</span></button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- </form> -->
        <div class="pview-tab">
          <div class="container">
            <div class="rowo">
              <div class="gr-tab">
                <ul>
                  <li class="tab" :class="{active_tab:tab==1}" @click="tab=1">Mô tả</li>
                  <li class="tab" :class="{active_tab:tab==2}" @click="tab=2">Đánh giá</li>
                  <li class="tab" :class="{active_tab:tab==3}" @click="tab=3">Tags</li>
                </ul>
              </div>
              <div class="tab_content">
                <ul>
                   <transition name="fade">
                  <li class="content" v-if="tab==1"><p>Đang cập nhật...
                    </p></li>
                    </transition>
                    <transition name="fade">
                  <li class="content" v-if="tab==2"><p>Đang cập nhật...</p></li>
                  </transition>
                  <transition name="fade">
                  <li class="content" v-if="tab==3"><p>Đang cập nhật...</p></li>
                  </transition>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="related_prd">
        <RelatedProducts/>
        {{relatedProducts_mutations()}}
        </div>
          <transition name="fade">
        <div class="addProductSuccess" v-if="add_success == true">
         <div class="success">
            <div class="close" @click="add_success=!add_success">
            <i class="far fa-times-circle"></i>
          </div>
          <h5>Thêm vào giỏ hàng thành công </h5>
        </div>
         </div>
         </transition>
         <!-- <button @click="test()">test</button>  -->
      </div>
      {{GetProduct()}}
      <Footer/>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import carousel from 'vue-owl-carousel'
import Footer from '../../components/footer.vue'
import {mapGetters,mapMutations} from 'vuex'
import RelatedProducts from './related_products.vue'
export default {
  components: { 
  Footer,
  // carousel,
  RelatedProducts,
  VueSlickCarousel
  
  },
  data(){
    return{
      settings:{
        "centerMode": false,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 5,
        "speed": 500
      },   
      validate:'',
      add_success:false,
      view_introduce:false,
      view_img:0,
      size:'',
      color:'',
      tab:1,
      Data:
        {
          img:'',
          name:'',
          price:'',
          size:'',
          color:'',
          quantity:'',
          into_money:'',
          colors:'',
          sizes:'',
          view_img_product:[],
          quantity_in_cart:null,
        },
      info_product:[
        {
          name:'Tủ TV FreeStyle',
           view_img_product:[
             'assets/images/room/living_room/img_view_prd/1-1.jpg',
             'assets/images/room/living_room/img_view_prd/1-2.jpg',
             'assets/images/room/living_room/img_view_prd/1-3.jpg'
             ],
          quantity:1,
          price:6990000,
          img:'assets/images/room/living_room/1.jpg',
          colors:['Trắng','Đen'],
          sizes:['Lớn','Vừa','Nhỏ'],
        },
      ]
      
    }
  },
  // computed:{
  //   ...mapGetters([
  //     'viewProduct'
  //   ]),
  //   Product_view: function (){
  //     return this.viewProduct
  //   }
  // },
  methods:{
    ...mapGetters([
      'product',
      'cart'
    ]),
    ...mapMutations([
      'viewProduct',
      'relatedProducts_mutations',
      'updateCart'
    ]),
    test(){
      var a = this.product()
      console.log(a)
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    quantity_down(index){
      if(this.info_product[index].quantity--){
        if(this.info_product[index].quantity<1){
          alert('Số lượng không được nhỏ hơn 1 ^_^');
          this.info_product[index].quantity = 1 
        }
      }
    },
    GetProduct(){
      this.info_product = this.product()
    },
    change_img(i){
      this.view_img = i
    },
    pushData(){
      var Data = this.Data;
      this.Data.id = this.info_product[0].id
      this.Data.img = this.info_product[0].img
      this.Data.quantity = this.info_product[0].quantity
      this.Data.price = this.info_product[0].price
      this.Data.name = this.info_product[0].name
      this.Data.colors = this.info_product[0].colors
      this.Data.sizes = this.info_product[0].sizes
      this.Data.into_money = this.info_product[0].price*this.info_product[0].quantity
      this.Data.view_img_product = this.info_product[0].view_img_product
      this.Data.quantity_in_cart = this.info_product[0].quantity
       if(this.Data.color==''){
        this.validate= 'Vui lòng chọn màu sản phẩm !'
      }else if(this.Data.size == ''){
      this.validate = 'Vui lòng chọn kích thước !'
      }else{
      this.validate= ''
      this.updateCart(Data)
      // console.log(this.cart(),Data)
      this.add_success = true
      setTimeout(()=>{
        this.add_success = false
      },1000)
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
  created(){
    // this.test();
    // this.GetProduct();
    this.scrollToTop();
    // this.select_addCart();
  },
}
</script>

<style scoped>
.related_prd{
  display: none;
}
p{
  margin: 0;
}
li{
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}
.validate{
  display: flex;
  justify-content: flex-end;
  color: red;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  height: 20px;
}
.viewProduct{
  padding: 30px 0px;
}
.container{
  max-width: 1140px;
}
.img_product{
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.img_product img{
  max-width: 100%;
  max-height: 100%;
  transition: all .3s ease-in-out;
}
.img_product img:hover{
  transform: scale(110%)
}
.slide_img{
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-top: 10px;
  max-width: 100%;
  /* display: flex; */
  /* overflow: auto; */
  /* touch-action: auto; */
  /* background: #cacaca; */
}
.slide_img img{
  max-width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 5px;
  /* float: left; */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.slide_img .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: black !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
/* .slide_img::-webkit-scrollbar {
  height: 0px;
}
.slide_img::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
.slide_img::-webkit-scrollbar-thumb {
  background: #ff9f00; 
  border-radius: 10px;
} */
.name_product{
  font-size: 1.7rem;
}
.star{
  color: #cacaca;
  font-size: 0.6rem;
  margin: 0 0 5px;
}
.price_product{
  font-size: 1.5rem;
  color: #ff9f00;
  font-weight: 600;
}
.info{
  border-bottom: 1px solid#ebebeb;
}
.info div {
  font-size: 14px;
  margin: 0 0 5px;
}
.introduce_product{
  height: 25px;
  overflow: hidden;
  margin: 5px 0; 
  font-size: 14px;
  user-select: none;
}
.introduce_product div {
  display: flex;
  justify-content: space-between;
  line-height: 25px;
}
.introduce_product div span{
  margin: 0 5px;
}
.view_introduce{
  height: auto;
}

.select_info{
  border-top: 1px solid#ebebeb;
  padding: 10px 0;
}
.select_info div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 0 0 10px;
}
.select_info div strong{
  width: 150px;
}
.select_info div select{
  padding: 5px;
  width: 100%;
  border: 1px solid #cacaca;
  border-radius: 3px;
  outline: none;
  transition:all .3s ease-in-out;
}
.quantity div{
  border: 1px solid #cacaca;
}
.quantity div span{
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.quantity div input{
  outline: none;
  border: none;
  text-align: center;
  border-left: 1px solid #cacaca;
  border-right: 1px solid #cacaca;
  padding: 5px 0;
  width: 100%;
}
.buttons-coll {
  width: 100%;
  text-align: center;
}
button {
  margin: 10px 0;
}
.custom-btn {
  background: #459a07;
  outline: none !important;
  cursor: pointer;
  transition: all .5s ease;
  position: relative;
  display: inline-block;
  color: white;
}
.custom-btn:hover{
  background: white;
  color: #459a07;

}
.btn-3 {
  width: 100%;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #459a07;
  transition: all 0.5s ease;
}
.btn-3:before {
  height: 0%;
  width: 2px;
}
.btn-3:after {
  width: 0%;
  height: 2px;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #459a07;
  transition: all 0.5s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0%;
}
.btn-3 span:after {
  width: 0%;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}
.pview-tab{
  padding: 30px 0px;
}
.gr-tab ul{
  display: flex;
}
.gr-tab ul li{
  padding: 10px 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all .3s;
}
.gr-tab ul li:hover{
  background: #ff9f00;
  color: white;
  text-decoration: underline;
}
.tab_content{
  border: 1px solid #ebebeb;
  padding: 30px 15px;
}
.active_tab{
  color: white;
  background: #ff9f00;
  text-decoration: underline;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.addProductSuccess{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 20%;
  left: 0%;
}
.success{
  background: white;
  border: 1px solid #cacaca;
  border-radius: 5px;
  z-index: 1;
  width: 300px;
  position: fixed;
  padding: 30px 15px;
}
.success .close{
  position: absolute;
  top: 5%;
  left: 91%;
  cursor: pointer;
  color: #459a07;
}
.success h5{
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #459a07;
}

</style>
<template>
  <div>
      <div class="cart" v-if="price_total > 0">
        <div class="container">
          <div class="info">
            <table>
            <tr>
              <th>ảnh sản phẩm</th>
              <th>thông tin</th>
              <th>đơn giá</th>
              <th>số lượng</th>
              <th>thành tiền</th>
              <th>xóa</th>
            </tr>
            <tr v-for="(product,index) in products" :key="index" >
              <td> <a href=""><img :src="require(`@/assets/images/room/living_room/${product.img_product}`)" alt="" class="img_product"></a> </td>
              <td><div class="name_product"> <a href="">{{ product.name_product }}</a> </div></td>
              <td><div class="price_product"><span>{{ formatPrice(product.price_product) }}₫</span></div></td>
              <td><div class="quantity">
               <div class="down" @click="quantity_down(product)">-</div> 
              <input type="text" :value="product.quantity_product" disabled>
               <div class="up" @click="quantity_up(product)">+</div></div></td>
              <td><div class="into_money"> {{ formatPrice(product.into_money) }}₫ </div></td>
              <td><div class="delete" @click="remove(index)"> <i class="fas fa-trash-alt"></i> </div></td>
            </tr>
          </table>
          </div>
           <div class="total">
              <div>Tổng tiền:</div> <span>  {{ formatPrice(price_total) }}₫ </span>
            </div>
            <div class="buy">
              <div class="buttons-coll">
                      <router-link to="/Cart/Pay" class="custom-btn view_now">
                        <span>Tiến hành đặt hàng</span>
                      </router-link>
                    </div>
            </div>
        </div>
      </div>
      <div class="cart_mobile"  v-if="price_total > 0">
        <div class="container">
          <h3>Giỏ hàng</h3>
          <div class="info_cart_mobile"  v-for="(product,index) in products" :key="index">
           <div class="row info_mb">
              <div class="img_product_cart col-4">
              <a href=""><img :src="require(`@/assets/images/room/living_room/${product.img_product}`)" alt="" class="img_product"></a>
            </div>
            <div class="info_cart col-7">
              <div class="name_product_mb">
                <a href="">{{ product.name_product }}</a>
              </div>
              <div class="quantity quantity_mb">
               <div class="down" @click="quantity_down(product)">-</div> 
              <input type="text" :value="product.quantity_product" disabled>
               <div class="up" @click="quantity_up(product)">+</div>
               </div>
               <div class="price_product_mb">Giá: <span>{{ formatPrice(product.price_product) }}₫</span></div>
               <div class="into_money_mb"> Thành tiền: <span>{{ formatPrice(product.into_money) }}₫</span> </div>
            </div>
               <div class="delete_mb" @click="remove(index)"> <i class="fas fa-trash-alt"></i> </div>
           </div>
          </div>
          <div class="total total_mb">
              <div>Tổng tiền:</div> <span>  {{ formatPrice(price_total) }}₫ </span>
            </div>
            <div class="buy buy_mb">
              <div class="buttons-coll">
                      <router-link to="/Cart/Pay" class="custom-btn view_now">
                        <span class="btn_mb">Tiến hành đặt hàng</span>
                      </router-link>
                    </div>
            </div>
        </div>
      </div>
      <div class="no_product" v-if="price_total == 0">
        <div class="container">
          <h5>Giỏ hàng hiện chưa có sản phẩm nào!</h5>
        </div>
      </div>
      {{total_price()}}
      <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/footer.vue';
export default {
  components: { Footer },
  data(){
    return{
      active: null,
      price_total:0,
      products:[
        {
          img_product:'4.jpg',
          name_product:'Kệ TV Batista - Gỗ - Vừa - Nâu',
          price_product:5990000,
          quantity_product: 1,
          into_money: 5990000,
        },
        {
          img_product:'1.jpg',
          name_product:'Tủ TV FreeStyle',
          price_product:6990000,
          quantity_product: 1,
          into_money: 6990000,
        },
      ]
    }
  },
  methods:{
    quantity_down(product){
      if(product.quantity_product--){
        if(product.quantity_product<1){
          product.quantity_product= 1; 
          if(product.quantity_product== 1){
            product.into_money
          }
        }
        else{
          product.into_money = product.into_money - product.price_product
        }
      }
      
    },
    quantity_up(product){
      if(product.quantity_product++){
         product.into_money = product.into_money + product.price_product
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    total_price(){
      var arr = [];
      this.products.forEach((product) => {
        arr.push(product.into_money);
      });
        var total_= arr.reduce((total,num)=>{
          return total + num;
          },0);
          this.price_total = total_
          // console.log(this.price_total)
    },
    remove(index){
      this.$delete(this.products,index);
    },
    // test(){

    // }
  },
  created(){
    // this.test();
  }
}
</script>

<style scoped>
.cart{
  padding: 30px 0;
}
.cart_mobile{
  display: none;
}
.no_product .container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.no_product h5{
  font-weight: 600;
  padding: 30px 0px;
  margin: 0;
}
a{
  text-decoration: none;
}
.container{
  max-width: 1140px;
}
.info{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
tr th{
  border: 1px solid #ebebeb;
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  height: 50px;
  background: #fbfbfb;
}
tr td{
  border: 1px solid #ebebeb;
  font-size: 15px;
  text-align: center;
}
.img_product{
  max-width: 200px;
}
.name_product{
  width: 400px;
  text-align: left;
  padding: 10px;
  color: black;
}
.name_product a{
  color: black;
  transition: all .3s ease-in-out;
  padding: 10px 0px;
  display: inline-block;
}
.name_product a:hover{
  color: #ff9f00;
}
.price_product,
.into_money{
  color: #459a07;
  min-width: 120px;
  font-weight: 600;
}
.quantity{
  display: flex;
  padding: 10px;
}
.quantity input{
  width: 70px;
  outline: none;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  border-left: none;
  border-right: none;
  text-align: center;
}
.down,
.up{
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid #ebebeb;
  background: #ebebeb69;
}

.delete{
  width: 100px;
}
.delete i{
  color: grey;
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
}
.total{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0px;
}
.total span{
  color: #459a07;
  font-weight: 600;
}
.buy{
  display: flex;
  justify-content: flex-end;
}
.buttons-coll {
  text-align: center;
}

.custom-btn {
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  background-color: #459a07;
  opacity: 0.8;
  font-size: 1rem;
  color: white;
}
.custom-btn:hover {
  background-color: white;
  color: #459a07;
}
.view_now {
  border: none;
}
.view_now span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
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
.cart_mobile{
  padding: 30px 0;
}
.info_cart_mobile {
  border: 1px solid #ebebeb;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
}
.img_product_cart img{
  max-width: 100%;
}
.name_product_mb a{
  color: black;
  font-size: 14px;
  transition: all .3s ease-in-out;
}
.name_product_mb a:hover{
  color: #ff9f00;
}
.quantity_mb{
  padding: 5px 0;
}
.price_product_mb{
  font-size: 14px;
}
.price_product_mb span{
  font-weight: 600;
  color: #459a07;
}
.into_money_mb{
  font-size: 14px;
}
.into_money_mb span{
  color: #459a07;
  font-weight: 600;
}
.delete_mb{
  position: absolute;
  left: 85%;
  width: auto;
  color: #808080;
}
.total_mb{
  font-size: 14px;
}
.btn_mb{
  font-size: 14px;
  
}
@media only screen and (max-width:1024px){
  .img_product{
  max-width: 200px;
}
.name_product{
  width: 300px;
}
.price_product,
.into_money{
  min-width: 122px;
}
.quantity input{
  width: 50px;
}
.delete i{
  padding: 20px;
}
}
@media only screen and (max-width:800px){
  .img_product{
  max-width: 150px;
}
.name_product{
  width: 200px;
}
.price_product,
.into_money{
  min-width: 100px;
}
.quantity input{
  width: 40px;
}
.delete i{
  padding: 10px;
  font-size: 20px;
}
}
@media only screen and (max-width:768px){
  .img_product{
  max-width: 130px;
}
.name_product{
  width: 200px;
}
.price_product,
.into_money{
  min-width: 90px;
}
.quantity input{
  width: 40px;
}
.delete i{
  padding: 10px;
  font-size: 20px;
}
}
@media only screen and (max-width:700px){
  .cart{
    display: none;
  }
  .cart_mobile{
    display: block;
  }
}
</style>
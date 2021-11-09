<template>
  <div>
      <div class="pay">
          <div class="container">
            <!-- <h3>Thanh toán đơn hàng</h3> -->
              <div class="Buyer_Information">
                    <form action="">
                      <div class="row">
                     <div class="info col-12 col-lg-4">
                      <h4>Thông tin người mua</h4>
                        <input type="fullname" placeholder="Họ và tên">
                      <input type="email" placeholder="Email">
                      <input type="phone" placeholder="Số điện thoại">
                      <input type="address" placeholder="Địa chỉ">
                      <select name="city" id="city">
                        <option>Tỉnh/Thành</option>
                        <option v-for="(city,index) in cities" :key="index" :value="city.codename">{{city.name}}</option>
                      </select>
                      <select name="district" id="district">
                        <option>Quận/Huyện</option>
                        <option v-for="(district,index) in districts" :key="index" :value="district.codename">{{district.name}}</option>
                      </select>
                       <select name="district" id="district">
                        <option>Phường/Xã</option>
                        <option v-for="(wards,index) in TheWards" :key="index" :value="wards.codename">{{wards.name}}</option>
                      </select>
                      <textarea name="note" id="note" placeholder="Ghi chú"></textarea>
                     </div>
                      <div class="payment col-12 col-lg-4">
                        <h4>Chọn phương thức thanh toán</h4>
                        <div class="payment_methods">
                         <div class="choose">
                            <input type="radio" value="1" name="payment_methods" id="1"> <label for="1">Thanh toán chuyển khoản</label>
                         </div>
                          <div class="payment_methods_text">
                          <span>Chuyển khoản qua số tài khoản</span>
                          </div>
                        </div>
                        <div class="payment_methods">
                          <div class="choose">
                            <input type="radio" value="2" name="payment_methods" id="2"> <label for="2">Thanh toán khi nhận hàng (COD)</label>
                          </div>
                          <div class="payment_methods_text">
                          <span>Thanh toán khi nhận hàng</span>
                          </div>
                        </div>
                      </div>
                     <div class="order col-12 col-lg-4">
                       <h4>Đơn hàng</h4>
                      <div class="products" >
                       <div class="product" v-for="(product,index) in products" :key="index">
                         <div class="row">
                            <div class=" col-3 img_product">
                          <img :src="require(`@/assets/images/room/living_room/${product.img_product}`)" alt="">
                        </div>
                        <div class="info_product col-5">
                          {{ product.name_product }}
                        </div>
                        <div class="price_product col-4">
                          {{ formatPrice(product.into_money) + '₫' }}
                        </div>
                         </div>
                         
                       </div>
                       <div class="checkout_coupon col-12">
                          <input type="text" name="couponCode" id="couponCode" placeholder="Nhập mã giảm giá">
                          <button id=""><span>Áp dụng</span></button>
                        </div>
                        <div class="checkout_money">
                          <div class="info_check">
                            <span>Tạm tính:</span> <span>{{ formatPrice(TemporaryTotal)+'₫' }}</span>
                          </div>
                          <div class="info_check">
                            <span>Phí vận chuyển:</span> <span>{{ formatPrice(transport_fee)+'₫' }}</span>
                          </div>
                          <div class="info_check">
                            <span>Mã giảm giá:</span> <span>{{ formatPrice(coupon)+'₫' }}</span>
                          </div>
                        </div>
                          <div class="checkout_total_money">
                            <div class="total">
                            <span>Tổng cộng:</span> <span>{{ formatPrice(Total)+'₫' }}</span>
                            </div>
                            <div class="checkout">
                              <router-link to="/"><i class="fas fa-angle-left"></i>Quay về giỏ hàng</router-link>
                              <button type="submit">Đặt hàng</button>
                            </div>
                          </div>
                      </div>
                     </div>
                      </div>
                    </form>
              </div>
          </div>
      </div>
     <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Footer from '../../components/footer.vue'
export default {
  components:{
    Footer,
  },
  data(){
    return{
        cities:[],
        districts:[],
        TheWards:[],
        TemporaryTotal: null,
        transport_fee: 20000,
        coupon: 1000000,
        Total:null,
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
      ],
        
    }
  },
  methods:{
    getCities(){
      axios
      .get('https://provinces.open-api.vn/api/p')
      .then((cities) => {
      this.cities = cities.data
      // console.log(this.cities)
      })
    },
    getDistricts(){
      axios
      .get('https://provinces.open-api.vn/api/d')
       .then((districts) => {
      this.districts = districts.data
      // console.log(this.districts)
      })
    },
    getTheWards(){
      axios
      .get('https://provinces.open-api.vn/api/w')
       .then((TheWards) => {
      this.TheWards = TheWards.data
      // console.log(this.TheWards)
      })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    temporary_total(){
      var arr = [];
      this.products.forEach((product) => {
        arr.push(product.into_money);
      });
        var total_= arr.reduce((total,num)=>{
          return total + num;
          },0);
          this.TemporaryTotal = total_
          console.log(this.TemporaryTotal)
    },
    Total_price(){
      this.Total = (this.TemporaryTotal + this.transport_fee) - this.coupon
    }
  },
  created(){
    this.getCities();
    this.getDistricts();
    this.getTheWards();
    this.temporary_total();
    this.Total_price();
  }
}
</script>

<style scoped>
.container{
  max-width: 1140px;
}
a{
  text-decoration: none;
}
.Buyer_Information{
  padding: 20px 0;
}
/* .info{
  
} */
.info input{
  width: 100%;
  padding: 5px 10px;
  font-size: 13px;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
  margin: 5px 0;
  color: #737373;
}
.info select{
  width: 100%;
  padding: 5px;
  font-size: 13px;
  border-radius: 3px;
  border: 1px solid #ced4da;
  margin: 5px 0;
  color: #737373;
}
.info textarea{
  width: 100%;
  height: 70px;
  padding: 5px;
  font-size: 13px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #ced4da;
  margin: 5px 0;
  color: #737373;
}
.payment{

}
.payment_methods{
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 10px;
}
.choose{
  padding: 10px;
  display: flex;
  align-items: center;
}
.payment_methods_text {
  background: #ebebeb;
  padding: 10px;
  user-select: none;
  color: #737373;

}
.payment_methods label{
  color: #737373;
  margin: 0 5px;
  user-select: none;
  cursor: pointer;
}
.products{
  border: 1px solid #ebebeb;
  border-radius: 5px;
}
.product{
  border-bottom: 1px solid #ebebeb;
  padding: 10px 5px;
}

.product .img_product img{
  max-width: 100%;
}
.info_product,
.price_product{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.checkout_coupon {
  padding: 20px 10px;
  display: flex;
  justify-content: flex-end;
}
.checkout_coupon input{
  outline: none;
  padding: 5px;
  font-size: 13px;
  color: #737373;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  margin: 0px 5px;
}
.checkout_coupon button{
  background: #459a07;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  max-width: 100%;
  transition: all .3s;
}
.checkout_coupon button span{
  font-size: 15px;
  padding: 5px 10px;
}
.checkout_coupon button:hover{
  color: #459a07;
  background: transparent;
  border: 1px solid #459a07;
}
.checkout_money{
  padding: 10px 5px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.info_check{
  display: flex;
  justify-content: space-between;
}
.info_check span{
  font-size: 14px;
  color: #737373;
}
.checkout_total_money{
  padding: 10px 5px;
}
.total{
  display: flex;
  justify-content: space-between;
  color: #737373;
  padding: 10px 0px;
  font-size: 18px;
}
.checkout{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}
.checkout a{
  color: #459a07;
}
.checkout a i{
  margin: 0 5px;
}
.checkout button{
  background: #459a07;
  border-radius: 5px;
  color: white;
  border: 1px solid transparent;
  padding: 5px 15px;
  font-size: 15px;
  transition: all .3s;
}
.checkout button:hover{
  color: #459a07;
  background: transparent;
  border: 1px solid #459a07;
}
</style>
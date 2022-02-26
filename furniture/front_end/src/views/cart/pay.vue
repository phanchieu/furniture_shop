<template>
  <div>
    <div class="pay">
      <div class="container">
        <!-- <h3>Thanh toán đơn hàng</h3> -->
        <div class="Buyer_Information">
          <!-- <form action=""> -->
          <div class="row">
            <div class="info col-12 col-lg-4">
              <h4>Thông tin người mua</h4>
              <!-- <input type="fullname" placeholder="Họ và tên" class="form-control" id="validationDefault01"> -->
              <div class="validate">{{ validate.fullName }}</div>
              <input
                type="text"
                placeholder="Họ và tên"
                id="name"
                v-model="fullName"
              />
              <div class="validate">{{ validate.Email }}</div>
              <input
                type="email"
                placeholder="Email"
                id="email"
                v-model="Email"
              />
              <div class="validate">{{ validate.phone }}</div>
              <input
                type="number"
                placeholder="Số điện thoại"
                id="phone"
                v-model="phone"
              />
              <div class="validate">{{ validate.city }}</div>
              <input
                type="text"
                placeholder="Tỉnh / Thành"
                id="city"
                v-model="city"
              />
              <div class="validate">{{ validate.district }}</div>
              <input
                type="text"
                placeholder="Quận / Huyện"
                id="district"
                v-model="district"
              />
              <div class="validate">{{ validate.wards }}</div>
              <input
                type="text"
                placeholder="Phường / Xã"
                id="wards"
                v-model="wards"
              />
              <div class="validate">{{ validate.address }}</div>
              <input
                type="address"
                placeholder="Địa chỉ cụ thể"
                id="address"
                v-model="address"
              />
              <!-- <select name="city" id="city">
                        <option>Tỉnh/Thành</option>
                        <option v-for="(city,index) in cities" :key="index" :value="city.codename">{{city.name}}</option>
                      </select>
                      <select name="district" id="district">
                        <option>Quận/Huyện</option>
                        <option v-for="(district,index) in districts" :key="index" :value="district.codename">{{district.name}}</option>
                      </select>
                       <select name="wards" id="wards">
                        <option>Phường/Xã</option>
                        <option v-for="(wards,index) in TheWards" :key="index" :value="wards.codename">{{wards.name}}</option>
                      </select> -->
              <textarea
                name="note"
                id="note"
                placeholder="Ghi chú"
                v-model="note"
              ></textarea>
            </div>
            <div class="payment col-12 col-lg-4">
              <h4>Chọn phương thức thanh toán</h4>
              <div class="payment_methods">
                <div class="choose">
                  <input
                    type="radio"
                    value="1"
                    name="payment_methods"
                    id="1"
                    disabled
                  />
                  <label for="1" style="text-decoration: line-through;"
                    >Thanh toán chuyển khoản</label
                  >
                </div>
                <div class="payment_methods_text">
                  <span>Chuyển khoản qua số tài khoản</span>
                </div>
              </div>
              <div class="payment_methods">
                <div class="choose">
                  <input
                    type="radio"
                    value="2"
                    name="payment_methods"
                    id="2"
                    checked
                  />
                  <label for="2">Thanh toán khi nhận hàng (COD)</label>
                </div>
                <div class="payment_methods_text">
                  <span>Thanh toán khi nhận hàng</span>
                </div>
              </div>
            </div>
            <div class="order col-12 col-lg-4">
              <h4>Đơn hàng</h4>
              <div class="products">
                <div
                  class="product"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <div class="row">
                    <div class=" col-3 img_product">
                      <img :src="require(`@/${product.img}`)" alt="" />
                      <div class="quantity_product">
                        {{ product.quantity_in_cart }}
                      </div>
                    </div>
                    <div class="info_product col-5">
                      {{ product.name }}
                    </div>
                    <div class="price_product col-4">
                      {{ formatPrice(product.price) + "₫" }}
                    </div>
                  </div>
                </div>
                <div class="checkout_coupon col-12">
                  <div>
                    <div class="validate">{{ validate.coupon_code }}</div>
                    <input
                      type="text"
                      name="couponCode"
                      id="couponCode"
                      placeholder="Nhập mã giảm giá"
                      v-model="coupon_code"
                    />
                  </div>
                  <button @click="check_code()"><span>Áp dụng</span></button>
                </div>
                <div class="checkout_money">
                  <div class="info_check">
                    <span>Tạm tính:</span>
                    <span>{{ formatPrice(TemporaryTotal) + "₫" }}</span>
                  </div>
                  <div class="info_check">
                    <span>Phí vận chuyển:</span>
                    <span>{{ formatPrice(transport_fee) + "₫" }}</span>
                  </div>
                  <div class="info_check">
                    <span>Mã giảm giá:</span>
                    <span>{{ formatPrice(coupon) + "₫" }}</span>
                  </div>
                </div>
                <div class="checkout_total_money">
                  <div class="total">
                    <span>Tổng cộng:</span>
                    <span>{{ formatPrice(Total) + "₫" }}</span>
                  </div>
                  <div class="checkout">
                    <router-link to="/Cart"
                      ><i class="fas fa-angle-left"></i>Quay về giỏ
                      hàng</router-link
                    >
                    <button @mousedown="order()">
                      <router-link :to="to_success">Đặt hàng</router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
    {{ temporary_total() }}
    {{ Total_price() }}
    {{ getCart() }}
    <Footer />
  </div>
</template>

<script>
// import axios from 'axios'
import Footer from "../../components/footer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      fullName: "",
      Email: "",
      phone: "",
      city: "",
      district: "",
      wards: "",
      address: "",
      note: "",
      // cities:[],
      // districts:[],
      // TheWards:[],
      TemporaryTotal: null,
      transport_fee: 20000,
      coupon: 0,
      coupon_code: "ma_giam_gia",
      Total: null,
      to_success: "",
      validate: {
        fullName: null,
        Email: null,
        phone: null,
        city: null,
        district: null,
        wards: null,
        address: null,
        coupon_code: null,
      },
      products: [
        //    {
        //   img:"assets/images/room/living_room/1.jpg",
        //   name:"Tủ TV FreeStyle",
        //   price:6990000,
        //   size:"Vừa",
        //   color:"Trắng",
        //   quantity:1,
        //   into_money:6990000
        // },
      ],
    };
  },
  methods: {
    ...mapGetters(["cart", "info_prd_order"]),
    ...mapMutations(["order_success", "push_info_prd_order",{all_products:"all_product"}]),
    getCart() {
      this.products = this.cart();
      // console.log(this.cart())
    },
    // getCities(){
    //   axios
    //   .get('https://provinces.open-api.vn/api/p')
    //   .then((cities) => {
    //   this.cities = cities.data
    //   // console.log(this.cities)
    //   })
    // },
    // getDistricts(){
    //   axios
    //   .get('https://provinces.open-api.vn/api/d')
    //    .then((districts) => {
    //   this.districts = districts.data
    //   // console.log(this.districts)
    //   })
    // },
    // getTheWards(){
    //   axios
    //   .get('https://provinces.open-api.vn/api/w')
    //    .then((TheWards) => {
    //   this.TheWards = TheWards.data
    //   // console.log(this.TheWards)
    //   })
    // },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    temporary_total() {
      var arr = [];
      this.products.forEach((product) => {
        product.into_money = product.quantity_in_cart * product.price;
        arr.push(product.into_money);
      });
      var total_ = arr.reduce((total, num) => {
        return total + num;
      }, 0);
      this.TemporaryTotal = total_;
      // console.log(this.TemporaryTotal)
    },
    Total_price() {
      this.Total = this.TemporaryTotal + this.transport_fee - this.coupon;
    },
    check_code() {
      if (this.coupon_code == "ma_giam_gia") {
        this.coupon = 500000;
        this.validate.coupon_code = null;
      } else {
        this.coupon = 0;
        this.validate.coupon_code = "Vui lòng nhập đúng mã";
      }
    },
    validate_fullName() {
      if (this.fullName.trim() == "") {
        this.validate.fullName = "Vui lòng nhập họ và tên";
      } else if (this.fullName.length < 5) {
        this.validate.fullName = "Vui lòng nhập đúng họ và tên";
      } else {
        this.validate.fullName = null;
      }
      //
    },
    validate_email() {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.Email.trim() == "") {
        this.validate.Email = "Vui lòng nhập email";
      } else if (this.Email.trim().length > 0) {
        if (this.Email.match(validRegex)) {
          this.validate.Email = null;
          return true;
        } else {
          this.validate.Email = "Vui lòng nhập đúng email";
          return false;
        }
      }
    },
    validate_phone() {
      if (this.phone.trim() == "") {
        this.validate.phone = "Vui lòng nhập số điện thoại";
      } else if (
        this.phone.trim().length < 10 ||
        this.phone.trim().length > 10
      ) {
        this.validate.phone = "Vui lòng nhập đúng số điện thoại";
      } else {
        this.validate.phone = null;
      }
    },
    validate_city() {
      if (this.city.trim() == "") {
        this.validate.city = "Vui lòng nhập Tỉnh / Thành";
      } else if (this.city < 5) {
        this.validate.city = "Vui lòng nhập đúng Tỉnh / Thành";
      } else {
        this.validate.city = null;
      }
    },
    validate_district() {
      if (this.district.trim() == "") {
        this.validate.district = "Vui lòng nhập Quận / Huyện";
      } else if (this.district < 5) {
        this.validate.district = "Vui lòng nhập đúng Quận / Huyện";
      } else {
        this.validate.district = null;
      }
    },
    validate_wards() {
      if (this.wards.trim() == "") {
        this.validate.wards = "Vui lòng nhập Phường / Xã";
      } else if (this.wards < 5) {
        this.validate.wards = "Vui lòng nhập đúng Phường / Xã";
      } else {
        this.validate.wards = null;
      }
    },
    validate_address() {
      //
      if (this.address.trim() == "") {
        this.validate.address = "Vui lòng nhập Địa chỉ cụ thể";
      } else if (this.address < 5) {
        this.validate.address = "Vui lòng nhập đúng Địa chỉ cụ thể";
      } else {
        this.validate.address = null;
      }
    },
    order() {
      this.validate_fullName();
      this.validate_email();
      this.validate_phone();
      this.validate_city();
      this.validate_district();
      this.validate_wards();
      this.validate_address();
      if (
        this.validate.fullName == null &&
        this.validate.Email == null &&
        this.validate.phone == null &&
        this.validate.city == null &&
        this.validate.district == null &&
        this.validate.wards == null &&
        this.validate.address == null
      ) {
        // var data_prd = []
        var d = new Date();
        var code = Math.random()
          .toString(36)
          .substring(2, 7);
        var products = [];
        products.push(this.products);
        if (this.note.trim().length == 0) {
          this.note = "không có";
        }
        var push_data = {
          code: code,
          date_time:
            d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
          total_money: `${this.TemporaryTotal +
            this.transport_fee -
            this.coupon}`,
          status: "Đang giao",
          fullName: this.fullName,
          phone: this.phone,
          city: this.city,
          district: this.district,
          wards: this.wards,
          address: this.address,
          note: this.note,
          product_order: [...products],
        };
        // this.info_prd_order().push(push_data)
        // data_prd.push(push_data)
        this.push_info_prd_order(push_data)
        this.to_success = "/pay-success";
        console.log(push_data)
      } else {
        // this.order_success()
        this.to_success = "/Cart/Pay";
      }
    },
  },
  created() {
    // this.getCities();
    // this.getDistricts();
    // this.getTheWards();
    // this.Total_price();
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
}
a {
  text-decoration: none;
}
.validate {
  color: red;
  font-size: 12px;
  font-weight: 600;
}
.Buyer_Information {
  padding: 20px 0;
}
/* .info{
  
} */
.info input {
  width: 100%;
  padding: 5px 10px;
  font-size: 13px;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
  margin: 0px 0 10px;
  color: #737373;
}
.info select {
  width: 100%;
  padding: 5px;
  font-size: 13px;
  border-radius: 3px;
  border: 1px solid #ced4da;
  margin: 5px 0;
  color: #737373;
}
.info textarea {
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
.payment {
}
.payment_methods {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 10px;
}
.choose {
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
.payment_methods label {
  color: #737373;
  margin: 0 5px;
  user-select: none;
  cursor: pointer;
}
.products {
  border: 1px solid #ebebeb;
  border-radius: 5px;
}
.product {
  border-bottom: 1px solid #ebebeb;
  padding: 10px 5px;
}

.product .img_product img {
  max-width: 100%;
  position: relative;
}
.quantity_product {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 13px;
  background: #459a07;
  color: white;
}
.info_product,
.price_product {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.checkout_coupon {
  padding: 20px 10px;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.checkout_coupon div {
  width: 100%;
}
.checkout_coupon div input {
  width: 100%;
  outline: none;
  padding: 5px;
  font-size: 13px;
  color: #737373;
  border-radius: 5px;
  border: 1px solid #ebebeb;
}
.checkout_coupon div .validate {
  position: absolute;
  top: 0%;
  padding: 0 10px;
}
.checkout_coupon button {
  background: #459a07;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  width: 100px;
  transition: all 0.3s;
  font-size: 14px;
  padding: 0 10px;
}
.checkout_coupon button:hover {
  color: #459a07;
  background: transparent;
  border: 1px solid #459a07;
}
.checkout_money {
  padding: 10px 5px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.info_check {
  display: flex;
  justify-content: space-between;
}
.info_check span {
  font-size: 14px;
  color: #737373;
}
.checkout_total_money {
  padding: 10px 5px;
}
.total {
  display: flex;
  justify-content: space-between;
  color: #737373;
  padding: 10px 0px;
  font-size: 18px;
}
.checkout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}
.checkout a {
  color: #459a07;
}
.checkout a i {
  margin: 0 5px;
}
.checkout button {
  border: none;
  background: transparent;
}
.checkout button a {
  background: #459a07;
  border-radius: 5px;
  color: white;
  border: 1px solid transparent;
  padding: 7px 15px;
  font-size: 15px;
  transition: all 0.3s;
  cursor: pointer;
}
.checkout button a:hover {
  color: #459a07;
  background: transparent;
  border: 1px solid #459a07;
}
/* Remove Arrows/Spinners */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

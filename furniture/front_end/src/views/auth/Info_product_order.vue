<template>
  <div>
    <div class="info_order">
      <div class="container">
        <h1>Thông tin đơn hàng</h1>
        <div
          class="order"
          v-for="(order_code, i) in orders_code"
          :key="i"
          v-show="info == true"
        >
          <div class="row_1">
            <div class="table-order col-3">Mã đơn hàng</div>
            <div class="table-order col-3">Ngày</div>
            <div class="table-order col-3">Tổng tiền</div>
            <div class="table-order col-3">Trạng thái</div>
          </div>
          <div class="row_2">
            <div class="col_order order_code col-3">
              {{ order_code.code }}
            </div>
            <div class="col_order date col-3">{{ order_code.date_time }}</div>
            <div class="col_order total_money col-3">
              {{ formatPrice(order_code.total_money) }}đ
            </div>
            <div class="col_order status col-3">{{ order_code.status }}</div>
          </div>
          <div class="order_view">
            <!-- <div class="close" @click="show_product = !show_product">
            <i class="far fa-times-circle"></i>
          </div> -->
            <div class="prd">
              <!-- <div class="row_3 row_product">
                <div class="table_product col-3">Ảnh sản phẩm</div>
                <div class="table_product col-3">Tên sản phẩm</div>
                <div class="table_product col-3">Giá</div>
                <div class="table_product col-3">Số lượng</div>
              </div> -->
              <!-- <div
                class="row_prd"
                v-for="(product, i) in orders_code[i].product_order[0]"
                :key="i"
              >
                <div class="col-3 img_product">
                  <img :src="require(`@/${product.img}`)" alt="" />
                </div>
                <div class="col-3 name_product">{{ product.name }}</div>
                <div class="col-3 price_product">
                  {{ formatPrice(product.price) }}đ
                </div>
                <div class="col-3 qtt_product">{{ product.quantity_in_cart }}</div>
              </div> -->
              <div class="address col-12">
                <span>Tên: {{ orders_code[i].fullName }}</span> |
                <span>Sdt: {{ orders_code[i].phone }}</span> |
                <span
                  >Địa chỉ: {{ orders_code[i].city }},
                  {{ orders_code[i].district }},
                  {{ orders_code[i].wards }}</span
                >
                | <span>ĐC cụ thể: {{ orders_code[i].address }}</span> |
                <span>Ghi chú: {{ orders_code[i].note }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="none_info" v-show="info == null">
          <div class="no_name"></div>
          <div class="text"><h3>Bạn chưa đặt đơn hàng nào</h3></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer.vue";
import { mapGetters } from "vuex";
export default {
  components: { Footer },
  data() {
    return {
      index: 0,
      orders_code: [],
      info: null,
    };
  },
  methods: {
    ...mapGetters(["info_prd_order"]),
    getData() {
      this.orders_code = this.info_prd_order();
      if (this.info_prd_order().length > 0) {
        this.info = true;
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>

.none_info .no_name {
  background: #459a07;
  padding: 10px 0px;
}
.none_info .text {
  text-align: center;
  padding: 10px 0px;
  border: 1px solid #ebebeb;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
.info_order {
  padding: 30px 0px;
}
.info_order h1 {
  padding: 5px 0px;
  margin: 0;
  font-weight: 600;
}
.order {
  border-radius: 2px;
  border: 1px solid #ebebeb;
  border-top: transparent;
  position: relative;
  margin-bottom: 30px;
}
.order:first-child {
  margin-top: 0px;
}
.row_1,
.row_2,
.row_3,
.row_prd {
  display: flex;
}
.table-order {
  background: #459a07;
  text-align: center;
  border-left: 1px solid #ebebeb;
  padding: 5px 0px;
  color: white;
}
.col_order {
  text-align: center;
  border-left: 1px solid #ebebeb;
  padding: 5px;
  overflow: auto;
  font-weight: 600;
}
.col_order:first-child,
.table-order:first-child {
  border-left: none;
}
.order_code {
  text-transform: uppercase;
  cursor: default;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
}
/* .order_code:hover {
  color: #ff9f00;
} */
.address {
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 2px 5px;
  font-size: 15px;
}
.table_product {
  background: #ff9f00;
  color: white;
  border-left: 1px solid #ebebeb;
  padding: 5px 0px;
}
.table_product:first-child {
  border-left: none;
}
.order_view {
  text-align: center;
  /* border: 1px solid #ebebeb; */
  /* display: none; */
  position: relative;
  z-index: 2;
}
.row_prd {
  border: 1px solid #ebebeb;
  border-left: none;
  border-right: none !important;
  font-weight: 600;
  overflow: auto;
}
.img_product,
.name_product,
.price_product,
.qtt_product {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ebebeb;
  background: white;
}
.price_product {
  text-align: center;
  border-left: 1px solid #ebebeb;
  padding: 5px;
  overflow: auto;
  font-weight: 600;
}
.img_product {
  border-left: none;
}
.img_product img {
  max-height: 100px;
  max-width: 100px;
}
.show {
  display: block;
}
/* .close {
  position: absolute;
  top: 0%;
  left: 98%;
  z-index: 1;
  color: #459a07;
  cursor: pointer;
} */
@media only screen and (max-width: 345px) {
  .col_order {
    font-size: 14px;
  }
  .row_prd div {
    font-size: 13px;
    font-weight: 600;
  }
}
</style>

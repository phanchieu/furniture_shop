<template>
  <div>
    <div class="container">
      <div class="pay_request_success">
        <div class="success">
          <h1>
            Đặt hàng thành công<span><i class="far fa-check-circle"></i></span>
          </h1>
        </div>
        <div class="view">
          <router-link to="/Info-product-order">
            Xem thông tin đơn hàng đã đặt
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Footer from "../../components/footer.vue";
export default {
  components: { Footer },
  methods: {
    ...mapMutations(["order_success"]),
  },
  created() {
    this.order_success();
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
}
.pay_request_success {
  padding: 30px 0;
}
.success,
.view {
  display: flex;
  align-items: center;
  justify-content: center;
}
.success h1 {
  font-weight: 600;
  font-size: 1.5rem;
}
.success span {
  color: #459a07;
  margin: 0 10px;
}
.view a {
  color: #459a07;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.view a:hover {
  color: #ff9f00;
}
</style>

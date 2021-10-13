<template>
  <div class="introduce">
    <div class="container-fluid">
      <div class="introduce_1">
        <div class="container">
          <div class="in4 row">
            <div class="span col-12 xs-col-6 sm-col-6 col-md-6 col-lg-3">
              <span class="hov hov1">
                <span class="boder_father boder_father1">
                  <span class="boder_child boder_child1">
                    <span class="icon icon1">
                      <i class="fas fa-shipping-fast"></i>
                    </span>
                  </span>
                </span>
              </span>
              <div class="text">
                <div class="box_text">
                  <strong>Giao hàng miễn phí</strong> <br />
                  <span>Đơn hàng trên 500k</span>
                </div>
              </div>
            </div>

            <div class="span col-12 xs-col-6 sm-col-6 col-md-6 col-lg-3">
              <span class="hov hov2">
                <span class="boder_father boder_father2">
                  <span class="boder_child boder_child2">
                    <span class="icon icon2">
                      <i class="fas fa-redo-alt"></i>
                    </span>
                  </span>
                </span>
              </span>
              <div class="text">
                <div class="box_text">
                  <strong>Đổi trả miễn phí</strong> <br />
                  <span>Trong 7 ngày đầu</span>
                </div>
              </div>
            </div>

            <div class="span col-12 xs-col-6 sm-col-6 col-md-6 col-lg-3">
              <span class="hov hov3">
                <span class="boder_father boder_father3">
                  <span class="boder_child boder_child3">
                    <span class="icon icon3">
                      <i class="fas fa-headset"></i>
                    </span>
                  </span>
                </span>
              </span>
              <div class="text">
                <div class="box_text">
                  <strong>Tư vấn trực tuyến</strong> <br />
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>

            <div class="span col-12 xs-col-6 sm-col-6 col-md-6 col-lg-3">
              <span class="hov hov4">
                <span class="boder_father boder_father4">
                  <span class="boder_child boder_child4">
                    <span class="icon icon4">
                      <i class="fas fa-shield-alt"></i>
                    </span>
                  </span>
                </span>
              </span>
              <div class="text">
                <div class="box_text">
                  <strong>Thanh toán</strong> <br />
                  <span>Bảo mật thanh toán</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="container">
        <div class="row">
          <carousel
            :autoplay="false"
            :dots="false"
            :nav="false"
            :responsive="{
              0: { items: 1, margin: 20 },
              600: { items: 3, margin: 30 },
            }"
          >
            <div
              class="banner_introduce"
              v-for="(img_title, index) in imgs_introduce"
              :key="index"
            >
              <img
                :src="
                  require(`@/assets/images/image_home/banner_introduce/${img_title.image}`)
                "
                alt=""
              />
              <div class="link_product">
                <h5>{{ img_title.title }}</h5>
                <div class="buttons-coll">
                  <a href="" class="custom-btn btn-3"><span>Xem ngay</span></a>
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      imgs_introduce: [
        { image: "banner_index_new_products.jpg", title: "Hàng mới về" },
        {
          image: "banner_index_promotion_products.jpg",
          title: "Khuyến mãi hot",
        },
        {
          image: "banner_index_best_seller_products.jpg",
          title: "Bán chạy nhất",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1140px;
}
a {
  text-decoration: none !important;
}

.introduce {
  padding: 30px 0px;
}
.introduce_1 {
  padding: 30px 0px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.span {
  display: flex;
  border-right: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
}
.span:hover .hov {
  transition: linear 0.3s;
  opacity: 0.8;
}
.span:hover .hov1 {
  background-color: #2976d2;
}
.span:hover .hov2 {
  background-color: #de2c2c;
}
.span:hover .hov3 {
  background-color: #27d367;
}
.span:hover .hov4 {
  background-color: #ac29d1;
}
.hov {
  padding: 2px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
}
.boder_father {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  opacity: 0.9;
}
.boder_father1 {
  border: 2px solid #2976d2;
}
.boder_father2 {
  border: 2px solid #de2c2c;
}
.boder_father3 {
  border: 2px solid #27d367;
}
.boder_father4 {
  border: 2px solid #ac29d1;
}
.boder_child {
  border: 2px solid transparent;
}

.icon {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  opacity: 0.9;
}
.icon1 {
  background-color: #2976d2;
}
.icon2 {
  background-color: #de2c2c;
}
.icon3 {
  background-color: #27d367;
}
.icon4 {
  background-color: #ac29d1;
}
.icon i {
  color: white;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 5px;
}
.text strong {
  width: 100%;
}
.banner_introduce {
}
.banner_introduce img {
  max-width: 100%;
  position: relative;
}
.link_product {
  position: absolute;
  top: 20%;
  width: 93.5%;
  text-align: center;
}
.link_product h5 {
  text-transform: uppercase;
  color: white;
  font-size: 1.79rem;
  font-weight: 700;
  text-shadow: 1px 1px 1px #459a07;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.banner_introduce:hover .link_product h5 {
  text-shadow: 1px 1px 1px #ff9f00;
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
  background-color: white;
  opacity: 0.8;
  font-size: 1rem;
  color: #459a07;
  text-transform: uppercase;
}

.btn-3 {
  width: 130px;
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
  transition: all 0.3s ease;
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
  transition: all 0.3s ease;
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

@media only screen and (max-width: 768px) {
  .btn-3[data-v-3b3f4da5] {
    width: 110px;
    height: 35px;
    line-height: 35px;
  }
  .span {
    border: 1px solid #ebebeb;
  }
  .link_product h5 {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .custom-btn {
    font-size: 0.85rem;
  }
  .buttons-coll {
    margin: 10px 0px;
  }
}
@media only screen and (max-width: 540px) {
  .link_product {
    top: 40%;
    width: 100%;
  }
  .link_product {
    top: 25%;
    width: 100%;
  }
  .link_product h5 {
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>

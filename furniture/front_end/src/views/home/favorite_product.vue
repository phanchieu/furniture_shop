<template>
  <div>
    <div id="favorite_product">
      <div class="container">
        <div class="title">
          <h5>
            <a class="tp_title">
              Sản phẩm được ưa thích
            </a>
          </h5>
        </div>
        <div class="product">
          <b-row>
            <div
              class="col-6 col-md-4 col-lg-2 product_new"
              v-for="(product, index) in products"
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
                <div class="buttons-coll">
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
    <div class="banner_for_favorite_product">
      <div class="container">
        <div class="banner">
          <img
            class=""
            :src="require(`@/assets/images/image_home/banner/${img_banner}`)"
            alt=""
          />
          <div class="custom-b custom_banner">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      link_view_product: "/View-product",
      img_banner: "banner_index_intro_bottom.jpg",
      products: [
        {
          img: "assets/images/room/living_room/2.jpg",
          view_img_product: [
            "assets/images/room/living_room/img_view_prd/2-1.jpg",
            "assets/images/room/living_room/img_view_prd/2-2.jpg",
            "assets/images/room/living_room/img_view_prd/2-3.jpg",
          ],
          name: "Ghế bành Domingo",
          price: 3290000,
          quantity: 1,
          colors: ["Nâu"],
          sizes: ["Lớn", "Vừa"],
          category: "Phòng khách",
          materials: ["Gỗ - Bọc Da"],
        },
        {
          img: "assets/images/room/room_decorations/2.jpg",
          view_img_product: [
            "assets/images/room/room_decorations/img_view_prd/2-1.jpg",
          ],
          name: "Móc dán tường Elektra",
          price: 13000,
          quantity: 1,
          colors: ["Trắng"],
          sizes: ["Lớn", "Vừa"],
          category: "Đồ trang trí",
          materials: ["Khác"],
        },
        {
          img: "assets/images/room/room_decorations/4.jpg",
          view_img_product: [
            "assets/images/room/room_decorations/img_view_prd/4-1.jpg",
            "assets/images/room/room_decorations/img_view_prd/4-2.jpg",
          ],
          name: "Thiết bị chốt an toàn Elektra",
          price: 39000,
          quantity: 1,
          colors: ["Trắng"],
          sizes: ["Lớn", "Vừa", "Nhỏ"],
          category: "Đồ trang trí",
          materials: ["Khác"],
        },
        {
          img: "assets/images/room/kitchen/2.jpg",
          view_img_product: [
            "assets/images/room/kitchen/img_view_prd/2-1.jpg",
            "assets/images/room/kitchen/img_view_prd/2-2.jpg",
          ],
          name: "Túi đựng đồ giặt Lynn",
          price: 49000,
          quantity: 1,
          colors: ["Trắng", "Đỏ"],
          sizes: ["Lớn", "Vừa"],
          category: "Phòng bếp",
          materials: ["Khác"],
        },
        {
          img: "assets/images/room/dining_room/1.jpg",
          view_img_product: [
            "assets/images/room/dining_room/img_view_prd/1-1.jpg",
            "assets/images/room/dining_room/img_view_prd/1-2.jpg",
            "assets/images/room/dining_room/img_view_prd/1-3.jpg",
          ],
          name: "Bộ bàn ăn Stefano",
          price: 14950000,
          quantity: 1,
          colors: ["Xám", "Vàng"],
          sizes: ["Lớn", "Vừa"],
          category: "Phòng ăn",
          materials: ["Gỗ - Bọc Vải"],
        },
        {
          img: "assets/images/room/dining_room/3.jpg",
          view_img_product: [
            "assets/images/room/dining_room/img_view_prd/3-1.jpg",
            "assets/images/room/dining_room/img_view_prd/3-2.jpg",
          ],
          name: "Bộ bàn ăn Edward",
          price: 1290000,
          quantity: 1,
          colors: ["Vàng", "Nâu đen"],
          sizes: ["Vừa", "Nhỏ"],
          category: "Phòng ăn",
          materials: ["Gỗ"],
        },
        {
          img: "assets/images/room/room_decorations/1.jpg",
          view_img_product: [
            "assets/images/room/room_decorations/img_view_prd/1-1.jpg",
            "assets/images/room/room_decorations/img_view_prd/1-2.jpg",
            "assets/images/room/room_decorations/img_view_prd/1-3.jpg",
          ],
          name: "Đệm ngồi Viking Kudde",
          price: 1190000,
          quantity: 1,
          colors: ["Đỏ", "Ghi"],
          sizes: ["Vừa", "Nhỏ"],
          category: "Đồ trang trí",
          materials: ["Gỗ - Bọc Vải"],
        },
        {
          img: "assets/images/room/room_decorations/3.jpg",
          view_img_product: [
            "assets/images/room/room_decorations/img_view_prd/3-1.jpg",
            "assets/images/room/room_decorations/img_view_prd/3-2.jpg",
          ],
          name: "Miếng bọc cạnh bàn Elektra",
          price: 11000,
          quantity: 1,
          colors: ["Trắng"],
          sizes: ["Lớn", "Nhỏ"],
          category: "Đồ trang trí",
          materials: ["Khác"],
        },
        {
          img: "assets/images/room/kitchen/1.jpg",
          view_img_product: [
            "assets/images/room/kitchen/img_view_prd/1-1.jpg",
            "assets/images/room/kitchen/img_view_prd/1-2.jpg",
          ],
          name: "Khăn tay Soft",
          price: 39000,
          quantity: 1,
          colors: ["Xanh", "Nâu"],
          sizes: ["Lớn", "Nhỏ"],
          category: "Phòng bếp",
          materials: ["Khác"],
        },
        {
          img: "assets/images/room/work_room/2.jpg",
          view_img_product: [
            "assets/images/room/work_room/img_view_prd/2-1.jpg",
            "assets/images/room/work_room/img_view_prd/2-2.jpg",
          ],
          name: "Kệ sách FreeStyle",
          price: 6490000,
          quantity: 1,
          colors: ["Trắng", "Vàng"],
          sizes: ["Vừa", "Nhỏ"],
          category: "Phòng làm việc",
          materials: ["Gỗ"],
        },
        {
          img: "assets/images/room/dining_room/2.jpg",
          view_img_product: [
            "assets/images/room/dining_room/img_view_prd/2-1.jpg",
            "assets/images/room/dining_room/img_view_prd/2-2.jpg",
          ],
          name: "Bộ bàn ăn Marryland",
          price: 3990000,
          quantity: 1,
          colors: ["Vàng"],
          sizes: ["Lớn", "Nhỏ"],
          category: "Phòng ăn",
          materials: ["Gỗ"],
        },
        {
          img: "assets/images/room/living_room/9.jpg",
          view_img_product: [
            "assets/images/room/living_room/img_view_prd/9-1.jpg",
          ],
          name: "Bàn cafe Cabaret",
          price: 1390000,
          quantity: 1,
          colors: ["Đen"],
          sizes: ["Vừa", "Nhỏ"],
          category: "Phòng khách",
          materials: ["Gỗ"],
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["viewProduct"]),
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    view(product) {
      let Data = [product];
      this.viewProduct(Data);
    },
  },
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
#favorite_product {
  padding: 30px 0px;
}
.title {
  content: "";
  left: 0;
  right: 0;
  border-bottom: 3px solid #ebebeb;
}
.title h5 {
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
  height: 3px;
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
.product_new {
  overflow: hidden;
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
.banner_for_favorite_product {
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

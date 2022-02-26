<template>
  <div>
    <div class="sidebar">
      <div class="category_product">
        <div class="title">
          <h5>
            <a class="tp_title">
              Danh mục sản phẩm
            </a>
          </h5>
        </div>
        <div class="sidebar_category">
          <ul class="list">
            <li class="list_category">
              <router-link to="/Living-room">Phòng khách</router-link>
            </li>
            <li class="list_category">
              <router-link to="/Dining-room">Phòng ăn</router-link>
            </li>
            <li class="list_category">
              <router-link to="/Beb-room">Phòng ngủ</router-link>
            </li>
            <li class="list_category">
              <router-link to="/Work-room">Phòng làm việc</router-link>
            </li>
            <li class="list_category">
              <router-link to="/Kitchen">Bếp</router-link>
            </li>
            <li class="list_category">
              <router-link to="/Decorations">Đồ trang trí</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="material">
        <div class="title">
          <h5>
            <a class="tp_title">
              Chất Liệu
            </a>
          </h5>
        </div>
        <div class="filter">
          <div
            class="checkbox"
            v-for="(material, index) in materials"
            :key="index"
          >
            <input
              type="checkbox"
              :id="material.material"
              class="fas fa-check"
              :value="material.material"
              v-model="fil_material"
            />
            <label :for="material.material">{{ material.material }}</label>
          </div>
        </div>
      </div>
      <div class="size">
        <div class="title">
          <h5>
            <a class="tp_title">
              Kích thước
            </a>
          </h5>
        </div>
        <div class="filter">
          <div class="checkbox" v-for="(size, index) in sizes" :key="index">
            <input
              type="checkbox"
              :id="size.size"
              class="fas fa-check"
              :value="size.size"
              v-model="fil_size"
            />
            <label :for="size.size">{{ size.size }}</label>
          </div>
        </div>
      </div>
      <div class="color">
        <div class="title">
          <h5>
            <a class="tp_title">
              Màu sắc
            </a>
          </h5>
        </div>
        <div class="filter filter-color">
          <div class="checkbox" v-for="(color, index) in colors" :key="index">
            <input
              type="checkbox"
              :id="color.color"
              class="fas fa-check"
              :value="color.color"
              v-model="fil_color"
            />
            <label :for="color.color">{{ color.color }}</label>
          </div>
        </div>
      </div>
      <div class="Selling_products">
        <div class="title">
          <h5>
            <a class="tp_title">
              Sản phẩm bán chạy
            </a>
          </h5>
        </div>
        <div class="products">
          <div
            class="product"
            v-for="(product, index) in Selling_products"
            :key="index"
            @mouseover="view(product)"
          >
            <div class="img_prd">
              <router-link :to="link_view_product"
                ><img :src="require(`@/${product.img}`)" alt=""
              /></router-link>
            </div>
            <div class="name_price_prd">
              <div class="name_prd">
                <h6>
                  <router-link :to="link_view_product">{{
                    product.name
                  }}</router-link>
                </h6>
              </div>
              <div class="price">
                {{ formatPrice(product.price) }}<span>đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    {{ test() }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      link_view_product: "/View-product",
      fil_color: [],
      fil_size: [],
      fil_material: [],
      materials: [
        { material: "Gỗ - Bọc Vải" },
        { material: "Gỗ" },
        { material: "Gỗ - Bọc Da" },
        { material: "Khác" },
      ],
      sizes: [{ size: "Lớn" }, { size: "Vừa" }, { size: "Nhỏ" }],
      colors: [
        { color: "Nâu đen" },
        { color: "Đen" },
        { color: "Xanh" },
        { color: "Vàng" },
        { color: "Đỏ" },
        { color: "Trắng" },
        { color: "Xám" },
        { color: "Ghi" },
        { color: "Nâu" },
        { color: "Hồng tím" },
      ],
      Selling_products: [
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
      ],
    };
  },
  computed: {},
  methods: {
    ...mapMutations([
      "viewProduct",
      "filter_colors",
      "filter_sizes",
      "filter_materials",
    ]),

    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    view(product) {
      let Data = [product];
      this.viewProduct(Data);
    },
    test() {
      this.filter_colors(this.fil_color);
      this.filter_sizes(this.fil_size);
      this.filter_materials(this.fil_material);
      // console.log(this.fil_color)
    },
  },
  created() {},
};
</script>

<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
ul {
  padding: 0;
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
  cursor: default;
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
.sidebar_category,
.filter,
.products {
  padding: 0px 15px;
  margin: 15px 0px;
  background-color: #ebebeb;
}
.category_product,
.material,
.size,
.color,
.Selling_products {
  padding: 15px 0px 0px;
}
.list_category {
  width: 100%;
}
.list_category a {
  display: inline-block;
  width: 100%;
  color: #000;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  padding: 5px 0px;
}
.list_category a:hover {
  color: #ff9f00;
  margin-left: 5px !important;
}
.checkbox {
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  appearance: none;
  height: 15px;
  width: 16px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(104, 96, 96);
  color: transparent;
  font-size: 10px;
}
input[type="checkbox"]:checked {
  background-color: #459a07 !important;
  border: none;
  color: white;
}
label {
  width: 100%;
  margin: 3px 5px 0px;
  cursor: pointer;
  font-size: 15px;
  user-select: none;
  transition: all 0.2s ease-in-out;
  padding: 3px 0px;
}
label:hover {
  color: #ff9f00;
}
.filter-color {
  height: auto;
}
.product {
  height: 100px;
  padding: 10px 0px;
  display: flex;
  border-bottom: 1px dashed white;
  align-items: center;
}
.img_prd img {
  max-width: 70px;
  max-height: 70px;
}
.name_prd h6 a {
  color: #000;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  width: 100%;
  padding: 5px 0px;
}
.name_prd h6 a:hover {
  color: #ff9f00;
}
.name_price_prd {
  margin-left: 10px !important;
}
.price {
  color: #ff9f00;
  font-weight: 600;
}
.price span {
  text-decoration: underline;
}
::-webkit-scrollbar {
  width: 3px;
}
</style>

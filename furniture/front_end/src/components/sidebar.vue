<template>
  <div>
    <div class="sidebar">
      <div class="category_product">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
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
            <a href="" class="tp_title">
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
            />
            <label :for="material.material">{{ material.material }}</label>
          </div>
        </div>
      </div>
      <div class="size">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
              Kích thước
            </a>
          </h5>
        </div>
        <div class="filter">
          <div class="checkbox" v-for="(size, index) in sizes" :key="index">
            <input type="checkbox" :id="size.size" class="fas fa-check" />
            <label :for="size.size">{{ size.size }}</label>
          </div>
        </div>
      </div>
      <div class="color">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
              Màu sắc
            </a>
          </h5>
        </div>
        <div class="filter filter-color">
          <div class="checkbox" v-for="(color, index) in colors" :key="index">
            <input type="checkbox" :id="color.color" class="fas fa-check" />
            <label :for="color.color">{{ color.color }}</label>
          </div>
        </div>
      </div>
      <div class="Selling_products">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
              Sản phẩm bán chạy
            </a>
          </h5>
        </div>
        <div class="products">
          <div
            class="product"
            v-for="(product, index) in Selling_products"
            :key="index"
          >
            <div class="img_prd">
              <a href=""
                ><img
                  :src="
                    require(`@/assets/images/image_home/favorite_product/${product.img}`)
                  "
                  alt=""
              /></a>
            </div>
            <div class="name_price_prd">
              <div class="name_prd">
                <h6>
                  <a href="">{{ product.name }}</a>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      materials: [
        { material: "Khung gỗ - Bọc Vải" },
        { material: "Gỗ" },
        { material: "Gồ - Bọc Da" },
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
        { img: "1.jpg", name: "Ghế bành Domingo", price: "3290000", id: 1 },
        {
          img: "7.jpg",
          name: "Đệm ngồi Viking Kudde",
          price: "1190000",
          id: 2,
        },
        { img: "2.jpg", name: "Móc dán tường Elektra", price: "13000", id: 3 },
      ],
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
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
}
.tp_title:hover {
  color: #459a07;
}
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
  height: 155px;
  overflow: auto;
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

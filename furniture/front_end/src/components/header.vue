<template>
  <div>
    <div id="header">
      <div class="container-fluid header-top">
        <div class="container">
          <div class="row">
            <div class="address col-7">
              <span
                ><strong
                  ><b-icon class="icon-house" icon="house-door-fill"></b-icon
                ></strong>
                Tầng 3, Hà Thành Plaza, 102 Thái Thịnh, Trung Liệt, Đống Đa, Hà
                Nội</span
              >
              <div class="phone">
                <b-icon class="icon-headphones" icon="headphones"></b-icon>
                <a href="tel:0355322912"><strong>0355322912</strong></a>
              </div>
            </div>
            <div class="freeship col-5">
              <p>
                Miễn phí vận chuyển với đơn hàng trên 500.000đ
                <b-icon class="icon-truck" icon="truck"></b-icon>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="header-main container-fluid">
        <div class="container">
          <b-row>
            <div
              class="menu-mobile col-2 col-sm-2 col-md-2 "
              @click="show = !show"
              v-if="show == true"
              style="z-index:0;"
            >
              <b-icon class="icon-list" icon="list"> </b-icon>
            </div>
            <div
              class="menu-mobile col-2 col-sm-2 col-md-2 "
              @click="show = !show"
              v-else
            >
              <b-icon class="icon-list" icon="list"> </b-icon>
            </div>
            <div class="col-8 col-sm-8 col-md-8 col-lg-3">
              <div class="logo">
                <a href="/"><img src="../assets/logo.png" alt=""/></a>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <div id="search">
                <div class="search">
                  <input
                    type="text"
                    class="input-search"
                    placeholder="Nhập từ khóa cần tìm..."
                  />
                  <button class="search-button">
                    <b-icon class="icon-search" icon="search"> </b-icon>
                  </button>
                </div>
                <div class="cart-mobile">
                  <router-link to="/Cart"
                   style="background:transparent;"
                    ><b-icon class="icon-cart" icon="cart-check-fill"> </b-icon
                    ><strong class="cart_product_number"> 1 </strong></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-0 col-lg-5">
              <div class="login_cart">
                <div class="login">
                  <div class="icon_user">
                    <b-icon class="icon-user" icon="person-fill"> </b-icon>
                  </div>

                  <div class="signUp_signIn">
                    <strong>Tài khoản</strong>
                    <div class="log_or_reg">
                      <router-link to="/Login">Đăng nhập</router-link>
                      <span>*</span>
                      <router-link to="/Register">Đăng ký</router-link>
                    </div>
                  </div>
                </div>

                <div class="cart">
                  <div class="icon_cart">
                    <b-icon class="icon-cart" icon="cart-check-fill"> </b-icon>
                  </div>
                  <router-link to="/Cart" class="show_cart" style="background-color:transparent;">
                    <span class="in_cart">
                      <strong>Giỏ hàng</strong>
                      <span><b>1</b> <span>Sản phẩm</span></span>
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </b-row>
        </div>
      </div>
      <div class="header-foot container-fluid">
        <div class="container">
          <div class="menu ">
            <ul class="list_menu">
              <li class="list">
                <router-link to="/">Trang chủ</router-link>
              </li>
              <li class="list">
                <router-link to="/Living-room">phòng khách</router-link>
              </li>
              <li class="list">
                <router-link to="/Dining-room">phòng ăn</router-link>
              </li>
              <li class="list">
                <router-link to="/Beb-room">phòng ngủ</router-link>
              </li>
              <li class="list">
                <router-link to="/Work-room">phòng làm việc</router-link>
              </li>
              <li class="list">
                <router-link to="/Kitchen">bếp</router-link>
              </li>
              <li class="list">
                <router-link to="/Decorations">đồ trang trí</router-link>
              </li>
              <li class="list">
                <router-link to="/News">tin tức</router-link>
              </li>
              <li class="list">
                <router-link to="/Contact">liên hệ</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="list-menu-mobile" v-if="show" style="left:0px;">
        <div class="clos-icon">
          <b-icon class="icon-clos" icon="x-square" @click="show = !show">
          </b-icon>
        </div>

        <div class="menu-login-mobile">
          <div class="menu_mobile">
            <h5
              @click="(show_menu = true), (show_login = false)"
              v-if="show_menu == true"
              class="active-left"
              :class="{ active: show_menu == true }"
            >
              Danh mục
            </h5>
            <h5 v-else @click="(show_menu = true), (show_login = false)">
              Danh mục
            </h5>
            <transition name="fade">
              <ul
                class="menu_mb active-tag"
                v-show="show_menu"
                v-if="show_menu"
              >
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/">Trang chủ</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Living-room">phòng khách</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Dining-room">phòng ăn</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Beb-room">Phòng ngủ</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Work-room">Phòng làm việc</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Kitchen">Bếp</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Decorations">Đồ trang trí</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/News">Tin tức</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Contact">Liên hệ</router-link>
                </li>
              </ul>
            </transition>
          </div>
          <div class="account">
            <h5
              @click="(show_menu = false), (show_login = true)"
              v-if="show_login == true"
              class="active-right"
              :class="{ active: show_login == true }"
            >
              Tài khoản
            </h5>
            <h5 @click="(show_menu = false), (show_login = true)" v-else>
              Tài khoản
            </h5>
            <transition name="fade">
              <ul
                class="login-mobile active-tag"
                v-show="show_login"
                v-if="show_login"
              >
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/Login">Đăng nhập</router-link>
                </li>
                <li class="list-mobile" @click="show = !show">
                  <router-link to="/register">Đăng ký</router-link>
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
      <div class="list-menu-mobile" v-else style="left:-1000px;"></div>
      <Breadcrumbs :items="items">{{getRouter()}}</Breadcrumbs>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumbs from './breadcrumbs.vue';
export default {
  components: {
    Breadcrumbs,
    },
  data() {
    return {
      show: false,
      show_menu: true,
      show_login: false,
      items:[],
    };
  },
  methods: {
    getRouter(){
      this.items = this.$route.matched
      // console.log(this.$route);
    }
  },
  created() {
    // this.getRouter();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin:0;
  box-sizing: border-box;
}

.container {
  max-width: 1140px;
}
a {
  text-decoration: none !important;
}
li {
  list-style: none !important;
}
.router-link-exact-active,
.active {
  background: #ff9f00;
  height: 100%;
}
.router-link-exact-active:hover {
  color: white !important;
}
.header-top {
  border-bottom: 1px solid #ebebeb;
  padding: 7px 0px;
  background: #f4f4f4;
}
.address {
  display: flex;
  text-align: center;
}
.address span {
  margin: 0px 15px 0px 0px;
  font-size: 15px;
}
.icon-house {
  color: #acacac;
  margin-right: 5px;
  font-size: 17px;
}
.phone a {
  color: #459a07;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
}
.phone a:hover {
  color: #fda91e;
}
.icon-headphones {
  color: #acacac;
  font-size: 17px;
  margin-right: 3px;
}
.freeship {
  font-size: 15px;
  text-align: center !important;
}
.icon-truck {
  margin-left: 1px;
  font-size: 17px;
  color: #acacac;
}
.header-main {
  padding: 15px 0px;
}
#search {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.search {
  width: 90%;
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 2px;
}
.search .input-search {
  width: 90%;
  outline: none;
  border: none;
  padding: 0px 10px;
  font-size: 15px;
}
.search-button {
  outline: none;
  border: transparent;
  outline: none;
  padding: 4px 10px;
  background: transparent;
}
.login_cart {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.login,
.cart {
  border: 1px solid #ebebeb;
  display: flex;
  border-radius: 5px;
}
.icon_user,
.icon_cart {
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ebebeb;
}
.icon-user,
.icon-cart {
  font-size: 25px !important;
  color: #459a07;
}
.signUp_signIn,
.show_cart {
  margin: 0px 5px;
  width: 130px;
}
.signUp_signIn strong,
.in_cart strong {
  width: 100%;
  display: block;
  font-size: 15px;
  color: black;
}
.log_or_reg {
  line-height: 15px !important;
}
.log_or_reg a {
  color: black;
  transition: all 0.2s ease-in-out !important;
  font-size: 13px;
}
.log_or_reg a:hover {
  color: #fda91e;
}
.show_cart {
  margin: 0px 5px;
  text-align: center;
}
.in_cart span {
  line-height: 15px !important;
}
.in_cart span b,
.in_cart span span {
  font-size: 13px;
  color: black;
}
.header-foot {
  background: black;
}
.menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list {
  display: flex;
  float: left;

  transition: all 0.15s ease-in-out;
}
.list:hover {
  background: #ff9f00;
}
.list a {
  color: white;
  text-transform: uppercase;
  font-size: 17px;
  padding: 10px 10px;
}
.menu-mobile {
  display: none;
}
.cart-mobile {
  display: none;
}
.list-menu-mobile {
  display: none;
}
@media only screen and (max-width: 1100px) {
  .list a {
    font-size: 14px;
  }
  .phone {
    display: none;
  }
}
@media only screen and (max-width: 992px) {
  .header-top {
    display: none;
  }
  .login {
    display: none;
  }
  .login_cart {
    display: none;
  }

  .menu-mobile {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .icon-list {
    color: green;
    font-size: 30px !important;
    z-index: 123;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .logo img {
    min-width: 110%;
  }
  .search {
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
  }
  .cart-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ced4da;
    border-radius: 3px;
    position: relative;
  }
  .cart-mobile a {
    padding: 3px 40px;
  }
  .icon-cart {
    font-size: 20px !important;
  }
  .cart_product_number {
    font-size: 10px;
    color: black;
    position: absolute;
    left: 85%;
    top: -30%;
    background: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #acacac;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-foot {
    display: none;
  }
  /* menu-mobile */

  .list-menu-mobile {
    /* margin-top:30px ; */
    left: -1000px;
    top: 0;
    display: block;
    transition: all 0.5s ease-in-out;
    position: absolute;
    z-index: 3;
    background: white;
    width: 100%;
    height: 100vh;
  }
  .clos-icon {
    display: flex;
    justify-content: flex-end;
  }
  .icon-clos:hover {
    color: tomato !important;
  }
  .icon-clos {
    font-size: 25px;
    margin: 20px;
    color: #acacac;
    cursor: pointer;
    /* transition: all .2s ease-in-out; */
  }
  .menu-login-mobile {
    width: 100%;
  }
  .menu-login-mobile h5 {
    padding: 10px 0px;
    width: 50%;
    float: left;
    text-align: center;
    cursor: pointer;
    color: black;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
  .active {
    color: #ff9f00 !important;
  }
  .active-left {
    border-top: 1px solid #acacac;
    border-right: 1px solid #acacac;
    border-radius: 2px;
    border-bottom: 1px solid #acacac;
    background: #f3f3f3;
  }
  .active-right {
    border-top: 1px solid #acacac;
    border-left: 1px solid #acacac;
    border-radius: 2px;
    border-bottom: 1px solid #acacac;
    background: #f3f3f3;
  }
  .active-tag {
    background: #f3f3f3;
  }
  .menu_mobile {
    width: 100%;
  }
  .menu_mb,
  .login-mobile {
    position: absolute;
    left: 0%;
    width: 100%;
    margin-top: 40px;
  }
  .menu_mobile h5 {
    position: relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .list-mobile {
    width: 100%;
    border-bottom: 1px solid #acacac;
    background: #f3f3f3;
    z-index: 100;
  }
  .list-mobile a {
    color: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    font-size: 17px;
    font-weight: 600;
    display: inline-block;
    width: 100%;
  }
  .list-mobile a:hover {
    color: #ff9f00;
    padding-left: 20px;
  }
  .list-mobile:first-child {
    border-top: 1px solid #acacac;
  }
}
</style>

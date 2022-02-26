<template>
  <div>
    <div id="footer">
      <div class="container-fluid">
        <div class="container">
          <b-row>
            <div
              class="address_phone_mail_content_logo col-12 col-md-6 col-lg-6"
            >
              <a href="/" class="logo"
                ><img src="../assets/logo.png" alt=""
              /></a>
              <div class="content">
                <p>
                  Nỗ lực nghiên cứu những tập quán, thói quen sinh hoạt của
                  người dân Việt Nam trong cuộc sống tại các đô thị, Libra
                  Furniture đã cho ra đời một phương pháp tiếp cận chuẩn mực,
                  khoa học để giải quyết hết những mối lo ngại của bạn khi về
                  nhà mới. Luôn sẵn sàng giúp đỡ bạn với đội ngũ kiến trúc sư uy
                  tín và tận tâm phục vụ.
                </p>
              </div>
              <div class="address_phone_mail">
                <div class="address address-all">
                  <router-link to="/Contact" class="icon-address">
                    <b-icon icon="geo-alt-fill" class="ic_address"></b-icon>
                  </router-link>
                  <router-link to="/Contact"
                    >Tầng 3, Hà Thành Plaza, 102 Thái Thịnh, Trung Liệt, Đống
                    Đa, Hà Nội</router-link
                  >
                </div>
                <div class="phone address-all">
                  <a href="tel:0355322912" class="icon-address">
                    <b-icon icon="telephone-fill" class="ic_address"></b-icon>
                  </a>
                  <a href="tel:0355322912">0355322912</a>
                </div>
                <div class="mail address-all">
                  <a href="mailto:phanchieudev@gmail.com" class="icon-address">
                    <b-icon icon="envelope-fill" class="ic_address"></b-icon>
                  </a>
                  <a href="mailto:phanchieudev@gmail.com">phanchieudev@gmail.com</a>
                </div>
              </div>
            </div>
            <div class="about_social-network col-12 col-sm-12 col-md-6">
              <b-row>
                <div class="about col-5 col-lg-6">
                  <h6>THÔNG TIN</h6>
                  <ul class="menu">
                    <li class="list">
                      <router-link to="/">Trang chủ</router-link>
                    </li>
                    <li class="list"><router-link to="#">Giới thiệu</router-link></li>
                    <li class="list"><router-link to="">Sản phẩm</router-link></li>
                    <li class="list"><router-link to="/News">Tin tức</router-link></li>
                    <li class="list"><router-link to="/Contact">Liên hệ</router-link></li>
                  </ul>
                </div>
                <div class="social-network col-7 col-md-7 col-lg-6">
                  <b-row>
                    <div class="col-12">
                      <ul class="list-network">
                        <li class="network">
                          <a href="#"><b-icon icon="facebook"></b-icon></a>
                        </li>
                        <li class="network">
                          <a href="#"><b-icon icon="twitter"></b-icon></a>
                        </li>
                        <li class="network">
                          <a href="#"><b-icon icon="google"></b-icon></a>
                        </li>
                        <li class="network">
                          <a href="#"><b-icon icon="youtube"></b-icon></a>
                        </li>
                        <li class="network">
                          <a href="#"><b-icon icon="instagram"></b-icon></a>
                        </li>
                      </ul>
                      <div class="link col-12">
                        <iframe
                          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=230&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                          width="230"
                          height="120"
                          style="border:none;overflow:hidden"
                          scrolling="no"
                          frameborder="0"
                          allowfullscreen="true"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                    </div>
                  </b-row>
                </div>
              </b-row>
            </div>
          </b-row>
        </div>
      </div>
    </div>
    <div class="end">
      <span>phanchieudev@gmail.com</span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto !important;
}
a {
  text-decoration: none !important;
}
ul{
  padding: 0;
  margin: 0;
}
li {
  list-style: none !important;
}
#footer {
  background: black;
  padding: 40px 0px;
}
.address_phone_mail_content_logo {
  border-right: 1px solid;
}
.logo img {
  width: 40%;
  margin-bottom: 15px;
}
.content {
  font-size: 14px;
  color: #919191;
  padding-bottom: 20px;
}
.address-all {
  line-height: 50px;
  display: flex;
}

.address-all a:first-child {
  border: 1px solid;
  border-radius: 50%;
  color: #919191;
  font-size: 15px !important;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 10px 0px !important;
  transition: all 0.2s ease-in-out !important;
}
.address-all a:first-child .ic_address {
  margin: 10px;
}
.address-all a:last-child {
  font-size: 13px;
  line-height: 35px;
  color: #919191;
  display: inline-block;
  width: 100%;
  transition: all 0.2s ease-in-out !important;
}
.address-all a:hover {
  color: #ff9f00;
}
.address-all:hover a {
  color: #ff9f00;
}

.about h6 {
  color: white;
}
.menu {
  margin-top: 30px;
  padding: 0px !important;
}
.list {
  display: block;
  width: 100%;
}
.list a {
  color: #919191;
  font-size: 13px;
  transition: all ease 0.3s;
  width: 100%;
  display: inline-block;
}
.list:last-child {
  margin-bottom: 20px;
}
.list a:hover {
  color: #ff9f00;
  margin-left: 10px;
}
.list-network {
  display: flex;
  justify-content: space-around;
}
.network a {
  border-radius: 50%;
  border: 1px solid;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 13px;
  transition: all 0.2s ease-in-out;
}
.network a:hover {
  color: #ff9f00;
  font-size: 19px;
}
.link {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow: hidden;
}
.end {
  padding: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #919191;
  border-top: 1px solid #919191;
}
@media only screen and (max-width: 560px) {
  .address_phone_mail_content_logo {
    border: none;
    padding-bottom: 15px;
  }
  .menu,
  .link {
    margin-top: 15px;
  }
  .link {
    height: 120px;
  }
}
</style>

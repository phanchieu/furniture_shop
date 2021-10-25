<template>
  <div>
      <div id="contact">
        <div class="container">
          <div class="contact">
            <h1>Liên hệ với chúng tôi</h1>
            <div class="info">
              <h3>ĐỊA CHỈ</h3>
              <div class="info_address">
                <b-row>
                  <div class="address col-12 col-md-4">
                  <h5>Funiture</h5>
                  <span>Tầng 3, Hà Thành Plaza, 102 Thái Thịnh, Trung Liệt, Đống Đa, Hà Nội</span>
                </div>
                <div class="phone_mail col-12 col-md-4">
                  <div class="phone">
                    <h5>ĐIỆN THOẠI</h5>
                    <a href="tel:19002812"><span>1900.2812</span></a>
                  </div>
                  <div class="mail">
                    <h5>EMAIL</h5>
                    <a href="mailto:contact@contact.vn"><span>contact@contact.vn</span></a>
                  </div>
                </div>
                <div class="open_time col-12 col-md-4">
                  <h5>thời gian mở cửa</h5>
                  <span>Thứ 2 - Thứ 6: 8h30 - 15h30</span>
                  <br>
                  <span>Thứ 7: 8h00 - 12h00</span>
                  <br>
                  <span>Chủ nhật, ngày lễ, ngày tết: Nghỉ</span>
                </div>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      <!-- <Map/> -->
      <Info-contact/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/footer.vue'
import InfoContact from './info_contact.vue'
// import Map from "./map.vue"

export default {
  components: { 
    // Map,
    InfoContact,
    Footer 
    },

}
</script>


<style scoped>
#contact{
padding: 30px 0;
}
a{
  text-decoration: none;
}
.container{
  max-width: 1140px;
}
.contact{
  margin: 0 0 30px;
}
.contact h1{
  font-weight: 600;
  font-size: 2.5rem;
  margin: 0 0 30px;
}
.info h3{
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 10px;
  font-size: 1.5rem;
}
.info_address{
  border: 1px solid #ebebeb;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 0 0 10px;
}
.address,.phone_mail,.open_time{
  margin: 10px 0px;
}
h5{
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 10px;
}
.mail,.phone{
  margin: 0 0 10px;
}
.mail a,.phone a{
  color: #919191;
}
span{
  font-size: 14px;
}
</style>
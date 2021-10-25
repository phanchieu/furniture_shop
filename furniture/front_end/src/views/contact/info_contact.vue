<template>
  <div>
      <div class="info_contact">
        <div class="container">
          <h3>thông tin liên hệ</h3>
        <form action="">
         <b-row>
          <input type="fullname" placeholder="Họ tên *">
          <input type="email" placeholder="Email *">
          <input type="phone" placeholder="Điện thoại *">
          <input type="address" placeholder="Địa chỉ *">
          <textarea name="content" id="content" rows="5" placeholder="Nhập nội dung"></textarea>
         </b-row>
         <div class="buttons-coll">
   <button class="custom-btn btn-submit"><span>Gửi liên hệ</span></button>
</div>
        </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  max-width: 1140px;
}
h3{
  text-transform: uppercase;
  font-weight: 600 !important;
  font-size: 1.5rem;
}
form{
  padding: 0px 10px;
}
input,textarea{
  margin: 0px 0px 20px;
  padding: 5px 10px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  font-size: .9rem;
  font-weight: 500;
  outline: none;
}
.buttons-coll {
  margin-left: -10px;
}
.custom-btn {
  padding: 10px 25px;
  font-weight: 500;
  font-size: 14px;
  background: #459a07;
  outline: none !important;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  position: relative;
  display: inline-block;
}
.custom-btn:hover{
  background: white;
}

.btn-submit {
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-submit span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
}
.btn-submit span:hover{
  color: #459a07;
}
.btn-submit:before,
.btn-submit:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #459a07;
  transition: all 0.4s ease-in-out;
}
.btn-submit:before {
  height: 0%;
  width: 2px;
}
.btn-submit:after {
  width: 0%;
  height: 2px;
}
.btn-submit:hover:before {
  height: 100%;
}
.btn-submit:hover:after {
  width: 100%;
}
.btn-submit span:before,
.btn-submit span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #459a07;
  transition: all 0.4s ease-in-out;
}
.btn-submit span:before {
  width: 2px;
  height: 0%;
}
.btn-submit span:after {
  width: 0%;
  height: 2px;
}
.btn-submit span:hover:before {
  height: 100%;
}
.btn-submit span:hover:after {
  width: 100%;
}
</style>
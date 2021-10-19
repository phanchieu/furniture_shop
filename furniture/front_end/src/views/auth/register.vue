<template>
  <div>
     <div class="register">
       <div class="container">
         <b-row>
           <div class="col-12 title">
             <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
             <span class="text">Nếu chưa có tài khoản vui lòng đăng ký tại đây.</span>
           </div>
           <form action="">
               <div class="row">
                 <div class="name_email col-12 col-md-6">
               <label for="fullname" class="form-label">Họ tên:</label>
               <input type="fullname" id="fullname" placeholder="Họ tên" class="form-control" autocomplete="off" required>
               <label for="email" class="form-label">Email:</label>
               <input type="email" placeholder="Email" id="email" class="form-control" autocomplete="off" required>
             </div>
             <div class="phone_password col-12 col-md-6">
               <label for="phone" class="form-label">Điện thoại:</label>
               <input type="phone" id="phone" placeholder="Điện thoại" class="form-control" autocomplete="off" required>
               <label for="password" class="form-label">Mật khẩu:</label>
               <input type="password" placeholder="Mật khẩu" id="password" class="form-control" required>
             </div>
              <div class="buttons-coll">
              <button type="submit" class="custom-btn btn-submit"><span>Đăng ký</span></button>
               </div>
             </div>
           </form>
         </b-row>
       </div>
     </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/footer.vue'

export default {
 components: {
        Footer,
    },
}
</script>

<style scoped>
.register{
  margin: 30px 0px;
}
.container{
  max-width: 1140px;
}
.title{
  margin: 0 0 30px;
}
.title h3{
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0 0 20px;
  text-transform: uppercase;
}
label{
  width: 100%;
  font-weight: 700 !important;
}
input{
  width: 100%;
  margin: 0 0 20px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-weight: 400;
  color: #495057;
}
/* css btn */
.custom-btn {
  outline: none !important;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  position: relative;
  background: #459a07;
  display: inline-block;
}
.custom-btn:hover{
    background: white;
}
.btn-submit {
  border: none;
}
.btn-submit span {
  display: block;
  padding: 5px 30px;
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
  transition: all 0.5s ease-in-out;
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
  transition: all 0.5s ease-in-out;
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
.form-control:focus{
    box-shadow: 0 0 0 0 transparent !important;
    border: 1px solid #ced4da;
}
</style>
<template>
  <div>
    <div class="container">
    </div>
      <div id="login">

      <div class="container">
          <div class="login_forgotPw">
              <b-row>
            <div class="title col-12"><h3>ĐĂNG NHẬP TÀI KHOẢN</h3></div>
              <div class="col-12 col-md-6 login">
                  <b-row>
                      <div class="text col-12"><span>Nếu bạn đã có tài khoản, đăng nhập tại đây. Hoặc </span><router-link to="/Register">Đăng ký</router-link></div>
                      <div class="email_pass col-12">
                          <form action="">
                              <div class="username">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" name="email" id="email" placeholder="Email" required autocomplete="off">
                              </div>
                              <div class="password" >
                                <label for="password" class="form-label">Mật khẩu:</label>
                                <input type="password" name="password" id="password"  class="form-control" placeholder="Mật khẩu" required>
                              </div>
                            <div class="buttons-coll">
                            <button type="submit" class="custom-btn btn-submit"><span>Đăng nhập</span></button>
                            </div>
                          </form>
                      </div>
                  </b-row>
              </div>
              <div class="col-12 col-md-6 forgotPw">
                   <div class="text col-12"><span>Bạn quên mật khẩu? Nhập địa chỉ email để lấy mật khẩu qua email.</span></div>
                   <div class="forgot_pass">
                       <form action="">
                           <div class="forgotPw">
                            <label for="forgotPw" class="form-label">Email:</label>
                            <input type="email" name="email_forgotPass" id="forgotPw" class="form-control" placeholder="Email" required>
                           </div>
                            <div class="buttons-coll">
                            <button type="submit" class="custom-btn btn-submit"><span>Lấy lại mật khẩu</span></button>
                            </div>
                       </form>
                   </div>
              </div>
              </b-row>
          </div>
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
    methods:{

    }
}
</script>

<style scoped>
#login{
    padding: 30px 0;
}
.login{
    padding-bottom: 30px;
}
.container{
    max-width: 1140px;
}
.title{
    margin: 0 0 20px;
}
.title h3{
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
}
.text{
    margin: 0 0 10px;
}
.text a{
    color: #fda91e;
    font-weight: 600;
    padding: 10px 0px;
}
.text a:hover{
    color: #459a07;
    transition: all .3s ease-in-out;
}
.username,.password,.forgotPw{
    margin: 0 0 15px;
}
label{
    width: 100%;
    margin: 0 0 5px;
    font-weight: 700 !important;
}
input{
    width: 100%;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ced4da;
    font-weight: 400;
    color: #495057;
}
form button{
    margin-top: 20px;
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
    position: relative;
    display: block;
    padding: 7px 30px;
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
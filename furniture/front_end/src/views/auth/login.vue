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
                      <div class="validate">{{ validate }}</div>
                      <div class="email_pass col-12">
                          <!-- <form action=""> -->
                              <div class="username">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" name="email" id="email" placeholder="Email" required autocomplete="on" v-model="email">
                              </div>
                              <div class="password" >
                                <label for="password" class="form-label">Mật khẩu:</label>
                                <input type="password" name="password" id="password"  class="form-control" placeholder="Mật khẩu" required v-model="password">
                              </div>
                            <div class="buttons-coll">
                            <button type="submit" class="custom_btn btn_submit btn_login" @mousedown="login()"><span><router-link :to="login_success">Đăng nhập</router-link></span></button>
                            </div>
                          <!-- </form> -->
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
                            <button class="custom_btn btn_submit"><span>Lấy lại mật khẩu</span></button>
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
import {mapMutations} from 'vuex'
import Footer from '../../components/footer.vue'
export default {
    components: {
        Footer,
    },
    data(){
      return{
        login_success:'',
        email:'',
        password:'',
        validate:null,
      }
    },
    methods:{
      ...mapMutations([
        'check_login'
      ]),
      validate_form(){
      var get_data = [localStorage.getItem('account')]
      var check = JSON.parse(get_data)
        if(this.email.trim().length == 0 || this.password.trim().length == 0){
          this.validate = 'Vui lòng không bỏ trống các trường'
        }else if(this.email == check.email && this.password == check.password){
            this.validate = null
          }else{this.validate = 'Tài khoản hoặc mật khẩu không đúng'}
        
      },
      login(){
        this.validate_form()
        if(this.validate == null){
          this.login_success = '/'
          var user_login = true
          localStorage.setItem('login', JSON.stringify(user_login))
          this.check_login()
        }
        
      },
      creat_user(){
        if(localStorage.getItem('account') == null){
          var user =[{
            id:'user',
            fullname:'user',
            email:'user',
            phone:'user',
            password:'user'
          }]
          localStorage.setItem('account', JSON.stringify(user));
        }
      },
      
    scrollToTop() {
      window.scrollTo(0,0);
    },
    },
    created(){
      this.scrollToTop()
      this.creat_user()
    }
}
</script>

<style scoped>
.validate{
  color: red;
  font-weight: 600;
  font-size: 14px;
}
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
.forgotPw .text{
  padding: 0;
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
.custom_btn {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    position: relative;
    background: #459a07;
}
.custom_btn:hover{
    background: white;
}
.btn_submit {
  border: none;
}
.btn_submit span {
  display: block;
  padding: 7px 30px;
  color: white;
}
.btn_login{
  border: none;
}
.btn_login span{
  padding: 0;
}
.btn_submit span a{
  color: white;
  display: inline-block;
  padding: 7px 30px;
  text-decoration: none;
}
.btn_submit:hover span{
    color: #459a07;
}
.btn_submit:hover a{
    color: #459a07;
}
.btn_submit:before,
.btn_submit:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #459a07;
  transition: all 0.5s ease-in-out;
}
.btn_submit:before {
  height: 0%;
  width: 2px;
}
.btn_submit:after {
  width: 0%;
  height: 2px;
}
.btn_submit:hover:before {
  height: 100%;
}
.btn_submit:hover:after {
  width: 100%;
}
.btn_submit span:before,
.btn_submit span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #459a07;
  transition: all 0.5s ease-in-out;
}
.btn_submit span:before {
  width: 2px;
  height: 0%;
}
.btn_submit span:after {
  width: 0%;
  height: 2px;
}
.btn_submit span:hover:before {
  height: 100%;
}
.btn_submit span:hover:after {
  width: 100%;
}
.form-control:focus{
    box-shadow: 0 0 0 0 transparent !important;
    border: 1px solid #ced4da;
}

</style>
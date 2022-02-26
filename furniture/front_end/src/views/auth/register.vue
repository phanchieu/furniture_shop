<template>
  <div>
     <div class="register">
       <div class="container">
         <b-row>
           <div class="col-12 title">
             <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
            <span class="text">Nếu chưa có tài khoản vui lòng đăng ký tại đây.</span>
            <div class="register_success" v-if="register_success == true">
              <h3>Đăng ký thành công <span><i class="far fa-check-circle"></i></span> </h3>
            </div>
           </div>
           <!-- <form action=""> -->
             <div class="col-12">
               <div class="row">
                 <div class="name_email col-12 col-md-6">
               <label for="fullname" class="form-label">Họ tên:</label>
               <input type="fullname" id="fullname" placeholder="Họ tên" class="form-control" autocomplete="on" required v-model="fullname">
               <div class="validate">{{ validate.fullname }}</div>
               <label for="email" class="form-label">Email:</label>
               <input type="email" placeholder="Email" id="email" class="form-control" autocomplete="on" required v-model="email">
               <div class="validate">{{ validate.email }}</div>
             </div>
             <div class="phone_password col-12 col-md-6">
               <label for="phone" class="form-label">Điện thoại:</label>
               <input type="phone" id="phone" placeholder="Điện thoại" class="form-control" autocomplete="on" required v-model="phone">
               <div class="validate">{{ validate.phone }}</div>
               <label for="password" class="form-label">Mật khẩu:</label>
               <input type="password" placeholder="Mật khẩu" id="password" class="form-control" required v-model="password">
               <div class="validate">{{ validate.password }}</div>
             </div>
              <div class="buttons-coll">
              <button @mousedown="register()" class="custom-btn btn-submit"><span>Đăng ký</span></button>
               </div>
             </div>
           </div>
           <!-- </form> -->
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
    data(){
      return{
        fullname:'',
        email:'',
        phone:'',
        password:'',
        //
        register_success:false,
        //
        validate:{
        fullname:null,
        email:null,
        phone:null,
        password:null,
        },
      }
    },
    methods:{
      validate_fullname(){
        if(this.fullname.trim().length == 0){
          this.validate.fullname = 'Vui lòng nhập Họ tên'
        }else if(this.fullname.length > 0){
          if(this.fullname.trim().length<5){
            this.validate.fullname = 'Vui lòng nhập đúng Họ tên'
          }else{
            this.validate.fullname = null
          }
        }
      },
      validate_email(){
      var get_data = [localStorage.getItem('account')]
      var check = JSON.parse(get_data)
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(this.email.trim().length == 0){
        this.validate.email = 'Vui lòng nhập Email'
      }else if(this.email.trim().length>0){
        if(this.email.match(validRegex)){
          if(this.email == check.email){
            this.validate.email = 'Email này đã tồn tại'
          }else{this.validate.email = null}
          return true;
        }else {
          this.validate.email = 'Vui lòng nhập đúng Email'
          return false;
        }
      }
      },
      validate_phone(){
        var get_data = [localStorage.getItem('account')]
        var check = JSON.parse(get_data)
        if(this.phone.trim().length == 0){
          this.validate.phone = 'Vui lòng nhập Số điện thoại'
        }else if(this.phone.trim().length>0){
          if(this.phone.length<10 || this.phone.length > 10){
            this.validate.phone = 'Vui lòng nhập đúng Số điện thoại'
          }else if(this.phone == check.phone){
            this.validate.phone = 'Số điện thoại đã tồn tại'
          }
          else{this.validate.phone = null}
        }

      },
      validate_password(){
        if(this.password.trim().length == 0){
          this.validate.password = 'Vui lòng nhập Mật khẩu'
        }else if(this.password.length > 0){
          if(this.password.length < 6){
            this.validate.password = 'Mật khẩu phải lớn hơn 6 ký tự'
          }else{this.validate.password = null}
        }

      },
      validate_form(){
        this.validate_fullname()
        this.validate_email()
        this.validate_phone()
        this.validate_password()
      },
      register(){
        this.validate_form()
        if(this.validate.fullname == null &&
        this.validate.email == null &&
        this.validate.phone == null &&
        this.validate.password == null){
        let id_user = [localStorage.getItem('account')].length;
        var register_user = ({
              id:id_user,
              fullname:this.fullname,
              email:this.email,
              phone:this.phone,
              password:this.password
              })
        localStorage.setItem('account', JSON.stringify(register_user));
        this.register_success = true
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
      }
    },
    created(){
      this.creat_user()
    }
}
</script>

<style scoped>
.validate{
  color: red;
  font-size: 13px;
  font-weight: 600;
  height: 20px;
  margin: 0 0 5px;
  transition: all .3s ease-in-out;
}
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
  margin: 0;
}
input{
  width: 100%;
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
.register_success h3{
  margin: 0;
  font-size: 15px;
  padding: 10px 0px;
  color: #459a07;
}
</style>
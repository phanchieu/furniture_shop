<template>
  <div>
      <div class="container">
          <div class="login_forgotPw">
              <b-row>
            <div class="title col-12"><h3>ĐĂNG NHẬP TÀI KHOẢN</h3></div>
              <div class="col-6 login">
                  <b-row>
                      <div class="text col-12"><span>Nếu bạn đã có tài khoản, đăng nhập tại đây. Hoặc </span><a href="">đăng ký</a></div>
                      <div class="email_pass col-12">
                          <form action="">
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="email">
                            <label for="password">Password:</label>
                            <input type="password" name="password" id="password">
                            <button type="submit">Đăng nhập</button>
                          </form>
                      </div>
                  </b-row>
              </div>
              <div class="col-6 forgotPw">
                   <div class="text col-12"><span>Bạn quên mật khẩu? Nhập địa chỉ email để lấy mật khẩu qua email.</span></div>
                   <div class="forgot_pass">
                       <form action="">
                            <label for="forgotPw">Email:</label>
                            <input type="email" name="email_forgotPass" id="forgotPw">
                       </form>
                   </div>
              </div>
              </b-row>
          </div>
      </div>
  </div>
</template>

<script>
export default {
props:['active_category'],
}
</script>

<style>

</style>
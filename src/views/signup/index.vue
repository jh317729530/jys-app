<template>
  <div class="signup-container">
      <el-form ref="signupForm" :model="loginForm" label-position="left" label-width="0px"
      class="card-box signup-form">
        <el-form-item label="用户名">
            <el-input v-model="signupForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="signupForm.password"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="signupForm.name"></el-input>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      signupForm: {
        username: '',
        password: '',
        name: ''
      }
    }
  }
}
</script>


<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .signup-container {
    position: fixed;
    height: 100%;
    width:100%;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
  }

  .signup-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
</style>


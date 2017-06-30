<template>
  <div class="login">
    <div>
      <header class="login-header">
        <div class="w">
          <router-link to="/">欢迎登陆</router-link>
        </div>
      </header>
      <div class="bg-box">
        <div class="login-bg w">
          <div class="from">
            <div class="from-item">
              <div><a href="#">扫码登陆</a></div>
              <div><a href="#">账号登陆</a></div>
            </div>
            <div style="margin-top: 23px;">
              <el-form :model="ruleForm2" ref="ruleForm2" class="demo-ruleForm">
                <el-form-item label="账号" label-width="64px">
                  <el-input v-model="ruleForm2.pass"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass" label-width="64px">
                  <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="clickLogin">
              <el-button type="primary">登陆</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-header {
    background-color: #ccc;
    height: 80px;
  }

  .bg-box {
    background-color: #e93854;
    height: 475px;
    .login-bg {
      background: url("../assets/images/loginBg.png") no-repeat;
      background-size: cover;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  /*登陆块*/
  .from {
    background-color: #fff;
    width: 346px;
    .from-item {
      display: flex;
      align-items: center;
      height: 54px;
      font-size: 18px;
      justify-content: center;
      border-bottom: 1px solid #f4f4f4;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        a {
          padding: 20px;
        }
      }
    }
    .el-input {
      width: 260px;
    }
    .clickLogin {
      width: 302px;
      margin: 0 auto 20px;
      button {
        width: 100%;
      }
    }
  }

</style>

<template>
  <div class="login v2">
    <div class="wrapper">
      <div class="dialog dialog-shadow" style="display: block; margin-top: -362px;">
        <div class="title">
          <div class="return-btn ng-hide"></div>
          <h4>使用 Smartisan ID 登录在线商城</h4><a class="close"></a></div>
        <div class="content">
          <form autocomplete="off" novalidate>
            <ul class="common-form">
              <li class="username border-1p">
                <div class="input invalid">
                  <span>账号</span>
                  <input type="text" v-model="ruleForm.userName">
                </div>
              </li>
              <li>
                <div class="input invalid">
                  <span>密码</span>
                  <input type="text" v-model="ruleForm.userPwd">
                </div>
              </li>
            </ul>
            <!--登陆-->
            <div>
              <y-button text="登陆" classStyle="main-btn" @btnClick="login"
                        style="margin: 0;width: 100%;height: 48px;font-size: 18px;"></y-button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import YFooter from '/common/footer'
  import YButton from '/components/YButton'
  import {userLogin} from '/api/index.js'
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
//        loginWay: 1,
        ruleForm: {
          userName: '',
          userPwd: ''
        }
      }
    },
    computed: {
      count () {
        return this.$store.state.login
      }
    },
    methods: {
      ...mapMutations([
        'RECORD_USERINFO'
      ]),
      login () {
        if (!this.ruleForm.userName || !this.ruleForm.userPwd) {
          console.log('账号密码不能为空')
          return false
        }
        var params = {userName: this.ruleForm.userName, userPwd: this.ruleForm.userPwd}
        userLogin(params).then(res => {
          if (res.status === '0') {
            this.RECORD_USERINFO({info: res.result})
            this.$router.go(-1)
          } else {
            console.log(res.msg)
          }
        })
      }
    },
    mounted () {
    },
    components: {
      YFooter,
      YButton
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  * {
    box-sizing: content-box;
  }

  .login {
    .wrapper {
      background-image: url(/static/images/bg_9b9dcb65ff.png);
      background-image: -webkit-image-set(url(/static/images/bg_9b9dcb65ff.png) 1x, url(/static/images/bg_9b9dcb65ff@2x.png) 2x);
      background-size: 100px;
      background-repeat: repeat;
      min-height: 800px;
      min-width: 630px;
    }
  }

  .v2 .dialog {
    width: 450px;
    border: 1px solid #dadada;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    margin-left: -225px;
    position: absolute;
    .title {
      background: linear-gradient(#fff, #f5f5f5);
      height: auto;
      overflow: visible;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .08);
      position: relative;
      background-image: url(/static/images/smartisan_4ada7fecea.png);
      background-image: -webkit-image-set(url(/static/images/smartisan_4ada7fecea.png) 1x, url(/static/images/smartisan_4ada7fecea@2x.png) 2x);
      background-size: 160px;
      background-position: top center;
      background-repeat: no-repeat;
      height: 92px;
      margin: 23px 0 50px;
      padding: 75px 0 0;
      box-shadow: none;
      h4 {
        padding: 0;
        text-align: center;
        color: #666;
        border-bottom: 1px solid #dcdcdc;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        font-weight: 700;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
        border-bottom: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        line-height: 1em;
        height: auto;
        color: #333;
        font-weight: 400;
      }
    }
    .content {
      padding: 0 40px 22px;
      height: auto;
      .common-form {
        li {
          clear: both;
          margin-bottom: 15px;
          position: relative;
        }
      }
    }
  }

  .dialog-shadow, .v2 .bbs .dialog-shadow, .v2 .dialog-shadow {
    -webkit-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 10px 20px -10px rgba(0, 0, 0, .04);
    -moz-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 10px 20px -10px rgba(0, 0, 0, .04);
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 10px 20px -10px rgba(0, 0, 0, .04);
  }

  @media screen and (min-width: 737px), screen and (-webkit-max-device-pixel-ratio: 1.9) and (max-width: 736px) and (min-device-width: 737px) {
    .wrapper {
      background: url(/static/images/con-bg_04f25dbf8e.jpg) repeat-x;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .dialog {
      background: url(/static/images/dialog-gray-bg.png) #fff bottom repeat-x;
      border-radius: 12px;
      display: none;
      margin: -163px 0 0 -218px;
      width: 436px;
      position: fixed;
      left: 50%;
      top: 50%;
    }
    .dialog .title h4 {
      border-bottom: #d1d1d1 solid 1px;
      box-shadow: 0 2px 6px #d1d1d1;
      color: #666;
      font-size: 20px;
      height: 61px;
      line-height: 61px;
      padding: 0 0 0 35px;
    }
    .common-form li {
      clear: both;
      margin-bottom: 15px;
      position: relative;
    }
  }


</style>

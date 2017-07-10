<template>
  <div class="box">
    <header class="w">
      <div class="w-box">
        <div class="nav-logo">
          <h1>
            <router-link to="/" title="锤子科技官网">Smartisan</router-link>
          </h1>
        </div>
        <div class="right-box">
          <div class="nav-list">
            <router-link to="goods">全部商品</router-link>
            <router-link to="/">坚果 Pro</router-link>
            <router-link to="/"> Smartisan M1 / M1L </router-link>
            <router-link to="/"> Smartisan OS </router-link>
            <router-link to="/">欢喜云</router-link>
            <router-link to="/">应用下载</router-link>
            <router-link to="/">官方论坛</router-link>
          </div>
          <div class="nav-aside">
            <div class="user">
              <router-link to="user">个人中心</router-link>
            </div>
            <div class="shop">
              <router-link to="shop"></router-link>
              <span class="cart-num"><i>7</i></span>
            </div>
          </div>
        </div>

      </div>
    </header>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        login: false,
        loginRouter: 'login',
        name: '亲，请登录'
      }
    },
    methods: {
      getName () {
        var name = sessionStorage.getItem('userMsg')
        if (name) {
          this.login = true
          this.loginRouter = 'perDetails'
          this.name = JSON.parse(name).name
        }
      }
    },
    created () {
      this.getName()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/theme";

  .box {
    background: #1a1a1a;
    background-image: -webkit-linear-gradient(#000, #121212);
    background-image: linear-gradient(#000, #121212);
    width: 100%;
    &:after {
      border-top: 1px solid #232323;
      border-top: 1px solid hsla(0, 0%, 100%, .06);
      border-bottom: 1px solid #000;
      border-bottom: 1px solid rgba(0, 0, 0, .4);
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
    }
  }

  header {
    height: 100px;
    z-index: 30;
    position: relative;
  }

  .w-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    h1 {
      height: 100%;
      display: flex;
      align-items: center;
      > a {
        background: url(/static/images/global-logo-red@2x.85550cd7bec73c98adacee227ba6a8a0.png) no-repeat 50%;
        background-size: cover;
        display: block;
        height: 40px;
        width: 50px;
        text-indent: -9999px;
        background-position: 0 0;

      }
    }
    .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: #c8c8c8;
        display: block;
        font-size: 14px;
        padding: 0 25px;
        &:hover {
          color: #fff;
        }
      }
    }
    .nav-aside {
      position: relative;
      &:before {
        background: #333;
        background: hsla(0, 0%, 100%, .2);
        content: " ";
        height: 13px;
        width: 1px;
        overflow: hidden;
        position: absolute;
        top: 4px;
        left: 0;
      }
    }
    .right-box {
      display: flex;
    }
    .nav-aside {
      display: flex;
    }
    .user {
      margin-left: 41px;
      width: 36px;
      position: relative;
      &:hover {
        a:before {
          content: " ";
          background-position: -5px 0;
        }
      }
      a {
        position: relative;
        width: 36px;
        height: 20px;
        display: block;
        text-indent: -9999px;
        &:before {
          content: " ";
          position: absolute;
          left: 8px;
          width: 20px;
          top: 0;
          height: 20px;
          background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -5px 0;
          background-size: 240px 107px;
          background-position: -155px 0;
          transition: none;
        }

      }
    }
    .shop {
      position: relative;
      float: left;
      margin-left: 21px;
      width: 61px;
      &:hover {
        a:before {
          content: " ";
          background-position: 0 -22px;
        }
      }
      a {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: block;
        right: 0;
        z-index: 1;
        &:before {
          display: block;
          height: 100%;
          content: " ";
          width: 30px;
          background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) 0 -22px;
          background-size: 240px 107px;
          background-position: -150px -22px;
        }
      }
      .cart-num {
        position: relative;
        display: block;
        margin-left: 31px;
        margin-top: -1px;
        min-width: 30px;
        text-indent: 0;
        line-height: 20px;
        > i {
          background: #eb746b;
          background-image: -webkit-linear-gradient(#eb746b, #e25147);
          background-image: linear-gradient(#eb746b, #e25147);
          box-shadow: inset 0 0 1px hsla(0, 0%, 100%, .15), 0 1px 2px hsla(0, 0%, 100%, .15);
          text-align: center;
          font-style: normal;
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
</style>


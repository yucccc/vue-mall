<template>
  <div class="box">
    <header class="w">
      <div>
        <router-link to="login" style="color: #f10215">亲，请登录</router-link>
        <router-link to="goods">进入商城</router-link>
        <router-link class="shop" to="/">
          <img src="/static/svg/shop.svg" alt="">
          <span style="padding-right: 4px;">购物车 </span><span> (0)</span>
        </router-link>
      </div>
    </header>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/style/theme";

  .shop {
    display: flex;
    align-items: center;
    padding: 0 5px;
    img {
      margin-right: 4px;
      margin-top: -4px;
    }
  }

  .box {
    width: 100%;
    background: $head-col;
  }

  header {
    height: 30px;
    color: $c9;
    > div {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      a {
        color: $c9;
        line-height: 30px;

      }
      a + a {
        margin-left: 10px;
      }
    }
  }
</style>


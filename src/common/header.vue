<template>
  <div class="box">
    <header class="w">
      <div>
        <router-link to="login">登录</router-link>
        <router-link to="/">我的订单</router-link>
      </div>
    </header>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/style/theme";

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


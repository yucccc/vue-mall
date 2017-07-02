<template>
  <div class="goods">
    <div style="background: #fff">
      <nav class="w">商品列表</nav>
    </div>
    <div style="background: #fff" class="nav">
      <div class="w">分类:
        <a href="/">全部</a>
        <a href="javascript:;">销量</a>
        <a href="javascript:;">价格<img src="/static/svg/arrow.svg" alt=""></a>
        <input type="number"><span>-</span><input type="number">
      </div>
    </div>
    <div class="goods-box w">
      <div class="good-item" v-for="item in 8">
        <div>
          <router-link to="/"><img src="/static/images/test1.jpg" alt=""></router-link>
        </div>
        <p class="good-price"></p>
      </div>

    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";

  .nav {
    padding: 18px 0;
    > div {
      display: flex;
      align-items: center;
      a {
        width: 10%;
        @extend %block-center;
      }
      input {
        width: 100px;
        height: 30px;
        border: 1px solid #ccc;
      }
      input + input {
        margin-left: 10px;
      }
    }
  }

  .goods-box {
    @extend %block-center;
    /*display: flex;*/
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .good-item {
    background: #fff;
    width: 220px;
    height: 383px;
  }
</style>

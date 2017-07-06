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
      <div class="good-item" v-for="(item,i) in computer" :key="i">
        <div class="good-img">
          <router-link to="/"><img v-lazy="item.productImageBig" alt=""></router-link>
        </div>
        <div class="small-img">
          <ul class="clearfix">
            <li class="fl" v-for="(sImg,j) in item.productImageSmall" :key="j">
              <img v-lazy="sImg" alt="">
            </li>
          </ul>
        </div>
        <p class="good-price">${{item.salePrice}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  export default {
    data () {
      return {
        computer: {}
      }
    },
    methods: {
      _getComputer () {
        getComputer().then(res => {
          this.computer = res.result.data
//          console.log()
        })
      }
    },
    mounted () {
      this._getComputer()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";

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
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .good-item {
    background: #fff;
    width: 220px;
    height: 383px;
    .good-img {
      display: block;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }

    }
    .good-price {
      color: #e4393c;
      font-size: 20px;
    }

  }
</style>

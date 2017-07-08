<template>
  <div class="goods">
    <!--<div style="background: #fff">-->
    <!--<nav class="w">商品列表</nav>-->
    <!--</div>-->
    <div style="background: #fff;border-bottom: 1px solid #E7E3E7;margin:10px 0;" class="nav">

      <div class="w">分类:
        <span>全部</span>
        <a href="javascript:;" class="active">综合排序</a>
        <!--<a href="javascript:;">销量优先</a>-->
        <a href="javascript:;">价格从低到高</a>
        <a href="javascript:;">价格从高到低</a>
        <div class="price-interval">
          <input type="text" placeholder="输入价格区间"><span style="margin: 0 2px"> - </span>
          <input type="text" placeholder="输入价格区间">
          <input type="button" value="确定">
        </div>

      </div>
    </div>

    <!--商品-->
    <div class="goods-box w">
      <div class="good-item" v-for="(item,i) in computer" :key="i">
        <div style="padding: 36px 9px 10px">
          <div class="good-img">
            <router-link :to="'goodsDetails/productId='+item.productId"><img v-lazy="item.productImageBig" alt="">
            </router-link>
          </div>

          <!--<div class="small-img">-->
          <!--<ul class="clearfix">-->
          <!--<li class="fl" v-for="(sImg,j) in item.productImageSmall" :key="j">-->
          <!--<img v-lazy="sImg" alt="">-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <p class="good-title">{{item.productTitle}}</p>
          <div class="good-price pr">
            <div class="ds pa">
              <input type="button" value="查看详情" @click="goodsDetails(item.productId)">
              <input type="button" value="加入购物车">
            </div>
            <p><span style="font-size: 16px">￥</span>
              {{item.salePrice}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  export default {
    data () {
      return {
        computer: {},
        min: '',
        max: ''
      }
    },
    methods: {
      _getComputer () {
        getComputer().then(res => {
          this.computer = res.result.data
        })
      },
      goodsDetails (id) {
        this.$router.push({path: 'goodsDetails/productId=' + id})
      }
    },
    mounted () {
      this._getComputer()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";

  .nav {
    > div {
      display: flex;
      align-items: center;
      a {
        padding: 15px;
        height: 100%;
        @extend %block-center;
      }
      input {
        width: 80px;
        height: 30px;
        border: 1px solid #ccc;
      }
      input + input {
        margin-left: 10px;
      }
    }
    .price-interval {
      @extend %block-center;
      input[type="button"] {
        background: #20a0ff;
        color: #fff;
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
    width: 236px;
    transition: all .5s;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
      input[type='button'] {
        display: block;
      }
      .good-price p {
        display: none;
      }

    }
    .ds {
      @extend %block-center;
      width: 100%;
    }

    input[type='button'] {
      display: none;
      width: 40%;
      height: 30px;
      line-height: 28px;
      border: 1px solid #d5d5d5;
      color: #646464;
      font-size: 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 200;
      background: #fff;
      transition: all .1s ease;
      &:hover {
        background-image: linear-gradient(#f6f6f6, #ededed);
      }
    }
    input:last-child {
      background-color: #5c85e5;
      background-image: -webkit-linear-gradient(#779ae9, #5078df);
      background-image: linear-gradient(#779ae9, #5078df);
      border: 1px solid #5c81e3;
      color: #fff;
      margin-left: 10px;
      &:hover {
        border: 1px solid #5374c8;
        background-color: #5074db;
        background-image: -webkit-linear-gradient(#6e8ed5, #4769c2);
        background-image: linear-gradient(#6e8ed5, #4769c2);
      }
    }

    .good-img {
      width: 220px;
      display: block;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }

    }
    .good-price {
      margin: 15px 0;
      height: 30px;
      text-align: center;
      line-height: 30px;
      /*padding: 15px 0;*/
      color: #e4393c;
      font-size: 20px;
    }
    .good-title {

      text-align: center;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
    }

  }
</style>

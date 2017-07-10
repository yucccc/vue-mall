<template>
  <div>
    <div class="w">
      <div class="shuffling">
        <!--<el-carousel height="340px" :interval="5000">-->
          <!--<el-carousel-item v-for="(item,i) in banner.data" :key="i">-->
            <!--<router-link :to="item.href"><img :src="item.src" :alt="item.alt"></router-link>-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      </div>
      <div>
        <div><span>秒杀块标题</span><span>时间</span></div>
        <!--商品-->
        <div class="goods ">
          <div class="sk_item" v-for="item in 6">
            <router-link to="/"><img
              src="https://img14.360buyimg.com/n4/s260x260_jfs/t1963/236/905138712/127581/cdf8c9e0/5631d325Ncc976adb.jpg"
              alt="#">
              <p class="sk_item_name">【京东超市】苏泊尔supor 火红点2代不粘无油烟炒锅32cm明火专用可立盖PC32R7（陶瓷煲赠品送完即止） </p></router-link>
            <p class="sk_item_price"><span class="price_new"><i>¥</i><span>359.00</span></span><span
              class=" price_origin"><i>¥</i><del>399.00</del></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getBanner} from '/api/index.js'
  export default {
    data () {
      return {
        banner: {}
      }
    },
    methods: {
      _getBanner () {
        getBanner().then(res => {
          console.log(res)
          this.banner = res.result
        })
      }
    },
    mounted () {
      this._getBanner()
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .shuffling {
    width: 60%;
    margin: 0 auto;
  }

  .goods {
    display: flex;
    padding: 12px 0;
    background-color: #fff;
  }

  .sk_item {
    width: 170px;
    height: 225px;
    padding: 0 14px 0 15px;
    /*border-right: 1px solid #e7e7e7;*/
    > div {
      width: 100%;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      &:hover {
        transform: translateY(-5px);
      }
    }
    img {
      width: 130px;
      height: 130px;
      margin: 17px 0;
    }
    .sk_item_name {
      color: #999;
      display: block;
      max-width: 100%;
      _width: 100%;
      overflow: hidden;
      font-size: 12px;
      text-align: left;
      height: 32px;
      line-height: 16px;
      word-wrap: break-word;
      word-break: break-all;
    }
    .sk_item_price {
      padding: 3px 0;
      height: 25px;
    }
    .price_new {
      font-size: 18px;
      font-weight: 700;
      margin-right: 8px;
      color: #f10214;
    }
    .price_origin {
      color: #999;
      font-size: 12px;
    }
  }

  .el-carousel__item a {
    display: block;
    margin: 0;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<template>
  <div>
    <div class="w">
      <div class="shuffling">
        <div class="banner w">
          <div class="bg" @mouseover="bannerT($refs.bg)" ref="bg">
            <span class="img a"></span>
            <span class="text b">以傲慢与偏执<br/>回敬傲慢与偏见</span>
            <span class="copyright c">code by qingjin.me | picture from t.tt</span>
          </div>
        </div>
      </div>
      <div>
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
      },
      bannerT (e) {
        var thisPX = e.offsetLeft
        var thisPY = e.offsetTop
        var boxWidth = e.offsetWidth
        var boxHeight = e.offsetHeight
        e.classList.add('threeD')
//        var boxHeight = this.outerHeight()
        var three = document.querySelector('.threeD')
        three.addEventListener('MouseMove', function (event) {
          var mouseX = event.pageX - thisPX
          var mouseY = event.pageY - thisPY
          var X
          var Y
          if (mouseX > boxWidth / 2) {
            X = mouseX - boxWidth / 2
          } else {
            X = mouseX - boxWidth / 2
          }
          if (mouseY > boxHeight / 2) {
            Y = boxHeight / 2 - mouseY
          } else {
            Y = boxHeight / 2 - mouseY
          }
          three.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
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
    /*width: 60%;*/
    /*margin: 0 auto;*/
  }

  /*---*/
  * {
    font-family: "Microsoft YaHei";
    transition: all .3s;
    -webkit-transition: all .3s;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
  }

  .banner {
    perspective: 800px;
  }

  .bg {
    position: relative;
    width: 100%;
    height: 500px;
    background: url("http://static.smartisanos.cn/index/img/store/home/banner-3d-item-1-box-1_61bdc2f4f9.png") center no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotateY(0deg) rotateX(0deg);
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 8px;
    left: 0;
    background: url("http://static.smartisanos.cn/index/img/store/home/banner-3d-item-1-box-3_8fa7866d59.png") center no-repeat;
    background-size: 95% 100%;
  }

  .text {
    position: absolute;
    top: 20%;
    right: 10%;
    font-size: 30px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }

  .copyright {
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 10px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }

  .a {
    -webkit-transform: translateZ(40px);
    transform: translateZ(40px);
  }

  .b {
    -webkit-transform: translateZ(20px);
    transform: translateZ(20px);
  }

  .c {
    -webkit-transform: translateZ(0px);
    transform: translateZ(0px);
  }

  /*----*/
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

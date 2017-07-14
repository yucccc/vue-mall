<template>
  <div>
    <div class="good-item" v-for="(item,i) in msg" :key="i">
      <div style="padding: 36px 9px 10px">
        <div class="good-img">
          <router-link :to="'goodsDetails/productId='+item.productId"><img v-lazy="item.productImageBig" alt="">
          </router-link>
        </div>
        <p class="good-title">{{item.productTitle}}</p>
        <div class="good-price pr">
          <div class="ds pa">
            <y-button text="查看详情" @btnClick="goodsDetails(item.productId)"></y-button>
            <y-button text="加入购物车"
                      @btnClick="addCart(item.productId,item.salePrice,item.productTitle,item.productImageBig)"
                      classStyle="main-btn"></y-button>
          </div>
          <p><span style="font-size: 16px">￥</span>
            {{item.salePrice}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import YButton from '/components/YButton'
  import {mapMutations, mapState} from 'vuex'
  export default {
    props: {
      msg: {type: [Object, Array]}
    },
    data () {
      return {}
    },
    methods: {
      ...mapMutations(['ADD_CART', 'INIT_BUYCART', 'ADD_ANIMATION', 'SHOW_CART']),
      goodsDetails (id) {
        this.$router.push({path: 'goodsDetails/productId=' + id})
      },
      addCart (id, price, name, img) {
        if (!this.showMoveImg) {
          if (this.login) { // 登录了 直接存在用户名下

          } else { // 未登录 vuex
            this.ADD_CART({shopId: id, goodsId: id, price: price, name: name, img: img})
          }
          var dom = event.target // 获取点击的元素
          // 获取点击的坐标
          let elLeft = dom.getBoundingClientRect().left + 50
          let elTop = dom.getBoundingClientRect().top + 15
          // 需要触发
          this.ADD_ANIMATION({moveShow: true, elLeft: elLeft, elTop: elTop, img: img})
          if (!this.showCart) {
            this.SHOW_CART({showCart: true})
          }
        }
      }
    },
    computed: {
      ...mapState(['login', 'showMoveImg', 'showCart'])
    },
    mounted () {
    },
    components: {
      YButton
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/mixin";
  @import "../assets/style/theme";

  .good-item {
    background: #fff;
    width: 236px;
    transition: all .5s;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
      .good-price p {
        display: none;
      }
      .ds {
        display: flex;
      }
    }
    .ds {
      @extend %block-center;
      width: 100%;
      display: none;
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

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
            <y-button text="加入购物车" @btnClick="addCart(item.productId)" classStyle="main-btn"></y-button>
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
  export default {
    props: {
      msg: {type: [Object, Array]}
    },
    data () {
      return {
        // 是否登录 后期通过vuex获取
        login: false
      }
    },
    methods: {
      goodsDetails (id) {
        this.$router.push({path: 'goodsDetails/productId=' + id})
      },
      addCart (id) {
        if (this.login) { // 登录了 直接存在用户名下

        } else { // 未登录 存在cookie
          if (this.$cookie.get(id)) { // 如果存在 则加数量
            let num = this.$cookie.get(id)
            this.$cookie.set(id, ++num)
          } else {
            this.$cookie.set(id, 1)
            // 保存在数组中
            if (this.$cookie.get('cs')) {
              let cs = this.$cookie.get('cs')
              cs += (',' + id)
              this.$cookie.set('cs', cs)
            } else {
              this.$cookie.set('cs', id)
            }
          }
        }
        // todo
        this.$confirm('加入购物车成功', '提示', {
          confirmButtonText: '去购物车结算',
          cancelButtonText: '继续任性选购',
          type: 'success'
        }).then(() => {
          this.$router.push({path: '/cart'})
        }).catch(() => {
        })
      }
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

<template>
  <div class="layout-container">
    <y-header>
      <div slot="nav"></div>
    </y-header>
    <div class="w">
      <div class="content">
        <div class="account-sidebar">
          <div class="avatar gray-box ">
            <div>
              <img :src="userInfo.info.avatar"> <h5>
              {{userInfo.info.name}}</h5></div>
            <div class="box-inner">
              <ul class="account-nav">
                <li v-for="(item,i) in nav" :key='i' :class="{current:item===title}" @click="tab(item)"><a
                  href="javascript:;">{{item}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="account-content">
          <y-shelf :title="title">
            <div slot="content">
              <div v-if="title==='我的订单'">
                <div v-if="orderList.length">
                  <div v-for="(item,i) in orderList" :key="i">
                    <div class="gray-sub-title cart-title">
                      <div class="first">
                        <div>
                          <span class="date" v-text="item.createDate"></span>
                          <span class="order-id"> 订单号： <a href="">{{item.orderId}}</a> </span>
                        </div>
                        <div class="f-bc">
                          <span class="price">单价</span>
                          <span class="num">数量</span>
                          <span class="operation">商品操作</span>
                        </div>
                      </div>
                      <div class="last">
                        <span class="sub-total">实付金额</span>
                        <span class="order-detail"> <a href="">查看详情<em class="icon-font"></em></a> </span>
                      </div>
                    </div>
                    <div class="pr">
                      <div class="cart" v-for="(good,j) in item.goodsList" :key="j">
                        <div class="cart-l" :class="{bt:j>0}">
                          <div class="car-l-l">
                            <div class="img-box"><img
                              :src="good.productImg"
                              alt=""></div>
                            <div class="ellipsis">{{good.productName}}</div>
                          </div>
                          <div class="cart-l-r">
                            <div>¥ {{good.productPrice}}</div>
                            <div class="num">{{good.productNum}}</div>
                            <div class="type"></div>
                          </div>
                        </div>
                        <div class="cart-r">
                          <span></span>
                          <span></span>
                        </div>
                      </div s>
                      <div class="prod-operation pa" style="right: 0;top: 0;">
                        <div class="total">¥ {{item.orderTotal}}</div>
                        <div class="status"> {{item.orderStatus === '1' ? '已支付' : '已关闭'}}  </div>
                      </div>
                    </div>


                  </div>
                </div>
                <div v-if="!orderList.length">
                  <div style="padding: 100px 0;text-align: center">
                    你还未创建过订单
                  </div>
                </div>
              </div>


              <!--未开发-->
              <div v-else>
                <div style="padding: 100px 0;text-align: center">
                  此页面暂未开发
                </div>
              </div>
            </div>
          </y-shelf>
        </div>

      </div>

    </div>
    <y-footer></y-footer>
  </div>

</template>
<script>
  import YShelf from '/components/shelf'
  import YFooter from '/common/footer'
  import YHeader from '/common/header'
  import { orderList } from '/api/goods'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        title: '我的订单',
        nav: [
          '我的订单', '售后服务', '我的优惠', '账户资料', '收货地址', '以旧换新'
        ],
        orderList: []
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      tab (e) {
        this.title = e
      },
      _orderList () {
        orderList().then(res => {
          this.orderList = res.result
        })
      }
    },
    created () {
      this._orderList()
    },
    components: {
      YShelf,
      YFooter,
      YHeader
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";

  .w {
    padding-top: 40px;
  }

  .content {
    display: flex;
    height: 100%;
  }

  .bt {
    border-top: 1px solid #EFEFEF;

  }

  .account-sidebar {
    width: 210px;
    border-radius: 6px;
    .avatar {
      padding-top: 20px;
      border-radius: 10px;
      text-align: center;
      img {
        width: 168px;
        height: 168px;
      }
      h5 {
        font-size: 18px;
        line-height: 48px;
        font-weight: 700;
      }
    }
    .account-nav {
      padding-top: 15px;
      li {
        position: relative;
        height: 48px;
        border-top: 1px solid #EBEBEB;
        line-height: 48px;
        &:hover {
          a {
            position: relative;
            z-index: 1;
            height: 50px;
            background-color: #98AFEE;
            line-height: 50px;
            color: #FFF;
          }

        }
        a {
          display: block;
        }
        &.current {
          a {
            position: relative;
            z-index: 1;
            height: 50px;
            background-color: #98AFEE;
            line-height: 50px;
            color: #FFF;
          }
        }

      }
    }
  }

  .account-content {
    margin-left: 20px;
    flex: 1;
  }

  .gray-sub-title {
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    display: flex;
    span {
      display: inline-block;
      height: 100%;
    }
    .first {
      display: flex;
      justify-content: space-between;
      flex: 1;
      .f-bc {
        > span {
          width: 112px;
          text-align: center;
        }
      }
    }
    .last {
      width: 230px;
      text-align: center;
      display: flex;
      border-left: 1px solid #ccc;
      span {
        flex: 1;
      }
    }
  }

  .date {
    padding-left: 6px;

  }

  .order-id {
    margin-left: 20px;
  }

  .cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    .cart-l {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 15px 0;
      justify-content: space-between;
      position: relative;
      &:before {
        position: absolute;
        content: ' ';
        right: -1px;
        top: 0;
        width: 1px;
        background-color: #EFEFEF;
        height: 100%;
      }
      .ellipsis {
        margin-left: 20px;
        width: 220px;
      }
      .img-box {
        border: 1px solid #EBEBEB;
      }
      img {
        display: block;
        @include wh(80px);
      }
      .cart-l-r {
        display: flex;
        > div {
          text-align: center;
          width: 112px;
        }
      }
      .car-l-l {
        display: flex;
        align-items: center;
      }
    }
    .cart-r {
      width: 230px;
      display: flex;
      span {
        text-align: center;
        flex: 1;
      }
    }
  }

  .prod-operation {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 254px;
    div {
      width: 100%;
      text-align: center;
    }
    div:last-child {
      padding-right: 24px;
    }
  }
</style>

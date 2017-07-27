<template>
  <div class="checkout">
    <div class="w" style="padding-top: 40px;">
      <y-shelf title="收货信息">

      </y-shelf>

      <y-shelf title="购物清单">
        <div slot="content">
          <div class="box-inner ui-cart">
            <div>
              <!--标题-->
              <div class="cart-table-title">
                <span class="name">商品信息</span>
                <span class="subtotal">小计</span>
                <span class="num">数量</span>
                <span class="price">单价</span>
              </div>
              <!--列表-->
              <div class="cart-table" v-for="(item,i) in cartList" :key="i">
                <div class="cart-group divide pr" :data-productid="item.productId">
                  <div class="cart-top-items">
                    <div class="cart-items clearfix">
                      <!--图片-->
                      <div class="items-thumb fl">
                        <img :alt="item.productName"
                             :src="item.productImg">
                        <a href="javascript:;" :title="item.productName" target="_blank"></a>
                      </div>
                      <!--信息-->
                      <div class="name hide-row fl">
                        <div class="name-table">
                          <a href="javascript:;" :title="item.productName" target="_blank"
                             v-text="item.productName"></a>
                          <ul class="attribute">
                            <li>白色</li>
                          </ul>
                        </div>
                      </div>
                      <!--商品数量-->
                      <div>
                        <!--总价格-->
                        <div class="subtotal" style="font-size: 14px">¥ {{item.productPrice * item.productNum}}</div>
                        <!--数量-->
                        <div class="item-cols-num">
                          <div class="select">
                            <span v-text="item.productNum"></span>
                          </div>
                        </div>
                        <!--价格-->
                        <div class="price">¥ {{item.productPrice}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-bottom-bg fix-bottom">
              <div class="fix-bottom-inner">
                <div class="shipping">
                  <div class="shipping-box" style="padding: 0 40px;">
                    <div class="shipping-total shipping-price"><h4
                      class="highlight">应付总额：<em>￥11</em>
                    </h4>
                    </div>
                  </div>
                  <y-button class="big-main-btn"
                            classStyle="main-btn"
                            style="margin: 0;width: 130px;height: 50px;line-height: 50px;font-size: 16px"
                            text="提交订单"
                            @btnClick="">
                  </y-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </y-shelf>
    </div>
  </div>
</template>
<script>
  import YShelf from '/components/shelf'
  import { getCartList } from '/api/goods'
  import YButton from '/components/YButton'
  export default {
    data () {
      return {
        cartList: []
      }
    },
    methods: {
      _getCartList () {
        getCartList().then(res => {
          this.cartList = res.result
        })
      }
    },
    created () {
      this._getCartList()
    },
    components: {
      YShelf,
      YButton
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .ui-cart {
    /*padding-bottom: 91px;*/
    .cart-table-title {
      position: relative;
      z-index: 1;
      line-height: 38px;
      height: 38px;
      padding: 0 0 0 30px;
      font-size: 12px;
      background: #eee;
      border-bottom: 1px solid #dbdbdb;
      border-bottom-color: rgba(0, 0, 0, .08);
      .name {
        float: left;
        text-align: left;
      }
      span {
        width: 137px;
        float: right;
        text-align: center;
        color: #838383;
      }
    }
    .cart-group.divide {
      .cart-items {
        border-top: 1px dashed #eee;
      }
    }
    .cart-items {
      position: relative;
      height: 140px;
      margin-left: 74px;
      /*删除*/
      .operation {
        padding: 58px 0 0;
        font-size: 12px;
        line-height: 24px;
        .items-delete-btn {
          background-image: url(../../../static/images/delete-btn-icon_a35bf2437e@2x.jpg);
          &:hover {
            background-position: 0 -36px;
          }
        }
        .items-delete-btn {
          display: block;
          width: 24px;
          height: 24px;
          margin: 0 auto;
          color: #C2C2C2;
          background: url(../../../static/images/delete-btn-icon_a35bf2437e@2x.jpg);
          -webkit-background-size: 100% auto;
          background-size: 100% auto;
          -moz-transition: none;
          -webkit-transition: none;
          -o-transition: none;
          transition: none;
        }
      }
      .subtotal {
        font-weight: 700;
      }
      .item-cols-num,
      .operation,
      .price,
      .subtotal {
        overflow: hidden;
        float: right;
        width: 137px;
        text-align: center;
        color: #666;
        line-height: 140px;
      }
      /*数量*/
      .item-cols-num {
        padding-top: 50px;
        line-height: 40px;
      }
      .select {
        width: 112px;
        height: 40px;
        padding-top: 4px;
        margin: 0 auto;
        line-height: 40px;
        .down {
          background-position: 0 -60px;
        }
        .down.down-disabled:hover {
          background-position: 0 -300px;
          cursor: not-allowed;
        }
        .num {
          position: relative;
          overflow: hidden;
          float: left;
          display: inline-block;
          width: 36px;
          height: 18px;
          margin: 7px 0 0;
          border: none;
          border-radius: 3px;
          line-height: 18px;
          text-align: center;
          font-size: 14px;
          transition: all .2s ease-out;
        }
      }

    }
    .down.down-disabled {
      background-position: 0 -300px;
      cursor: not-allowed;
    }
  }

  .cart-group.divide .cart-top-items:first-child .cart-items {
    border-top: none;
  }

  .items-choose {
    position: absolute;
    left: -74px;
    top: 0;
    width: 74px;
    height: 20px;
    padding: 60px 0 0 31px;
    font-size: 12px;
    color: #999;
  }

  .items-thumb {
    position: relative;
    margin-top: 30px;
    overflow: hidden;
    width: 80px;
    height: 80px;
  }

  img {
    width: 80px;
    height: 80px;
  }

  .cart-items .items-thumb > a, .ui-cart .cart-items .items-thumb > i {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid #fff;
    border-radius: 3px;
    border: 0 solid rgba(255, 255, 255, .1);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
  }

  .name {
    width: 380px;
    margin-left: 20px;
    color: #323232;
    display: table;
    a {
      color: #333;
      font-size: 16px;
    }
  }

  .name-table {
    display: table-cell;
    vertical-align: middle;
    height: 140px;
  }

  .fix-bottom {
    padding: 22px 29px 19px 30px;
    height: 90px;
    width: 100%;
    z-index: 1;
    background-position: center;
    background: #fdfdfd;
    background: -webkit-linear-gradient(#fdfdfd, #f9f9f9);
    background: linear-gradient(#fdfdfd, #f9f9f9);
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 -3px 8px rgba(0, 0, 0, .04);
    .cart-bottom-bg {
      height: 80px;
      border-top: 1px solid #D9D9D9;
      border-radius: 0 0 8px 8px;
    }
    .fix-bottom-inner {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .shipping {
      display: flex;
      align-items: center;
    }
    em {
      display: inline-block;
      position: relative;
      top: 3px;
      margin-top: -4px;
      font-size: 24px;
      color: #d44d44;
      font-weight: 700;
    }
  }

  .attribute, .name p {
    color: #999;
    font-size: 12px;
    padding-top: 4px;
    line-height: 17px;
  }


</style>

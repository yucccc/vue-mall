<template>
  <div class="shopping-cart">
    <div class="store-content page-cart">
      <div class="gray-box">
        <div class="title"><h2>购物清单</h2></div>
        <!--内容-->
        <div class="box-inner ui-cart">
          <div>
            <!--标题-->
            <div class="cart-table-title">
              <span class="name">商品信息</span> <span class="operation">操作</span> <span
              class="subtotal">小计</span> <span class="num">数量</span> <span class="price">单价</span></div>
            <!--列表-->
            <div class="cart-table">
              <div class="cart-group divide pr">
                <div class="cart-top-items">
                  <div class="cart-items clearfix js-cart-items">
                    <!--勾选-->
                    <div class="items-choose">
                      <span class="blue-checkbox-new checkbox-on" data-name="100026701 " data-status="true"
                            checked="checked"><a></a></span>
                    </div>
                    <!--图片-->
                    <div class="items-thumb fl">
                      <img alt="Smartisan 原装快充充电器 18W"
                           src="http://image.smartisanos.cn/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_160/quality,Q_100/format,webp">
                      <a href="#/item/100026701" title="Smartisan 原装快充充电器 18W" target="_blank"></a>
                    </div>
                    <!--信息-->
                    <div class="name hide-row fl">
                      <div class="name-table">
                        <a href="#/item/100026701" title="Smartisan 原装快充充电器 18W" target="_blank"
                           class="ng-binding ng-scope">Smartisan 原装快充充电器 18W</a>
                        <ul class="attribute">
                          <li ng-repeat="attr in cart.attrs" class="ng-binding ng-scope">白色</li>
                        </ul>
                      </div>
                    </div>
                    <!--删除按钮-->
                    <div class="operation">
                      <a class="items-delete-btn"></a>
                    </div>
                    <!--商品数量-->
                    <div>
                      <!--总价格-->
                      <div class="subtotal" style="font-size: 14px">¥ 59.00</div>
                      <!--数量-->
                      <div class="item-cols-num">
                        <div class="select js-select-quantity" data-id="100026701"><span
                          class="down down-disabled">-</span>
                          <span
                            class="num"><input type="text">
                          <ul>
                            <li>1</li>
                            <li>2</li>
                            </ul>
                        </span>
                          <span class="up">+</span>
                        </div>
                      </div>
                      <!--价格-->
                      <div class="price">¥ 59.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-bottom-bg fix-bottom">
          <div class="fix-bottom-inner">
            <div class="cart-bar-operation">
              <div>
                <div class="choose-all js-choose-all"><span
                  class="blue-checkbox-new checkbox-on"
                  data-name="all "
                  data-status="true" checked="checked"><a></a></span>全选
                </div>
                <div class="delete-choose-goods">删除选中的商品
                </div>
              </div>
            </div>
            <div class="shipping">
              <div class="shipping-box">
                <div class="shipping-total shipping-num"><h4
                  class="highlight">已选择 <i>1</i> 件商品</h4>
                  <h5>共计 <i>1</i> 件商品</h5></div>
                <div class="shipping-total shipping-price"><h4
                  class="highlight">应付总额：<span>￥</span><i class="ng-binding">99</i>
                </h4>
                  <h5 class="shipping-tips ng-scope">应付总额不含运费</h5>
                </div>
              </div>
              <span class="jianguo-blue-main-btn big-main-btn js-checkout"><a>现在结算</a></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    created () {

    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>


  .store-content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
    .gray-box {
      position: relative;
      margin-bottom: 30px;
      overflow: hidden;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #dcdcdc;
      border-color: rgba(0, 0, 0, .14);
      box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
      .title {
        padding-left: 30px;
        position: relative;
        z-index: 10;
        height: 60px;
        padding: 0 10px 0 24px;
        border-bottom: 1px solid #d4d4d4;
        border-radius: 8px 8px 0 0;
        box-shadow: rgba(0, 0, 0, .06) 0 1px 7px;
        background: #f3f3f3;
        background: -webkit-linear-gradient(#fbfbfb, #ececec);
        background: linear-gradient(#fbfbfb, #ececec);
        line-height: 60px;
        font-size: 18px;
        color: #333;
      }
    }
    .ui-cart {
      padding-bottom: 91px;
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
          .down.down-disabled:hover {
            background-position: 0 -300px;
            cursor: not-allowed;
          }
          .down, .up {
            background: url(../../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;
            overflow: hidden;
            float: left;
            display: inline-block;
            width: 34px;
            height: 37px;
            margin-right: 5px;
            background-size: 100% auto;
            line-height: 40px;
            text-indent: -9999em;
            cursor: pointer;
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
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
          }
          .up {
            float: right;
            margin: 0;
            background-position: 0 0;
            &:hover {
              background-position: 0 -120px;
            }
          }
          .down {
            background-position: 0 -60px;
            &:hover {
              background-position: 0 -180px;
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
      .attribute, .name p {
        color: #999;
        font-size: 12px;
        padding-top: 4px;
        line-height: 17px;
      }

    }

  }

  .page-cart {
    padding-top: 40px;
    .fix-bottom {
      height: 90px;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 1;
      background-position: center;
      background: #fdfdfd;
      background: -webkit-linear-gradient(#fdfdfd, #f9f9f9);
      background: linear-gradient(#fdfdfd, #f9f9f9);
      border-top: 1px solid #e9e9e9;
      box-shadow: 0 -3px 8px rgba(0, 0, 0, .04);
      .cart-bottom-bg {
        height: 80px;
        /*background: url(../img/store/library/cart-wrapper-bg_4c8003c76e.jpg) repeat-x;*/
        border-top: 1px solid #D9D9D9;
        border-radius: 0 0 8px 8px;
      }
    }
    .cart-bar-operation {
      float: left;
      padding: 35px 26px;
      font-size: 12px;
    }
    .blue-checkbox-new {
      float: left;
      margin-right: 9px;
    }
    .choose-all, .delete-choose-goods, .selected-count {
      float: left;
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      position: relative;
    }
    .blue-checkbox-new, .blue-checkbox-new.checkbox-disable, .blue-checkbox-new.checkbox-on {
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
      background: url(../../../static/images/checkbox-new_631a56a4f6.png) no-repeat 0 -20px;
      cursor: pointer;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      vertical-align: middle;
    }

    .blue-checkbox-new.checkbox-on, .choose-checkbox-on .blue-checkbox-new {
      background: url(../../../static/images/checkbox-new_631a56a4f6.png) no-repeat 0 0;
    }
    .delete-choose-goods {
      position: relative;
      margin-left: 21px;
      color: #bbb;
    }
    .shipping {
      display: inline-block;
      float: right;
      padding: 20px 30px;
    }
    .shipping-box {
      display: inline-block;
      padding-top: 1px;
      margin-right: 10px;
    }
    .shipping-total {
      display: inline-block;
      border-left: 1px solid #e1e1e1;
      padding: 0 20px;
      .shipping-price {
        width: 155px;
        padding-right: 0;
      }
      &.shipping-num i {
        width: 28px;
        display: inline-block;
        text-align: center;
      }
      h4 {
        color: #323232;
        > i {
          font-size: 18px;
          font-weight: 700;
        }
        i, span {
          color: #d44d44;
        }

      }
      h5 {
        color: #959595;
        > i {
          font-size: 16px;
          font-weight: 700;
        }
      }

    }

    .shipping-total.shipping-num {
      text-align: right;
    }
    .shipping-total:first-child {
      border: none;
    }
    .big-main-btn {
      float: right;
      background: #5d86e5;
      background: -webkit-linear-gradient(#688fe8, #5079e1);
      background: linear-gradient(#688fe8, #5079e1);
    }
    .big-main-btn {
      height: 48px;
      &:hover {
        background: #6484D0;
        background: linear-gradient(#7592D4, #5272C6);
        a {
          background: #6889D8;
          background: linear-gradient(#7A99DE, #5677CF);
          box-shadow: none;
          color: #FFF;
        }
      }
      a {
        display: block;
        border-radius: 9px;
        background: #5f7ed7;
        background: -webkit-linear-gradient(#739fe1, #5f7ed7);
        background: -moz-linear-gradient(#739fe1, #5f7ed7);
        background: -ms-linear-gradient(#739fe1, #5f7ed7);
        background: -o-linear-gradient(#739fe1, #5f7ed7);
        background: linear-gradient(#739fe1, #5f7ed7);
        cursor: pointer;
        color: #fff;
        height: 44px;
        line-height: 45px;
        padding: 2px 32px;
        font-size: 16px;
        background: #6C94F3;
        background: linear-gradient(#7EA3F5, #5A82F0);
        box-shadow: none;
        text-shadow: none;
        transition: all .3s ease;
      }
    }
    .jianguo-blue-main-btn {
      display: block;
      padding: 1px;
      margin: 0 auto;
      border-radius: 9px;
      background: #015e94;
      background: linear-gradient(#5598c9, #2a6da2);
      text-align: center;
      text-shadow: rgba(255, 255, 255, .496094) 0 1px 0;
      cursor: pointer;
      -webkit-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;

    }
    .jianguo-blue-main-btn {
      background: #567CE6;
      background: linear-gradient(#799CEA, #567CE6);
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1), inset 0 -1px 2px rgba(0, 0, 0, .2);
    }

  }


</style>

<template>
  <!--数量-->
  <div class="item-cols-num">
    <div class="select">
                          <span class="down" @click="editCart('down',item)"
                                :class="{'down-disabled':num<2}">-</span>
      <span class="num">
                            <input type="text" :class="{show:show}" v-model="num" maxlength="2">
                          <ul ref="ul">
                            <li>{{num - 1}}</li>
                            <li>{{num}}</li>
                            <li>{{num + 1}}</li>
                          </ul>
                        </span>
      <span class="up" :class="{'up-disabled':num>limit}"
            @click="editCart('up',item)">+</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      num: {
        type: Number,
        default: 5
      },
      limit: {
        type: Number,
        default: 5
      }
    },
    data () {
      return {
        show: true,
        jj: ''
      }
    },
    methods: {
      editCart (type, item) {
        if (type && item) {
          let checked = item.checked
          let productId = item.productId
          let productNum = item.productNum
          // 勾选
          if (type === 'check') {
            let newChecked = checked === '1' ? '0' : '1'
            this._cartEdit(productId, productNum, newChecked)
          } else if (type === 'up' || type === 'down') { // 加减
            let dn = true
            if (type === 'up' && productNum < 10) {
              this.jj = '-'
              this._cartEdit(productId, ++productNum, checked, dn)
            } else if (type === 'down' && productNum > 1) {
              this.jj = ''
              this._cartEdit(productId, --productNum, checked, dn)
            } else {
              return false
            }
          }
        } else {
          console.log('缺少所需参数')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  /*数量*/
  .item-cols-num {
    display: inline-block;
  }

  .select {
    height: 40px;
    padding-top: 4px;
    input {
      width: 100%;
      text-align: center;
    }
    .down {
      background-position: 0 -60px;
    }
    .down.down-disabled:hover {
      background-position: 0 -300px;
      cursor: not-allowed;
    }
    .down, .up {
      background: url(../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;
      overflow: hidden;
      float: left;
      width: 34px;
      height: 37px;
      background-size: 100% auto;
      line-height: 40px;
      text-indent: -9999em;
      cursor: pointer;
      user-select: none;
    }
    .num {
      position: relative;
      overflow: hidden;
      text-align: center;
      float: left;
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
</style>

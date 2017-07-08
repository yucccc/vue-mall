<template>
  <div class="goods">
    <!--<div style="background: #fff">-->
    <!--<nav class="w">商品列表</nav>-->
    <!--</div>-->
    <div style="background: #fff;border-bottom: 1px solid #E7E3E7;margin:10px 0;" class="nav">

      <div class="w">分类:
        <span>全部</span>
        <a href="javascript:;" :class="{active:sortType===1}" @click="reset()">综合排序</a>
        <!--<a href="javascript:;">销量优先</a>-->
        <a href="javascript:;" @click="sort(1)" :class="{active:sortType===2}">价格从低到高</a>
        <a href="javascript:;" @click="sort(-1)" :class="{active:sortType===3}">价格从高到低</a>
        <div class="price-interval">
          <input type="text" placeholder="输入价格区间" v-model="min"><span style="margin: 0 2px"> - </span>
          <input type="text" placeholder="输入价格区间" v-model="max">
          <input type="button" @click="screening" value="确定">
        </div>
      </div>
    </div>

    <!--商品-->
    <div class="goods-box w">
      <mall-goods :msg="computer"></mall-goods>

    </div>
    <div v-show="!busy" class="w" style="text-align: center;background: #fff" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      正在加载中...
    </div>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  import mallGoods from '/components/mallGoods'
  export default {
    data () {
      return {
        computer: [],
        min: '',
        max: '',
        busy: false,
        timer: null,
        sortType: 1,
        params: {
          page: 1,
          sort: ''
        }
      }
    },
    methods: {
      _getComputer (flag) {
        let params = {
          params: {
            page: this.params.page,
            sort: this.params.sort,
            priceGt: this.min,
            priceLte: this.max
          }
        }
        getComputer(params).then(res => {
          if (res.result.count) {
            let data = res.result.data
            if (flag) {
              this.computer = this.computer.concat(data)
            } else {
              this.computer = data
            }
          } else {
            clearTimeout(this.timer)
            this.busy = true
          }
        })
      },
      // 默认排序
      reset () {
        this.params.sort = ''
        this.params.page = 1
        this.busy = false
        this._getComputer()
      },
      // 价格排序
      sort (v) {
        v === 1 ? this.sortType = 2 : this.sortType = 3
        this.params.sort = v
        this.params.page = 1
        this.busy = false
        this._getComputer()
      },
      screening () {
        this.params.sort = ''
        this.params.page = 1
        this.busy = false
        this._getComputer()
      },
      // 加载更多
      loadMore () {
        this.busy = true
        this.timer = setTimeout(() => {
          this.params.page++
          this._getComputer(true)
          this.busy = false
        }, 500)
      }
    },
    created () {
      this._getComputer()
    },
    components: {
      mallGoods
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
    > div {
      @extend %block-center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

  }


</style>

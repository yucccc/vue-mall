<template>
  <div class="goods">
    <div style="background: #fff;border-bottom: 1px solid #E7E3E7;margin:10px 0;" class="nav">

      <div class="w">分类:
        <span>全部</span>
        <a href="javascript:;" :class="{active:sortType===1}" @click="reset()">综合排序</a>
        <!--<a href="javascript:;">销量优先</a>-->
        <a href="javascript:;" @click="sort(1)" :class="{active:sortType===2}">价格从低到高</a>
        <a href="javascript:;" @click="sort(-1)" :class="{active:sortType===3}">价格从高到低</a>
        <div class="price-interval">
          <input type="number" placeholder="输入价格区间" v-model="min"><span style="margin: 0 2px"> - </span>
          <input type="number" placeholder="输入价格区间" v-model="max">
          <input type="button" @click="reset" style="cursor: pointer;" value="确定">
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
    <transition @after-enter='afterEnter' @before-enter="beforeEnter">
      <!--整张图片-->
      <div class="move_img" v-show="showMoveImg">
        <!--<img src="" alt="">-->
      </div>
    </transition>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  import mallGoods from '/components/mallGoods'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        computer: [],
        min: '',
        max: '',
        busy: false,
        timer: null,
        sortType: 1,
        windowHeight: null,
        params: {
          page: 1,
          sort: ''
        }
      }
    },
    methods: {
//      ...mapMutations(['ADD_ANIMATION']),
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
      // 加载更多
      loadMore () {
        this.busy = true
        this.timer = setTimeout(() => {
          this.params.page++
          this._getComputer(true)
          this.busy = false
        }, 500)
      },
      //
      beforeEnter (el) {
//        `
        console.log(`translate3d(${this.elLeft}px,${this.elTop}px,0)`)
        el.style.transform = `translate3d(${-this.elLeft}px,${this.elTop}px,0)`
//        el.style.transform = `translate3d(0,,0)`
        el.children[0].style.opacity = 0
        console.log('beforeEnter')
      },
      afterEnter (el) {
        el.style.transform = `translate3d(0,0,0)`
        el.children[0].style.transform = `translate3d(0,0,0)`
        el.style.transition = 'transform .5s cubic-bezier(.1,1.26,.7,1.15)'
        el.children[0].style.transition = 'transform .5s linear'
//        this.showMoveDot = this.showMoveDot.map(item => false);
        el.children[0].style.opacity = 1
        // 动画结束
        el.children[0].addEventListener('transitionend', () => {
          console.log(1 + 'transitionend')
        })
        el.children[0].addEventListener('webkitAnimationEnd', () => {
          console.log(2 + 'webkitAnimationEnd')
        })
      }
    },
    created () {
      this._getComputer()
    },
    mounted () {
      this.windowHeight = window.innerHeight
    },
    computed: {
      ...mapState(['showMoveImg', 'elLeft', 'elTop'])
    },
    components: {
      mallGoods
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";

  /*.move_img {*/
  /*width: 20px;*/
  /*height: 20px;*/
  /*background: #1a1a1a;*/
  /*position: fixed;*/
  /*top: 30px;*/
  /*right: 30px;*/
  /*z-index: 9999999;*/
  /*svg {*/
  /*width: 100px;*/
  /*height: 100px;*/
  /*fill: blue;*/
  /*}*/
  /*}*/

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

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
      <div class="move_img" v-if="showMoveImg">
        <div><img :src="moveImgUrl"></div>
      </div>
    </transition>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  import mallGoods from '/components/mallGoods'
  import {mapState, mapMutations} from 'vuex'
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
        windowWidth: null,
        params: {
          page: 1,
          sort: ''
        }
      }
    },
    methods: {
      ...mapMutations(['ADD_ANIMATION']),
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
        el.style.transform = `translate3d(0,${this.elTop - 30}px,0)`
        el.children[0].style.transform = `translate3d(${-(this.windowWidth - this.elLeft)}px,0,0)`
        el.children[0].style.opacity = 0
//        el.children[0].style.transform = `translate3D(${-(this.windowWidth - this.elLeft)}px,${this.elTop - 30}px,0)`
//        el.style.transform = `translate3D(${-(this.windowWidth - this.elLeft)}px,0,0)`
//        el.style.transform = `translateY()`
//        el.style.transform = `translate3d(${this.elLeft}px,${this.elTop}px,0)`
      },
      afterEnter (el) {
        el.style.transform = `translate3d(0,0,0)`
        el.children[0].style.transform = `translate3d(0,0,0)`
        el.style.transition = 'transform .55s cubic-bezier(.2,1.35,.99,1.07)'
        el.children[0].style.transition = 'transform .55s linear'
        el.children[0].style.opacity = 1
        // 动画结束
        el.addEventListener('transitionend', () => {
          this.ADD_ANIMATION({moveShow: false})
        })
        el.addEventListener('webkitAnimationEnd', () => {
          this.ADD_ANIMATION({moveShow: false})
        })
      }
    },
    created () {
      this._getComputer()
    },
    mounted () {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
    computed: {
      ...mapState(['showMoveImg', 'elLeft', 'elTop', 'moveImgUrl'])
    },
    components: {
      mallGoods
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";

  .move_img {
    position: fixed;
    top: 30px;
    right: 120px;
    width: 45px;
    z-index: 20;
    height: 45px;
    /*transition: transform 1s cubic-bezier(.2,1.35,.99,1.07);*/
    img {
      width: 100%;
      height: 100%;
      opacity: .6;
      display: block;
      border-style: none;
      border-width: 0;
      border: none;
    }
  }

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

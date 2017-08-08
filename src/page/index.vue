<template>
  <div>
    <y-header></y-header>
    <router-view class="main"></router-view>
    <y-footer></y-footer>
    <!--抛物图片-->
    <transition @after-enter='afterEnter' @before-enter="beforeEnter">
      <!--整张图片-->
      <div class="move_img" v-if="showMoveImg" :style="{left:(cartPositionL-15) + 'px',top:(cartPositionT-15) + 'px'}">
        <div><img :src="moveImgUrl"></div>
      </div>
    </transition>
  </div>
</template>
<script>
  import YHeader from '/common/header'
  import YFooter from '/common/footer'
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState(['cartPositionT', 'cartPositionL', 'showMoveImg', 'elLeft', 'elTop', 'moveImgUrl'])
    },
    methods: {
      ...mapMutations(['ADD_ANIMATION']),
      // 监听图片进入购物车
      listenInCart () {
        this.ADD_ANIMATION({moveShow: false, receiveInCart: true})
      },
      beforeEnter (el) {
        el.style.transform = `translate3d(0,${this.elTop - this.cartPositionT}px,0)`
        el.children[0].style.transform = `translate3d(${-(this.cartPositionL - this.elLeft)}px,0,0) scale(1.2)`
      },
      afterEnter (el) {
        el.style.transform = `translate3d(0,0,0)`
        el.children[0].style.transform = `translate3d(0,0,0) scale(.3)`
        el.style.transition = 'transform .55s cubic-bezier(.29,.55,.51,1.08)'
        el.children[0].style.transition = 'transform .55s linear'
        // 动画结束
        el.children[0].addEventListener('transitionend', () => {
          this.listenInCart()
        })
        el.children[0].addEventListener('webkitAnimationEnd', () => {
          this.listenInCart()
        })
      }
    },
    components: {
      YHeader,
      YFooter
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .main {
    min-height: calc(100vh - 454px);
    background: #ededed;
    overflow: hidden;
    width: 100%;
  }

  .bn {
    border-style: none;
    border-width: 0;
    border: none;
  }

  .move_img {
    position: fixed;
    width: 45px;
    z-index: 29;
    height: 45px;
    div {
      @extend .bn;
    }
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: block;
      @extend .bn;
    }
  }

</style>

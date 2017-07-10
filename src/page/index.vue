<template>
  <div>
    <y-header></y-header>
    <!--logo搜索块-->
    <!--<div class="logo-box">-->
      <!--<div class="w pr">-->
        <!--&lt;!&ndash;<div class="pa logo"><a href="/" style="display: block;height: 100%"></a></div>&ndash;&gt;-->
        <!--<div class="search">-->
          <!--<y-search></y-search>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <router-view></router-view>
    <y-footer></y-footer>
  </div>
</template>
<script>
  import YHeader from '/common/header'
  import YSearch from '/components/search'
  import YFooter from '/common/footer'
  export default {
    data () {
      return {
        input: ''
      }
    },
    components: {
      YHeader,
      YFooter,
      YSearch
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .logo {
    background-image: url('/static/images/logo.v2@2x.png');
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    box-shadow: 0 -12px 10px rgba(0, 0, 0, .2);
    background-color: #fff;
    z-index: 2;
    top: -30px;
    width: 190px;
    height: 170px;
  }

  .logo-box {
    height: 140px;
  }

  .search {
    position: absolute;
    left: 270px;
    top: 25px;
    margin: 0 auto;
  }
</style>

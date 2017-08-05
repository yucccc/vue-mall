<template>
  <div>
    <y-header></y-header>
    <router-view class="main"></router-view>
    <y-footer></y-footer>
  </div>
</template>
<script>
  import YHeader from '/common/header'
  import YFooter from '/common/footer'
  export default {
    data () {
      return {
        input: ''
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
</style>

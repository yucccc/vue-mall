<template>
  <div>
    <y-header></y-header>
    <router-view></router-view>
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
<!--<style lang="scss" rel="stylesheet/scss" scoped>-->
<!--</style>-->

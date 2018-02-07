<template>
  <div>
    <y-header :showNav="false"></y-header>
    <router-view style="margin-top: 40px;"></router-view>
    <y-footer></y-footer>
  </div>
</template>
<script>
  import YHeader from '/common/header'
  import YFooter from '/common/footer'
  export default {
    components: {
      YHeader,
      YFooter
    }
  }
</script>

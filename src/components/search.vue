<template>
  <div class="search-box">
    <div class="search">
      <input type="text" class="text">
      <button><i class="el-icon-search"></i></button>
    </div>
  </div>

</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/theme";

  .search {
    display: flex;
    button {
      background-color: $main-col;
      right: 0;
      width: 50px;
      height: 35px;
      line-height: 35px;
      border: none;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
  }

  .s-btn {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .text {
    width: 340px;
    left: 0;
    padding: 4px;
    height: 35px;
    border: 1px solid $main-col;
    line-height: 25px;
    font-size: 14px;
    color: #989898;

  }
</style>

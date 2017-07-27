<template>
    <div class="popup">
        <div class="mask" @click="open">
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    maskOpen () {
      this.$emit('open', 'false')
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    text-align: center;
    transition: opacity .2s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }
    .content {
        width: 200px;
        height: 200px;
        background: #fff;
    }
}
</style>


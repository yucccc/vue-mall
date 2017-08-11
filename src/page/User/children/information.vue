<template>
  <div>
    <div class="avatar-box">
      <div class=img-box><img :src="userInfo.info.avatar" alt=""></div>
      <div class="r-box">
        <h3>修改头像</h3>
        <y-button text="更换头像" classStyle="main-btn" style="margin: 0;" @btnClick="editAvatar=true"></y-button>
        <!--<input type="file" value="上传头像" @change="upimg($event)">-->
      </div>
    </div>
    <div class="edit-avatar" v-if="editAvatar">
      <y-shelf title="设置头像">
        <div slot="content" class="content">
          <div class="edit-l">
            <div style="width: 100px;height: 100px;border: 1px solid #ccc;margin-bottom: 20px;overflow: hidden;">
              <div class="show-preview"
                   :style="{'width': previews.w + 'px','height': previews.h + 'px','overflow': 'hidden'}">
                <div :style="previews.div">
                  <img :src="option.img" :style="previews.img">
                </div>
              </div>
            </div>

            <div style="padding: 10px 0 ">头像预览</div>
            <div class="btn">
              <a href="javascript:;">重新选择</a>
              <input type="file" value="上传头像" @change="upimg($event)"></div>
          </div>
          <div class="edit-r">
            <div>
              <div class="big" id="cropper-target" v-if="option.img">
                <vueCropper
                  :img="option.img"
                  ref="cropper2"
                  :outputSize="example2.size"
                  :outputType="example2.outputType"
                  :info="example2.info"
                  :canScale="example2.canScale"
                  :autoCrop="example2.autoCrop"
                  :autoCropWidth="example2.width"
                  :autoCropHeight="example2.height"
                  @realTime="realTime"
                ></vueCropper>
              </div>
            </div>

          </div>
        </div>
      </y-shelf>
    </div>
  </div>
</template>
<script>
  import YButton from '/components/YButton'
  //  import { upload, updateheadimage } from '/api/index'
  import YShelf from '/components/shelf'
  import vueCropper from 'vue-cropper'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        imgSrc: '',
        editAvatar: true,
        cropContext: '',
        cropperImg: '',
        previews: {},
        option: {
          img: ''
        },
        example2: {
          info: true,
          canScale: false,
          autoCrop: true,
          fixed: true
        }
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      upimg (e) {
        var file = e.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        var reader = new FileReader()
        reader.onload = (e) => {
          this.option.img = e.target.result
        }
        reader.readAsDataURL(file)
//        var reader = new FileReader()
//        reader.readAsDataURL(img)
//        reader.onload = (e) => {  // reader onload start
//          this.imgSrc = e.target.result
//          upload({imgData: e.target.result}).then(res => {
//            if (res.status === '0') {
//              updateheadimage({imageSrc: res.result.path}).then(res1 => {
//                this.$store.dispatch({})
//              })
//            }
//          })
//        }
      },
      realTime (data) {
        this.previews = data
      }
    },
    mounted () {
//      console.log(cropper)
//      cropper()
    },
    components: {
      YButton,
      YShelf,
      vueCropper
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";

  .avatar-box {
    height: 124px;
    display: flex;
    margin: 0 30px 30px;
    border-bottom: #dadada solid 1px;
    line-height: 30px;
    display: flex;
    align-items: center;
    .img-box {
      @include wh(80px);
      border-radius: 5px;
      overflow: hidden;
    }
    img {
      display: block;
      @include wh(100%)
    }
    .r-box {
      margin-left: 20px;
      h3 {
        font-size: 18px;
        font-weight: 400;
        color: #333;
      }
    }
  }

  // 修改头像
  .edit-avatar {
    z-index: 9999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    @include wh(100%);
    background-color: rgba(0, 0, 0, .5);
    @extend %block-center;
    .content {
      display: flex;
      padding: 45px 100px;
    }
    > div {
      @include wh(50%);
      margin: 0;
    }
    .btn {
      width: 80px;
      height: 30px;
      margin-left: 10px;
      position: relative;
      text-align: center;
      line-height: 30px;
      text-shadow: rgba(255, 255, 255, .496094) 0 1px 0;
      border: 1px solid #E6E6E6;
      border-radius: 10px;
      &:hover {
      }
      a {
        color: #666;
        display: block;
        @include wh(100%);
      }
    }
    input[type=file] {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      opacity: 0;
      width: 80px;
      height: 30px;
      cursor: pointer;
      box-sizing: border-box;
      border: 15px solid #000;
      overflow: hidden;
    }
    .edit-l {
      width: 100px;
      text-align: center;
    }
    .edit-r {
      margin-left: 20px;
      flex: 1;
      > div {
        border: 1px solid #ccc;
        width: 300px;
        height: 300px;
      }
    }
  }

  .image-container {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
  }

  .big {
    display: block;
    width: 300px;
    height: 300px;
  }
</style>

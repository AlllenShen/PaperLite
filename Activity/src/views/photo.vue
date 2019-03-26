<template>
  <div class="photo">
    <headNav headline=头像>
        <template slot="left_element">
            <Icon type="ios-arrow-back" color="#7e7e7e" size="26"
                @click="back()"/>
        </template>
        <template slot="right_element">
            <div class="chooseNewphoto">
                <input type="file" class="input-file" name="newPhoto" ref="avatarInput" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
                <Icon type="md-more" color="#7e7e7e" size="26" />
            </div>
        </template>
    </headNav>
    <div>
        <img :src='imgUrl' class="headImg" v-if="! file">
        <div class="newPhoto">
        <vueCropper style="width: 100%;height: 375px;"
                    ref="cropper"
                    :img="avatar"
                    :outputSize="option.outputSize"
                    :outputType="option.outputType"
                    :info="option.info"
                    :canScale="option.canScale"
                    :autoCrop="option.autoCrop"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    v-if="file">
        </vueCropper>
        </div>
        <div class="btn" @click="compressImg()" v-if="file">上传头像</div>
    </div>
  </div>
</template>

<script>
import { MessageBox, Indicator,Toast,Actionsheet  } from "mint-ui"
import {mapState, mapGetters } from 'vuex'
import headNav from '../components/headNav/HeadBar'
export default {
    name: "ImageUpload",
    data(){
        return{
            option: {                         
                    info: true,                      //裁剪框的大小信息
                    outputSize: 1,                   // 裁剪生成图片的质量
                    outputType: 'jpg',              //裁剪生成图片的格式
                    canScale: true,                 // 图片是否允许滚轮缩放
                    autoCrop: true,                  // 是否默认生成截图框
                    autoCropWidth: 100,              // 默认生成截图框宽度
                    autoCropHeight: 100,             // 默认生成截图框高度
                    fixed: true,                    //是否开启截图框宽高固定比例
                    fixedNumber: [4, 4]              //截图框的宽高比例
                },
            status:'',
            avatar:'',
            headImg:'',
            file: '',
            screenWidth: '',
        }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    computed: {
        ...mapState({
            token: state => state.auth.token,
            photoAPI: state => state.auth.photoAPI,
            imgUrl: state => state.auth.imgUrl,
        }),
        ...mapGetters([
            'photoAPI',
            'imgUrl',
            'JWTHeaderObj',
        ])
    },
    components: {
        headNav,
        MessageBox,
            Indicator,
            Toast,
    },
    methods: {
      back () {
            this.$router.go(-1)
        },
        changeImage: function(e){
          let file = e.target.files[0];
          if(file) {
              this.file = file
              console.log(this.file)
              let reader = new FileReader()
              let that = this
              reader.readAsDataURL(file)
              reader.onload= function(e){
                  // 这里的this 指向reader
                  that.avatar = this.result
                  console.log(that.avatar)
              }
          }
      },
            compressImg:function () {
                let _self = this;
                this.$refs.cropper.startCrop();
                this.$refs.cropper.getCropData((data) => {
                    let file = _self.convertBase64UrlToBlob(data);
                    file.name = 'head.jpg';
                    _self.uploadAction(file);
                })
            },
            uploadAction:function (file) {
                Indicator.open();
                let _self = this;
                let param = new FormData();  // 创建form对象
                param.append('identicon', file, file.name);  // 通过append向form对象添加数据
                // 添加请求头
                this.$http.post(
                this.photoAPI,
                    param,
                {
                headers: this.JWTHeaderObj
                }).then((response) => {
                    console.log(response.data.identicon_url);
                    this.$store.commit('changeIdenticon',response.data.identicon_url + '?' + new Date().getTime() );
                    this.imgUrl=response.data.identicon_url;
                })
                this.$router.go(-1)
            },
            // 将base64的图片转换为file文件
            convertBase64UrlToBlob(urlData) {
                let bytes = window.atob(urlData.split(',')[1]);//去掉url的头，并转换为byte
                //处理异常,将ascii码小于0的转换为大于0
                let ab = new ArrayBuffer(bytes.length);
                let ia = new Uint8Array(ab);
                for (var i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i);
                }
                return new Blob([ab], { type: 'image/jpeg' });
            },
      }
}
</script>
<style scoped>
.btn{
    position:relative;
    margin-top:90px;
    width: 80%;
    height: 40px;
    color: white;
    border-radius: 20px;
    background-color: #3377ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
}
.input-file {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
}
.headImg{
    position:relative;
    top:55px;
    width:100%;
}
.newPhoto{
    position:relative;
    top:55px;
}
</style>
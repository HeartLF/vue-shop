<template>
    <div class="main">
        <div class="box">
  <div class="add-image" align="center">
        <i class="icon-camera"></i> 
        <p class="font13">添加图片</p>
    </div>
        </div>
        <div class="content">
            <div class="content_box">  
               <img src="../assets/shenhe.png">
                <span>标题：</span>
                <input type="text" placeholder="请输入标题" v-model="title">
            </div>
           <div class="line"></div>
           <div class="content_box">  
               <img src="../assets/标签.png">
                <span>价格：</span>
                <input type="text" placeholder="请输入价格" v-model="price">
            </div>
           <div class="line"></div>
            <div class="content_box">  
                <img src="../assets/分类.png">
                <span>分类：</span>
                <select v-model="fruit" >
                    <option v-for="option in options" :key="option.value">
                        {{option.text}}
                    </option>
	            </select>
	        
            </div>
            <div class="line"></div>
            <div>
                <textarea placeholder="宝贝详情" class="textarea"></textarea>
            </div>
              <div class="bottom">
<mt-button size="large" type="primary">联系卖家</mt-button>
      </div>

        </div>
      
    </div>
</template>

<script>
import {Indicator, MessageBox} from 'mint-ui';
const M = 7;
  const UNIT = 1024;
  const MAX_SIZE = M * UNIT * UNIT;
export default {
    name:'Add',
    data(){
        return {
            title:'',
            price:'',
            fruit: 'apple',
            options: [
                { text: '苹果', value: 'apple' },
                { text: '香蕉', value: 'banana' },
                { text: '西瓜', value: 'watermelon' }]

        }
    },
     props: {
      multiple: Boolean,
      max: Number
    },
     mounted() {
      this.getDom();
    },
    methods: {
      // 获取dom元素外部点击触发
      getDom() {
        let file = this.$refs.file;
        this.$emit('refDom', file);
      },
      // 图片数量是否超过max张
      isOutNumber(files) {
        const MAX = this.max;
        if (files.length > MAX) {
          MessageBox({
            title: '提示',
            message: `一次最多允许上传${MAX}张！`
          });
          return true;
        } else {
          return false;
        }
      },
      change(e) {
        let files = e.target.files;
        // 如果超过设定的张数张，提示
        if (this.isOutNumber(files)) {
          return;
        }
        let len = files.length;
        for (let i = 0; i < len; i++) {
          if (window.FileReader && files[i]) {
            if (files[i].size <= MAX_SIZE) {
              Indicator.open();
              // 读取文件转化图片base64
              let fr = new FileReader();
              let self = this;
              fr.onload = (e) => {
                let w = 300;
                let h = 300;
                let file = files[i];
                let compressPic = function(base64) {
                  // 将压缩处理后的图片传递出去
                  self.$emit('fileChange', {base64, file, files});
                };
                self.canvasDataUrl(e.target.result, w, h, compressPic);
              };
              fr.onerror = (e) => {
                Indicator.close();
              };
              fr.readAsDataURL(files[i]);
            } else {
              MessageBox({
                title: '警告',
                message: `${files[i].name}图片尺寸过大，图片请小于7M！`
              });
            }
          }
        }
      },
       //  利用canvas压缩图片
      canvasDataUrl(data, w, h, callback) {
        let newImg = new Image();
        newImg.src = data;
        let imgWidth, imgHeight;
        newImg.onload = () => {
          let img = document.createElement('img');
          img.src = newImg.src;
          imgWidth = img.width;
          imgHeight = img.height;
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          if (imgWidth > imgHeight) {
            imgWidth = w * imgWidth / imgHeight;
            imgHeight = h;
          } else {
            imgHeight = h * imgHeight / imgWidth;
            imgWidth = w;
          };
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          ctx.clearRect(0, 0, w, h);
          // 处理png格式图片背景变黑的问题
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
          let rate = 0.7;
          let base64 = canvas.toDataURL('image/jpeg', rate);
          callback(base64);
        };
      }
    }
    
}
</script>
<style scoped>
.main{
    /* background: #f0f0f2; */
    height: 100%;
    
}
    .box{
        width: 100px;
        height: 100px;
        background: rgb(187, 187, 187);
    }
    input{
        display: block;
        width: 100%;
        height: 100%;
    }
    .content{
        text-align: left;
        /* display: flex;
        flex-direction: column;  */
    }
    .content_box{
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .content img{
        width: 24px;
        height: 24px;
        visibility: middle;
        line-height: 30px;
        position: relative;
        top: 5px;
    }
    .content input{
        position: absolute;
        float: left;
    
        height: 37px;
        visibility: middle;
        border: none;
         background: #f0f0f2;
    }
    .content span{
        line-height: 30px;
        font-family: SourceHanSansSC;
      font-weight: 400;
    }
    .content select{
       width: 200px;
       height: 30px;
        color: #888;
        border-color: #bbb;
        padding: 0 8px;
        border-color: #bbb;
        border-radius: 6px;
    }
    .line{
        border: 1px solid  rgb(187, 187, 187);
    }
   .content .textarea{
        width: 100%;
        height: 190px;
        background-color: rgb(255, 255, 255);
        border: none;
        margin-bottom: 100px;
    }
.bottom button{
    position: relative;
    top: -60px;
    background: #FE5555
}
</style>



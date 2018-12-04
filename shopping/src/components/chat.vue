<template>
    <div>
        <div>
            <mt-header title="客服" fixed>
                <router-link :to="{name:'My'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
      <div class="main">
        <div class="chat-sender">
  <div><img src="../assets/avator.png"></div>
  <div>阿奔 Ben</div>
  <div>
    <div class="chat-left_triangle"></div>
    <span> 苹果增加三款配件的颜色选项</span>
  </div>
</div>
<!-- Right -->
<div class="chat-receiver">
  <div><img src="../assets/avator.png"></div>
  <div>好人·马克思</div>
  <div>
    <div class="chat-right_triangle"></div>
    <span> 但是如果你正在再发新的APP跨平台项目，我建议你考虑一下Ionic2/Ionic3。 ionic2/Ionic3的架构使得“单一职责原则”得到了体现，组件、页面之间相互独立，有利于内聚和解耦。</span>
  </div>
</div>
<!-- Right -->
<div class="chat-sender">
  <div><img src="../assets/avator.png"></div>
  <div>阿达姆 Adam</div>
  <div>
    <div class="chat-left_triangle"></div>
    <span> 一款接近原生的Html5移动App开发框架</span>
  </div>
</div>
<!-- Notice/Center -->
<div class="chat-notice">
  <span>2017年12月10日 23:13</span>
</div>
<div class="chat-notice">
  <span>你被群主移除群聊</span>
</div>
</div>
<div class="chat_bottom">
    <input type="text" v-model="value" class="txt">
    <button class="send">发送</button>
</div>
    </div>
</template>
<script>
export default {
    name:'Chat',
    data(){
      return {
        value:'',
        msg:'',
        img:require('../assets/avator.png')
      }
    },
    created() {
      // this.websockets()
    },
    mounted() {
      this.websockets()
    },
    methods:{
      websockets(){
        let ws=new WebSocket('ws://localhost:3000');
        ws.onopen=()=>{
          ws.send(this.value);
          console.log('数据发送中');
        }
        ws.onmessage=evt=>{
          //接受数据
          console.log(evt);
          let send=document.querySelector('send');
          console.log(send);
          let html
          send.addEventListener('click',function(){           
              html+=`<div class="chat-receiver">
  <div><img src="../assets/avator.png"></div>
  <div>好人·马克思</div>
  <div>
    <div class="chat-right_triangle"></div>
    <span> 但是如果你正在再发新的APP跨平台项目，我建议你考虑一下Ionic2/Ionic3。 ionic2/Ionic3的架构使得“单一职责原则”得到了体现，组件、页面之间相互独立，有利于内聚和解耦。</span>
  </div>
</div>`
document.querySelector('.main').innerHTML+=html;
          })
          
        };
        ws.onclose=function(){
            //关闭连接
            console.log('连接关闭');
        }
        this.$router.afterEach(()=>{
          ws.close()
        })
      }
    }
}
</script>
<style scoped>
   body{
      background-color: #ebebeb;
      font-family: -apple-system;
      font-family: "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
    }
    .main{
      height: 100%;
    }
    .chat-sender{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      clear:both;
      font-size: 80%;
      margin-top: 45px;
    }
    .chat-sender div:nth-of-type(1){
      float: left;
    }
    .chat-sender div:nth-of-type(2){
      margin: 0 50px 2px 50px;
      padding: 0px;
      color: #848484;
      font-size: 70%;
      text-align: left;
    }
    .chat-sender div:nth-of-type(3){
      background-color: white;
      /*float: left;*/
      margin: 0 50px 10px 50px;
      padding: 10px 10px 10px 10px;
      border-radius:7px;
      text-indent: -12px;
    }

    .chat-receiver{
      clear:both;
      font-size: 80%;
    }
    .chat-receiver div:nth-of-type(1){
      float: right;
    }
    .chat-receiver div:nth-of-type(2){
      margin: 0px 50px 2px 50px;
      padding: 0px;
      color: #848484;
      font-size: 70%;
      text-align: right;
    }
    .chat-receiver div:nth-of-type(3){
      /*float:right;*/
      background-color: #b2e281;
      margin: 0px 50px 10px 50px;
      padding: 10px 10px 10px 10px;
      border-radius:7px;
    }

    .chat-receiver div:first-child img,
    .chat-sender div:first-child img{
      width: 40px;
      height: 40px;
      /*border-radius: 10%;*/
    }

    .chat-left_triangle{
      height: 0px;
      width: 0px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent white transparent transparent;
      position: relative;
      left: -22px;
      top: 3px;
    }
    .chat-right_triangle{
      height: 0px;
      width: 0px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent transparent #b2e281;
      position: relative;
      right:-22px;
      top:3px;
    }

    .chat-notice{
      clear: both;
      font-size: 70%;
      color: white;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 100px;

    }
    .chat-notice span{
      background-color: #cecece;
      line-height: 25px;
      border-radius: 5px;
      padding: 5px 10px;
    }
    .chat_bottom{
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
    .txt{
      height: 50px;
      width: 80%;
      line-height: 50px;
    }
    .chat_bottom button{
      background: #26a2ff;
      color: #ffffff;
      height: 50px;
      width: 15%;
      border: none;
      /* float: right; */
    }
</style>



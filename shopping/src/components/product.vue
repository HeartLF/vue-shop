<template>
    <div>
        <div>           
            <mt-swipe :show-indicators="false" class="swipe" :auto="0"> 
                <mt-swipe-item><img src="../assets/v2_pgqwc7.jpg" alt="" class="lunbotu"><span class="book">二手书</span></mt-swipe-item>
                <mt-swipe-item><img src="../assets/v2_pgqwc7.jpg" alt=""><span class="book">二手书</span></mt-swipe-item>
                <mt-swipe-item><img src="../assets/v2_pgqwc7.jpg" alt=""><span class="book">二手书</span></mt-swipe-item>
            </mt-swipe>
            <div class="top">
                <div class="back" @click="back">
                    <img src="../assets/返回.png" slot="icon">
                </div>
                <div class="home_page" @click="back_home">
                    <img src="../assets/首页.png" slot="icon">
                </div>
            </div>
           
        </div>
       <div class="content">
           <div class="content_top">
               <span>￥600</span>
               <span>234</span>个人已浏览
               <span>东区</span>
           </div>
           <p>Adidas Crazy Explosive 2017 维金斯篮球鞋</p>
           <div class="line"></div>
           <div class="content_bottom">
               自用篮球战靴，42码，18年10月从虎扑购入，正品保证。原价1499。但是码子不适合我。需要联系
           </div>
       </div>
       <div></div>
      <div class="bottom">
        <mt-button size="large" type="primary">联系卖家</mt-button>
      </div>
   
    </div>
</template>
<script>
export default {
    name:'Product',
    methods:{
        back:function(){
            this.$router.go(-1);
        },
        back_home:function () { 
            this.$router.push({name:'Middle'})
         }
    }
}
</script>
<style scoped>
    .top{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .back{
        border: none;      
             
    }
    .back img{
        display: block;
        width: 2rem;
        height: 1.5rem;
        margin-top: .8rem;
        position: absolute;  
        left: 0;
        top: 0;
        
    }
    .home_page img{
        display: block;
        width: 2rem;
        height: 1.7rem;
        margin-top: .8rem;
         position: absolute;  
         right: .8rem;
         top: 0;
    }
 img {
     display: block;
    width: 100%;
    height: 100%;
 }
 .mint-swipe {
      height: 19rem;
 }
 .book{
   position: absolute;
   right: 10%;
   bottom: 10%;
   /* transform: translate(-50%,-50%); */
 }
.content{
    margin-top: 1.8rem;
    text-align: left;
}
.content_top{
    margin-left: 0.5rem;
}
.content_top span:nth-child(1){
    font-family: SourceHanSansSC;
    font-weight: 400;
    font-size:1rem;
    color: rgb(230, 215, 76);
    font-style: normal;
    letter-spacing: 0;
    line-height: 2rem;
}
.content_top span:nth-child(2){
   font-size: 1.5rem;
    margin-left: 2.4rem;
    background-color: rgba(234, 48, 48, 0.8);
    line-height: 2rem;
    color: #fff;
}
.content_top span:nth-child(3){
    font-size: 1.5rem;
    margin-left: .8rem;
    background-color: rgba(234, 48, 48, 0.8);
    line-height: 1.5rem;
    color: #fff;
}
.content p{
    margin-left: 1.5rem;
    margin-top: 1.5rem;
    font-size: 1.7rem;
    opacity: 0.5;
    margin-bottom: 2.5rem; 
}
.line{
    border: 0.5px solid black;
    opacity: 0.5;
}
.content_bottom{
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    font-family: SourceHanSansSC;
    font-weight: 400;
    font-size: 1rem;
    color: rgb(16, 16, 16);
    line-height: 1.7rem;
}
.bottom{
    margin-top: 2.5rem;
}
.bottom button{
    position: fixed;
    bottom: 0;
}
</style>


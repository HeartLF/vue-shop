<template>
    <div>
        <div>
            <mt-swipe :show-indicators="false" :auto="2000" >
                <mt-swipe-item><img src="../assets/shop1.jpg" alt="" srcset=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/shop2.jpg" alt="" srcset=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/shop3.jpg" alt="" srcset=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/shop4.jpg" alt="" srcset=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/shop5.jpg" alt="" srcset=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="top">
                <div class="back" @click="back">
                    <img src="../assets/返回.png" slot="icon">
                </div>
                <div class="home_page" @click="back_home">
                    <img src="../assets/首页.png" slot="icon">
                </div>
        </div>
        <div class="price">
            <p>￥799</p>
            <p>价格：￥999</p>
        </div>
        <div class="title">
            <h3>耐克Air Force1空军一号男鞋小麦色af1中高帮女白换勾315122―111</h3>
        </div>
        <div class="free">
            <p>快递：免运费</p>
            <p>北京</p>
        </div>
        <div class="info">
            <p>
                耐克Air Force1空军一号男鞋小麦色af1中高帮女白换勾315122―111,只穿过一次，码闲小
            </p>
        </div>
        <div class="like">
            <img src="../assets/喜欢.png" slot="icon">
            <h1>猜你喜欢</h1>
        </div>
        <div class="like_content">
            <ul>
                <li>
                    <div class="content_img">
                        <img src="../assets/shoe0.jpg" alt="">
                    </div>
                    <p class="instr">耐克Air Force1 AF1简版OW联名空军一号小麦色低帮男鞋aa4061-200</p>
                    <p class="content_price">￥499</p>
                </li>
                <li>
                    <div class="content_img">
                        <img src="../assets/shoe0.jpg" alt="">
                    </div>
                    <p class="instr">耐克Air Force1 AF1简版OW联名空军一号小麦色低帮男鞋aa4061-200</p>
                    <p class="content_price">￥499</p>
                </li>
                 <li>
                    <div class="content_img">
                        <img src="../assets/shoe0.jpg" alt="">
                    </div>
                    <p class="instr">耐克Air Force1 AF1简版OW联名空军一号小麦色低帮男鞋aa4061-200</p>
                    <p class="content_price">￥499</p>
                </li>
                <li>
                    <div class="content_img">
                        <img src="../assets/shoe0.jpg" alt="">
                    </div>
                    <p class="instr">耐克Air Force1 AF1简版OW联名空军一号小麦色低帮男鞋aa4061-200</p>
                    <p class="content_price">￥499</p>
                </li>
            </ul>
        </div>
        <div class="bottom">
           <div class="bottom_img" @click="change($event)">
               <img src="../assets/收 藏.png" alt="" v-if="show">
               <img src="../assets/收 藏 (1).png" alt="" v-if="!show"> 
               <span>收藏</span>
           </div>
           <div class="btn">
               <button>我想要</button>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Clother',
    data(){
        return{
            show:true
        }
    },
  methods:{
      back:function(){
          this.$router.push({
              name:'Game'
          })
      },
      back_home:function(){
          this.$router.push({
              name:'Middle'
          })
      },
      change(event){
          if(event.target.nodeName==='IMG'){
              this.show=!this.show
          }
       
      }
  }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;

}
 img {
   display: block;
    width: 100%;
    height: 100%;
    /* width: 100vw; */
 }
 .mint-swipe {
      height: 20rem;
 }
 .top{
     position: absolute;;
     top: 0px;
    width: 100%;
 }
 .back{
     width: 2rem;
     height: 2rem;
     /* left: 0px; */
     float: left;

 }
 .home_page{
     width: 2rem;
     height: 2rem;
     /* right: 0px; */
     float: right;
     margin-right: 1rem;
 }
 .price{
     width: 100%;
     /* height: 2rem; */
     text-align: left;
     margin-top: 1rem;
 }
 .price p:nth-of-type(1){
     color: #eb5211;
     font-size: 2rem;
     line-height: 1rem;
     margin-left: 1rem;
 }
 .price p:nth-of-type(2){
     text-decoration: line-through;
     font-size: .5rem;
     color: #999;
     line-height: 1rem;
     margin-left: 1rem;
     margin-top: .5rem;
 }
 .title{
     margin-top: .5rem;
     text-align: left;
 }
 .title h3{
     font-size: 1rem;
     line-height: 1.5rem;
     margin-left: .5rem;
text-indent:2em;
 }
.free{
    margin-top: .5rem;
    text-align: left;
    overflow: hidden;
}
.free p:nth-of-type(1){
    float: left;
    color: #999;
    font-size: .5rem;
    margin-left: 1.5rem;
}
.free p:nth-of-type(2){
    float: right;
    color: #999;
    font-size: .5rem;
    margin-right: 1.5rem;
}
.info{
    margin-top: 1rem;
    text-align: left;
}
.info p{
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 1rem;
    text-indent:2em;
}
.like{
    margin-top: 1rem;
}
.like img{
    width: 5%;
    display: inline-block;
}
.like h1{
    font-size: 1rem;
    color: #eb5211;
    display: inline;
    position: relative;
    top: -.2rem;
}
.like_content{
    width: 100%;
    margin-top: 1rem;
}
.like_content ul{
    width: 96%;
    margin: 0 auto;
    list-style: none;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5rem;
}
.like_content ul li{
  
    width: 45%;
    margin-right: 5%;
    margin-top: 5%;


}
.content_img{
    width: 100%;
}
.content_img img{
    width: 100%;
    height: 100%;
}
.instr{
    font-size: 1rem;
    font-weight: normal;
    padding: 0.06rem 0.05rem 0 0.08rem;
    text-align: justify;
    background-color: #ffffff;
 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.content_price{
    color: #eb5211;
    font-size: 1rem;
}
.bottom{
    width: 100%;
    /* height: 1%; */
    height: 4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #ffffff;
}
.bottom_img{
    width: 20%;
    float: left;
}
.bottom_img img{
    display: inline-block;
    width: 30%;
    margin-top: 1rem;
}
.bottom_img span{
   /* font-size: 1rem; */
   line-height: 2rem;
   position: absolute;
   top: .8rem;
   margin-left: .2rem;
}
.btn{
    height: 100%;
}
.btn button{
    height: 2rem;
    width: 5rem;
    background: #eb5211;
    color: #ffffff;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>



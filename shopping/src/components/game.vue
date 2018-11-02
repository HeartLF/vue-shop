<template>
     <div>
         <div class="fix">
            <div class="back" @click="back">
                <img src="../assets/返回.png" slot="icon">
            </div>
            <div class="search">
                    <mt-search
                    v-model="value"
                    cancel-text="取消"
                    placeholder="搜索">
                    </mt-search>
            </div>
         </div>
        <div></div>
        <div class="content_top">
               
            <ul class="sort" >
                <li>
                    <span>综合排序</span>
                    <img src="../assets/向下.png"   @click="down" :class="[rotate?'down go':'down aa']">
                 <ul class="paixu" v-if="list">
                        <li>
                            价格从低到高排序
                        </li>
                        <li>
                            浏览数从高到底
                        </li>
                    </ul>
                </li>
                <li>
                    <span>区域</span>
                    <img src="../assets/向下.png"  @click="down2" :class="[rotate2?'down go':'down aa']">
                   <ul class="paixu" v-if="list2">
                        <li>
                            东区
                        </li>
                        <li>
                            西区
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="content" :style="opacity">
            <ul   v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10" class="sort">
    <router-link :to="{name:'Product',params:{id:123}}">
                <li class="content_main" >
                    <div class="content_img"><img src="../assets/v2_pgqwc7.jpg" alt=""></div>
                    <div class="content_info">
                        <p class="name">维金斯篮球鞋</p>
                        <span class="price">￥600</span>
                        <div class="content_bottom">
                        <p class="location">东区</p>
                        <p class="counter">
                            <span class="num">235</span>
                            <span>个人浏览</span>
                        </p>
                         </div>
                    </div>
                </li>
                </router-link>
                 <li class="content_main">
                    <div class="content_img"><img src="../assets/v2_pgqwc7.jpg" alt=""></div>
                    <div class="content_info">
                        <p class="name">维金斯篮球鞋</p>
                        <span class="price">￥600</span>
                        <div class="content_bottom">
                        <p class="location">东区</p>
                        <p class="counter">
                            <span class="num">235</span>
                            <span>个人浏览</span>
                        </p>
                         </div>
                    </div>
                </li>
                 <li class="content_main">
                    <div class="content_img"><img src="../assets/v2_pgqwc7.jpg" alt=""></div>
                    <div class="content_info">
                        <p class="name">维金斯篮球鞋</p>
                        <span class="price">￥600</span>
                        <div class="content_bottom">
                        <p class="location">东区</p>
                        <p class="counter">
                            <span class="num">235</span>
                            <span>个人浏览</span>
                        </p>
                         </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Game',
     data () {
    return {
            msg: 'Welcome to Your Vue.js App',
            result:[],
            title:'',
            value:'',
            list3:[],
            list:false,
            list2:false,
            opacity:{
                opacity:1
            },
            rotate:false,
            rotate2:false
        }
    },
  methods:{
            loadMore:function() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                    this.list3.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            },
            down:function(){
                this.list=!this.list;
                this.rotate=!this.rotate;
                if(this.opacity.opacity==1){
                    this.opacity.opacity=0.3;
                }else{
                    this.opacity.opacity=1;
                }
                
                console.log(this.opacity)
            },
            down2:function(){
                this.list2=!this.list2;
                this.rotate2=!this.rotate2;
                if(this.opacity.opacity==1){
                    this.opacity.opacity=0.3;
                }else{
                    this.opacity.opacity=1;
                }
            },
            back:function(){
                this.$router.go(-1)
            }
  }
}
</script>
<style scoped>
.fix{
    position: flex;
}
    .back{
        border: none;
        float: left;
    }
    .back img{
        display: block;
        width: 30px;
        height: 30px;
        margin-top: 10px;
        
    }
    .mint-search{
    height: 100%;
 }
 .content_top{
     border-bottom: 1px solid black;
     margin-top: 10px;
     padding-bottom: 10px;
 }
 .sort{
     padding: 0px;
     display: flex;
     flex-wrap: wrap;
 }
.paixu{
    position: absolute;
     width: 100%;
     margin: 0px;
     padding: 0px;   
     
     background: #fff;
 }
 .paixu li{
     position: relative;
     display: block;
     list-style: none;
     border-bottom: 1px solid black;
     margin-bottom: 5px;
      width: 100%;
      text-align: left;
      margin-left: 20px;
      margin-top: 10px;
      line-height: 20px;
      padding-top: 10px;
      animation-delay: 0.5s;
      z-index: 2
 }
 .paixu li:hover{
     color: red
 }
 ul li{
     display: inline-block;
     list-style: none;
     width: 50%;
     text-align: center;
     visibility: middle;
 }

 .down{
     display: inline-block;
     width: 24px;
     height: 24px;
     visibility: middle;
    position: absolute;
    transform-origin:center center;
    
 }
 .content{
     margin-top: 20px;
 }
 .content_main{
     width:100%;
     height: 101px;
     margin-top: 10px;
 }
 .content_img{
     float: left;
 }
 .content_img img{
     display: block;
     width: 160px;
     height: 100px;
 }
 .content_info{
     text-align: left;
    float: left;
     margin-left: 10px;
 }
 .name{
     font-size: 14px;
     margin: 0px;
     
     margin-bottom: 20px;
 }
 .price{
     font-family: SourceHanSansSC;
    font-weight: 400;
    font-size: 20px;
    color: rgb(230, 215, 76);
    font-style: normal;
    letter-spacing: 0px;
    line-height: 30px;
    
}
.location{
    margin: 0px;
    margin-left: 5px;
    font-family: SourceHanSansSC;
    font-weight: 400;
    font-size: 14px;
    color: rgb(16, 16, 16);
    font-style: normal;
    letter-spacing: 0px;
    line-height: 21px;
    float: left;
}

.counter{
    float: right;
    margin: 0px;
    margin-left: 30px;
}
.counter span{
    font-family: SourceHanSansSC;
    font-weight: 400;
    font-size: 14px;
    color: rgb(16, 16, 16);
    font-style: normal;
    letter-spacing: 0px;
    line-height: 21px;
    text-decoration: none;
    float: left;
}
.counter .num{
     color: rgba(234, 48, 48, 0.8);
     float: left;
}
 .aa{
        transition: all 1s;
    }
    .go{
        transform:rotate(-180deg);
        transition: all 1s;
    }
</style>



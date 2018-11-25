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
         <div class="content_top" >
             <ul>
                 <li @click="down">
                     <span :class="[setTime_title?'active':'default']">{{condition}}</span>
                      <img src="../assets/向下.png"    :class="[rotate?'down bb':'down aa']">
                 </li>
                 <li @click="sales">
                     <span  :class="[color?'active':'default']">销量优先</span>
                 </li>
             </ul>
         </div>
         <div class="choose" v-show="choose">
             <ul>
                 <li v-for="(item,index) in time" :key='index' 
                 @click="main_choose($event,index)">
                     <span :class="[setTime===index?'active':'default']">{{item.info}}</span>
                 </li>
              
             </ul>
         </div>
         <div class="bodyCont" v-if="bodyCont"></div>
         <div class="main">
             <ul>
                 <li>
                     <div class="main_img">
                         <img src="../assets/phone.jpg" alt="">
                     </div>
                     <div class="main_content">
                         <h3>双十一限量抢 256G超薄6.2寸全网通4G手机</h3>
                         <p class="main_price">
                             <span class="price">￥278</span>
                             <span class="del_price">￥1278</span>
                         </p>
                         <div class="main_free">
                             <span class="free">免运费</span>
                             <span class="num">584人已付款</span>
                         </div>
                     </div>
                 </li>
                   <li>
                     <div class="main_img">
                         <img src="../assets/phone.jpg" alt="">
                     </div>
                     <div class="main_content">
                         <h3>双十一限量抢 256G超薄6.2寸全网通4G手机</h3>
                         <p class="main_price">
                             <span class="price">￥278</span>
                             <span class="del_price">￥1278</span>
                         </p>
                         <div class="main_free">
                             <span class="free">免运费</span>
                             <span class="num">584人已付款</span>
                         </div>
                     </div>
                 </li>
                   <li>
                     <div class="main_img">
                         <img src="../assets/phone.jpg" alt="">
                     </div>
                     <div class="main_content">
                         <h3>双十一限量抢 256G超薄6.2寸全网通4G手机</h3>
                         <p class="main_price">
                             <span class="price">￥278</span>
                             <span class="del_price">￥1278</span>
                         </p>
                         <div class="main_free">
                             <span class="free">免运费</span>
                             <span class="num">584人已付款</span>
                         </div>
                     </div>
                 </li>
                   <li>
                     <div class="main_img">
                         <img src="../assets/phone.jpg" alt="">
                     </div>
                     <div class="main_content">
                         <h3>双十一限量抢 256G超薄6.2寸全网通4G手机</h3>
                         <p class="main_price">
                             <span class="price">￥278</span>
                             <span class="del_price">￥1278</span>
                         </p>
                         <div class="main_free">
                             <span class="free">免运费</span>
                             <span class="num">584人已付款</span>
                         </div>
                     </div>
                 </li>
                   <li>
                     <div class="main_img">
                         <img src="../assets/phone.jpg" alt="">
                     </div>
                     <div class="main_content">
                         <h3>双十一限量抢 256G超薄6.2寸全网通4G手机</h3>
                         <p class="main_price">
                             <span class="price">￥278</span>
                             <span class="del_price">￥1278</span>
                         </p>
                         <div class="main_free">
                             <span class="free">免运费</span>
                             <span class="num">584人已付款</span>
                         </div>
                     </div>
                 </li>
             </ul>
         </div>
    </div>
</template>
<script>
export default {
    name:'Phone',
    data(){
        return {
            value:'',
            rotate:false,
            choose:false,
            bodyCont:false,
            color:false,
            setTime_title:true,
            setTime:0,
            condition:'综合排序',
            time:[
                {timer: '17',
                info:'综合排序'
                },
                {timer: '18',
                info:'价格从高到低'},
                {timer: '19',
                info:'价格从低到高'
                }
            ]
        }
    },
    methods:{
        back(){
            this.$router.push('./Middle')
        },
        down(){
            this.rotate=!this.rotate
            this.choose=!this.choose;
            this.bodyCont=!this.bodyCont;
            this.setTime_title=false;
            this.color=false;
        },
        main_choose($event,index){
            this.setTime=index;
            console.log(this.setTime)
            this.choose=false;
            this.bodyCont=false;
            this.condition=event.target.innerText;
            this.setTime_title=true;
            this.rotate=false;
        },
        sales(){
            this.color=!this.color;
            this.setTime_title=false;
            if(this.choose==true){
                this.choose=false;
                this.bodyCont=false;
            }
        }

    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
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
    width: 100%;
    height: 2rem;
    margin-top: 1rem;
}
.content_top ul{
    list-style: none;
    width:100%;
}
.content_top ul li{
    width: 50%;
    float: left;
}
.content_top ul li:nth-of-type(1){
        border-right: 1px solid #ccc;
        color: #f50;
}
.down{
    display: inline-block;
    width: 1.6rem;
    height: 1.5rem;
    visibility: middle;
    position: absolute;
    transform-origin:center center;
}
.aa{
    transition: all .8s;
}
.bb{
    transform: rotate(-180deg);
    transition: all .8s;
}
.choose{
    width: 100%;
}
.choose ul{
    width:90%;
    margin-left: 2rem; 
    list-style: none;
}
.choose ul li{
    text-align: left;
    padding-top: 1rem;
    padding-bottom: .5rem;
}
.choose ul li:nth-of-type(1){
    border-bottom: 1px solid #cccccc;
    
}
.choose ul li:nth-of-type(2){
    border-bottom:1px solid #cccccc
}
.bodyCont{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
}
.main{
    width: 100%;
    height: 100%;
    margin-top: 1rem;
}
.main ul{
    width: 95%;
    margin: 0 auto;
    list-style: none;
    overflow: hidden;
}
.main ul li{
    height: 8rem;
    margin-left: 1rem;
    overflow: hidden;
    border-top: 1px solid #cccccc;
    padding-top: 1rem;
}
.main_img{
    float: left;
    width: 20%;
    height: 100%;
}
.main_img img{
    width: 6rem;
    height: 6rem;
}
.main_content{
    width: 65%;
    float: right;
    margin-left: 1rem;
}
.main_content h3{
    text-align: left;
    line-height: 1.5rem;
    margin-bottom: 3px;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #4b566a;
    font-size: 1rem;
}
.main_price{
    text-align: left;
    line-height: 1.5rem;
    color: #999;
}
.price{
    color: #eb5211;
}
.del_price{
    text-decoration: line-through;
    color: #999;
    line-height: 1rem;
    font-size: .5rem;
}
.main_free{
    text-align: left;
    width: 100%;
}
.free{
    float: left;
    line-height: 1.5rem;
    color: #999;
    width: 50%;
    font-size: .6rem;
}
.num{
    float: right;
    line-height: 1.5rem;
    color: #999;
    width: 50%;
    font-size: .6rem;
}
.active{
    color: #f50;
}
.default{
    color: black;
}
</style>



<template>
    <div>
           <div>
            <mt-header title="游戏详情" fixed>
                <router-link :to="{name:'acount'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="main">
            <ul>
                 <router-link :to="{name:'ID_content',params:{id:123}}">
                <li>
                   
                    <div class="main_img">
                        <img src="../assets/58eb65cc7987b.jpg" alt="">
                    </div>
                    <div class="main_content">
                        <div class="main_content_left">
                            <p class="title">新号！绝地求生，吃鸡，大吉大利！相当稳定不顶号！</p>
                           <p><small>4小时起租</small><small>免押金</small></p>
                           <p><span>近期出租116次</span></p>
                        </div>
                        <div class="main_content_right">
                            <p>￥1.1</p>
                            <p>/小时</p>
                        </div>
                         <div class="main_bottom">
                        <div class="fl">
                            <span>绝地求生</span> 
                            <span>全区</span>
                             <span>全服</span>
                        </div>
                        <div class="fr">
                            <i class="fi2">赔</i> 
                            <i class="fi4">顶</i>
                        </div>
                    </div>
                    </div>
                   
                </li>
                 </router-link>
                  <router-link :to="{name:'ID_content',params:{id:456}}">
                <li>
                   
                    <div class="main_img">
                        <img src="../assets/58eb65cc7987b.jpg" alt="">
                    </div>
                    <div class="main_content">
                        <div class="main_content_left">
                            <p class="title">新号！绝地求生，吃鸡，大吉大利！相当稳定不顶号！</p>
                           <p><small>4小时起租</small><small>免押金</small></p>
                           <p><span>近期出租116次</span></p>
                        </div>
                        <div class="main_content_right">
                            <p>￥1.1</p>
                            <p>/小时</p>
                        </div>
                         <div class="main_bottom">
                        <div class="fl">
                            <span>绝地求生</span> 
                            <span>全区</span>
                             <span>全服</span>
                        </div>
                        <div class="fr">
                            <i class="fi2">赔</i> 
                            <i class="fi4">顶</i>
                        </div>
                    </div>
                    </div>
                   
                </li>
                 </router-link>
                  <router-link :to="{name:'ID_content',params:{id:123}}">
                <li>
                   
                    <div class="main_img">
                        <img src="../assets/58eb65cc7987b.jpg" alt="">
                    </div>
                    <div class="main_content">
                        <div class="main_content_left">
                            <p class="title">新号！绝地求生，吃鸡，大吉大利！相当稳定不顶号！</p>
                           <p><small>4小时起租</small><small>免押金</small></p>
                           <p><span>近期出租116次</span></p>
                        </div>
                        <div class="main_content_right">
                            <p>￥1.1</p>
                            <p>/小时</p>
                        </div>
                         <div class="main_bottom">
                        <div class="fl">
                            <span>绝地求生</span> 
                            <span>全区</span>
                             <span>全服</span>
                        </div>
                        <div class="fr">
                            <i class="fi2">赔</i> 
                            <i class="fi4">顶</i>
                        </div>
                    </div>
                    </div>
                   
                </li>
                 </router-link>
                  <router-link :to="{name:'acount',params:{id:123}}">
                <li>
                   
                    <div class="main_img">
                        <img src="../assets/58eb65cc7987b.jpg" alt="">
                    </div>
                    <div class="main_content">
                        <div class="main_content_left">
                            <p class="title">新号！绝地求生，吃鸡，大吉大利！相当稳定不顶号！</p>
                           <p><small>4小时起租</small><small>免押金</small></p>
                           <p><span>近期出租116次</span></p>
                        </div>
                        <div class="main_content_right">
                            <p>￥1.1</p>
                            <p>/小时</p>
                        </div>
                         <div class="main_bottom">
                        <div class="fl">
                            <span>绝地求生</span> 
                            <span>全区</span>
                             <span>全服</span>
                        </div>
                        <div class="fr">
                            <i class="fi2">赔</i> 
                            <i class="fi4">顶</i>
                        </div>
                    </div>
                    </div>
                   
                </li>
                 </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'ID'
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        margin-top: 40px;
    }
    .main ul{
        width: 100%;
        list-style: none;
        overflow: hidden;
        margin-top: 1rem;
    }
    .main ul li{
        width: 95%;
        margin: 0 auto;
        overflow: hidden;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #333333;
        margin-bottom: 1rem;
    }
    .main_img{
        float: left;
        width: 20%;
    }
    .main_img img{
        width: 5rem;
        height: 5rem;
    }
    .main_content{
        width: 73%;
        height: 100%;
        float: right;
    }
    .main_content_left{
        width: 70%;
        float: left;
    }
    .main_content_right{
        /* width: 20%; */
        float: right;
    }
    .title{
        font-size: .8rem;
        color: #333333;
       text-align: left;
    }
    .main_content_left p:nth-of-type(2){
        text-align: left;
    }
    small{
           padding: .05rem .3rem;
    color: #ff6868;
    border: 1px solid #ff6868;
    border-radius:.2rem;
    margin-right: .2rem;
    text-align: left ;
    }
    .main_content_left p:nth-of-type(3){

        font-size: .45rem;
        color: #cccccc;
        text-align: left;
    }
    .main_content_right p:nth-of-type(1){
        color: #ff6868;
        text-align: right;
        font-size: 1rem;
        font-weight: 700;
        height: auto;
         margin-top: .1rem;
         margin-right: .1rem;
    }
    .main_content_right p:nth-of-type(2){

        font-size: .75rem;
        color: #cccccc;

    }
   
    .fl{
        float: left;
    }
    .fl span{
        padding:.25rem .2rem;
        background-color: #CCCCCC;
        color: #FFFFFF;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .fr{
        float: right;
        display: inline;
    }
    .fi2{
        background-color: #ffca00;
        padding: .2rem;
        border-radius: .2rem;
        color: #FFFFFF;
    }
    .fi4{
        background-color: #23bbff;
        padding: .2rem;
        border-radius: .2rem;
        color: #FFFFFF;
    }
</style>



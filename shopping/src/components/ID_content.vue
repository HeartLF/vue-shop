<template>
    <div>
        <div>
            <mt-header title="账号详情" fixed>
                <router-link :to="{name:'ID'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="main">
            <div class="main_top">
                <div class="main_left">
                    <img src="../assets/58eb65cc7987b.jpg" alt="">
                </div>
                <div class="main_right">
                    <div class="main_fl">
                        <p class="title">新号！绝地求生，吃鸡，大吉大利！相当稳定不顶号！</p>
                        <p><span>近期出租116次</span></p>
                    </div>
                    <div class="main_fr">
                            <p>￥1.1</p>
                            <p>/小时</p>
                    </div>
                </div>
            </div>
            <ul class="main_price">
                <li class="main_price_li">
                    <span class="time_top">时租</span>
                    <span class="time_money">1.1y元</span>
                </li>
                <li class="main_price_li">
                     <span class="time_top">日租</span>
                    <span class="time_money">24.2元</span>
                </li>
                <li class="main_price_li">
                     <span class="time_top">包夜</span>
                    <span class="time_money">9.2元</span>
                </li>
                <li class="main_price_li">
                    <span class="time_top">10小时</span>
                    <span class="time_money">10.2元</span>
                </li>
                <li class="main_price_li">
                     <span class="time_top"> 周租</span>
                    <span class="time_money">168.2元</span>
                </li>
            </ul>
            <ul class="main_info">
                <li class="account_state">
                    <h1 class="list_title">账号状态</h1>
                    <span>待租</span>
                </li>
                <li class="game_server">
                    <h1 class="list_title">游戏区服</h1>
                    <span>绝地求生</span>
                    <span>全区</span>
                    <span>全服</span>
                </li>
                <li class="game_term">
                    <h1 class="list_title">租号条件</h1>
                    <span>2小时起租</span>
                    <span>免押金</span>
                </li>
                <li class="game_time">
                    <h1 class="list_title">可租时长</h1>
                    <span>0:00-24:00</span>
                    <span>2-999小时</span>
                </li>
                <li class="game_mode">
                    <h1 class="list_title">上号方式</h1>
                    <span>上号器上号</span>
                </li>
            </ul>
            <div class="account_info">
                <h1>账号信息</h1>
                <table>
                    <tr>
                        <td>
                            <span>角色：</span>
                            <span>工白123</span>
                        </td>
                        <td>
                            <span>等级/段位：</span>
                            <span>1</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>皮肤：</span>
                            <span>0</span>
                        </td>
                        <td>
                            <span>段位框：</span>
                            <span>无</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>英雄：</span>
                            <span>无</span>
                        </td>
                        <td>
                            <span>符文：</span>
                            <span>无</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>最短时间：</span>
                            <span>2小时</span>
                        </td>
                        <td>
                            <span>
                                可租时间段：
                            </span>
                            <span>
                                0：00-24:00
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>押金：</span>
                            <span>0元</span>
                        </td>
                        <td>
                            <span>排位赛：</span>
                            <span>不允许</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="account-miaoshu">
                <h1>账号描述</h1>
                <span :class="show?'letter':'letter1'"> 
                    绝地求生 大逃杀 专业吃鸡租号 已开通到时不下线功能 上号教程：1.先打开 steam登录页面2.把解锁码复制到上号器获取订单3.点击上号器的“登录游戏”（此时上号器会自动输入账号密码，如没有自动输入请点一下steam账号栏再按一下键盘左上方Esc 键）---进入游戏教程：登陆steam成功后选择---库---游戏---PLAYERUNKNOWNS BATTLEGROUNDS --- 开始---喜欢请收藏                
                </span>
                <i @click="zhankai" >展开</i>
            </div>
        </div>
          <footer>
              <mt-button type="danger" size="large">我要租</mt-button>
          </footer>
    </div>
</template>
<script>
export default {
    name:'ID_content',
    data(){
        return{
             show:true
        }
    },
    methods:{
        zhankai(){
            this.show=!this.show;
            console.log(this.show)
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
    .main{
        width: 100%;
        height: 100%;
        overflow-y:auto;
        margin-top: 40px;
    }
    .main_top{
        width: 95%;
        height: 100%;
        margin: 1rem auto;
        position: relative;
        overflow: hidden;
    }
    .main_left{
        width: 25%;
        float: left;
    }
    .main_left img{
        width: 5rem;
        height: 5rem;
    }
    .main_right{
        width: 75%;
        float: right;
    }
    .main_fl{
        float: left;
        width: 70%;
        margin-left: .5rem;
    }
    .main_fr{
        float: right;
    }
    .title{
        font-size: 1rem;
        color: #333333;
       text-align: left;
       padding: .2rem;
    }
    .main_fl p:nth-of-type(2){
        text-align: left;
        font-size: .45rem;
        color: #cccccc;
        line-height: .9rem;
    }
    .main_fr p:nth-of-type(1){
        color: #ff6868
    }
    .main_price{
        width: 94%;
        height: 3.55rem;
        margin: 0.5rem auto;
        border-top: 2px solid #febe05;
        list-style: none;
    }
    .main_price_li{
        float: left;
        width:  20%;
        height: 3.5rem;
        text-align: center;
        border-right: 1px solid #cecece;
    }
    .main_price_li span{
        display: block;
    }
    .time_top{
        height: 1.75rem;
        line-height: 1.75rem;
        background-color: #fff;
        font-size: 0.75rem;
    }
    .time_money{
        height: 1.75rem;
        line-height: 1.75rem;
        font-size: 0.65rem;
        color: #999;
        border-top: 1px dashed #cecece;
        background-color: #e5e5e5;
    }
    .main_info{
        width: 100%;
        list-style: none;
    }
    .main_info li{
        text-align: left;
        width: 100%;
        height: 2.2rem;
        line-height: 2.2rem;
        padding: 0 0.6rem;
        font-size: 0.55rem;
    }
    .list_title{
        display: inline-block;
        margin-right: 1rem;
        font-weight: normal;
        font-size: 100%;
    }
    .account_state span{
        border-radius: 0.65rem;
        font-size: 0.5rem;
        padding: 0.15rem 0.4rem;
        background-color: #febe05;
        color: #fff;
    }
    .game_server span{
        font-size: 0.5rem;
        padding: 0.2rem 0.25rem;
        color: #fff;
        background-color: #cccccc
    }
    .game_term span{
        font-size: 0.5rem;
        padding: 0.2rem 0.25rem;
        color: #e8292e;;
        border: .05rem solid #e8292e;
        border-radius: .2rem;
    }
    .game_time span{
        font-size: 0.5rem;
        color: #999999;
    }
    .game_mode span{
        font-size: 0.5rem;
        color: #999999;
    }
    .account_info{
        padding: 0.5rem;
        margin-top:1rem;
    }
    .account_info h1{
        font-weight: normal;
        text-align: left;
        font-size: 0.8rem;
        padding-bottom: 0.5rem;

    }
    .account_info table{
        width: 100%;
        border-collapse:collapse
    }
    table tr{
        height: 1.75rem;
        line-height: 1.75rem;
        width: 100%;
    }
    table tr td{
        width: 50%;
        height: 100%;
        border: 1px solid #e5e5e5;
        padding-left: 0.75rem;
        font-size: 0.5rem;
    }
    .account-miaoshu{
         padding: 0.5rem;
        margin-top:1rem;
        margin-bottom: 4rem;
    }
    .account-miaoshu h1{
         font-weight: normal;
        text-align: left;
        font-size: 0.8rem;
        padding-bottom: 0.5rem;
    }
    .account-miaoshu span{
        font-size: 0.55rem;
        color: #999;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
  
        -webkit-box-orient: vertical;
    }
    .account-miaoshu i{
        text-align: right;
        font-size: 0.55rem;
        color: #2b90f6;
        width: 100%;
        display: block;
        font-style: normal;
    }
    .letter{
        -webkit-line-clamp: 2;
    }
    .letter1{
        -webkit-line-clamp: none;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FE5555;
    }

</style>


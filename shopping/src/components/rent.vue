<template>
    <div>
        <div class="header">
            <mt-header title="我租出的" fixed>
                <router-link :to="{name:'My'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="main">
            <ul>
                <li>
                    <div class="main_lf">
                        <img src="../assets/shop0.jpg" alt="">
                    </div>
                    <div class="main_rf">
                        <h1>耐克Air Force1空军一号男鞋小麦色af1中高帮女白换勾315122―111</h1>
                        <p>￥799</p>
                        <p>待租</p>
                    </div>
                    <div class="person">
                        <div>
                        <span>发布者：</span>
                        <img src="../assets/avator.png" alt="">
                        <span class="name">用沉默在咆哮</span>
                      </div>
                    </div>
                </li>
                  <li>
                    <div class="main_lf">
                        <img src="../assets/shop0.jpg" alt="">
                    </div>
                    <div class="main_rf">
                        <h1>耐克Air Force1空军一号男鞋小麦色af1中高帮女白换勾315122―111</h1>
                        <p>￥799</p>
                        <p>待租</p>
                    </div>
                    <div class="person">
                        <div>
                        <span>发布者：</span>
                        <img src="../assets/avator.png" alt="">
                        <span class="name">用沉默在咆哮</span>
                      </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Rent'
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
        margin-top: 40px;
    }
    .main ul{
        width: 95%;
        margin: 0 auto;
        text-align: left;
    }
    .main li{
        list-style: none;
    }
    .main_fl{
        width: 100%;
        height: 100%;
        /* float: left; */
    }
    .main_lf img{
        width: 70%;
        height: 50%;
    }
    .main_rf{
        height: 3rem;
    }
    .main_rf h1{
        font-size: 1rem;
      
        text-indent:2em;
    }
    .main_rf p{
        float: left;
        width: 50%;
        text-align: center;
        color: #FE5555;
        font-size: .5rem;
        line-height: 2rem;
    }
    .person{
        width: 60%;
        color: #9e9e9e;
        font-size: .5rem;
       /* margin-top: 1rem; */
        float: right;
        text-align: center;
    }

    .person img{
        width: 15%;
        height: 50%;
        border-radius: 50%;
        /* position: relative;
        top: -1rem; */
    }
    .person span:nth-of-type(1){
           position: relative;
            top: -.5rem;
    }
    .person .name{
        font-size: .8rem;
        position: relative;
        top: -.5rem;
    }
</style>



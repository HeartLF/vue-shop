<template>
    <div>
        <div>
            <mt-header title="我的收货地址" fixed>
                <router-link :to="{name:'acount'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button class="btn" slot="right" @click="add">添加新地址</mt-button>
            </mt-header>
        </div>
        <div class="main">
            <div class="main_img">
                <img src="../assets/avator.png" alt="">
            </div>
            <div class="main_content">
                <span>李林飞</span>
                <span>1234567890</span>
                <br>
                <span>默认</span>
                <span>陕西省西安市长安区西安邮电大学</span>
            </div>
            <div class="editor">
                <span>编辑</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'My_Address',
    data(){
        return{

        }
    },
    methods:{
        add(){
            this.$router.push({name:'Address'})
        }
    }
}
</script>
<style scoped>
 *{
        margin: 0;
        padding: 0;
    }
    .btn{
        margin-right: 1rem;
    }
    .main{
        width: 100%;
        height: 100%;
        background: #f3f3f3;
        margin-top: 50px;
        overflow: hidden;
    }
    .main_img{
        /* width: 2rem; */
        width: 20%;
        height: 5rem;
        float: left;
    
    }
    .main_img img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        position: relative;
        top: 50%;
        margin-top: -50%;
    }
    .main_content{
        float: left;
        text-align: left;
        width: 60%;
        margin-left: 1rem;
        margin-top: .5rem;
              border-right: 1px solid #ffffff
    }
    .main_content span:nth-of-type(2){
        font-size: .8rem;
        opacity: .7;
    }
    .main_content span:nth-of-type(3){
        font-size: .8rem;
        color: #FE5555;
        padding:.25rem .2rem;
        background: #fff;
    }
    .main_content span:nth-of-type(4){
        font-size: .9rem;
    }
    .editor{
        width: 14%;
        float: right;
        margin-top: 1.8rem;
    }
</style>


<template>
    <div>
         <div class="head">
            <mt-header title="登录" fixed>
                <router-link :to="{name:'My'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>

        <div class="main">
            <img src="../assets/login1.jpg" alt="" class="img">
            <div class="main_content">
                <input type="text" v-model="phone" placeholder="请输入手机号">
                <input type="password" v-model="password" placeholder="请输入密码">
                <mt-button size="large" type='primary' class="btn" @click="login">登录</mt-button>
                <span>忘记密码</span>
                <span>注册</span>
                <p>其他登录方式</p>
                <div class="type">
                    <img src="../assets/QQ.png" alt="">
                    <img src="../assets/微信 (1).png" alt="">
                    <img src="../assets/微博.png" alt="">
                </div>
            </div>
          
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            phone:'',
            password:''
        }
    },
    created() {
        
    },
    methods:{
        login(){
            this.$ajax.post('/api/login',{phone:this.phone,password:this.password})
            .then(res=>{
                 localStorage.setItem('info',JSON.stringify(res.data[0]));
                 this.$router.push('/My')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .head{
        overflow: hidden;
    }
    .main{
        width: 100%;
        margin-top: 40px;
    }
    .img{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0.8;
    }
    .main_content{
        width: 80%;
        margin:10rem auto;
      
        border-radius: 5%;
    }
    .main_content input{
        width: 100%;
        height: 2rem;
        margin-top: 1rem;
        border-radius: 20px;
        opacity: .5;
    }
    .btn{
        margin-top: 1rem;
         border-radius: 20px;
    }
    .main_content span{
        margin-top: 1rem;
        font-size: 1rem;
        padding-right: 1rem;
    }
    .main_content span:nth-of-type(1){
        float: left;
    }
     .main_content span:nth-of-type(2){
        float: right;
    }
    .main_content p{
        clear: both;
    }
    .type{
        width: 100%;
    
        margin-top: 2rem;
    }
    .type img{
        width: 20%;
        height: 20%;
        padding-right: 2rem;
    }
    .type img:nth-of-type(3){
        padding-right: 0;
    }
</style>



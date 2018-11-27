<template>
    <div>
        <div>
            <mt-header title="添加地址" fixed>
                <router-link :to="{name:'My_Address'}" slot="left">
                    <mt-button icon="back" ></mt-button>
                </router-link>
                <mt-button  slot="right" class="btn" @click="success">保存</mt-button>
            </mt-header>
        </div>
        <div class="main">
            <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="所在地区" placeholder="详细地址：如省、市、县、小区、门牌号" type="textarea" rows="4" v-model="introduction"></mt-field>
            <mt-field label="设为默认地址" ><mt-switch v-model="value"></mt-switch></mt-field>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name:'Address',
    data(){
        return{
            username:'',
            phone:'',
            introduction:'',
            value:''
        }
    },
    methods:{
          Handle(){
            this.$router.push({name:'My_Address'})
        },
        success(){
            Toast({
            message: '操作成功',
            iconClass: 'icon icon-success',
            });
            setTimeout(this.Handle,2000)
          
        },
      
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
        margin-top: 40px;
        width: 100%;
        height: 100%;
    
    }
</style>



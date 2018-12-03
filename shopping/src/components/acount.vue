<template>
    <div>
         <div>
            <mt-header :title="title" fixed>
                <router-link :to="{name:'Middle'}" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="lunbo">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item>
                    <img src="../assets/lol-m.png" alt="" srcset="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/pifu.jpg" alt="" srcset="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div></div>
        <div class="content">
            <div class="content1">
                <img src="../assets/icon_hot.png" alt="" srcset="" class="hot">
                <h2>热门分类</h2>           
            </div>
            <div class="content_main">
                <ul>
                    <li v-for="item in info" :key="item.id">
                        <router-link :to="{name:'Phone',params:{id:item.id}}">
                            <img :src="item.img" alt="" srcset="">
                        </router-link>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'acount',
    data(){
        return{
            title:this.$store.state.name,
            id:'',
            info:[]
        }
    },
    created() {
       
       
    },
    mounted() {
         this.id=this.$route.params.id;
          this.$ajax.get('/api/all_classify/'+this.id)
        .then(res=>{
            this.info=res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    
}
</script>
<style scoped>
a{
    text-decoration: none;
}
li{
    list-style: none;
}
 img {
   display: block;
    width: 95%;
    margin: 0 auto;
    border-radius: 5%;
    /* height: 50%; */
    
    
 }
 .mint-swipe {
      height: 10rem;
 }
 .lunbo{
     margin-top: 40px;
 }
 .content{
     width: 94%;
        height: 100%;
     line-height: 50px;
     position: relative;

 }
 .content1{
     overflow: hidden;
 }
    .hot{
        width: 5%;
        float: left;
        margin-top: 15px;
    }
    h2{
        display: inline-block;
        line-height: 50px;
        font-weight: 600;
        float: left;
        padding-left: 5px;
    }
    .all{
        float: right;
    }
    .all a{
         color: #ffd005
    }
    .line{
        height: 1px;
    }
    .content_main{
        width: 100%;
        height: 100%;
    }
    .content_main ul{
        overflow: hidden;
        border-top: 1px solid #e5e5e5;
        display: flex;
        flex-wrap: wrap
    }
    .content_main ul li{
        float: left;
        width: 30%;
        text-align: center;
      
        margin-left: 10px;
    }
    .content_main ul li img{
        width: 100%;
        height: 70%;
    }
    .content_main ul li p{
      
    }
</style>



<template>
    <div>
      <div class="bottom-bar" >
        <mt-tabbar v-model="selected">
          <mt-tab-item id="one">
            <img slot="icon" src="../assets/首页.png">
            <router-link :to='{name:"Middle"}' ><p>首页</p> </router-link> 
          </mt-tab-item>
          <mt-tab-item id="add" class="add">
            <img slot="icon" src="../assets/添加.png">
            <router-link :to='{name:"Add"}'><p>发布</p></router-link>
          </mt-tab-item>          
          <mt-tab-item id="four">
            <img slot="icon" src="../assets/我的 (2).png"/>
            <router-link :to='{name:"My"}'> <p> 我的</p></router-link>     
          </mt-tab-item>
        </mt-tabbar>
      </div>
  </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return {
            selected:'',
        }
    }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.mint-tabbar:nth-child(1){
   border-top: 1px solid black 
}
 .mint-tabbar:nth-child(2){
   border-top:none
}
 .mint-tabbar:nth-child(3){
   border-top: 1px solid black
}
.add .mint-tab-item-icon{
  display: block;
  width: 50px;
  height: 50px; 
}

.mint-tabbar{
  
  position: fixed;
  
}
/*
.add img{
  display: block;
  width: 55px;
  height: 52px;
  margin-top: -30px;
}
.add p{
  position: absolute;
  left: 50%;
  bottom: 20px;
} */
</style>



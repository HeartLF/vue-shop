<template>
     <div>
         <div class="back">
             <img src="../assets/返回.png" slot="icon">
         </div>
        <div class="search">
                <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
                </mt-search>
        </div>
        <div></div>
        <div class="content_top">
            <ul>
                <li>
                    <span>综合排序</span>
                 
                </li>
                <li>
                    <span>区域</span>
                </li>
            </ul>
        </div>
        <div class="content">
            
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
      value:''
    }
  }
}
</script>
<style scoped>
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
 ul{
     padding: 0px;
     display: flex;
     flex-wrap: wrap;
 }
 ul li{
     display: inline-block;
     list-style: none;
     width: 50%;
     text-align: center
 }
</style>



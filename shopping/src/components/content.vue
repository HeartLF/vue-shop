<template>
    <div>
        <div>
          <mt-search v-model="value">
            <mt-cell v-for="item in result" :key="item.id"
              :title="item.title"
              :value="item.value">
            </mt-cell>
          </mt-search>
      </div>
      <div>
        <mt-swipe :show-indicators="false" class="swipe" :auto="2000"> 
            <mt-swipe-item><img src="../assets/v2_pgqhqd.png" alt=""><span class="book">二手书</span></mt-swipe-item>
            <mt-swipe-item><img src="../assets/v2_pgqhqd.png" alt=""><span class="book">二手书</span></mt-swipe-item>
            <mt-swipe-item><img src="../assets/v2_pgqhqd.png" alt=""><span class="book">二手书</span></mt-swipe-item>
        </mt-swipe>
       </div>
      <div class="middle">
          <div class="middle_content" @click="game">
            <img src="../assets/账号.png" alt="">
            <p>游戏账号</p>
          </div>
          <div class="middle_content">
            <img src="../assets/出行.png" alt="">
            <p>出行工具</p>
          </div>
          <div class="middle_content">
            <img src="../assets/数码.png" alt="">
            <p>3C数码</p>
          </div>
          <div class="middle_content">
            <img src="../assets/宿舍用品.png" alt="">
            <p>宿舍用品</p>
          </div>
           <div class="middle_content">
            <img src="../assets/美妆.png" alt="">
            <p>美妆洗护</p>
          </div>
           <div class="middle_content">
            <img src="../assets/衣物.png" alt="">
            <p>衣物鞋子</p>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'Content',
      data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            result:[],
            title:'',
            value:'',
            info:[]
        }
      },
     
      methods:{
        game:function(){
          this.$router.push({name:'Game'})
        }
      }
}
</script>



<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 img {
 width: 100%;
 }
 .mint-swipe {
 height: 218px;
 }
 .cl{
   clear: both;
 }
 .mint-search{
    height: 100%;
 }
 .swipe{
   width: 305px;
   height: 100px;
  margin-left: 18px;
   margin-top: 50px;
 }
 .book{
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
 }
.middle{
  margin-top: 50px;
  display: flex;
   flex-wrap: wrap
}
.middle_content{
  width: 33%;
  height: 33%;
}
.middle_content img{
  width: 80px;
  height: 80px;
}
.middle_content p{
      font-family: SourceHanSansSC;
    font-weight: 400;
    font-size: 14px;
    color: rgb(16, 16, 16);
    font-style: normal;
    letter-spacing: 0px;
    line-height: 21px;
    text-decoration: none
}
</style>



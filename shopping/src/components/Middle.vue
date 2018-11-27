<template>
    <div>
        <div class="search">
         <mt-search v-model="value">
          <mt-cell
            v-for="item in result"
            :key="item.id"
            :title="item.title"
            :value="item.value">
          </mt-cell>
      </mt-search>
      </div>
      <div>
       <mt-swipe :show-indicators="false" class="swipe" :auto="0"> 
                <mt-swipe-item><img src="../assets/v2_pgqhqd.png" alt="" class="lunbotu"><span class="book">二手书</span></mt-swipe-item>
                <mt-swipe-item><img src="../assets/v2_pgqhqd.png" alt=""><span class="book">二手书</span></mt-swipe-item>
                <mt-swipe-item><img src="../assets/v2_pgqhqd.png" alt=""><span class="book">二手书</span></mt-swipe-item>
          </mt-swipe>
       </div>
      <div class="middle">
        <div class="middle_content" v-for="item in img" :key=item.id @click="goto(item.id,item.name)">
            <img :src="item.img" >
            <p>{{item.name}}</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'Middle',
      data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      result:["w","hw","hhw"],
      title:'',
      value:'',
      img:[]
    }
  }, created() {
        this.$ajax.get('/api/classify')
        .then(res=>{
          this.img=res.data;
          console.log(this.img[0]);
        })
        .catch(err=>{
          console.log(err);
        })
      },
  methods:{
      game:function () {
        this.$router.push('/game');
      },
      acount:function(){
        this.$router.push('/acount')
      },
      phone(){
        this.$router.push('/phone');
      },
      goto(id,name){
        this.$store.dispatch('changeName',name);
        this.$router.push('/acount/'+id)
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
   display: block;
    width: 100%;
    height: 60%;
    /* width: 100vw; */
 }
 .mint-swipe {
      height: 16rem;
      margin-top: 2rem;
 }
 .cl{
   clear: both;
 }
 .search{
    background: #FE5555;
 }
 .mint-search{
    height: 100%;
 }

 /* .swipe{
   width: 305px;
   height: 100px;
  margin-left: 18px;
   margin-top: 50px;
 } */
 .book{
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
 }
.middle{
  margin-top: 30px;
  display: flex;
   flex-wrap: wrap;
   margin-bottom: 4rem;
   position: relative;
   top: -4rem;
}
.middle_content{
  width: 33%;
  height: 33%;
}
.middle_content img{
  margin-left: 10px;
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
    text-decoration: none;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: -1rem;
}
</style>


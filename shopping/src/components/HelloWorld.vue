<template>
    <div>
       <router-view></router-view>
       <Footer-vue/>
    </div>
</template>
<script>
export default {
    name:'HelloWorld',
      data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        result:[],
        title:'',
        value:''
    }
  },
  methods:{
    game:function(){
      this.$router.push({name:'Game'})
    }
  }
}
</script>


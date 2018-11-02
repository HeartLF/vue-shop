<template>
    <div class="main">
        <div class="box">

        </div>
        <div class="content">
            <div class="content_box">  
               <img src="../assets/shenhe.png">
                <span>标题：</span>
                <input type="text" placeholder="请输入标题" v-model="title">
            </div>
           <div class="line"></div>
           <div class="content_box">  
               <img src="../assets/标签.png">
                <span>价格：</span>
                <input type="text" placeholder="请输入价格" v-model="price">
            </div>
           <div class="line"></div>
            <div class="content_box">  
                <img src="../assets/分类.png">
                <span>分类：</span>
                <select v-model="fruit" >
                    <option v-for="option in options" :key="option.value">
                        {{option.text}}
                    </option>
	            </select>
	        
            </div>
            <div class="line"></div>
            <div>
                <textarea placeholder="宝贝详情" class="textarea"></textarea>
            </div>
              <div class="bottom">
<mt-button size="large" type="primary">联系卖家</mt-button>
      </div>

        </div>
      
    </div>
</template>

<script>
export default {
    name:'Add',
    data(){
        return {
            title:'',
            price:'',
            fruit: 'apple',
            options: [
                { text: '苹果', value: 'apple' },
                { text: '香蕉', value: 'banana' },
                { text: '西瓜', value: 'watermelon' }]

        }
    },
    
}
</script>
<style scoped>
.main{
    background: #f0f0f2;

}
    .box{
        width: 100px;
        height: 100px;
        background: rgb(187, 187, 187);
    }
    .content{
        text-align: left;
        /* display: flex;
        flex-direction: column;  */
    }
    .content_box{
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .content img{
        width: 24px;
        height: 24px;
        visibility: middle;
        line-height: 30px;
        position: relative;
        top: 5px;
    }
    .content input{
        position: absolute;
        float: left;
    
        height: 37px;
        visibility: middle;
        border: none;
         background: #f0f0f2;
    }
    .content span{
        line-height: 30px;
        font-family: SourceHanSansSC;
        font-weight: 400;
    }
    .content select{
       width: 200px;
       height: 30px;
        color: #888;
        border-color: #bbb;
        padding: 0 8px;
        border-color: #bbb;
        border-radius: 6px;
    }
    .line{
        border: 1px solid  rgb(187, 187, 187);
    }
   .content .textarea{
        width: 100%;
        height: 190px;
        background-color: rgb(255, 255, 255);
        border: none;
        margin-bottom: 100px;
    }
.bottom button{
    position: relative;
    top: -60px;
}
</style>



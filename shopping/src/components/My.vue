<template>
    <div>
       
            <div class="top">
                <div class="center">
                <img src="../assets/avator.png" alt="">
                <p>用沉默在咆哮</p>
                 </div>
            </div>
            <div class="middle">
                <ul>
                    <li>
                        <img src="../assets/发布.png" alt="">
                        <p>我发布的</p>
                    </li>
                    <li>
                        <img src="../assets/卖出记录.png" alt="">
                        <p>我卖出的</p>
                    </li>
                    <li>
                        <img src="../assets/已买到商品.png" alt="">
                        <p>我买到的</p>
                    </li>
                    <li>
                        <img src="../assets/喜欢添加.png" alt="">
                        <p>我想要的</p>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <ul>
                    <li>
                        <img src="../assets/红包.png" alt="">
                        <span>我的红包</span>
                    </li>
                    <li>
                        <img src="../assets/地址.png" alt="">
                        <span>地址管理</span>
                    </li>
                    <li>
                        <img src="../assets/关于.png" alt="">
                        <span>关于</span>
                    </li>
                </ul>
            </div>
             <div class="Bottom">
<mt-button size="large" type="primary">退出</mt-button>
      </div>

    </div>
</template>
<script>
export default {
    name:'My'
}
</script>
<style scoped>
    .top{
        width: 100%;
        height: 220px;
        background: #FE5555;
        position: relative;
    }
    .top .center{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
       
    }
    .top img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .top p{
        margin-top: 10px;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
    }
    .middle{
        margin-top: 50px;
    }
    .middle ul{
        display: flex;
        flex-wrap: wrap;
    }
    .middle ul li{
        width: 25%;
        list-style: none;
    }
    .middle ul li img{
        width: 30px;
        height: 30px;
    }
    .middle p{
        margin-top: 5px;
        font-size: 12px;
    }
    .bottom{
        margin-top: 50px;
    }
    .bottom ul li{
        list-style: none;
        text-align: left;
        margin-left: 5px;
        margin-bottom: 30px;
        padding-left: 5px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f2;
    }
    .bottom img{
        width: 20px;
        height: 20px;
        visibility: middle;
    }
    .bottom span{
        padding-left: 10px;
        opacity: 0.6;
    }
    .Bottom button{
        background: #FE5555;
    }
</style>


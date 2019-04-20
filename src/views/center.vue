<template>
    <div>
        <header class="header">
            <h2 class="center-title">我的</h2>
        </header>
        <div class="my-center">
            <div class="top">
                <img
                src="../assets/mine.png"
                class="head-icon"
                />
            <div class="name"></div>
            </div>
            <div class="container">
                <div class="orders">
                    <div class="title"><P>我的订单</P></div>
                    <div class="order">
                        <router-link tag='div' :to="{name:'order'}" class="order-item movie">
                            <a ><img src="../assets/maoyan.jpg"><p>电影</p></a>
                        </router-link>
                        <div class="order-item store">
                            <a ><img src="../assets/shangcheng.jpg"><p>商城</p></a>
                        </div>
                    </div>   
                </div>
                <div class="list">
                    <div class="movie">
                        <a><span>在线观影</span></a>
                    </div>
                    <div class="coupon">
                        <a><span>优惠券</span></a>
                    </div>
                    <div class="membercard">
                        <a><span>折扣卡</span></a>
                    </div>     
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
header{
    width:100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e54847;
    font-size: 18px;
    color:white;
}
.my-center{
    display: block;
}
.top{
    width: 100%;
    height:150px;
    background: #f03d37;
    text-align: center;
    position: relative;
}
.top img{
    width: 66px;
    height: 66px;
    border-radius: 33px;
    position: absolute;
    top:50%;
    margin: -33px 0 0 -33px;
}
.order{
    width:100%;
}
.title{
    width:100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.order{
    display: flex;
    justify-content: space-around;
    margin-bottom:50px;
}
.order-item{
    flex:1;
    text-align: center;
}
.order-item a{
    display: inline-block;
    width:160px;
    height: 50px;
    
}
.order-item img{
    width:50px;
    height: 50px;
}
.list div{
    width:100%;
    height: 44px;
    line-height: 44px;
    
    font-size: 15px;
}
.list div a{
    padding-left:15px;
}
</style>

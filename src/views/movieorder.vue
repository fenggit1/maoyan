<template>
    <div id="cart">
        <header class="navbar">
        <h2 class="nav-title">确认订单</h2>
    </header>
    <div class="content">
        <div class="order-info">
            <div class="info-img">
                <img src="../assets/1.jpg" alt="">
            </div>
            <div class="info-list">
                <div class="title">反贪风暴4</div>
                <div class="src">中国香港,中国大陆/98分钟</div>
                <div class="pubDesc">2019-04-04大陆上映</div>
                <div class="price">价格:</div>
            </div>
        </div>
        <div class="amount">
            <div>数量</div>
            <div class="box">
                <button>-</button>
                <input type="text" value="0">
                <button>+</button>
            </div>
        </div>
        <div class="submit">
            <p>合计：</p>
            <button>加入购物车</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#cart{
    background: #ccc;
}
header{
    width:100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e54847;
    font-size: 18px;
    color:white;
}

.order-info{
    width: 100%;
    height: 180px;
    background: white;
    display: flex;
}
.info-img{
    flex: 1;
}
.info-img img{
    widows: 88px;
    height: 120px;
    margin: 20px 20px 0 20px;
}


.info-list{
    flex:2;
    margin-top: 20px;
}
.info-list div{
    margin-bottom:10px;
    font-size: 16px;
}
.info-list .title{
    font-size: 20px;
}
.amount{
    margin-top: 10px;
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: white;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:20px;
    font-size: 16px;
}
.amount .box{
    padding-left:200px;
}
.amount .box button{
    width: 20px;
    height: 20px;
}
.amount .box input{
    width: 50px;
    height: 18px;
    border:1px solid #ccc;

}
.submit{
    height: 150px;
    margin-top:10px;
    background: white;
    text-align: center;
    overflow: hidden;
}
.submit p{
    font-size: 18px;
    padding-top:20px;
}
.submit button{
    width:300px;
    height: 40px;
    background: #f90;
    color:white;
    border:none;
    border-radius: 4px;
    margin-top:10px;
    margin-bottom:20px;
    font-size: 20px;
}

</style>
<template>
  <div>
    <header class="navbar">
      <h1 class="nav-title">猫眼电影</h1>
    </header>
    <div class="body">
      <div class="nav">
        <div class="city">
          <span class="city-name">深圳</span>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="switch-hot">
          <div class="hot-item">正在热映</div>
          <div class="hot-item">即将上映</div>
        </div>
        <div class="search">
          <i class="iconfont icon-fangdajing"></i>
        </div>
      </div>
    </div>

    <div class="movie">
      <div class="n-hot">
        <div class="list-wrap">
          <div class="list-item">
            <dl>
              <dt>
                <img src="images/1.jpg" alt>
              </dt>
              <dd>
                <p>反贪风暴4</p>
                <p>
                  观众评
                  <span>9.2</span>
                </p>
                <p>主演: 古天乐,郑嘉颖,林峯</p>
                <p>今天262家影院放映4043场</p>
              </dd>
            </dl>
            <button>购票</button>
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

<style >
    /* 头部 */
.navbar {
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
}
.nav-title{
    display: block;
    -webkit-box-flex: 1;
    flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
}
.nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.nav .city{
    font-size: 16px;
    padding-left:15px;
    
}
.nav .switch-hot{
    font-size: 15px;
    display: flex;
    font-weight: 900;
}
.nav .switch-hot .hot-item{
    padding:0 10px 0 10px;
}
.nav .search{
    padding-right:15px; 
}
.nav .search i{
    font-size: 18px;
    color:#e54847;
    font-weight: 900;
}

/* 内容部分 */
.list-wrap{
    padding:15px 15px 15px 15px;
    
}
.list-item{
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;
}
.list-item dl{
    display: flex;
    
}
.list-item dl dt img{
    width:64px;
    height: 9px;
    margin-right:10px;
}
.list-item dl dd p:nth-child(1){
    font-size: 17px;
    color: #333;
    font-weight: 700;
}
.list-item dl dd p:nth-child(2){
    font-size: 13px;
    color: #666;
    font-weight: 300;
    line-height: 25px;
}
.list-item dl dd p:nth-child(3){
    font-size: 13px;
    color: #666;
    font-weight: 300;
    line-height: 22px;
}
.list-item dl dd p:nth-child(4){
    font-size: 13px;
    color: #666;
    font-weight: 300;
    line-height:22px;
}
.list-item button{
    font-size: 12px;
    height: 28px;
    width:50px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    border:none;
    margin-top:30px;
}
</style>
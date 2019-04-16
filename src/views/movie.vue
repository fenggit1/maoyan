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
          <router-link tag="div" to="/movie/n-hot" active-class="active" class="hot-item">正在热映</router-link>
          <router-link tag="div" to="/movie/f-hot" active-class="active" class="hot-item">即将上映</router-link>
        </div>
        <div class="search">
          <i class="iconfont icon-fangdajing"></i>
        </div>
      </div>
    </div>
    <router-view></router-view>
    
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
.nav .switch-hot .active{
  color:#e54847;
  border-bottom:2px solid #e54847;
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
</style>

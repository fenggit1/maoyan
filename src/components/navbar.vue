<template>
    <div class="bottom-nav-bar">
        <div class="nav-icon-wrapper"
        v-for="(tab,index) in tabs" :key="index">
            <router-link :to='tab.href' active-class="active">
                <i :class="['iconfont', tab.icon]"></i><br>
                <span class="nav-text">{{tab.name}}</span>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        tabs:{
            type:Array
        }
    }
}
</script>

<style >
.bottom-nav-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    display:flex;
    height:48px;
    border-top: 1px solid #d8d8d8;
    justify-content: space-around;
    background: white;
}

.bottom-nav-bar .nav-icon-wrapper {
    display:flex;
    flex-direction: column;
    width: 25px;
    align-items:center;
    color: #f03d37;
    -webkit-box-flex: 1;
    flex: 1;
    margin-top:5px;
}
.bottom-nav-bar .nav-icon-wrapper a{
    text-decoration: none;
    display: block;
    text-align: center;
    width:100%;
    height: 100%;
}
.bottom-nav-bar .nav-icon-wrapper .iconfont{
    font-size: 20px;
}
</style>
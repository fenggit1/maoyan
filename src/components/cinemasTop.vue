<template>
    <div>
        <div id="beader">
            <h1>影院</h1>
        </div>
        <div id="seach">
            <div class="seach_left">
                <span>深圳</span>
                <i class="iconfont icon-xiajiantou"></i>
            </div>
            <div class="seach_right">
            <i class="iconfont  icon-fangdajing"></i>
            <span>搜影院</span>
            </div>
        </div>
    </div>
</template>

<style>
     #beader{
    float: left;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #e54847;
    border-bottom: #e54847;
    }
    #beader h1{
        display: flex;
        justify-content: center;
        font-size: 18px;
        color: #fff;
    }

    #seach{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 44px;
        background: #f5f5f5;
        border-bottom: 1px solid #e6e6e6;
    }
    #seach .seach_left{
        display: flex;
        align-items: center; 
    }
    #seach .seach_left span{
        color: #666;
        padding-left: 15px;
    }
    #seach .seach_left i{
        padding-top: 5px;
        padding-left: 5px;
        font-size: 12px;
        color: #ccc;
    }
    #seach .seach_right{
        margin:0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 278px;
        height: 30px;
        background: #fff;
        border-radius: 5px;
        border:1px #e6e6e6 solid;
        color: #b2b2b2;
        font-size: 14px;
    }
    #seach .seach_right i{
        padding-top: 3px;
        margin-right: 3px;
    }
</style>

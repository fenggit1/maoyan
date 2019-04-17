<template>
    <div>
        <div id="nav">
            <ul class="clearfix">
                <li class="nav_li">
                    <span>全城</span>
                    <i class="iconfont icon-xiajiantou"></i>
                    <span class="right_border"></span>
                </li>
                <li class="nav_li">
                    <span>品牌</span>
                    <i class="iconfont icon-xiajiantou"></i>
                    <span class="right_border"></span>
                </li>
                <li class="nav_li">
                    <span>特色</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </li>
            </ul>
        </div>
        <div id="content_wrapper">
            <div class="content"
            v-for="cinema in cinemaslist"
            :key="cinema.id">
            <router-link  :to="{name: 'shdetail',params:{id:cinema.id}}">
                <div class="text_h">
                    <h3>{{cinema.nm}}</h3>
                    <div class="money">
                        <span class="to">{{cinema.sellPrice}}</span>
                        <span>元起</span>
                    </div>
                </div>
                <div class="text_diz">
                    <div class="diz">{{cinema.addr}}</div>
                    <div class="qi">{{cinema.distance}}</div>
                </div>
                <div class="t_sp">
                    <div class="gai">改盗</div>
                    <div class="chi">小吃</div>
                    <div class="ka">折扣卡</div>
                </div>
                <div class="text_ka">
                    <div class="lka">卡</div>
                    <div class="t_k">{{cinema.promotion.cardPromotionTag}}</div>
                </div>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cinemaslist:{
            type:Array
        },
    }
}
</script>


<style>
    /* 内容 */
     #nav{
        overflow: hidden;
        height: 40px;
        background: #fff; 
        border-bottom: 1px solid #ccc;
    }

    #nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        width: 100%;
        overflow: hidden;
    }
    #nav ul .nav_li{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 1 0%;
        line-height: 40px;
        font-size: 13px;
        color: #777;
        position: relative;
    }
    #nav ul .nav_li .right_border{
        position: absolute;
        top: 12px;
        right: 0;
        width: 1px;
        height: 20px;
        background: #e6e6e6;
    }
    #nav ul .nav_li i{
        font-size: 12px;
        padding-top: 3px;
        margin-left: 4px;
    }
    #content_wrapper{
        background: #fff;
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        border-bottom: 1px solid #e6e6e6;
    }
    #content_wrapper .content{
        background: #fff;
    }
    #content_wrapper .content .text_h{
        display: flex;
        justify-content: left;
        line-height: 23px;
    }
    #content_wrapper .content .text_h h3{
        font-size: 16px;
        color: #000;
    }
    #content_wrapper .content .text_h .money{
        display: flex;
        justify-content: left;
        color: #f03d37;
        margin-left: 5px;
        font-size: 11px;
    }
    #content_wrapper .content .text_h .money .to{
        position: relative;
        top: -1px;
        font-size: 18px; 
        display: block;
        margin-right: 2px;
    }
    #content_wrapper .content .text_diz{
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 13px;
        color: #666;
    }
    #content_wrapper .content .text_diz .diz{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #content_wrapper .content .t_sp{
        display: flex;
        justify-content: left;
        font-size: .6rem;
        margin-top: 3px;
    }
    #content_wrapper .content .t_sp .gai{
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: .6rem;
        color: #589daf;
        border: 1px solid #589daf;
    }
    #content_wrapper .content .t_sp .chi{
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: .6rem;
        color: #f90;
        border: 1px solid #f90;
        margin-left: 5px;
    }
    #content_wrapper .content .t_sp .ka{
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: .6rem;
        color: #f90;
        border: 1px solid #f90;
        margin-left: 5px;
    }
    #content_wrapper .content .text_ka{
        display: flex;
        justify-content: left;
        margin-top: 5px;
    }
    #content_wrapper .content .text_ka .lka{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 4px 0 4px;
        background: aquamarine;
        font-size: 11px;
        color: #fff;
    }
    #content_wrapper .content .text_ka .t_k{
        font-size: 11px;
        color: #999;
        margin-left: 5px;
    }
</style>
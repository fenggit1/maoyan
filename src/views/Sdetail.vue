
<template>
    <div>
        <header class="navbar">
            <div class="navbar_left">
                <a href="">
                    
                </a> 
            </div>
            <h1 class="navbar_header">
                东海国际影城
            </h1>
            
        </header>
        <div class="main_warp">
            <div class="lotn">
                <div class="lotn_left">
                    <h2>东城国际影城</h2>
                    <p>宝安区福永街道桥头社区永福路120号（东海百货4楼）</p>
                </div>
                <div class="lotn_right">
                    <i class="iconfont icon-daohang"></i>
                </div>
            </div>
            <Sbanner :sBanner="sbanner"></Sbanner>
            <div class="mover_time">
                <span class="time_ted">今日4月15日</span>
                <span class="time_tow">明日4月16日</span>
            </div>
            <div class="label_text">
                <a href="">
                    <div class="label_zk">折扣</div>
                    <div class="label_lj">购票享低价,首单2张立减4元</div>
                    <div class="label_kk">9.9元开卡></div>
                </a>
            </div>
            <div class="list_warp">
                <div class="list_item">      
                    <div class="item_left">
                        <div>19:30</div>
                        <div>
                            21:11&nbsp;散场
                        </div>
                    </div>
                    <div class="item_block">
                        <div>国语&nbsp;<span>2D</span></div>
                        <div>1号厅</div>
                    </div>
                    <div class="item_price">
                        <div class="item_pricea">
                            <div>
                                <span>￥</span>
                                <span>38</span>
                            </div>
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="item_priceb">
                            折扣卡首单优惠
                        </div>
                    </div>
                    <div class="button">购票</div>
                </div>
            </div>
            <div class="tuan_list">
                <div class="tuan_title">
                    影院超值套餐
                </div>
                <div class="tuan_item">
                    <div class="titem_left">
                        <img src="" alt="">
                    </div>
                    <div class="titem_right">
                        <div class="titem_rightTop">
                            <span>双人</span>
                            <i>16oz可乐2杯+46oz爆米花1桶</i>
                        </div>
                        <div class="sell_num">
                            已售1557
                        </div>
                        <div class="tuan_num">
                            <span>￥</span>
                            <span>33.5</span>
                        </div>
                        <div class="tuan_button">
                            去购买
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sbanner from "../components/Sbanner";
import Axios from 'axios'
export default {
    data() {
        return {
            sbanner:[]
        }
    },
   components:{
       Sbanner
   },

    methods:{
        //轮播图
        getbanner() {
            Axios.get("/api/ajax/cinemaDetail",{
                params:{
                    cinemaId : this.$route.params.id
                }
            },{
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(res =>{
                let data = res.data
                this.sbanner = data.showData.movies
                console.log(this.sbanner)
            }).catch(error => {
                console.log("出现错误");
            });
        }
    },
    created(){
        this.getbanner();
    }
}
</script>

<style>
.navbar {
    height: 50.5px;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: flex;
    width: 100%;
}

.navbar .navbar_left a {
    font-size: 30px;
    text-decoration: none;
    color: #fff;
    height: 50px;
    width: 22.5px;
    line-height: 50px;
    
    float: left;
}

.navbar .navbar_header {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    width: 100%;
    color: #fff;
}
.main_warp {
    width: 100%;
    height: 74px;
}
.main_warp .lotn {
    width:100%;
    display: flex; 
    justify-content: space-between;
    background: #fff;
}
.main_warp .lotn .lotn_left {
    width: 225px;
    height: 74px;
    margin-top:10px;
    margin-left: 14px;
}
.main_warp .lotn .lotn_left h2 {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
}
.main_warp .lotn .lotn_left p {
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #777;
}
.main_warp .lotn .lotn_right {
    width: 70px;
    height: 31px;
    text-align: center;
    border-left:1px solid #777;
    margin-top: 20px;
    margin-left: 10px;
}
.main_warp .lotn .lotn_right i {
    font-size: 26px;
    color: rgb(0, 255, 170);
}

.mover_time {
    font-size: 14px;
    color: #999;
    display: flex;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.mover_time .time_ted {
    display: block;
    height:42px;
    line-height: 42px;
    margin: 0 16px;
    color: #f03d37;
    border-bottom: 2px solid #f03d37;
}
.mover_time .time_tow {
    display: block;
    height:42px;
    line-height: 42px;
    margin: 0 20px;
}
.label_text {
    background: #fff5ea;
}
.label_text a{
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    height: 42px;
}
.label_text .label_zk{
    background: #fa9600;
    font-size: 12px;
    height: 15px;
    width: 34px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
    line-height: 15px;
    margin-top:14px;
    margin-left: 15px;
}
.label_text .label_lj{
    width: 224px;
    height: 42px;
    line-height: 42px;
    color: #fa9600;
    font-size: 10px
}
.label_text .label_kk{
    height: 42px;
    line-height: 42px;
    font-size: 10px;
    color: #999;
    margin-right: 15px;
}
.list_warp {
    height: 76px;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.list_warp .list_item {
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
    padding-top: 20px;
}
.list_item .item_left div:nth-child(1){
    font-size: 20px;
}
.list_item .item_left div:nth-child(2){
    font-size: 10px;
    color: #999;
}
.list_item .item_block div:nth-child(1){
    font-size: 13px;
    color: #999;
    margin-top:3px;
}
.list_item .item_block div:nth-child(1) span{
    font-size: 10px;
    color: #000;
}
.list_item .item_block div:nth-child(2){
    font-size: 10px;
    color: #999;
}
.list_item .item_pricea div:nth-child(1){
    font-size: 19px;
    color: #f03d37;
}
.list_item .item_pricea div:nth-child(1) span:nth-child(1){
    font-size: 11px;
}
.list_item .item_pricea {
    display: flex;
}
.list_item .item_pricea div:nth-child(2) {
    height: 13px;
    line-height: 13px;
    display: flex;
    width: 10px;
    margin-top: 9px;
    margin-left: 5px;
}

.item_price .item_priceb{
    font-size: 10px;
    color: #999;
}
.list_item .button{
    width: 45px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    margin-top:5px;
}
.item_left,.item_block,.item_price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.tuan_list {
     margin-top: 10px;
     background: #FFF;
}
.tuan_list .tuan_title {
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    margin-left:15px;
}
.tuan_list .tuan_item {
    display: flex;
    justify-content: space-between;
    padding:12px 0;
    border-bottom: 1px solid #eee;
    margin-left:15px;
}
.tuan_item .titem_left img {
    height: 92px;
    width: 92px;
}
.titem_rightTop {
   position: relative;
   font-size: 14px;
    line-height: 18px;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right: 10px;
}
.titem_rightTop span {
    font-size:10px;
    display: inline-block;
    vertical-align: top;
    margin-top: 1px;
    margin-right: 7px;
    padding: 0 4px;
    font-size: 10px;
    line-height: 15px;
    height: 15px;
    background: #f90;
    border-radius: 2px;
    color: #fff;
}
.titem_right .titem_rightTop i {
    font-style:normal;
}
.titem_right .sell_num {
    display: inline-block;
    position: absolute;
    bottom: 24px;
    right: 12px;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    color: #999;
}
.titem_right .tuan_num {
    margin-top: 50px;
}
.titem_right .tuan_num span:nth-child(1){
    color: #f03d37;
    font-size: 14px;
}
.titem_right .tuan_num span:nth-child(2){
    font-size: 17px;
    color: #f03d37;
}
.titem_right .tuan_button {
    position: absolute;
    right: 12px;
    bottom: -12px;
    display: inline-block;
    padding: 0 8px;
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #f03d37;
    margin-top: 20px;
}
</style>


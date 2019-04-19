<template>
  <div>
    <div class="mover_info">
      <div class="mover_infoTop">
        <span class="moverTop_a">
          {{movie.nm}}
          <span class="moverTop_b">
            {{movie.sc}}
            <span class="moverTop_c">分</span>
          </span>
        </span>
      </div>
      <div class="mover_infoTBtn">{{movie.desc}}</div>
    </div>
    <div class="mover_time">
      <span class="time_ted">今日4月15日</span>
      <span class="time_tow">明日4月16日</span>
    </div>
    <div class="label_text">
      <a href>
        <div class="label_zk">折扣</div>
        <div class="label_lj">购票享低价,首单2张立减4元</div>
        <div class="label_kk">9.9元开卡></div>
      </a>
    </div>
    <div class="list_warp">
      <div class="list_item" v-for="item in movie.shows[0].plist" :key="item">
        <div class="item_left">
          <div>{{item.tm}}</div>
          <div>21:11&nbsp;散场</div>
        </div>
        <div class="item_block">
          <div>
            国语&nbsp;
            <span>2D</span>
          </div>
          <div>1号厅</div>
        </div>
        <div class="item_price">
          <div class="item_pricea">
            <div>
              <span>￥</span>
              <span>38</span>
            </div>
            <div>
              <img src alt>
            </div>
          </div>
          <div class="item_priceb">折扣卡首单优惠</div>
        </div>
        <div class="button">购票</div>
      </div>
    </div>
    
  </div>
</template>


<script>
import Axios from "axios";
export default {
    props:{
            movie:{
                type:Object
            }
        },
  data() {
    return {
        
    };
  },
  
  mounted(){},

  methods: {
 
    }
}

</script>


<style>
.mover_info {
    font-size: 10px;
    color: #999;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.mover_info .mover_infoTop .moverTop_a{
    font-size: 16px;
    font-weight: bold;
    color: #000;  
    height: 24px;
    line-height: 24px;
}
.mover_info .mover_infoTop .moverTop_b{
    color: #ffb400;
}
.mover_info .mover_infoTop .moverTop_c{
    font-size: 8px;
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

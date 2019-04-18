<template>
  <div>
    <header class="navbar">
      <a class="back" @click="fn1"><i class="iconfont icon-arrow-left"></i></a> 
      <h2 class="nav-title">{{detail.nm}}</h2>
    </header>
    <div class="movie-banner">
      <div class="detail">
        <div class="poster">
          <img :src="detail.img.replace('w.h','128.180')">
        </div>
        <div class="content">
          <div class="title">{{detail.nm}}</div>
          <div class="title-en-name">{{detail.enm}}</div>
          <div class="score">
            {{detail.sc}}
            <span class="snum">({{detail.snum}}万人评)</span>
          </div>
          <div class="type">
            <span>{{detail.cat}}</span>
            <div class="type-group"></div>
          </div>
          <div class="src">{{detail.src}}/{{detail.episodeDur}}分钟</div>
          <div class="pubDesc">{{detail.pubDesc}}</div>
        </div>
      </div>
    </div>
    <div class="day">
        <div>今天04月16日</div>
        <div>明天04月17日</div>
        <div>后天04月18日</div>
    </div>


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
    <router-link tag="div" :to="{ params:{ id:cinema.id}}" id="content_wrapper"
     v-for="cinema in cinemas" :key="cinema.id">
        <div class="content">
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
                <div class="t_k">开卡特惠，首单2张立减4元</div>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { error } from 'util';
export default {
    data(){
        return{
           detail:[],
           cinemas:[]
        }
    },
    methods:{
        fn1(){
            this.$router.go(-1);
        },
        getmoviedetail(){
            axios.get('/api/ajax/detailmovie',{
                params:{
                    movieId: this.$route.params.id,
                }
            }).then(res=>{
                let data = res.data;
                this.detail = data.detailMovie;
                // console.log(this.detail);
                // console.log(this.$route.params.id);
            }).catch(error =>{
                alert('n-hot出错了')
            })
        },
        getcinemalist(){
            axios.get('/api/ajax/cinemaList?day=2019-04-16&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1555414567234&cityId=30',{
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                } 
            }).then(res=>{
                let data = res.data;
                this.cinemas = data.cinemas;
                console.log(this.cinemas);
            }).catch(error=>{
                alert('detail-cinema出错了')
            })
        }
    },
    created(){
        this.getmoviedetail();
        this.getcinemalist();
    },
    beforeRouteUpdate(to,from,next){
        this.getmoviedetail();
        next()
    }
}
</script>

<style>
header{
    position: relative;
    width:100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e54847;
    font-size: 18px;
    color:white;
}
header>a{
    position: absolute;
    color:white;
    left:10px;
}

.detail{
    width:100%;
    height: 188px;
    background:rgba(51, 51, 51, 0.7);
    
    color:white;
    display: flex;
}
.detail img{
    width:110px;
    height: 150px;
    margin-top:19px;
    margin-left:20px;
    margin-right:20px;
}
.content{
    margin-top:19px;
}
.content div{
    font-size: 12px;
    margin-bottom:7px;
}
.content .title{
    font-size: 20px;
}
.content .score{
    font-size: 18px;
    font-weight: 700;
    color: #fc0;
}
.content .score span{
    font-size: 12px;
    color:white;
}
.day{
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
}
.day div{
    flex: 1;
}



/* 分类 */

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


/* 内容 */

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
<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="sb in sBanner"
                    :key="sb.id">
                    <img :src="sb.img.replace('w.h','74.109')" alt="">
                </div>
            </div>
        </div>
        
        <!-- <div class="mover_info">
            <div class="mover_infoTop">
                <span class="moverTop_a">
                {{item.nm}}
                    <span class="moverTop_b">{{item.sc}}<span class="moverTop_c">分</span></span>
                </span>
            </div>
            <div class="mover_infoTBtn">
                {{item.desc}}
            </div>
        </div> -->
    </div>
</template>


<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
export default {
   
    props: {
        sBanner:{
            type:Array
        }
    },
    mounted(){
        console.log(this.sBanner)
    },
    updated() {
        new Swiper('.swiper-container',{
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        })
    },
}
</script>


<style>
    .swiper-container {
        width:100%;
        height: 135px;
        background: #40454d;
    } 
    .swiper-wrapper{
       padding-top: 15px; 
        
    }
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
</style>

<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="sb in sBanner" :key="sb.id">
            <img :src="sb.img.replace('w.h','74.109')" alt>
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
    </div>-->
  </div>
</template>


<script>
import Swiper from "swiper";
export default {
  props: {
    sBanner: {
      type: Array
    }
  },
  mounted() {
    console.log(this.sBanner);
  },
  updated() {
    new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
	  centeredSlides: true,
    });
    this.changeurl();
  },
  methods:{
    //   changeurl(){
    //       this.$route.fullPath.push({params:{}})
    //       console.log(this.$route)
    //   }
  },

};
</script>


<style>
.swiper-container {
  width: 100%;
  height: 135px;
  background: #40454d;
}
.swiper-slide{
    
     display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition: 300ms;
   
}
.swiper-slide:not(.swiper-slide-active){
      transform: scale(0.8);
}
.swiper-slide-active img{
    border:2px solid white;
}
</style>

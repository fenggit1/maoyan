<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="sb in sBanner" :key="sb.id" :name="sb.id">
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

import merge from 'webpack-merge';
import Swiper from "swiper";
export default {
  data(){
    return {
        movieid:'',
        showdata:''

    }  
  },
  props: {
    sBanner: {
      type: Array
    }
  },
  mounted() {
    console.log(this.sBanner);
  },
  updated() {
    var that = this;
    new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      on: {
        slideChangeTransitionStart: function(){
            var num =  that.getlist();
            that.movieid = num;
             getshowdata(movieid)
        },
  },
    });
     this.changeurl();
  },
  methods:{
      changeurl(){
          let url = `${this.sBanner[0].id}`
          this.$router.push({query: { movieid: url }})
      },
      getlist(){
          let slide = document.getElementsByClassName('swiper-slide');
          
          for(let i = 0;i <= slide.length;i++){
              if(slide[i].className.match('.swiper-slide-active')){
                  
                  this.id=slide[i].getAttribute("name")
                  console.log(this.id)
                return this.id
              }
          }

      },
      getshowdata(movieid){
          var index = this.sBanner.findIndex(item=>item.id === movieid);
          var data = this.sBanner[index].shows;
          this.showdata = data;
      }
  },
  computed:{
      
  }
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

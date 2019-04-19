
<template>
  <div>
    <header class="navbar">
      <a class="back" @click="fn1">
        <i class="iconfont icon-arrow-left"></i>
      </a>
      <div class="navbar_left">
        <a href></a>
      </div>
      <h1 class="navbar_header">{{cinemalist.nm}}</h1>
    </header>
    <div class="main_warp">
      <div class="lotn">
        <div class="lotn_left">
          <h2>{{cinemalist.nm}}</h2>
          <p>{{cinemalist.addr}}</p>
        </div>
        <div class="lotn_right">
          <i class="iconfont icon-daohang"></i>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="sb in sbanner" :key="sb.id" :name="sb.id">
            <img :src="sb.img.replace('w.h','74.109')" alt>
          </div>
        </div>
      </div>

      <movielist :movie="movie"></movielist>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import movielist from "../components/movielist.vue";
import Axios from "axios";
export default {
  data() {
    return {
      sbanner: [],
      cinemalist: [],
      movie: {}
    };
  },
  components: {
    movielist
  },

  methods: {
    fn1() {
      this.$router.go(-1);
    },
    //轮播图
    getbanner() {
      Axios.get(
        "/api/ajax/cinemaDetail",
        {
          params: {
            cinemaId: this.$route.params.id
          }
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      )
        .then(res => {
          let data = res.data;
          this.sbanner = data.showData.movies;
          this.cinemalist = data.cinemaData;
          this.movie = this.sbanner[0];

          var that = this;
          new Swiper(".swiper-container", {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
            observer: true,
            observeParents: true,
            on: {
              slideChange: function(index){
                  console.log(this.activeIndex)
                  // that.changeurl();
                  // var num =  that.getlist();
                  var arr = that.sbanner;
                  //console.log(arr)
                 
                  that.movie = arr[this.activeIndex]
                  console.log(that.movie)
                  //console.log(that.movie)
                  //that.getshowdata();
                  //that.getmovielist()
              },
            }
          });
        })
        .catch(error => {
          console.log("出现错误");
        });
    }
  },
  created() {
    this.getbanner();
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 135px;
  background: #40454d;
}
.swiper-slide {
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
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.8);
}
.swiper-slide-active img {
  border: 2px solid white;
}
.navbar {
  height: 50.5px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: flex;
  align-items: center;
  width: 100%;
}
.navbar > a {
  position: absolute;
  color: white;
  left: 10px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
}
.main_warp .lotn .lotn_left {
  width: 225px;
  height: 74px;
  margin-top: 10px;
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
  border-left: 1px solid #777;
  margin-top: 20px;
  margin-left: 10px;
}
.main_warp .lotn .lotn_right i {
  font-size: 26px;
  color: rgb(0, 255, 170);
}
</style>


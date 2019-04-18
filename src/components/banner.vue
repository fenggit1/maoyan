<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="width: 85px;margin-left:20px"
          v-for="item in hotmovies"
          :key="item.id"
        >
          <img :src="item.img.replace('w.h','85.115')" alt>
          <p>{{ item.nm }}</p>
          <p>{{item.comingTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
export default {
  updated() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  data() {
    return {
      hotmovies: []
    };
  },
  methods: {
    gethotlist() {
      axios
        .get(
          "/api/ajax/mostExpected?ci=30&limit=10&offset=0&token=rJvQ9rArVJ_TfvSkbIjJyQfeUS8AAAAAPAgAAK5JWUx873dfxOjAwwd6baxdGuykv4NI3ZIIkMS0ShAozqPg2gNuX0yugY6hJhmnag",
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          }
        )
        .then(res => {
          let data = res.data;
          this.hotmovies = data.coming;
          console.log(this.hotmovies);
        })
        .catch(error => {
          alert("banner出错了");
        });
    }
  },
  created() {
    this.gethotlist();
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 200px;
}
.swiper-slide{
  width:85px !important;
}
</style>
<template>
  <div>
    <CinemsaTop></CinemsaTop>
    <Cinemsalist :cinemaslist="cinemas"></Cinemsalist>
  </div>
</template>

<script>
import Axios from "axios";
import CinemsaTop from "../components/cinemasTop";
import Cinemsalist from "../components/cinemasList";
export default {
  components: {
    CinemsaTop,
    Cinemsalist
  },

    data(){
        return {
            cinemas:[]
        }
    },

  methods: {
    getList() {
      Axios.get(
        "/api/ajax/cinemaList?day=2019-04-17&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1555465924913&cityId=30",
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      )
        .then(res => {
          let data = res.data;
          this.cinemas = data.cinemas
        })
        .catch(error => {
          alert("出现错误");
        });
    }
  },

  created() {
    this.getList();
  }
};
</script>





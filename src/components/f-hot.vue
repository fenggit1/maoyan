<template>
  <div class="movie">
    <div class="n-hot">
      <div class="list-wrap">
        <div class="list-item"
        v-for="movie in movies"
        :key="movie.id">
          <dl>
            <dt>
              <img :src="movie.img.replace('w.h','128.180')">
            </dt>
            <dd>
              <p>{{movie.nm}}</p>
              <p>
                观众评
                <span>{{movie.sc}}</span>
              </p>
              <p>主演: {{movie.star}}</p>
              <p>{{movie.showInfo}}</p>
            </dd>
          </dl>
          <button>预购</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return {
        movies:[]
      }
    },
    methods: {
      getmovielist(){
        axios.get('/api/ajax/comingList?ci=30&token=rJvQ9rArVJ_TfvSkbIjJyQfeUS8AAAAAPAgAAK5JWUx873dfxOjAwwd6baxdGuykv4NI3ZIIkMS0ShAozqPg2gNuX0yugY6hJhmnag&limit=10',{
          headers:{
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(res =>{
          let data = res.data;
          
          this.movies = data.coming;
          console.log(this.movies);
        }).catch(error =>{
          alert('f-hot出错了')
        })
      }
    },
    created(){
      this.getmovielist();
    }
      
}
</script>

<style scoped>
/* 内容部分 */
.list-wrap{
    padding:15px 15px 15px 15px;
    
}
.list-item{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;
}
.list-item dl{
    display: flex;
    
}
.list-item dl dt img{
    width:64px;
    height: 90px;
    margin-right:10px;
}
.list-item dl dd p:nth-child(1){
    font-size: 17px;
    color: #333;
    font-weight: 700;
}
.list-item dl dd p:nth-child(2){
    font-size: 13px;
    color: #333;
    font-weight: 300;
    line-height: 25px;
}
.list-item dl dd p:nth-child(3){
    font-size: 13px;
    color: #333;
    font-weight: 300;
    line-height: 22px;
}
.list-item dl dd p:nth-child(4){
    font-size: 13px;
    color: #333;
    font-weight: 300;
    line-height:22px;
}
.list-item button{
    position: absolute;
    top:10px;
    right:20px;
    font-size: 12px;
    height: 28px;
    width:50px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #3c9fe6;
    color: #fff;
    border-radius: 4px;
    border:none;
    margin-top:30px;
}
</style>
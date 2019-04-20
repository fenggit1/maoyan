import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        movieinfo:{},
        cartinfo:[],
        msg:'我是仓库信息'
    },
    getters:{

    },
    mutations:{
        cartadd(state){
            state.cartinfo.push(state.movie)
            console.log(state.cartinfo)
        },
        // changemovieinfo(state){

        // }
    },
    actions:{
        
    }
})

export default store;
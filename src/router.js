import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('./views/home.vue'),
            children:[
                { path:'movie', component:()=> import('./views/movie.vue') ,
                    children:[
                        { path:'n-hot',component:()=>import('./components/n-hot.vue')},
                        { path:'f-hot',component:()=>import('./components/f-hot.vue')},
                        { path:'',redirect:'/movie/n-hot'}
                    ]
                },
                { path:'cinemas', component:()=> import('./views/cinemas.vue') },
                { path:'center', component:()=> import('./views/center.vue') },
                
            ]
        },
        { path:'/cinema/movie/:id',name:'detail', component:()=>import('./views/detail.vue')}
        
    ]
})
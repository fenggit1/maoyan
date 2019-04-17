import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('./views/home.vue'),
            children:[
                { path:'movie', component:()=> import('./views/movie.vue') },
                { path:'cinemas', component:()=> import('./views/cinemas.vue') },
                { path:'center', component:()=> import('./views/center.vue') },
            ]
        },
        { path:'/shows/:id',name: 'detail', component:()=> import('./views/Sdetail.vue') },
        
    ]
})
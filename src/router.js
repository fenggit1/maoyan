import Vue from "vue";
import VueRouter from "vue-router";

window.islogin = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('./views/home.vue'),
            children:[
                { path:'movie', component:()=> import('./views/movie.vue') ,
                    children:[
                        { path:'n-hot',component:()=>import('./components/n-hot.vue')},
                        { 
                            path:'f-hot',component:()=>import('./components/f-hot.vue'),
                            children:[
                                { path:'banner',component:()=>import('./components/banner.vue')}
                            ]
                        },
                        { path:'',redirect:'/movie/n-hot'}
                    ]
                },
                { path:'cinemas', component:()=> import('./views/cinemas.vue') },
                { path:'center', component:()=> import('./views/center.vue') },
                { path:'',redirect:'/movie/n-hot'}
            ]
        },
        { path:'/cinema/movie/:id',name:'detail', component:()=>import('./views/detail.vue')},
        { path:'/shows/:id',name:'shdetail',component:()=>import('./views/Sdetail.vue')},
        { 
            path:'/movieorder',name:'order', component:()=>import('./views/movieorder.vue'),
            beforeEnter:(to,from,next)=>{
                
                if(!window.islogin){
                    next({
                        path:'/login',
                        query:{
                            redirect:to.fullPath
                        }
                    })
                }else{
                    next();
                }
            }
        },
        { 
            path:'/login',component:()=>import('./views/login.vue'),
            beforeEnter:(to,from,next)=>{

                next()
            }
        },
        { path:'*',redirect:'/movie/n-hot'},
        { path:'/city-list',component: ()=>import('./views/city-list.vue')},
    ]
})

router.beforeEach ((to, from, next) => {
    // ...
    next();
})

router.afterEach ((to, from) => {
    // ...
    
})
export default router;
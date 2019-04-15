<template>
    <div>
        <router-view></router-view>
        <navbar :tabs='tabs'></navbar>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue';
export default {
    data(){
        return{
            tabs:[
                { name:'电影',href: '/movie',icon: 'icon-dianying'},
                { name:'影院',href: '/cinemas',icon: 'icon-yingyuana'},
                { name:'我的',href: '/center',icon: 'icon-My'},
            ]
            
        }
    },
    components:{
        navbar
    }
}
</script>
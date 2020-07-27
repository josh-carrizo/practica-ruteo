import Vue from 'vue';
import VueRouter from 'vue-router';
// importamos los componentes que deseamos tengan su propia página
import PrincipalPage from '@/components/PrincipalPage.vue';
import Login from '@/components/Login.vue';
import Categories from '@/components/Categories.vue';
import AboutUs from '@/components/AboutUs.vue';
import NotFound from '@/components/NotFound.vue';
import Reviews from '@/components/Reviews.vue';
import Images from '@/components/Images.vue';
import Restoran from '@/components/Restoran.vue';


Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: PrincipalPage
    },
    {
      path: '/login', 
      component: Login
    },
    {
      path: '/category/:restoran', 
      component: Categories,
    
    },
    {
      path: '/:restoran',
      component:Restoran,
      children:[
        {path:'/',
        component: AboutUs},
        {path:'/reviews',
        component: Reviews},
        {path:'/images',
        component: Images}
      ]
    },
    {
        path: '*', 
        component: NotFound
    },
  ]
})
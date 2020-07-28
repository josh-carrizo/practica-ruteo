<template>
  <div>
    <router-link class="link-inicio" v-bind:to="{path: '/'}">Home</router-link>
       <h2 style="text-align:center"> 
           <router-link v-bind:to="{ name:'reviews' , params:{restoran: restoran}}">Reviews</router-link>
           <span> | </span>
           <router-link v-bind:to="{ name:'images' }">Images</router-link>
           <span> | </span>
            <router-link v-bind:to="{ name:'aboutus' , params: {restoran: restoran}}">About Us</router-link>
        </h2> 
        <router-view />

    </div>
</template>

<script>
import M from 'materialize-css'

export default {
    name:'Restoran',
    props:{
        restoran: String
    },
     mounted() {
      M.AutoInit();
    }

}
</script>

<style>
.link-inicio{
    position: absolute;
    top: 2rem;
    right:10rem;
}
</style>
<template>
  <div>
    <router-link class="link-inicio" v-bind:to="{ path: `/` }">Home</router-link>
       <h2 style="text-align:center"> 
           <router-link v-bind:to="{ path: `/${$route.params.restoran}/reviews` }">Reviews</router-link>
           <span> | </span>
           <router-link v-bind:to="{ path: `/${$route.params.restoran}/images` }">Images</router-link>
           <span> | </span>
            <router-link v-bind:to="{ path: `/${$route.params.restoran}/` }">About Us</router-link>
        </h2> 
        <router-view />

    </div>
</template>

<script>
export default {
    name:'Restoran'

}
</script>

<style>
.link-inicio{
    position: absolute;
    top: 2rem;
    right:10rem;
}
</style>
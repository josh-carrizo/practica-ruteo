<template >
    <div>

        <h1>Reviews of {{ $route.params.restoran }}</h1>
        <router-link class="link-inicio" v-bind:to="{ path: `/` }">Home</router-link>

            <h2 style="text-align:center"> 
                <router-link v-bind:to="{ path: `/${Reviews}/reviews` }">Reviews</router-link>
                <span> | </span>
                <router-link v-bind:to="{ path: `/${Images}/images` }">Imagenes</router-link>
                <span> | </span>
                <router-link v-bind:to="{ path: `/${AboutUs}` }">About Us</router-link>
            </h2>

        <div class="row">
            <div class="column ">
                <div class="card">
                    <span> <img src="https://vignette.wikia.nocookie.net/sonic/images/a/a5/Sonic_Forces_Artwork_-_Avatar_M.png/revision/latest/top-crop/width/360/height/450?cb=20171108235334&path-prefix=es"   class="img-perfil"> <h5 class="text-revw">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur eius quod inventore"</h5></span>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <span> <img src="https://vetealaversh.com/wp-content/uploads/2017/12/Darkar-Avatar.png"   class="img-perfil"> <h5 class="text-revw">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur eius quod inventore"</h5></span>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "Reviews"
}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
.link-inicio{
    position: absolute;
    top: 2rem;
    right:10rem;
}
html {
  box-sizing: border-box;
}
.card{
    margin:3rem;
    
}
.img-perfil{
    width: 10rem;
    height:10rem;
    text-align: start;
    display: inline-block;
}
.text-revw{
    padding: 3rem;
    vertical-align: 4.5rem;
    display: inline-block;
}
.row{
    margin-left: 8rem;
}



</style>
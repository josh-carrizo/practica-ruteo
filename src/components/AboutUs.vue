<template >
    <div>

    <h1>About {{restoran}}</h1>
  
    <div class="about-section">
        <h1>Sobre nosotros</h1>
        <p>Enjoy the principal gift!</p>
        <p>I just have a cool gif, but isn't mine</p>
    </div>


    <div class="row">
        <div class="column">
            <div class="card">
            <img src="https://cdn.dribbble.com/users/375867/screenshots/1681952/shadow-ninja-game-character-sprite-sheet-sidescroller-limbo-stickman-game-asset-flying-flappy-animation-gui-mobile-games-gameart-game-art-590.gif"   class="img-perfil">
                <div class="container">
                    <h2>Desconocido</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Just a ghost</p>
                    <p>ninja@{{ restoran }}.com</p> //
                    <!--{{ $route.params.restoran }}-->
                    <p><button class="button">Contact</button></p>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <img src="https://cdn.dribbble.com/users/1693107/screenshots/4459237/groot-001-gif.gif"   class="img-perfil">
                <div class="container">
                    <h2>Groot</h2>
                    <p class="title">Art Director</p>
                    <p>I am groot ... I AM GROOT.</p>
                    <p>Groot@{{restoran}}.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>
<script>
export default {
    props:{
      restoran: String
    },
    name: "AboutUs",

}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.row{
    padding-left: 20rem;
}

.img-perfil{
    width: 20rem;
}
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

</style>
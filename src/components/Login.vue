<template>
    <div id="contenedor">
        <h1>Log In to DojoReviews</h1>
        <form action="action_page.php" method="post">
        <div class="imgcontainer">
            <img src="https://cdn.onlinewebfonts.com/svg/img_572667.png" alt="Avatar" class="avatar">
        </div>

        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style>
#contenedor{
    width: 40rem;
    padding: 0rem 8rem;
    background-color: rgba(255,255,255,1);
    background: @include filter-gradient(#ffffff, #ffffff, horizontal);
    background: @include background-image(radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(246,246,246,0.81) 47%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.59) 100%)); 

}

/* Bordered form */
form {
  border: 3px solid black;
  opacity: 80%;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  opacity: 80%;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  margin-left: 150px;
  padding: 10px 20px;
  background-color: #f44336;
  border-radius: 5px;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 8%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
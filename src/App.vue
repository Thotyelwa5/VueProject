<template>
<navbar-comp/>
<main>
  <router-view/>
</main>
  <FooterComp/>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default{
  components: { NavbarComp,FooterComp },
  NavbarComp,FooterComp
}
</script>
<style>
#app {
  font-family: 'Anton', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Playfair Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden ;
  
}

body {
  background-image: url('https://i.postimg.cc/HLyfshtF/brown-aesthetic-4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>

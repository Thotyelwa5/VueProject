<template>

  <div class="home">
    <div class="hello d-flex flex-column flex-md-row justify-content-center rounded rounded-circle">
      <div class="container3">
        <h4 class="animate__animated animate__bounceInUp">Hello There I'm...</h4>
          <h1 class="animate__animated animate__backInRight">Thotyelwa Mpongwana</h1>
          <h6>Aspiring Full-stack Web-Developer</h6>
          <router-link to="/about">More About Me</router-link>
      </div>
      <div class="image-container">
        <img src="https://drive.google.com/file/d/1R5fkhQFJ4C8cwLgOcFWcWST-Xl3DMuSH/view?usp=sharing" alt="landing pg" class="img-fluid">
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style scoped>
.home {
  
  padding: 20px;
  text-align: center;
}

.hello {
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
}

.container3 {
  margin-right: 50px;
}

.container3 h4 {
  font-size: 1.5rem;
  font-weight: bold;
  color:white;
}

.container3 h1 {
  font-size: 3rem;
  font-weight: bold;
  color:white;
  margin-bottom: 20px;
}

.container3 h6 {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 30px;
}

.container3 a {
  display: inline-block;
  padding: 10px 20px;
  background-color:rgb(178, 173, 173);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.container3 a:hover {
  background-color: #F3DEBA;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-fluid {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50%;
  padding-top: 20;
}
@media (width < 780){
  .img-fluid[data-v-9ea40744] {
    width: 250px;
    height: 250px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    padding-top: 20px;
}
}

</style>

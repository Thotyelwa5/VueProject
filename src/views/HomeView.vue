<template>
  <div class="home">
    <div class="hello d-flex flex-column flex-md-row justify-content-center rounded rounded-circle">
      <div class="container3">
        <h4 class="animate__animated animate__bounceInUp">Hello There I'm...</h4>
          <h1 class="animate__animated animate__backInRight">Thotyelwa Mpongwana</h1>
          <h6>Aspiring Full-stack Web-Developer</h6>
          <a href="/views/AboutView.vue">Connect with Me</a>
      </div>
        <img src="https://i.postimg.cc/LsjGqWQj/IMG-1425-3.jpg" alt="landing pg" class="img-fluid" >
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
  background-color: #f8f9fa;
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
  color: #333;
}

.container3 h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.container3 h6 {
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 30px;
}

.container3 a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.container3 a:hover {
  background-color: #0056b3;
}

.img-fluid {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border: 5px solid #007bff;
  border-radius: 50%;
  padding-top: 20;
  
}

</style>

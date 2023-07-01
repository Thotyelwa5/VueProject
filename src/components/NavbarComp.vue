<template>

        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto py-0">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume">Resume</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/projects">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials">Testimonials</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar-nav .nav-item {
  margin: 0 10px;
}

.navbar-nav .nav-item a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
}

.navbar-nav .nav-item a:hover {
  color: #007bff;
}
</style>
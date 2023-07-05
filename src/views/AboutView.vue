<template>
  <div class="about">
    <div class="container">
      <div class="card" style="width: 40rem;">
        <div class="card-body">
          <h5 class="card-title">About Thotyelwa</h5>
          <p class="card-text">My name is Thotyelwa Mpongwana. I was born in Khayelitsha and later relocated to Hout Bay. I am a young, energetic, and ambitious person who approaches every task and situation with a strong sense of responsibility. Working collaboratively with others to achieve shared objectives is one of my strengths, and I consistently deliver high-quality results within set deadlines. I have a solid grasp of HTML, CSS, Vuejs, Javascript and Bootstrap, and I am eager to expand my skills in the field of coding as a full-stack web developer. Technology is a particular interest of mine, and I am enthusiastic about pursuing a career in the tech industry. I am open to relocation opportunities and excited to embrace new challenges and learning experiences.</p>
          <a href="https://drive.google.com/file/d/1Pazz8UTMa6Sa8VkmOx7SjA3nl_7bkI0z/view?usp=drive_link" class="card-link">Download CV</a>
        </div>
      </div>
    </div>
  
    

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 50rem;
  max-width: 100%;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 9px 18px 0px rgba(0, 0, 0, 0.1);
 margin: 0 auto;
}

.card-body {
  padding: 2rem;
}

.card-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333333;
}

.card-text {
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: #666666;
}

.card-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333333;
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.card-link:hover {
  background-color: #555555;
}

@media (max-width: 576px) {
  .card {
    width: 90%;
  }
}
</style>


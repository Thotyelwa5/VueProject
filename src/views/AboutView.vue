<template>
  <div class="about">
    <div class="card" style="width: 50rem;">
      <div class="card-body">
        <h5 class="card-title">About Thotyelwa</h5>
        <p class="card-text">My name is Thotyelwa Mpongwana. I was born in Khayelitsha and later relocated to Hout Bay. I am a young, energetic, and ambitious person who approaches every task and situation with a strong sense of responsibility. Working collaboratively with others to achieve shared objectives is one of my strengths, and I consistently deliver high-quality results within set deadlines. I have a solid grasp of HTML, CSS, Vuejs, Javascript and Bootstrap, and I am eager to expand my skills in the field of coding as a full-stack web developer. Technology is a particular interest of mine, and I am enthusiastic about pursuing a career in the tech industry. I am open to relocation opportunities and excited to embrace new challenges and learning experiences.</p>
        <a href="#" class="card-link">Download CV</a>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 7rem;
  font-size: 1.3rem;
}

.card-link {
  display: block;
}
</style>

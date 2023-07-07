<template>

  <div id="about" class="container" >
    <div class="container">
      <div class="card" style="width: 40rem;">
        <div class="card-body">
          <h5 class="card-title">About Thotyelwa</h5>
          <p class="card-text">My name is Thotyelwa Mpongwana. I was born in Khayelitsha and later relocated to Hout Bay. I am a young, energetic, and ambitious person who approaches every task and situation with a strong sense of responsibility. Working collaboratively with others to achieve shared objectives is one of my strengths, and I consistently deliver high-quality results within set deadlines. I have a solid grasp of HTML, CSS, Vuejs, Javascript and Bootstrap, and I am eager to expand my skills in the field of coding as a full-stack web developer. Technology is a particular interest of mine, and I am enthusiastic about pursuing a career in the tech industry. I am open to relocation opportunities and excited to embrace new challenges and learning experiences.</p>
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

#about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 50rem;
  max-width: 100%;
  background-color: rgb(178, 173, 173);
  border-radius: 1.5rem;
  box-shadow: 9px 18px 0px rgb(110, 109, 109);
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
  margin-top: 10px;
  margin-bottom: 3rem;
  font-size: 16px;
  color: antiquewhite;
}



@media (max-width: 580px) {
  .card {
    width: 100%;
    height: fit-content;
  }
.container{
  margin:auto;
  width:100%;
}
.card-text{
  font-size: 14px;
}
.card-body {
  padding:0 12px;
}
}
</style>


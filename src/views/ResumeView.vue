<template>
  
  <div class="container">
  <section class="education">
    <h2>Education</h2>
    <div class="timeline">
      <div v-for="edu in education" :key="edu.id" class="timeline-item">
        <div class="timeline-content">
          <h3>{{ edu.name }}</h3>
          <p>{{ edu.year }}</p>
          <p>{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="experience">
    <h2>Experience</h2>
    <div class="timeline">
      <div v-for="exp in experience" :key="exp.id" class="timeline-item">
        <div class="timeline-content">
          <h3>{{ exp.name }}</h3>
          <p>{{ exp.year }}</p>
          <p>{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</div>
  <section class="skills">
    <h2>Skills</h2>
    <div class="containerr">
      <div v-for="Skill in skills" :key="Skill.id" class="card">
        <img :src="Skill.imgUrl" class="card-img-top" :alt="Skill.name" />
        <div class="card-body">
          <h1 class="card-text">{{ Skill.name }}</h1>
          <h6 class="card-text">{{Skill.description}}</h6>
        </div>
      </div>
    </div>
  </section>
  <section>
    <a href="https://drive.google.com/file/d/1Pazz8UTMa6Sa8VkmOx7SjA3nl_7bkI0z/view?usp=drive_link" class="card-link">Download CV</a>
  </section>

</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    experience() {
      return this.$store.state.experience;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchExperience");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 30px;
}

.timeline-content {
  width: 600px;
  margin-left: 40px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
}

.timeline-content p {
  color: #555;
  font-size: 16px;
  margin-bottom: 10px;
}

.timeline-item:first-child .timeline-content {
  margin-top: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.timeline-item:last-child .timeline-content {
  margin-bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.education {
  margin-bottom: 40px;
}

.education h2 {
  color: hsl(0, 0%, 20%);
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}
.experience h2 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.skills {
  margin-bottom: 40px;
}

.skills h2 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.containerr {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: 80%;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color:#f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(33.33% - 20px);
  
}

.card-img-top {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
  font-weight: bold;
}
.card-link {
  display: flex;
  margin-left:18rem;
  margin-right:18rem;
  justify-content: center;
  padding: 0.75rem 1.5rem; 
  background-color: rgb(178, 173, 173);
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109) ; 
}

.card-link:hover {
  background-color:  #F3DEBA;
}
</style>



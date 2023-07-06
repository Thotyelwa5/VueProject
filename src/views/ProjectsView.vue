<template>

  <h1>My Projects</h1>
    <div class="projects">
        <div v-for="Project in Projects" :key="Project.id" class="card" style="width: 27rem;">
            <img :src=" Project.imgUrl" class="card-img-top" :alt="Project.name">
            <div class="card-body">
              <h5 class="card-title">{{Project.name}}</h5>
              <a :href="Project.github" target="_blank"  class="btn btn-primary">Source code</a>
              <a :href="Project.netlify" target="_blank" class="btn btn-primary">Go Live</a>
            </div>
          </div>
    </div>

</template>

<script>
     export default {
  computed: {
    Projects() {
      return this.$store.state.Projects
    },
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 27rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 7px;
}

.btn-primary:hover {
  background-color: #0069d9;
}

</style>
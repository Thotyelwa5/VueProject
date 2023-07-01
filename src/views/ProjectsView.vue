<template>
    <div class="projects">
        <div v-for="Project in Projects" :key="Project.id" class="card" style="width: 18rem;">
            <img :src=" Project.imgUrl" class="card-img-top" :alt="Project.name">
            <div class="card-body">
              <h5 class="card-title">{{Project.name}}</h5>
              <a href="#" class="btn btn-primary">Source code</a>
              <a href="#" class="btn btn-primary">Go Live</a>
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

</style>
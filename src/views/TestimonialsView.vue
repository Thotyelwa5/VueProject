<template>
    <div class="testimonials">
        <div v-for="Testimonial in Testimonials" :key="Testimonial.id" class="card" style="width: 18rem;">
            <img :src="Testimonial.imgUrl" class="card-img-top" :alt="Testimonial.name">
            <div class="card-body">
              <h5 class="card-title">{{ Testimonial.name }}</h5>
              <p class="card-text">{{Testimonial.description}}</p>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
  computed: {
    Testimonials() {
      return this.$store.state.Testimonials
    },
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
  },
};
</script>

<style scoped>

</style>
<template>
  <h1 class="hey">Testimonials</h1>
    <div class="testimonials">
        <div v-for="Testimonial in Testimonials" :key="Testimonial.id" class="card" style="width: 30rem;">
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
.hey{
  font-size: 50px;
  font-weight: bold;
}
.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 10px;
  width: 30rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  font-size: 20px;
  color: #555;
}
</style>

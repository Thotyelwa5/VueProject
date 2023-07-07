<template>
  
  <div class="container">
    <div class="row">
      <div class="card p-0" v-for="Testimonial in Testimonials" :key="Testimonial.id"  style="width: 20rem;">
          <img :src="Testimonial.imgUrl" class="card-img-top" >
          <div class="card-body">
            <h5 class="card-title">{{ Testimonial.name }}</h5>
            <p class="card-title">{{ Testimonial.subject }}</p>
            <p class="card-text">{{ Testimonial.description }}</p>
          </div>
        </div>
      </div>
  </div>

  
</template>

<script>
    export default {
        computed: {
          Testimonials() {
            return this.$store.state.Testimonials;
          },
        },
        mounted() {
          this.$store.dispatch("fetchTestimonials");
        },
      };
</script>

<style  scoped>
.row{
  margin-left: 70px;
}
.card {
  display: grid !important;
  grid-template-columns: repeat (3, 1fr );
  justify-content: center;
  margin:20px 30px;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}



.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

@media (width < 500px){
  .row{
    margin-left: 0;
    padding: 0;
  }
  .card{
    margin: 0;
    padding: 0;
  }
  .container{
    padding: 0;
  }
}
</style>
<template>
  
  <div class="container">
    <p class="contact">Contact Me</p>
    <form @submit="submitForm" action="https://formspree.io/f/myyaonaq" method="post">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." v-model="firstName" :class="{ 'error': !isValidFirstName }">
      <span class="error-message" v-if="!isValidFirstName">Please enter your first name.</span>
      
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." v-model="lastName" :class="{ 'error': !isValidLastName }">
      <span class="error-message" v-if="!isValidLastName">Please enter your last name.</span>

      <label for="lname">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email.." v-model="email" :class="{ 'error': !isValidemail }">
      <span class="error-message" v-if="!isValidemail">Please enter your email.</span>
      
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." v-model="subject" :class="{ 'error': !isValidSubject }"></textarea>
      <span class="error-message" v-if="!isValidSubject">Please enter a subject.</span>
      
      <input type="submit" value="Submit">
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      isValidFirstName: true,
      isValidLastName: true,
      isValidemail: true,
      isValidSubject: true,
    };
  },
  methods: {
    submitForm(event) {
      if (!this.validateForm()) {
        event.preventDefault();
      }
    },
    validateForm() {
      this.isValidFirstName = !!this.firstName.trim();
      this.isValidLastName = !!this.lastName.trim();
      this.isValidemail = !!this.email.trim();
      this.isValidSubject = !!this.subject.trim();

      return this.isValidFirstName && this.isValidLastName && this.isValidemail && this.isValidSubject;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.contact {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  resize: vertical;
}

input[type="submit"] {
  background-color:rgb(178, 173, 173);
  color: white;
  padding: 12px 10px;
  border: none;
  border-radius: 4px;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109) ; 
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #F3DEBA;
}

.error {
  border-color: red;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>

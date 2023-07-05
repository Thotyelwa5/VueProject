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
      subject: '',
      isValidFirstName: true,
      isValidLastName: true,
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
      this.isValidSubject = !!this.subject.trim();

      return this.isValidFirstName && this.isValidLastName && this.isValidSubject;
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
  background-color: darkslategrey;
  color: white;
  padding: 12px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: darkslategrey;
}

.error {
  border-color: red;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>

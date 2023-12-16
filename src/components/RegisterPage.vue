<template>
  <div>
    <Header></Header>
    <div class="bording-container">
      <div class="bording-box">
        <h1 class="section-title">Inscription</h1>
        <div class="form-group">
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Nom d'utilisateur"
            class="rounded-input"
          />
        </div>
        <div class="form-group">
  <input
    type="email"
    id="email"
    v-model="email"
    placeholder="Adresse mail"
    class="rounded-input"
    @input="validateEmail"
  />
  <div class="error-message-container">
    <span v-if="emailError" class="error-message">{{ emailError }}</span>
  </div>
</div>

        <div class="form-group password-input-container">
          <input
            id="password"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Mot de passe"
            :class="{ 'show-password': showPassword, 'rounded-input': true }"
            @input="validatePassword"
          />
          <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
          <span class="toggle-password" @click="togglePasswordVisibility">
            <i v-if="showPassword" class="fas fa-eye"></i>
            <i v-else class="fas fa-eye-slash"></i>
          </span>
        </div>
        <button @click="register" class="bording-button">Inscription</button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      showPassword: false,
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    register() {
      axios.post(`http://localhost:8000/userCreate`, {
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .then(response => {
        const data = response.data;

        if (data.status) {
          console.log('Inscription réussie:', data.message);
          this.$router.push('/home');
        } else {
          console.error('Erreur lors de l\'inscription:', data.message);
          this.errorMessage = data.message;
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'inscription :', error);
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer plus tard.';
      });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = emailRegex.test(this.email) ? '' : 'Veuillez saisir une adresse e-mail valide.';
      return !this.emailError;
    },
    validatePassword() {
      // Example: Password must be at least 8 characters long and contain at least one number
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\[\]^_`|~]).{8,}$/;
      this.passwordError = passwordRegex.test(this.password) ? '' :  'Le mot de passe doit contenir au moins une lettre majuscule, un chiffre et un caractère spécial';
      return !this.passwordError;
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 8px;
  display: block;
}

@media screen and (min-width: 768px) {
  .bording-box {
    margin-top: 70px;
    width: 400px;
  }
}

@media screen and (min-width: 1024px) {
  .bording-box {
    width: 500px;
  }
}
</style>

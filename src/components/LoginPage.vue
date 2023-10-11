<template>
  <div>
    <Header></Header>
    <div class="bording-container">
      <div class="bording-box">
        <h2 class="section-title">Connexion</h2>
        <div class="form-group">
          <input type="email" id="email" v-model="email" placeholder="Adresse mail" class="rounded-input" />
        </div>
        <div class="form-group password-input-container">
          <input
            id="password"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Mot de passe"
            :class="{ 'show-password': showPassword }"
          />
          <span class="toggle-password" @click="togglePasswordVisibility">
            <i v-if="showPassword" class="fas fa-eye"></i>
            <i v-else class="fas fa-eye-slash"></i>
          </span>
        </div>
        <div class="form-group remember-me">
          <div class="remember-me-checkbox">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label for="rememberMe"></label>
          </div>
          <div class="remember-me-text">
            <label class="common-style" for="rememberMe">Se souvenir de moi</label>
            <label class="common-style">Mot de passe oublié?</label>
          </div>
        </div>
        <button @click="login" class="bording-button">Connexion</button>
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
      email: '',
      password: '',
      showPassword: false,
      rememberMe: false,
    };
  },
  methods: {
    login() {
      axios.post(`http://localhost:8000/api/login`, {
        email: this.email,
        password: this.password
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        // Récupérer le rôle de l'utilisateur depuis la réponse
        const roles = response.data.roles;
        // Rediriger en fonction du rôle de l'utilisateur
        if (roles.includes('ROLE_ADMIN')) {
          this.$router.push('/admin/home');
        } else {
          this.$router.push('/home');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la connexion :', error);
      });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
.remember-me-checkbox {
  margin-right: 10px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.common-style {
  font-size: 10px;
  color: var(--second-color);
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

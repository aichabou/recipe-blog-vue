<template>
  <div class="login-container">
    <img src="/assets/legallogo.png" alt="Logo" class="logo-image" />
    <div class="login-box">
      <h1 class="login-title">Connexion</h1>
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
    <button @click="login" class="login-button">Connexion</button>
  </div>
</div>
</template>



<script>
import axios from 'axios';

export default {
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
      // Utilisez Axios ici pour effectuer la requête HTTP POST vers votre API Symfony via cors-anywhere
      axios.post(`http://localhost:8000/api/login`, {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Gérez la réponse de l'API Symfony ici
        const token = response.data.token;
        // Stockez le jeton dans le local storage pour une utilisation ultérieure
        localStorage.setItem('token', token);

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page appropriée après la connexion réussie
        this.$router.push('/home');
      })
      .catch(error => {
        // Gérez les erreurs, par exemple, en affichant un message d'erreur à l'utilisateur
        console.error('Erreur lors de la connexion :', error);
      });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>



<style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F6F6F6;
}

.login-box {
  background-color: white;
  border-radius: 40px;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 40px;
}

.login-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 35px;
}

.toggle-password {
  cursor: pointer;
  color: #677C95;
  font-size: 14px;
}

.login-button {
  text-align: center;
  background-color: #677C95;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  font-size: 12px;
}

.password-input-container {
  position: relative;
}


.password-input-container .toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #677C95;
}


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
.common-style{
  font-size: 10px;
  color: #677C95;
}
</style>

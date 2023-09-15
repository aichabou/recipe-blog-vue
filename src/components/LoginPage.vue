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
          type="password"
          id="password"
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
        <input type="checkbox" id="remember-me" v-model="rememberMe" />
        <label for="remember-me">Se souvenir de moi</label>
        <a href="#" class="forgot-password">Mot de passe oublié ?</a>
      </div>
      <button @click="login" class="login-button">Connexion</button>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
      // Ajoutez ici la logique de connexion
      // Par exemple, vous pouvez utiliser Vue Router pour naviguer vers la page d'accueil après la connexion
      this.$router.push('/home');
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
/* ... (votre style existant) ... */

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
  text-align: center; /* Centrer le texte */
  margin-bottom: 50px; /* Ajouter un peu d'espace en dessous du titre */
  font-size: 35px; /* Ajustez la taille de la police selon vos préférences */
}

.toggle-password {
  cursor: pointer;
  color: #677C95; /* Bleu pour le lien "Afficher/Cacher le mot de passe" */
  font-size: 14px;
}

.login-button {
  text-align: center;
  background-color: #677C95;
  color: white; /* Texte en blanc */
  border: none;
  border-radius: 40px; /* Ajoutez le même border-radius que pour les champs de texte */
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

.remember-me {
  display: flex;
  justify-content: space-between; /* Espacement entre le checkbox et le lien "Mot de passe oublié ?" */
  align-items: center; /* Centrez verticalement la case à cocher et l'étiquette */
  color: #677C95;
  font-size: 12px;
  text-decoration: none;
}

.forgot-password {
  font-size: 12px;
  text-decoration: none;
  color: #677C95;
}
</style>

<template>
  <div>
    <LogOutHeader></LogOutHeader>
    <section class="recipe-form section" id="recipe-form">
      <h2 class="section-title">Une nouvelle recette</h2>
      <div class="recipe-form__container bd-grid">
        <form @submit.prevent="soumettreRecette">
          <div class="form-group">
            <label for="titre">Titre :</label>
            <input type="text" id="titre" v-model="titre" required/>
          </div>
          <div class="form-group">
            <label for="description">Description :</label>
            <textarea id="description" v-model="description" required></textarea>
          </div>
          <div class="form-group">
            <label for="ingredients">Ingrédients :</label>
            <textarea id="ingredients" v-model="ingredients" required></textarea>
          </div>
          <div class="form-group">
            <label for="instructions">Instructions :</label>
            <textarea id="instructions" v-model="instructions" required></textarea>
          </div>
          <div class="form-group">
            <label for="image">Télécharger une image :</label>
            <div class="file-input">
              <input type="file" id="image" ref="imageInput" @change="handleImageUpload"/>
              <button class="browse-button" @click="openImageDialog">Parcourir</button>
              <span>{{ selectedImage }}</span>
            </div>
          </div>
          <div class="form-group">
            <label for="video">Télécharger une vidéo :</label>
            <div class="file-input">
              <input type="file" id="video" ref="videoInput" @change="handleVideoUpload"/>
              <button class="browse-button" @click="openVideoDialog">Parcourir</button>
              <span>{{ selectedVideo }}</span>
            </div>
          </div>
          <button @click="soumettreRecette" type="submit" class="button">Ajouter la recette</button>
        </form>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import LogOutHeader from "@/components/Header/LogOutHeader.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    LogOutHeader,
    Footer,
  },
  data() {
    return {
      titre: "",
      description: "",
      ingredients: "",
      instructions: "",
      selectedImage: "",
      selectedVideo: "",
    };
  },
  methods: {
    soumettreRecette() {
      const data = {
        titre: this.titre,
        description: this.description,
        ingredients: this.ingredients,
        instructions: this.instructions,
        image: this.selectedImage, // Si vous devez envoyer le nom du fichier, mettez le chemin complet ici
        video: this.selectedVideo, // Pareil ici, si vous devez envoyer le nom du fichier vidéo
      };

      // Envoyer les données au serveur Symfony
      axios.post('http://localhost:8000/recipe', data)
        .then(response => {
          console.log('Recette créée avec succès. ID:', response.data.id);
          // Réinitialisez les champs de formulaire après la soumission si nécessaire
          this.titre = "";
          this.description = "";
          this.ingredients = "";
          this.instructions = "";
          this.selectedImage = null;
          this.selectedVideo = null;
        })
        .catch(error => {
          console.error('Erreur lors de la création de la recette :', error);
        });
    },
    openImageDialog() {
      this.$refs.imageInput.click();
    },
    openVideoDialog() {
      this.$refs.videoInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.selectedImage = file ? file.name : "";
    },
    handleVideoUpload(event) {
      const file = event.target.files[0];
      this.selectedVideo = file ? file.name : "";
    },
  },
};
</script>

<style scoped>
.section-title{
  font-size: 2rem;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 0.8rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group input[type="file"] {
  display: none;
}
.file-input {
  display: flex;
  align-items: center;
}
.file-input input[type="file"] {
  display: none;
}
.browse-button {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: var(--first-color);
  color: #fff;
  border: none;
  border-radius: 5px;
}
@media screen and (min-width: 768px) {
.form-group input,
.form-group textarea {
  width: 80%;
  padding: 10px;
  font-size: 12px;
}
}
@media screen and (min-width: 1024px) {
  .form-group input,
.form-group textarea {
  width: 120%;
  padding: 50px;
  font-size: 12px;
}
}
</style>

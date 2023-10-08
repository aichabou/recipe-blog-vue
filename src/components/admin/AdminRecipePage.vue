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
            <button type="submit" class="button center-element">Ajouter la recette</button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
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
        imageURL: "",
        videoURL: "",
        selectedImage: "",
        selectedVideo: "", 
      };
    },
    methods: {
      soumettreRecette() {
        // Vous pouvez traiter les données du formulaire ici, par exemple, les envoyer à un serveur
        console.log("Recette soumise :");
        console.log("Titre :", this.titre);
        console.log("Description :", this.description);
        console.log("Ingrédients :", this.ingredients);
        console.log("Instructions :", this.instructions);
        console.log("Image URL :", this.imageURL);
        console.log("Vidéo URL :", this.videoURL);
  
        // Réinitialisez les champs de formulaire après la soumission si nécessaire
        this.titre = "";
        this.description = "";
        this.ingredients = "";
        this.instructions = "";
        this.imageURL = "";
        this.videoURL = "";
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
        // Vous pouvez télécharger le fichier image ici si nécessaire
      },
      handleVideoUpload(event) {
        const file = event.target.files[0];
        this.selectedVideo = file ? file.name : "";
        // Vous pouvez télécharger le fichier vidéo ici si nécessaire
      },
    },
  };
  </script>
  
  <style>
  /* Styles spécifiques au composant */
  .form-group {
    margin-bottom: 20px;
  }
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
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
  .center-element {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  
<template>
    <LogOutHeader></LogOutHeader>
    <section class="about section" id="about">
      <h2 class="section-title">Brownies</h2>
      <div class="about__container bd-grid">
        <div class="about__img">
          <img :src="require('@/assets/image/brownies.jpeg')" alt="photo de profil">
        </div>
        <div>
          <p class="about__text">
            Découvrez l'essence du plaisir chocolaté avec nos brownies ! Ces délices chocolatés allient croquant à l'extérieur et fondant à l'intérieur. Succombez à l'irrésistible tentation du chocolat dans chaque bouchée. Plongez dans l'univers gourmand des brownies faits maison.
          </p>
        </div>
  
        <h3>Ingrédients</h3>
        <div>
          <ul class="points">
            <li>200g de chocolat noir</li>
            <li>150g de beurre</li>
            <li>250g de sucre</li>
            <li>4 œufs</li>
            <li>100g de farine</li>
            <li>1 cuillère à café de levure chimique</li>
            <li>1 pincée de sel</li>
            <li>100g de noix de votre choix (optionnel)</li>
          </ul>
        </div>
  
        <h3>Instructions</h3>
        <br>
        <div>
          <ul class="points">
            <li>Préchauffez votre four à 180°C (thermostat 6) et graissez un moule à brownies.</li>
            <li>Faites fondre 200g de chocolat noir au bain-marie ou au micro-ondes.</li>
            <li>Dans un bol, faites fondre 150g de beurre.</li>
            <li>Ajoutez le chocolat fondu au beurre et mélangez bien.</li>
            <li>Ajoutez 250g de sucre et mélangez jusqu'à obtenir un mélange homogène.</li>
            <li>Incorporez 4 œufs un par un en mélangeant bien après chaque ajout.</li>
            <li>Ajoutez 100g de farine, 1 cuillère à café de levure chimique et une pincée de sel. Mélangez jusqu'à obtenir une pâte lisse.</li>
            <li>Si vous le souhaitez, ajoutez 100g de noix de votre choix (optionnel) et mélangez délicatement.</li>
            <li>Versez la pâte dans le moule préparé et étalez-la uniformément.</li>
            <li>Enfournez le moule dans le four préchauffé et faites cuire les brownies pendant environ 25-30 minutes, ou jusqu'à ce qu'un cure-dent inséré au centre en ressorte propre.</li>
            <li>Laissez refroidir complètement avant de découper les brownies en carrés.</li>
            <li>Dégustez vos délicieux brownies faits maison !</li>
          </ul>
        </div>
  
        <div class="video">
          <video controls>
            <source src="@/assets/videos_baking/brownies.mp4" type="video/mp4">
          </video>
        </div>
  
        <div class="comment-section">
          <textarea v-model="commentText" placeholder="Laissez un commentaire"></textarea>
          <button class="button" @click="ajouterCommentaire">Envoyer</button>
        </div>
      </div>
    </section>
    <Footer></Footer>
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
        commentText: "", // Cette variable stockera le texte du commentaire
      };
    },
    methods: {
      ajouterCommentaire() {
        // Cette méthode sera appelée lorsque l'utilisateur cliquera sur le bouton "Ajouter un commentaire"
        // Vous pouvez traiter le texte du commentaire ici, par exemple, l'envoyer à un serveur, le stocker localement, etc.
        console.log("Nouveau commentaire ajouté :", this.commentText);
        // Réinitialisez le champ de texte après l'ajout du commentaire si nécessaire
        this.commentText = "";
      },
    },
  };
  </script>
  
  <style>
  .instructions-container {
    display: flex;
    align-items: flex-start;
  }
  
  .points {
    list-style-type: disc;
  }
  .video {
    margin-left: 150px;
  }
  
  .video video {
    width: 320px;
    height: 488px;
    object-fit: cover;
  }
  
  .comment-section {
    margin-top: 20px;
  }
  
  .comment-section textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    resize: vertical;
  }
  
  .comment-section button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>

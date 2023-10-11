<template>
  <div>
    <LogOutHeader></LogOutHeader>
    <section class="about section" id="about">
      <h2 class="section-title">Cheesecake</h2>
      <div class="about__container bd-grid">
        <div class="about__img">
          <img :src="require('/public/assets/cheesecake.jpeg')" alt="cheesecake">
        </div>
        <div>
          <p class="about__text">
            Savourez la douceur crémeuse du cheesecake avec une croûte croustillante aux biscuits graham. Ce dessert classique est parfait pour les occasions spéciales ou tout simplement pour se faire plaisir. Garnissez-le de fruits frais, de coulis ou de chocolat pour une touche encore plus délicieuse.
          </p>
        </div>

        <h3>Ingrédients</h3>
        <div>
          <ul class="points">
            <li>250g de biscuits graham émiettés</li>
            <li>100g de beurre fondu</li>
            <li>600g de fromage à la crème</li>
            <li>200g de sucre</li>
            <li>1 cuillère à café d'extrait de vanille</li>
            <li>4 œufs</li>
            <li>200ml de crème fraîche</li>
          </ul>
        </div>

        <h3>Instructions</h3>
        <div>
          <ul class="points">
            <li>Préchauffez votre four à 160°C (thermostat 5-6) et graissez un moule à cheesecake.</li>
            <li>Dans un bol, mélangez les biscuits graham émiettés avec le beurre fondu.</li>
            <li>Pressez ce mélange au fond du moule à cheesecake pour former la croûte. Réfrigérez pendant 30 minutes.</li>
            <li>Pendant ce temps, battez le fromage à la crème avec le sucre et l'extrait de vanille jusqu'à obtenir un mélange crémeux.</li>
            <li>Ajoutez les œufs un par un en battant bien après chaque ajout.</li>
            <li>Ajoutez la crème fraîche et mélangez jusqu'à obtenir une texture lisse.</li>
            <li>Versez le mélange de fromage à la crème sur la croûte de biscuits graham dans le moule.</li>
            <li>Enfournez le cheesecake dans le four préchauffé et faites-le cuire pendant environ 1 heure ou jusqu'à ce qu'il soit pris. Le centre doit être légèrement tremblotant.</li>
            <li>Laissez refroidir complètement à température ambiante, puis réfrigérez pendant au moins 4 heures ou toute la nuit.</li>
            <li>Dégustez votre délicieux cheesecake fait maison ! Garnissez-le de fruits frais, de coulis ou de chocolat si vous le souhaitez.</li>
          </ul>
        </div>

        <div class="video">
          <video controls>
            <source src="@/assets/videos_baking/cheesecake.mp4" type="video/mp4">
          </video>
        </div>

        <div class="comment-section">
          <textarea v-model="commentText" placeholder="Laissez un commentaire"></textarea>
          <button class="button" @click="ajouterCommentaire">Envoyer</button>
        </div>
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

<style scoped>
.section-title {
  margin-top: 5px;
}

.about__text {
  margin-right: 20px;
  text-align: justify;
}

.points {
  list-style-type: disc;
  text-align: justify;
  margin: 0 20px 0 20px;
}

.about__img img {
  width: 200px;
  margin: 0 auto;
  border-radius: 10px;
}

.video {
  margin: 0 auto;
  margin-top: 30px;
}

.video video {
  width: 270px;
  height: 480px;
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
  font-size: 12px;
  resize: vertical;
}

.comment-section button {
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .about__container {
    margin: 30px;
  }

  .video video {
    width: 300px;
  }

  .comment-section textarea {
    font-size: 15px;
  }

  .comment-section button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
  }
}

@media screen and (min-width: 1024px) {
  .about__container {
    margin: 100px;
  }

  .video video {
    width: 320px;
  }
}
</style>

<template>
  <div>
    <LogOutHeader></LogOutHeader>
    <section class="about section" id="about">
      <h2 class="section-title">Pancakes</h2>
      <div class="about__container bd-grid">
        <div class="about__img">
          <img :src="require('/public/assets/pancake.jpeg')" alt="pancakes">
        </div>
        <div>
          <p class="about__text">
            Dégustez des pancakes moelleux et délicieux pour le petit déjeuner ou le brunch. Ces pancakes faciles à faire sont parfaits pour toute la famille. Ajoutez du sirop d'érable, des fruits frais ou tout autre garniture que vous aimez.
          </p>
        </div>

        <h3>Ingrédients</h3>
        <div>
          <ul class="points">
            <li>1 tasse de farine</li>
            <li>2 cuillères à soupe de sucre</li>
            <li>1 cuillère à soupe de poudre à lever</li>
            <li>1/2 cuillère à café de sel</li>
            <li>3/4 tasse de lait</li>
            <li>1 œuf</li>
            <li>2 cuillères à soupe de beurre fondu</li>
            <li>1 cuillère à café d'extrait de vanille</li>
          </ul>
        </div>

        <h3>Instructions</h3>
        <div>
          <ul class="points">
            <li>Dans un grand bol, mélangez la farine, le sucre, la poudre à lever et le sel.</li>
            <li>Ajoutez le lait, l'œuf, le beurre fondu et l'extrait de vanille au mélange sec.</li>
            <li>Mélangez jusqu'à ce que la pâte soit homogène. Assurez-vous de ne pas trop mélanger, quelques grumeaux sont acceptables.</li>
            <li>Chauffez une poêle à feu moyen et graissez légèrement avec du beurre ou de l'huile.</li>
            <li>Versez environ 1/4 de tasse de pâte dans la poêle pour chaque pancake.</li>
            <li>Cuisez chaque côté du pancake jusqu'à ce qu'il soit doré.</li>
            <li>Retirez les pancakes de la poêle et servez-les chauds avec votre garniture préférée.</li>
            <li>Dégustez vos délicieux pancakes faits maison !</li>
          </ul>
        </div>

        <div class="video">
          <video controls>
            <source src="@/assets/videos_baking/pancakes-bananas.mp4" type="video/mp4">
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

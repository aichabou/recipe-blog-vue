<template>
  <LogOutHeader></LogOutHeader>
  <section class="about section" id="about">
    <h2 class="section-title">Carrot Cake</h2>
    <div class="about__container bd-grid">
      <div class="about__img">
        <img :src="require('/public/assets/carrotcake.jpeg')" alt="carrot cake">
      </div>
      <div>
        <p class="about__text">
          Découvrez le plaisir moelleux et épicé du Carrot Cake. Un gâteau aux carottes incroyablement savoureux, garni d'un glaçage crémeux au fromage à la crème. Une combinaison irrésistible de saveurs pour égayer votre journée !
        </p>
      </div>

      <h3>Ingrédients</h3>
      <div>
        <ul class="points">
          <li>250g de carottes râpées</li>
          <li>200g de farine</li>
          <li>150g de sucre</li>
          <li>100ml d'huile végétale</li>
          <li>3 œufs</li>
          <li>1 cuillère à café de levure chimique</li>
          <li>1 cuillère à café de cannelle en poudre</li>
          <li>1/2 cuillère à café de noix de muscade</li>
          <li>1/2 cuillère à café de sel</li>
          <li>100g de noix hachées (optionnel)</li>
          <li>Pour le glaçage : 200g de fromage à la crème, 50g de beurre, 150g de sucre glace, 1 cuillère à café d'extrait de vanille</li>
        </ul>
      </div>

      <h3>Instructions</h3>
      <br>
      <div>
        <ul class="points">
          <li>Préchauffez votre four à 180°C (thermostat 6) et graissez un moule à gâteau.</li>
          <li>Dans un grand bol, mélangez les carottes râpées, la farine, le sucre, l'huile, les œufs, la levure chimique, la cannelle, la noix de muscade et le sel jusqu'à obtenir une pâte homogène.</li>
          <li>Si vous le souhaitez, ajoutez les noix hachées à la pâte et mélangez délicatement.</li>
          <li>Versez la pâte dans le moule préparé et étalez-la uniformément.</li>
          <li>Enfournez le moule dans le four préchauffé et faites cuire le gâteau pendant environ 30-35 minutes, ou jusqu'à ce qu'un cure-dent inséré au centre en ressorte propre.</li>
          <li>Laissez le gâteau refroidir complètement sur une grille.</li>
          <li>Pendant ce temps, préparez le glaçage en fouettant le fromage à la crème ramolli avec le beurre, le sucre glace et l'extrait de vanille jusqu'à obtenir une consistance crémeuse.</li>
          <li>Une fois le gâteau refroidi, étalez le glaçage sur le dessus du gâteau.</li>
          <li>Décorez le Carrot Cake avec des morceaux de noix ou des décorations de votre choix.</li>
          <li>Dégustez votre délicieux Carrot Cake fait maison !</li>
        </ul>
      </div>

      <div class="video">
        <video controls>
          <source src="@/assets/videos_baking/carrot-cake.mp4" type="video/mp4">
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

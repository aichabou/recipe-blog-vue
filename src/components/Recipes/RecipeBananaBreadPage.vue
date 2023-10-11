<template>
  <LogOutHeader></LogOutHeader>
  <section class="about section" id="about">
    <h2 class="section-title">Banana Bread</h2>
    <div class="about__container bd-grid">
      <div class="about__img">
        <img :src="require('/public/assets/bananabread.jpeg')" alt="banana bread">
      </div>
      <div>
        <p class="about__text">
          Dégustez la douceur moelleuse du Banana Bread. Ce pain aux bananes est le moyen parfait de réutiliser les bananes trop mûres. Garni de morceaux de banane fondants et d'une touche de cannelle, c'est un régal pour les papilles à tout moment de la journée !
        </p>
      </div>

      <h3>Ingrédients</h3>
      <div>
        <ul class="points">
          <li>3 bananes très mûres</li>
          <li>200g de farine</li>
          <li>150g de sucre</li>
          <li>1 œuf</li>
          <li>1/2 tasse (120ml) d'huile végétale</li>
          <li>1 cuillère à café de levure chimique</li>
          <li>1/2 cuillère à café de bicarbonate de soude</li>
          <li>1/2 cuillère à café de sel</li>
          <li>1 cuillère à café d'extrait de vanille</li>
          <li>1 cuillère à café de cannelle en poudre</li>
          <li>1/2 tasse (120ml) de yaourt nature</li>
          <li>1/2 tasse (60g) de noix hachées (optionnel)</li>
        </ul>
      </div>

      <h3>Instructions</h3>
      <br>
      <div>
        <ul class="points">
          <li>Préchauffez votre four à 180°C (thermostat 6) et graissez un moule à cake.</li>
          <li>Écrasez les bananes dans un grand bol à l'aide d'une fourchette jusqu'à obtenir une purée lisse.</li>
          <li>Ajoutez le sucre, l'œuf, l'huile végétale, le yaourt et l'extrait de vanille à la purée de banane. Mélangez bien.</li>
          <li>Dans un autre bol, mélangez la farine, la levure chimique, le bicarbonate de soude, le sel et la cannelle en poudre.</li>
          <li>Ajoutez les ingrédients secs au mélange de banane et mélangez jusqu'à obtenir une pâte homogène.</li>
          <li>Si vous le souhaitez, ajoutez les noix hachées à la pâte et mélangez délicatement.</li>
          <li>Versez la pâte dans le moule préparé et étalez-la uniformément.</li>
          <li>Enfournez le moule dans le four préchauffé et faites cuire le Banana Bread pendant environ 60-70 minutes, ou jusqu'à ce qu'un cure-dent inséré au centre en ressorte propre.</li>
          <li>Laissez le Banana Bread refroidir dans le moule pendant 10 minutes, puis transférez-le sur une grille pour qu'il refroidisse complètement.</li>
          <li>Découpez en tranches et savourez votre délicieux Banana Bread fait maison !</li>
        </ul>
      </div>

      <div class="video">
        <video controls>
          <source src="@/assets/videos_baking/banana-bread.mp4" type="video/mp4">
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

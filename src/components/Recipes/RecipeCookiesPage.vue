<template>
  <div>
    <LogOutHeader></LogOutHeader>
    <section class="about section" id="about">
      <h2 class="section-title">Cookies</h2>
      <div class="about__container bd-grid">
        <div class="about__img">
          <img :src="require('/public/assets/cookies.jpeg')" alt="cookies">
        </div>
        <div>
          <p class="about__text">
            Plongez dans le bonheur avec nos cookies aux pépites de chocolat ! Ces cookies moelleux à l'intérieur et légèrement croustillants à l'extérieur sont remplis de généreuses pépites de chocolat. Une explosion de saveurs chocolatées dans chaque bouchée ! 
          </p>
        </div>
        <h3>Ingrédients</h3>
        <div>
          <ul class="points">
            <li>200g de beurre ramolli</li>
            <li>150g de sucre blanc</li>
            <li>200g de sucre brun</li>
            <li>2 œufs</li>
            <li>1 cuillère à café d'extrait de vanille</li>
            <li>375g de farine</li>
            <li>1/2 cuillère à café de levure chimique</li>
            <li>1/2 cuillère à café de sel</li>
            <li>300g de pépites de chocolat</li>
            <li>150g de noix hachées (optionnel)</li>
          </ul>
        </div>

        <h3>Instructions</h3>
        <br>
        <div>
          <ul class="points">
            <li>Préchauffez votre four à 180°C (thermostat 6) et tapissez une plaque à pâtisserie de papier sulfurisé.</li>
            <li>Dans un grand bol, battez le beurre ramolli, le sucre blanc et le sucre brun jusqu'à obtenir un mélange crémeux.</li>
            <li>Ajoutez les œufs un par un, en battant bien après chaque ajout. Ajoutez ensuite l'extrait de vanille et mélangez.</li>
            <li>Dans un autre bol, mélangez la farine, la levure chimique et le sel.</li>
            <li>Incorporez progressivement les ingrédients secs dans le mélange de beurre et mélangez jusqu'à obtenir une pâte homogène.</li>
            <li>Ajoutez les pépites de chocolat (et les noix hachées, si vous le souhaitez) à la pâte et mélangez jusqu'à ce qu'elles soient réparties uniformément.</li>
            <li>À l'aide d'une cuillère à biscuits, déposez des portions de pâte sur la plaque à pâtisserie, en les espaçant d'environ 5 cm.</li>
            <li>Enfournez la plaque dans le four préchauffé et faites cuire les cookies pendant 10-12 minutes, ou jusqu'à ce que les bords soient légèrement dorés.</li>
            <li>Laissez les cookies refroidir sur la plaque pendant 5 minutes, puis transférez-les sur une grille pour qu'ils refroidissent complètement.</li>
            <li>Dégustez vos délicieux cookies aux pépites de chocolat faits maison !</li>
          </ul>
        </div>

        <div class="video">
          <video controls>
            <source src="@/assets/videos_baking/banana-bread-cookies.mp4" type="video/mp4">
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

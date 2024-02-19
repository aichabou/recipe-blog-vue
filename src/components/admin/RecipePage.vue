<template>
  <Header></Header>
  <div>
    <h1>{{ recette.titre }}</h1>
    <img :src="'/uploads/images/' + recette.image" :alt="recette.titre" width="200" height="150" v-if="recette.image" />
    <ul>
      <h3>Les ingrédients</h3>
      <li>{{ recette.ingredients }}</li>
    </ul>
    <h3>Les instructions</h3>
    <p>{{ recette.instructions }}</p>
    <div>
      <router-link :to="{ name: 'app_recette_update', params: { recette: recette.id } }">Modifier la recette</router-link>
    </div>
    <div>
      <button @click="deleteRecette">Supprimer la recette</button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      recette: {},
    };
  },
  mounted() {
    axios.get('/recette/find/{titre}')
      .then(response => {
        this.recette = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la recette', error);
      });
  },
  methods: {
    deleteRecette() {
      axios.delete(`/recette/delete/{recette}`)
        .then(() => {
          console.log('Recette supprimée avec succès');
          // Rediriger vers une autre page après la suppression
          this.$router.push('/admin/home');
        })
        .catch(error => {
          console.error('Erreur lors de la suppression de la recette', error);
        });
    },
  },
};
</script>

<style>
.section-title {
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

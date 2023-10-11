<template>
    <div>
      <LogOutHeader></LogOutHeader>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }} - {{ user.email }}
          <button @click="makeAdmin()">Promouvoir Admin</button>
<button @click="userDelete()">Supprimer</button>

        </li>
      </ul>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import LogOutHeader from '@/components/Header/LogOutHeader.vue';
import Footer from '@/components/Footer/Footer.vue';
  
  export default {
    components: {
    LogOutHeader,
    Footer,
  },
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.getAllUsers();
    },
    methods: {
   getAllUsers() {
     axios.get('http://localhost:8080/getAllUsers')
       .then(response => {
         this.users = response.data;
       })
       .catch(error => {
         console.error('Erreur lors de la récupération des utilisateurs :', error);
       });
   },
   makeAdmin() {
  axios.put('http://localhost:8080/makeAdmin')
    .then(response => {
      console.log('Utilisateur promu admin avec succès:', response.data.message);
      this.getAllUsers();
    })
    .catch(error => {
      console.error('Erreur lors de la promotion de l\'utilisateur admin :', error);
    });
},
userDelete() {
  axios.delete('http://localhost:8080/userDelete')
    .then(response => {
      console.log('Utilisateur supprimé avec succès:', response.data.message);
      this.getAllUsers();
    })
    .catch(error => {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    });
},

},
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant */
  </style>
  
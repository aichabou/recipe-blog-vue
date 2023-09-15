<template>
  <div class="admin-page">
    <!-- Container 1 - Informations sur le client -->
    <div class="info-container">
      <div class="client-info">
        <h2 class="num-client text">N° de client : 97721</h2>
        <hr class="client-info-divider" />
        <img class="profile-image" src="/assets/aicha.png" alt="Client Image" />
        <table class="info-table">
          <tbody>
            <tr>
              <td>Civilité</td>
              <td class="color-text">:</td>
              <td class="color-text">Mademoiselle</td>
            </tr>
            <tr>
              <td>Prénom</td>
              <td class="color-text">:</td>
              <td class="color-text">Aicha</td>
            </tr>
            <tr>
              <td>Nom</td>
              <td class="color-text">:</td>
              <td class="color-text">Bouchaikh</td>
            </tr>
            <tr>
              <td>Téléphone Mobile</td>
              <td class="color-text">:</td>
              <td class="color-text">06 01 02 99 88</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td class="color-text">:</td>
              <td class="color-text">aicha.bouchaikh@gmail.com</td>
            </tr>
            <tr>
              <td>Ville</td>
              <td class="color-text">:</td>
              <td class="color-text">Lille</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Container 2 - Compétences et langues -->
    <div class="container skills-languages-container">
      <h2 class="title">Compétences</h2>
      <ul class="skills-list">
        <li class="text color-text">Droit Fiscal</li>
        <li class="text color-text">Prix de transfert</li>
        <!-- Ajoutez plus de compétences ici -->
      </ul>
      <h2 class="title">Langues</h2>
      <ul class="languages-list">
        <li class="text color-text"><font-awesome-icon :icon="['fas', 'flag-fr']" /> Français</li>
        <li class="text color-text"><font-awesome-icon :icon="['fas', 'flag-gb']" /> Anglais</li>
        <li class="text color-text"><font-awesome-icon :icon="['fas', 'flag-es']" /> Espagnol</li>
      </ul>
    </div>

    <div class="container law-firm-container">
      <h2 class="text">Cabinet d'avocat: BC Avocat Associés</h2>
      <hr class="client-info-divider" />
      <img class="bc-image" src="/assets/bc.png" alt="Client Image" />
      <a href="#" class="text color-text">Voir la page</a>
    </div>

    <div class="container">
      <!-- Container 4 - Biographie et Container 5 - Distinctions -->
      <div class="bio-distinct-container">
        <div class="biography-container">
          <h2 class="title">Biographie</h2>
          <p class="text color-text">Réputé pour son expertise en matière de fiscalité internationale et de prix de transfert, Cyril Maucour accompagne les sociétés
            françaises dans leurs opérations à l’international et assiste les groupes étrangers dans le cadre de leurs activités en France.</p>
          <p class="text color-text">Il intervient notamment dans la structuration et la documentation de leurs opérations transfrontalières.
            Cyril conseille des multinationales mais aussi des PME et ETI.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="distinctions-container">
        <h2 class="title">Distinctions</h2>
        <table>
          <thead>
            <tr>
              <th class="title-tab">Titre</th>
              <th class="title-tab">Année</th>
            </tr>
          </thead>
          <tbody>
            <tr class="even text">
              <td>Best Lawyers 2022 – Tax Law</td>
              <td>2022</td>
            </tr>
            <tr class="odd text">
              <td>Magazine Le Point 2021 – Droit fiscal – 4 étoiles</td>
              <td>2021</td>
            </tr>
            <tr class="even text">
              <td>World Tax 2020 – Tax Law – Tier 5</td>
              <td>2021</td>
            </tr>
            <tr class="odd text">
              <td>Décideurs 2020 – Gestion du patrimoine – Fiscalité du
                patrimoine – Band 4</td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.container {
  flex: 1;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.info-container {
  display: flex;
  align-items: center;
  width: 250px; /* Largeur fixe de 300 pixels */
  height: 300px; /* Hauteur fixe de 300 pixels */
  margin: 10px;
  padding-top: 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.client-info-divider {
  border-top: 1px solid #BDC2CA; /* Couleur grise */
  width: 100%; /* La ligne s'étend sur toute la largeur du conteneur */
  margin-top: 10px; /* Marge au-dessus de la ligne */
  margin-bottom: 10px; /* Marge en dessous de la ligne */
}
.color-text{
  color:#BDC2CA;
}
img {
  max-width: 100px;
  max-height: 100px;
  margin-right: 20px;
}
.profile-image {
  display: block;
  margin: 0 auto;
  max-width: 70px;
  max-height: 70px;
  margin-bottom: 20px; /* Ajoute un espace en dessous de l'image */
}
.bc-image{
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 10px; 
}

td{
  font-size: 12px;
  color: #153C65,
}

.info-pair {
  margin-bottom: 10px; /* Ajoute un espace entre chaque paire "terme - valeur" */
}

.info-pair dd {
  color: #333; /* Couleur de texte */
  margin-left: 5px; /* Ajoute de l'espace à gauche de chaque valeur */
}

.info-pair dt {
  font-weight: bold; /* Met en gras le terme (Civilité, Prénom, etc.) */
  margin-bottom: 5px; /* Ajoute de l'espace en dessous de chaque terme */
}

.info-table td:first-child {
  padding-right: 50px; /* Ajoute un espacement à droite de la première colonne */
}

.info-inline {
  display: flex;
  align-items: center;
}

.info-inline dt {
  margin-right: 10px; /* Ajoute de l'espace à droite de chaque terme */
  font-weight: bold;
}

.info-inline dd {
  color: #333; /* Couleur de texte */
}

.info-pair dd:last-child {
  margin-left: 0; /* Supprime la marge à gauche du dernier élément 'dd' */
}

.num-client {
  font-size: 14px; /* Taille de police plus petite */
  color:#BDC2CA; /* Couleur de texte #98A0AD */
  text-align: center; /* Centre le texte horizontalement */
}

.distinctions-container table {
  list-style-type: none;
  padding: 0;
}


.skills-languages-container {
  border: 3px solid #153C65; /* Bordure bleue */
  border-radius: 10px; /* Rayon de bordure de 20 pixels */
  margin-right: 40px;
  height: 180px;
}

.skills-list {
  padding: 0; /* Supprimer le remplissage par défaut de la liste */
  display: flex; /* Utiliser flexbox pour afficher les éléments en ligne */
  flex-wrap:nowrap; /* Permettre le retour à la ligne automatique si nécessaire */
  justify-content: space-between;
  gap: 10px;
}

.languages-list {
  list-style: none; /* Supprimer les puces de la liste */
  padding: 0; /* Supprimer le remplissage par défaut de la liste */
  flex-wrap: wrap; /* Permettre le retour à la ligne automatique si nécessaire */
   /* Espacement de 10 pixels entre les éléments (ajustez la valeur selon vos besoins) */
}

.languages-list i {
  font-size: 24px; /* Taille de l'icône (ajustez la taille selon vos besoins) */
  margin-right: 5px; /* Espacement entre l'icône et le texte */
}

.law-firm-container {
  width: 30px; /* Largeur fixe de 200 pixels */
  height:150px; /* Hauteur fixe de 150 pixels */
  background-color: #153C65; /* Fond bleu */
  color: white; /* Texte blanc */
  text-align: center; /* Centre le texte horizontalement */
  display: flex;
  flex-direction: column;
  padding: 20px; /* Ajoute un padding de 20 pixels à l'intérieur du conteneur */
  border-radius: 10px; /* Rayon de bordure de 5 pixels */
}

.law-firm-container a {
  color: white; /* Couleur du lien en blanc */
  text-decoration: none; /* Supprime le soulignement du lien */
}


.law-firm-container a {
  text-decoration: underline; /* Ajoute un soulignement au survol du lien */
}
.bio-distinct-container {
  display: flex;
  justify-content: space-between;
  width: 700px; /* Largeur fixe de 200 pixels */
  height:150px;

}

.biography-container,
.distinctions-container {
  flex: 1;
  margin-top: 0;
}
.text{
  font-size: 12px;
}

.title-tab{
  font-size: 14px;
}

.title{
  font-size: 12px;
  color:#153C65
}

.distinctions-container th {
  background-color: #c0e2f0; /* Couleur de fond bleu clair */
  text-align: left; /* Alignement du texte vers la gauche */
  padding: 10px; /* Espacement intérieur */
}
.distinctions-container td {
  padding: 8px; /* Ajoutez le padding souhaité ici */
}
/* Appliquer un fond différent aux lignes paires et impaires */
.distinctions-container tr.even {
  background-color: #fff; 
 /* Fond blanc pour les lignes paires */
 
}

.distinctions-container tr.odd {
  background-color: #f2f2f2; /* Fond gris pour les lignes impaires */
}
</style>

<template>
  <div class="admin-page">
    <div class="info-container">
      <div class="client-info">
        <h2 class="num-client text">N° de client : 97721</h2>
        <hr class="client-info-divider" />
        <img class="profile-image" src="/assets/aicha.png" alt="Client Image" />
        <table class="info-table">
          <tbody>
            <tr>
              <td class="td">Civilité</td>
              <td class="color-text">:</td>
              <td class="color-text">Mademoiselle</td>
            </tr>
            <tr>
              <td class="td">Prénom</td>
              <td class="color-text">:</td>
              <td class="color-text">Aicha</td>
            </tr>
            <tr>
              <td class="td">Nom</td>
              <td class="color-text">:</td>
              <td class="color-text">Bouchaikh</td>
            </tr>
            <tr>
              <td class="td">Téléphone Mobile</td>
              <td class="color-text">:</td>
              <td class="color-text">06 01 02 99 88</td>
            </tr>
            <tr>
              <td class="td">E-mail</td>
              <td class="color-text">:</td>
              <td class="color-text">aicha.bouchaikh@gmail.com</td>
            </tr>
            <tr>
              <td class="td">Ville</td>
              <td class="color-text">:</td>
              <td class="color-text">Lille</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container skills-languages-container">
      <h2 class="title">Compétences</h2>
      <ul class="skills-list">
        <li class="color-text">Droit Fiscal</li>
        <li class="color-text">Prix de transfert</li>
      </ul>
      <h2 class="title">Langues</h2>
      <ul class="languages-list">
        <li>
          <img src="/assets/france.png" alt="French Flag" style="width: 10px; height: 10px;" />
          <span class="color-text">Français</span>
        </li>
        <li>
          <img src="/assets/uk.png" alt="British Flag" style="width: 10px; height: 10px;" />
          <span class="color-text">Anglais</span>
        </li>
        <li>
          <img src="/assets/espagne.png" alt="Spanish Flag" style="width: 10px; height: 10px;" />
          <span class="color-text">Espagnol</span>
        </li>
      </ul>
    </div>

    <div class="container law-firm-container">
      <h2 class="size-text">Cabinet d'avocat: BC Avocat Associés</h2>
      <hr class="client-info-divider" />
      <img class="bc-image" src="/assets/bc.png" alt="Client Image" />
      <a href="#" class="text color-text">Voir la page</a>
    </div>

    <div class="container">
      <div class="bio-distinct-container">
        <div class="biography-container">
          <h2 class="title">Biographie</h2>
          <p class="color-text">Réputé pour son expertise en matière de fiscalité internationale et de prix de transfert, Cyril Maucour accompagne les sociétés françaises dans leurs opérations à l’international et assiste les groupes étrangers dans le cadre de leurs activités en France.</p>
          <p class="color-text">Il intervient notamment dans la structuration et la documentation de leurs opérations transfrontalières. Cyril conseille des multinationales mais aussi des PME et ETI.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="distinctions-container">
        <h2 class="title">Distinctions</h2>
        <table>
          <thead>
            <tr>
              <th class="title">Titre</th>
              <th class="title">Année</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="color-text">Best Lawyers 2022 – Tax Law</td>
              <td class="color-text">2022</td>
            </tr>
            <tr class="odd text">
              <td class="color-text">Magazine Le Point 2021 – Droit fiscal – 4 étoiles</td>
              <td class="color-text">2021</td>
            </tr>
            <tr>
              <td class="color-text">World Tax 2020 – Tax Law – Tier 5</td>
              <td class="color-text">2021</td>
            </tr>
            <tr class="odd text">
              <td class="color-text">Décideurs 2020 – Gestion du patrimoine – Fiscalité du patrimoine – Band 4</td>
              <td class="color-text">2020</td>
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
  width: 250px;
  height: 250px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.client-info-divider {
  border-top: 1px solid #BDC2CA;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.color-text {
  color: #BDC2CA;
  font-size: 12px;
}

.size-text {
  font-size: 12px;
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
  margin-bottom: 20px;
}

.bc-image {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 10px;
}

.td {
  font-size: 12px;
  color: #153C65;
}

.info-pair {
  margin-bottom: 10px;
}

.info-pair dd {
  color: #333;
  margin-left: 5px;
}

.info-pair dt {
  font-weight: bold;
  margin-bottom: 5px;
}

.info-table td:first-child {
  padding-right: 50px;
}

.info-pair dd:last-child {
  margin-left: 0;
}

.num-client {
  font-size: 14px;
  color: #BDC2CA;
  text-align: center;
}

.distinctions-container table {
  list-style-type: none;
  padding: 0;
}

.skills-languages-container {
  border: 3px solid #153C65;
  border-radius: 10px;
  margin-right: 40px;
  height: 180px;
}

.skills-list {
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
}

.languages-list {
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
}

.languages-list i {
  font-size: 24px;
  margin-right: 5px;
}

.law-firm-container {
  width: 30px;
  height: 150px;
  background-color: #153C65;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
}

.law-firm-container a {
  color: white;
  text-decoration: none;
}

.law-firm-container a {
  text-decoration: underline;
}

.bio-distinct-container {
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 150px;
}

.biography-container,
.distinctions-container {
  flex: 1;
  margin-top: 0;
}

.title {
  font-size: 14px;
  color: #153C65;
}

.distinctions-container th {
  background-color: #c0e2f0;
  text-align: left;
  padding: 10px;
}

.distinctions-container td {
  padding: 8px;
}

.distinctions-container tr.odd {
  background-color: #f2f2f2;
}
</style>

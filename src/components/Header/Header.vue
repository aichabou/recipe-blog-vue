<template>
    <header class="l-header">
      <nav class="nav bd-grid">
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <img :src="require('@/assets/image/logo.png')" alt="Logo du blog" class="logo">
            <li class="nav__item"><a href="/welcome" class="nav__link">Accueil</a></li>
            <li class="nav__item"><a href="/login" class="nav__link">Connexion</a></li>
            <li class="nav__item"><a href="/register" class="nav__link">Créer un compte</a></li>
          </ul>
        </div>
        <div class="nav__toggle" id="nav-toggle">
          <i class='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>

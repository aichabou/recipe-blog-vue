<template>
  <div>
    <Header></Header>
    <main class="l-main">
      <section class="home bd-grid" id="home">
        <div class="home__data">
          <h1 class="home__title">
            Bienvenue à <span class="home__title-color">Aicha's sweetthoth</span>
            Mon Blog personnel de pâtisserie
          </h1>
        </div>
        <div class="home__img">
          <img :src="require('@/assets/image/profil_blog.png')" alt="photo de profil" />
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.home__title {
  font-size: var(--h2-font-size);
  margin-top: 50px;
  text-align: center;
}

.home__title-color {
  color: var(--first-color);
}

.home__img {
  width: 35%;
  margin: 1rem auto;
  display: block;
  margin-top: 90px;
  animation: glide 2s ease-in-out alternate infinite;
  -webkit-animation: glide 2s ease-in-out alternate infinite;
}

.bd-grid{
    margin: 0 auto;
  }

@keyframes glide {
  from {
    left: 0px;
    top: 0px;
  }
  to {
    left: 0px;
    top: 20px;
  }
}

@-webkit-keyframes glide {
  from {
    left: 0px;
    top: 0px;
  }
  to {
    left: 0px;
    top: 20px;
  }
}

@media screen and (min-width: 768px) {

  .home__title {
    margin-bottom: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .home__img {
  width: 30%;
  }
  .bd-grid{
    margin: 0 auto;
  }
}

@media screen and (min-width: 1440px) {
  .home__title {
    font-size:3.7rem;
    margin-bottom: 6rem;
    text-align: center;
  }

  .bd-grid{
    margin: 0 auto;
  }
}

@media screen and (min-width: 2560px) {
  .home__title {
    font-size:5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>

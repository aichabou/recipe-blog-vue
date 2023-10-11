<template>
  <div>
    <Header></Header>
    <main class="l-main">
      <section class="home bd-grid" id="home">
        <div class="home__data">
          <h1 class="home__title">
            Bienvenue<br />
            à <span class="home__title-color">Aicha's sweetthoth</span
            ><br />
            Mon Blog personnel <br />de pâtisserie
          </h1>
        </div>
        <div class="home__img">
          <img
            :src="require('@/assets/image/profil_blog.png')"
            alt="photo de profil"
          />
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
.home {
  height: 100vh;
  row-gap: 1rem;
}

.home__title {
  font-size: var(--big-font-size);
  margin-bottom: 500px;
}

.home__title-color {
  color: var(--first-color);
}

.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  margin-top: 60px;
  margin-left: 180px;
  animation: glide 2s ease-in-out alternate infinite;
  -webkit-animation: glide 2s ease-in-out alternate infinite;
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
  .home {
    height: calc(100vh - 3rem);
  }

  .home__title {
    font-size: var(--h2-font-size);
    margin-bottom: 350px;
  }

  .home__img {
    width: 200px;
    margin-top: 100px;
    margin-left: 400px;
  }
}

@media screen and (min-width: 1024px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }

  .home__title {
    font-size: var(--big-font-size);
    margin-bottom: 100px;
  }

  .home__img {
    width: 350px;
    margin-top: 100px;
    margin-left: 850px;
  }
}
</style>

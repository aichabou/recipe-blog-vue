<template>
  <div>
    <Header></Header>
    <!-- MAIN CONTENT -->
    <main class="l-main">
      <!--===== HOME =====-->
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
  height: calc(100vh - 3rem);
  row-gap: 1rem;
}

.home__data {
  align-self: center;
}

.home__title {
  font-size: var(--big-font-size);
  margin-bottom: 100px;
}

.home__title-color {
  color: var(--first-color);
}

.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 250px;
  margin-top: 80px;
  margin-left: 700px;
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

/* ===== MEDIA QUERIES=====*/
@media screen and (max-width: 768px) {
  .home__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 240px;
    margin-top: 50px;
    margin-left: 360px;
    animation: glide 2s ease-in-out alternate infinite;
    -webkit-animation: glide 2s ease-in-out alternate infinite;
  }
}

@media screen and (max-width: 600px) {
  .home__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    margin-top: 120px;
    margin-left: 230px;
    animation: glide 2s ease-in-out alternate infinite;
    -webkit-animation: glide 2s ease-in-out alternate infinite;
  }
}

@media screen and (min-width: 768px) {
  .home {
    height: 100vh;
  }

  .home__data {
    align-self: flex-end;
  }

  .home__img {
    width: 400px;
    bottom: 15%;
  }
}

@media screen and (min-width: 1024px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }

  .home__img {
    margin-left: 750px;
  }
}
</style>

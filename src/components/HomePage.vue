<template>
    <LogOutHeader></LogOutHeader>
    <section class="work-section" id="portfolio">
      <h2 class="section-title">Bienvenue</h2>
      <div class="work-back">
        <div class="work__container bd-grid">
          <div v-for="(project, index) in projects" :key="index" class="work__img">
            <a :href="project.link"><img :src="project.image" alt="recette image"></a>
            <h3>{{ project.title }}</h3>
            <div class="focus-content">
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
</template>
  
  <script>
  import LogOutHeader from '@/components/Header/LogOutHeader.vue';
  import Footer from '@/components/Footer/Footer.vue';
  
  export default {
    components: {
      LogOutHeader,
      Footer,
    },
    data() {
      return {
        projects: [
          {
            title: "Archi Design",
            image: "img/img_sites/archiDesign.PNG",
            link: "sites/archiDesign/index.html",
            description: "HTML / CSS",
          },
          {
            title: "Freshly Restaurant",
            image: "img/img_sites/freshlyResto.PNG",
            link: "sites/freshly_resto/index.html",
            description: "HTML / CSS / JavaScript",
          },
          {
            title: "Freshly Restaurant",
            image: "img/img_sites/freshlyResto.PNG",
            link: "sites/freshly_resto/index.html",
            description: "HTML / CSS / JavaScript",
          },
          {
            title: "Freshly Restaurant",
            image: "img/img_sites/freshlyResto.PNG",
            link: "sites/freshly_resto/index.html",
            description: "HTML / CSS / JavaScript",
          },
          {
            title: "Freshly Restaurant",
            image: "img/img_sites/freshlyResto.PNG",
            link: "sites/freshly_resto/index.html",
            description: "HTML / CSS / JavaScript",
          },
          {
            title: "Freshly Restaurant",
            image: "img/img_sites/freshlyResto.PNG",
            link: "sites/freshly_resto/index.html",
            description: "HTML / CSS / JavaScript",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .work-section {
    padding: var(--mb-4) 0;
    text-align: center;
  }
  
  .work__container {
    row-gap: 2rem;
    padding-top: 70px;
    padding-bottom: 70px;
  }
  
  .work__img {
    width: 300px;
    height: 220px;
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .work__img * {
    transition: 0.3s ease all;
  }
  
  .work__img img {
    margin: 0;
    width: 300px;
    height: 224px;
    object-fit: cover;
    display: block;
  }
  
  .work__img h3 {
    text-align: center;
    margin: 0;
    padding: 12px 12px 48px;
    line-height: 32px;
    font-weight: 500;
    font-size: 20px;
    color: #F6BD60;
  }
  
  .work__img .focus-content {
    display: block;
    padding: 8px 12px;
    color: #84A59D;
  }
  
  .work__img p {
    text-align: center;
    font-size: 15px;
    margin: 0;
    line-height: 1.5;
  }
  
  .work__img:hover img,
  .card:focus-within img {
    margin-top: -80px;
    opacity: 0.3;
  }
  
  .work__img:hover h3,
  .card:focus-within h3 {
    padding: 8px 12px 0;
  }
  
  @media screen and (max-width: 768px) {
    .work__container {
      padding: 0 10px 0 145px;
    }
  }
  
  @media screen and (max-width: 600px) {
    .work__container {
      padding: 0 10px 0 30px;
    }
  }
  </style>
  
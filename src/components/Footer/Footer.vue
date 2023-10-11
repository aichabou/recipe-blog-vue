<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__social">
        <a href="https://www.facebook.com/aicha.bouchaikh.3/" class="footer__icon"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com/aichabouch98" class="footer__icon"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/aicha_sweettooth/" class="footer__icon"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <p class="footer__copyright">© 2023 Aicha's sweettooth. Tous droits réservés.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.footer {
  background-color: var(--first-color);
  color: #fff;
  text-align: center;
  font-weight: var(--font-semi);
}

.footer__social {
  margin-bottom: var(--mb-1);
}

.footer__icon {
  font-size: 1rem;
  color: #fff;
  margin: 0 var(--mb-2);
}

.footer__copyright{
  font-size: 10px;
}

@media screen and (min-width: 768px) {
  .footer__icon {
    font-size: 1.25rem;
  }
  
  .footer__copyright{
    font-size: 12px;
  }
}

@media screen and (min-width: 1024px) {
  .footer__icon {
    font-size: 1.5rem;
  }
  
  .footer__copyright{
    font-size: 15px;
  }
}
</style>

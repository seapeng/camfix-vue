<template>
  <!-- Hero Section -->
  <section id="hero" class="hero section dark-background">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <h1>Camfix</h1>
            <p>
              I'm <span class="typed" id="typedMessage"></span>
            
            </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
          <img src="assets/img/hero-img.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- /Hero Section -->
</template>

<script>
  import Typed from 'typed.js';

  export default {
    mounted() {
      this.typed = new Typed('#typedMessage', {
        strings: ['UI/UX Designer', 'Web Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });
    }
  }
</script>
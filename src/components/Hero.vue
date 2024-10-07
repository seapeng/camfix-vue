<template>
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
              <div class="container" data-aos="fade-up" data-aos-delay="100">
                <h1>Camfix</h1>
                <p>
                  I'm <span class="typed" data-typed-items="UI/UX Designer, Web Developer, Freelancer"></span>
                  <span ref="typedElement"></span>
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
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Typed from 'typed.js';

  export default {
    setup() {
      const typedElement = ref(null);
      let typedInstance = null;

      onMounted(() => {
        // Initialize Typed.js
        typedInstance = new Typed(typedElement.value, {
          strings: ['UI/UX Designer', 'Web Developer', 'Freelancer'],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        });
      });

      onBeforeUnmount(() => {
        // Destroy Typed.js instance when component unmounts
        if (typedInstance) {
          typedInstance.destroy();
        }
      });

      return {
        typedElement,
      };
    },
  };
</script>
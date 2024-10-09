<template>
  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
    <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
    <div>
      <h4 class="title">
        <a href="service-details.html" class="stretched-link">{{ name }}</a>
      </h4>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["name",'description'],
  };
</script>
<template>
  <header id="header" class="header dark-background d-flex flex-column">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="profile-img">
      <img src="assets/img/my-profile-img.jpg" alt="" class="img-fluid rounded-circle">
    </div>

    <a href="index.html" class="logo d-flex align-items-center justify-content-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <h1 class="sitename">Camfix Dev</h1>
    </a>

    <div class="social-links text-center">
      <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
      <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><router-link to="/"><i class="bi bi-house navicon"></i>ទំព័រដើម</router-link></li>
        <li><router-link to="service"><i class="bi bi-hdd-stack navicon"></i> សេវាកម្ម</router-link></li>
        <li><router-link to="about"><i class="bi bi-person navicon"></i> អំពីយើង</router-link></li>
        <li><router-link to="resume"><i class="bi bi-file-earmark-text navicon"></i> ប្រវត្តិ</router-link></li>
        <li><router-link to="portfolio"><i class="bi bi-images navicon"></i> ស្នាដៃ</router-link></li>
        <li><router-link to="contact"><i class="bi bi-envelope navicon"></i> ទំនាក់ទំនង</router-link></li>
      </ul>
    </nav>
  </header>
</template>
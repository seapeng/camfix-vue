<template>
  <header id="header" class="header dark-background d-flex flex-column">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    
    <div class="profile-img">
      <img src="assets/img/my-profile-img.jpg" alt="" class="img-fluid rounded-circle">
    </div>

    <a href="/" class="logo d-flex align-items-center justify-content-center">
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
        <li v-for="(nav, index) in navs" :key="index">
          <router-link :to="nav.path">
            <i class="bi bi-hdd-stack navicon"></i> {{ $t(nav.name) }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="social-links text-center">
      <a href="#" @click="changeLang()" class="twitter">{{this.$i18n.locale == "en"?"KH":"EN"}}</a>
    </div>
    
  </header>
</template>

<script>
  export default {
    data(){
      return{
        navs:[
          {name:"home",path:"./"},
          {name:"services",path:"./services"},
          {name:"about",path:"./about"},
          {name:"resume",path:"./resume"},
          {name:"contact",path:"./contact"},
        ]
      }
    },
    methods:{
      changeLang() {
        this.$i18n.locale == "en"? this.$i18n.locale = "khm": this.$i18n.locale = "en"
      }
    }
  }
</script>
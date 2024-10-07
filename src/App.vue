<template>
  <Header></Header>
  <main class="main">
    <router-view></router-view>
  </main>
  <!-- <Footer></Footer> -->
</template>

<script>
// import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  components:{
    Header,
    // Footer
  }
}
</script>
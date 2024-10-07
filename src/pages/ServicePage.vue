<template>
  <section id="services" class="services section">
    <div class="container section-title" data-aos="fade-up">
      <h2>សេវាកម្ម</h2>
      <p>នាំមកនូវសេវាកម្មជាមួយនឹងបច្ចេកវិទ្យាថ្មីៗសម្រាប់ការអភិវឌ្ឍន៍ប្រព័ន្ធជូនដល់លោកអ្នកប្របកដោយ ប្រសិទ្ធភាព និងសុវត្តិភាព</p>
    </div>

    <div class="container">
      <div class="row gy-4">
        <ReposCard v-for="(repo, index) in repos" :key="index" :name="repo.name" :description="repo.description"></ReposCard>
      </div>
    </div>
  </section>
  
</template>

<script>
  import ReposCard from "@/components/cards/ReposCard.vue";
  import useRepositoryStore from "@/store/repository.js";
  import { mapActions, mapState } from "pinia";
  export default {
  
    components: {
      ReposCard,
    },
    data() {
      return {
        repos: [],
      };
    },
    async created() {
      await this.getAllRepositories();
      console.log(this.repositories);
      this.repos = this.repositories;
    },
    computed: {
      ...mapState(useRepositoryStore, ["repositories"]),
    },
    methods: {
      ...mapActions(useRepositoryStore, ["getAllRepositories"]),
    },
  };
</script>
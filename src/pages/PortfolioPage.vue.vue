<template>
  <p>Hello World</p>
  <div class="row">
    <ReposCard v-for="(repo, index) in repos" :key="index" :title="repo.title" :thumb="repo.thumb"></ReposCard>
  </div>
  
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
  //
  computed: {
    ...mapState(useRepositoryStore, ["repositories"]),
  },
  methods: {
    ...mapActions(useRepositoryStore, ["getAllRepositories"]),
  },
};
</script>
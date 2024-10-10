<template>
  <section id="services" class="services section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ $t('services') }}</h2>
    </div>

    <div class="container">
      <div class="row gy-4">
        <ServiceCard v-for="(serv, index) in servs" :key="index" :icon="serv.icon" :name="serv.name" :description="serv.description"></ServiceCard>
      </div>
    </div>
  </section>
  
</template>

<script>
  import ServiceCard from "@/components/cards/ServiceCard.vue";
  import useServiceStore from "@/store/service.js";
  import { mapActions, mapState } from "pinia";
  export default {
    components: {
      ServiceCard,
    },
    data() {
      return {
        servs: [],
      };
    },
    async created() {
      await this.getAllServices();
      // console.log(this.services);
      this.servs = this.services;
    },
    computed: {
      ...mapState(useServiceStore, ["services"]),
    },
    methods: {
      ...mapActions(useServiceStore, ["getAllServices"]),
      changeLang() {
        this.$i18n.locale == "en"? this.$i18n.locale = "khm": this.$i18n.locale = "en"
      }
    }
  };
</script>
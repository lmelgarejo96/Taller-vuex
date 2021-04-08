<template>
  <div class="container">
    <div class="padd-view">
      <div class="row">
        <div class="d-flex justify-content-end mb-2">
          <small>{{ repositories.length }} repositorios</small>
        </div>
        <div
          v-for="repo in repositories"
          :key="repo.id"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-l-12 mb-3"
        >
          <CardRepo :repository="repo"></CardRepo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardRepo from "@/components/CardRepo";
export default {
  components: {
    CardRepo,
  },
  computed: {
    ...mapGetters({
      repositories: "getRepositories",
    }),
  },
  async created() {
    await this.getRepositories();
  },
  methods: {
    ...mapActions({
      getRepositories: "getAPIGithubRepositories",
    }),
  },
};
</script>

<style lang="scss" scoped></style>

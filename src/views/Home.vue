<template>
  <div class="container">
    <div class="padd-view">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
          <form class="d-flex" v-on:submit.prevent="getGithubUser">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">@</span>
              <input
                type="text"
                v-model="username"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
          <CardUser :user="githubUser"></CardUser>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardUser from "@/components/CardUser";
export default {
  components: {
    CardUser,
  },
  data() {
    return {
      username: "",
    }
  },
  computed: {
    ...mapGetters({
      githubUser: "getUser",
    }),
  },
  methods: { 
    ...mapActions({
      getUser: "getAPIGithubUser"
    }),
    async getGithubUser() {
      if(!this.username) return;
      await this.getUser(this.username.trim());
    }
  }
};
</script>

<style lang="scss" scoped></style>

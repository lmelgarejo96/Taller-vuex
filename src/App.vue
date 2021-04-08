<template>
  <div id="app">
    <Header :user="githubUser"></Header>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      githubUser: "getUser"
    })
  },
  methods: {
    ...mapActions({
      getUser: "getAPIGithubUser"
    })
  },
  async created() {
    await this.getUser();
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  overflow-x: hidden;
}
#app {
  background: rgb(10, 25, 47);
  min-height: 100vh;
  font-family: "Roboto","Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #eff3f8;
  .wrapper {
    padding-top: 60px;
  }
}

.padd-view {
  padding: 1.5em 0;
}
a {
  color: #64ffda;
}
</style>

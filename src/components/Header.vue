<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Taller vuex</router-link>
      <button class="navbar-toggler" type="button" @click="menu = !menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="`navbar-collapse ${ menu ? 'collapse-shown' : 'collapse'}`">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contador">Contador</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              :value="user.username"
              class="form-control"
              disabled
              readonly
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .nav-link.router-link-exact-active {
    color: #93ca3d !important;
  }
}
</style>

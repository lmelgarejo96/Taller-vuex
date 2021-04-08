<template>
  <div class="card-user-wrapper">
    <div v-if="validUser" class="card-user">
      <div class="card-user-image">
        <img draggable="false" :src="user.avatar" :alt="user.fullname" />
      </div>
      <h2 class="card-user-fullname">{{ user.fullname }}</h2>
      <div class="d-flex justify-content-center">
        <a :href="user.githubURL" target="_blank">
          <h4>@{{ user.username }}</h4>
        </a>
      </div>
      <div class="card-user-details d-flex justify-content-center w-100">
        <div v-if="user.location" class="card-user-detail d-flex align-items-center">
          <span class="material-icons-outlined"> location_on </span>
          <div>{{ user.location }}</div>
        </div>
        <div class="card-user-detail d-flex align-items-center">
          <span class="material-icons-outlined"> today </span>
          <div>{{ user.getJoinedDate() }}</div>
        </div>
      </div>
      <div class="row-cards">
        <div class="card-item">
          <h4>{{ user.publicRepos }}</h4>
          <router-link to="/repositorios">
            <span>REPOSITORIOS</span>
          </router-link>
        </div>
        <div class="card-item">
          <h4>{{ user.followers }}</h4>
          <span>SEGUIDORES</span>
        </div>
        <div class="card-item">
          <h4>{{ user.following }}</h4>
          <span>SIGUIENDO</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-danger py-2" role="alert">
        <small>Usuario no encontrado</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  computed: {
    validUser() {
      return Object.keys(this.user).length > 0 ? true : false;
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style lang="scss" scoped>
.card-user-wrapper {
  .card-user {
    background: #112240;
    padding: 1.5em 1em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .card-user-fullname {
      font-weight: 900;
    }
    a {
      text-decoration: none;
      &:hover {
        color: #93ca3d;
        text-decoration: underline;
      }
    }
    .card-user-image {
      margin: 0 0 15px;
      img {
        max-width: 200px;
        border-radius: 50%;
      }
    }
    .card-user-details {
      .card-user-detail {
        margin: 0 15px;
        div {
          margin-left: 10px;
          @media screen and (max-width: 450px) {
              font-size: 13px;
          }
        }
      }
    }
    .row-cards {
      width: 100%;
      display: flex;
      margin-top: 18px;
      .card-item {
        flex: 1;
        padding: 8px;
        background: #24385b;
        border-radius: 3px;
        margin: 0 5px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        h4 {
          font-weight: 600;
        }
        span {
          font-weight: 500;
          font-size: 0.9rem;
          @media screen and (max-width: 450px) {
            font-size: 13px;
          }
          @media screen and (max-width: 360px) {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

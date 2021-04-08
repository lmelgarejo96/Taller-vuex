<template>
  <a :href="repository.repoURL" target="_blank" class="card-repo">
    <div class="card-repo-header">
      <span class="material-icons-outlined repo-folder-icon"> folder </span>
      <span class="material-icons-outlined"> ios_share </span>
    </div>
    <div class="card-repo-body pt-2 pb-2">
      <h5>{{ repository.name }}</h5>
      <p>{{ repository.description }}</p>
    </div>
    <div class="card-repo-footer">
      <small class="language">
        {{ repository.language }}
      </small>
      <small>
        {{ repository.getSize() }}
      </small>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    repository: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-repo {
  display: block;
  background: #112240;
  text-decoration: none;
  padding: 1.5em 1em;
  color: #ccd6f6;
  transition: all ease-in-out 0.2s;
  height: 250px;
  max-height: 250px;
  position: relative;
  &:hover {
    margin-top: -5px;
    .card-repo-body h5,
    .card-repo-header span {
      color: #64ffda;
    }
  }
  .card-repo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .repo-folder-icon {
      font-size: 50px;
      color: #64ffda;
    }
  }
  .card-repo-body {
    overflow-x: hidden;
    h5 {
      overflow: hidden;
      max-width: 100%;
      white-space: pre-wrap;
      text-overflow: ellipsis;
    }
    p {
      color: #a8b2d1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      height: calc(var(3 * 1.6));
      overflow-y: hidden;
      font-size: 0.9rem;
    }
  }
  .card-repo-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .language {
      font-size: 12.5px;
      color: #64ffda;
    }
  }
}
</style>

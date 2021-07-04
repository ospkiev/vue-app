<template>
  <b-container
    id="app"
    fluid
  >
    <router-view></router-view>
    <notifications group="foo" />
  </b-container>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css" scoped>
#app {
  width: 100vw;
}
</style>

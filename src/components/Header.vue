<template>
  <div class="header d-flex align-center justify-space-between px-10">
    <div class="d-flex align-center">
      <h2>OrdersProject</h2>
      <div class="ml-5" v-if="store.isLogged">
        <router-link to="/home">Home</router-link>
        <router-link to="/tables">Tables</router-link>
      </div>
    </div>
    <div>
      <div v-if="store.isLogged">
        <router-link to="/user">
          <v-icon>mdi-account</v-icon>
          {{ store.userName }}</router-link
        >
      </div>
      <div v-else>www.site.com</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store.state,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #395144;
  color: #fff;
  padding: 10px;

  a {
    color: #fff;
    margin-left: 30px;
    text-decoration: none;
  }
}
</style>

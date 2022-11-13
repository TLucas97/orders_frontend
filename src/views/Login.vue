<template>
  <div class="login-wrapper">
    <div class="login d-flex justify-center align-center">
      <div class="d-flex justify-center align-center flex-column">
        <h2 class="mb-8">Login</h2>
        <v-text-field
          filled
          background-color="white"
          label="Username"
          v-model="user"
          rounded
          append-icon="mdi-account"
        />
        <v-text-field
          filled
          background-color="white"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          rounded
        >
          <template v-slot:append>
            <v-icon
              @click="showPassword = !showPassword"
              :color="showPassword ? 'primary' : 'grey'"
              >{{ showPassword ? "mdi-eye" : "mdi-eye-off" }}</v-icon
            >
          </template>
        </v-text-field>
        <v-btn class="text-capitalize" elevation="7" @click="login"
          >Enter</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      store: this.$store.state,
      showPassword: false,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoib2llbiJ9.4_ikUYh6LNUmH-ToYub6SfHBNSigkGjYD4ATRvkilfI",
    };
  },
  mounted() {
    if (this.store.isLogged) this.$router.push("/home");
  },
  methods: {
    login() {
      if (this.user === "admin" && this.password === "admin") {
        this.$store.commit("login");
        this.$store.commit("setJWT", this.token);
        this.$router.push("/home");
        this.$toast.success("Successfully logged in!");
      } else {
        this.$toast.error("Invalid username or password!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  background-color: #4e6c50;
  color: #fff;
  padding: 10px;
  height: 95%;
  width: 100%;

  .login {
    height: 85%;
    width: 30%;
    margin: 0 auto;
  }
}
</style>

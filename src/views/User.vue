<template>
  <div class="user-wrapper d-flex justify-center align-center">
    <div class="user mb-16">
      <div class="d-flex justify-space-between">
        <v-text-field
          solo
          :disabled="!editState"
          background-color="white"
          label="Name"
          v-model="user.name"
          class="mx-3 mt-2"
        />
        <v-text-field
          solo
          :disabled="!editState"
          background-color="white"
          label="Email"
          v-model="user.email"
          class="mx-3 mt-2"
        />
      </div>
      <div class="d-flex justify-space-between">
        <v-text-field
          solo
          :disabled="!editState"
          background-color="white"
          label="CPF"
          v-model="user.cpf"
          class="mx-3 mt-2"
        />
        <v-text-field
          solo
          :disabled="!editState"
          background-color="white"
          label="ID"
          v-model="user.id"
          class="mx-3 mt-2"
        />
      </div>
      <div class="d-flex justify-end">
        <v-btn
          class="mx-1 text-capitalize"
          :color="editState ? 'success' : 'primary'"
          @click="!editState ? (editState = true) : saveUserEditedData()"
          >{{ editState ? "Save" : "Edit" }}</v-btn
        >
        <v-btn
          class="mx-3 white--text text-capitalize"
          color="red"
          @click="dialog = true"
          >Logout</v-btn
        >
      </div>
    </div>
    <v-dialog v-model="dialog" width="450">
      <v-card>
        <v-card-title class="headline d-flex justify-center"
          >Are you sure you want to logout?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="logout">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store.state,
      dialog: false,
      user: {
        name: "Johny doe",
        email: "jdoe@gmail.com",
        cpf: "123.123.123-45",
        id: "d12ad126d5216d21651",
      },
      editState: false,
    };
  },
  mounted() {
    if (!this.store.isLogged) this.$router.push("/");
  },
  methods: {
    saveUserEditedData() {
      // ** API post request to save the new data here **
      this.editState = false;
      this.$toast.success("Successfully saved!");
    },
    logout() {
      this.$toast.success("Successfully logged out!");
      this.$store.commit("logoff");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.user-wrapper {
  background-color: #4e6c50;
  color: #fff;
  padding: 10px;
  height: 95%;
  width: 100%;

  .user {
    background-color: #ffffffc4;
    padding: 40px;
    border-radius: 10px;
    width: 25%;
  }
}
</style>

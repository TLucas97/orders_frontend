<template>
  <div class="tables">
    <v-tabs centered color="success" class="mt-13 tab" background-color="white">
      <v-tab>
        <v-icon left> mdi-domain </v-icon>
        Companies
      </v-tab>
      <v-tab>
        <v-icon left> mdi-homecity </v-icon>
        Fabrics
      </v-tab>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        Clients
      </v-tab>
      <v-tab>
        <v-icon left> mdi-bookmark-outline </v-icon>
        Orders
      </v-tab>
      <v-tab>
        <v-icon left> mdi-access-point </v-icon>
        Enterprises
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <Table1 />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Table2 />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Table3 />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Table4 />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Table5 />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Table1 from "@/components/Tables/Table1";
import Table2 from "@/components/Tables/Table2";
import Table3 from "@/components/Tables/Table3";
import Table4 from "@/components/Tables/Table4";
import Table5 from "@/components/Tables/Table5";

export default {
  data() {
    return {
      store: this.$store.state,
      currentTable: "1",
    };
  },
  components: {
    Table1,
    Table2,
    Table3,
    Table4,
    Table5,
  },
  mounted() {
    if (!this.store.isLogged) this.$router.push("/");
  },
};
</script>

<style lang="scss" scoped>
.tables {
  width: 100%;
  margin: 0 auto;
  background-color: #4e6c50;
  height: 95%;
  position: absolute;
  margin: 0 auto;

  .tab {
    width: 80%;
    margin: 0 auto;
  }
}
</style>

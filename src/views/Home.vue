<template>
  <div class="home d-flex justify-center align-center">
    <div class="mb-16 chart-card d-flex justify-space-between">
      <div class="d-flex flex-column align-center">
        <small class="font-weight-bold">Vendas do mês</small>
        <apexchart
          width="600"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
      <div class="d-flex flex-column align-center">
        <small class="font-weight-bold">Clientes desse mês</small>
        <apexchart
          width="600"
          type="area"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store.state,
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        colors: ["#4e6c50"],
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  mounted() {
    if (!this.store.isLogged) this.$router.push("/");
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 95%;
  background: #4e6c50;

  .chart-card {
    width: 70%;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
  }
}
</style>

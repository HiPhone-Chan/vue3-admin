<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
// https://github.com/ecomfe/vue-echarts
import "echarts";
import VChart from "vue-echarts";

export default {
  name: 'LineChart',
  components: { VChart },
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150],
            type: 'line'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>

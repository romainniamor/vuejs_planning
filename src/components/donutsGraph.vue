<template>
  <div class="card-box">
    <div class="card-box-header">
      <h1>Title</h1>
      <h3>Subtitle</h3>
    </div>
    <div class="card-box-content">
      <div class="donut-box">
        <canvas ref="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const myChart = ref(null)

    onMounted(() => {
      new Chart(myChart.value, {
        type: 'doughnut',
        data: {
          labels: ['stuff1', 'stuff2', 'stuff3'],
          datasets: [
            {
              label: '',
              data: [12, 19, 3],
              borderWidth: 1
            }
          ]
        }
      })
    })

    return {
      myChart
    }
  }
}
</script>

<style>
.donut-box {
  width: 100%;
  height: 100%;
}
</style>

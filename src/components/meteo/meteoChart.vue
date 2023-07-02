<template>
  <div class="card-box graph-temps-container">
    <h3 class="graph-title">Températures</h3>
    <Bar :data="formattedChartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'LineChart',
  components: { Bar },

  props: {
    chartData: {
      type: Object,
      required: true
    }
  },

  computed: {
    formattedChartData() {
      const data = this.chartData.data // données recup par api
      const label = this.chartData.label // données recup par api
      const sum = data.reduce((a, b) => a + b, 0)
      const avr = sum / data.length

      // couleur de fond en fonction de la moyenne
      let bgColor
      if (avr > 25) {
        bgColor = '#EF9A9A'
      } else {
        bgColor = '#90A4AE'
      }

      return {
        labels: label,
        datasets: [
          {
            label: '',
            backgroundColor: bgColor,
            data: data,
            tension: 0.3,
            fill: true
          }
        ]
      }
    },
    chartOptions() {
      const data = this.chartData.data
      const sum = data.reduce((a, b) => a + b, 0)
      const avr = sum / data.length
      console.log(avr)
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        elements: {
          point: {
            radius: 0 // largeur pts
          },
          line: {
            borderWidth: 6, // largeur line
            color: '#546E7A'
          }
        },
        scales: {
          y: {
            display: false,
            ticks: {
              min: avr - 10,
              max: avr + 10,
              stepSize: 50,
              display: true
            },
            grid: {
              display: false
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.graph-temps-container {
  width: 100%;
  height: 350px;
  padding: 30px;
}
</style>

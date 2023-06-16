<template>
  <div class="card-box chart-container">
    <h3 class="graph-title">Températures</h3>
    <div class="chart-box">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

export default {
  name: 'meteoChart',
  components: { Line },
  props: {
    period: {
      type: Array,
      required: true
    },
    temperature: {
      type: Array,
      required: true
    }
  },

  computed: {
    chartData() {
      return {
        labels: this.period.map(this.dayFromPeriod),
        datasets: [
          {
            label: 'Temperature',
            data: this.temperature,
            backgroundColor: '#78909C',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }
        ]
      }
    },
    chartOptions() {
      const data = this.temperature
      const sum = data.reduce((a, b) => a + b, 0)
      const moy = sum / data.length

      const suggestedMin = moy - 10
      const suggestedMax = moy + 10

      return {
        scales: {
          y: {
            display: false,
            suggestedMin: suggestedMin,
            suggestedMax: suggestedMax,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        elements: {
          point: {
            radius: 5
          },
          line: {
            borderWidth: 4
          }
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    }
  },

  methods: {
    dayFromPeriod(period) {
      const today = new Date()
      const dateFromPeriod = new Date()
      dateFromPeriod.setDate(today.getDate() + period)

      const jours_semaine = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

      return jours_semaine[dateFromPeriod.getDay()]
    }
  }
}
</script>

<style>
.chart-container {
  width: 880px;
}
.chart-box {
  width: 100%;
  height: 250px;
}
</style>

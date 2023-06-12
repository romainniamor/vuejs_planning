<template>
  <div class="card-box graph-temps-container">
    <h3 class="graph-title">Températures</h3>

    <div class="donut-box">
      <canvas ref="myChart"></canvas>
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
        type: 'line',
        data: {
          labels: ['lun', 'mar', 'mer', 'jeu', 'vend', 'sam', 'dim'],

          datasets: [
            {
              label: '',
              data: [25, 23, 18, 29, 23, 19, 28],
              fill: true,
              backgroundColor: '#F8BBD0',
              tension: 0.5
            }
          ]
        },

        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 0 // rend les points invisibles
            },
            line: {
              borderWidth: 4 // défini la largeur de la ligne
            }
          },
          scales: {
            y: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 40,
              grid: {
                display: false
              },
              ticks: {
                display: false // cache les données d'échelle sur l'axe des y
              }
            },
            x: {
              grid: {
                display: false // supprime les grilles de l'axe des y
              }
            }
          }
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
.graph-temps-container {
  width: 50%;
}
.donut-box {
  width: 100%;
  height: 100%;
}
</style>

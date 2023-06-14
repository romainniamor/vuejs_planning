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
import { ref, watch, computed, onMounted } from 'vue'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  props: {
    period: Array,
    temperature: Array
  },

  setup(props) {
    // réf de période -> copie de props.period
    const periodRef = ref([...props.period])

    // conversion périod en jour
    const daysFromPeriod = computed(() =>
      periodRef.value.map((period) => {
        if (period === -1) return 'jour non défini.'
        if (period < -1 || period > 7) return 'Période incorrecte'

        const today = new Date()
        const dateFromPeriod = new Date()
        dateFromPeriod.setDate(today.getDate() + period)

        let jours_semaine = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.']

        return jours_semaine[dateFromPeriod.getDay()]
      })
    )
    // Maj de ref de périod lorsque props.period change
    watch(
      () => props.period,
      (newPeriod) => {
        periodRef.value = [...newPeriod]
      },
      { immediate: true }
    )

    // réf du graph
    const myChart = ref(null)

    // Quand le composant est monté alors...
    onMounted(() => {
      const data = props.temperature
      const label = props.period

      // calcule de la moy des données pour def le max et min y et color
      const sum = data.reduce((a, b) => a + b, 0)
      console.log(sum)
      const moy = sum / data.length
      console.log('moy:', moy)

      // couleur de fond en fonction de la moyenne
      let bgColor
      if (moy > 18) {
        bgColor = '#B3E5FC'
      } else {
        bgColor = '#81D4FA'
      }

      // definition du graph
      new Chart(myChart.value, {
        type: 'line',
        data: {
          labels: daysFromPeriod.value,
          datasets: [
            {
              label: label,
              data: data,
              fill: true,
              backgroundColor: bgColor,
              tension: 0.4
            }
          ]
        },
        options: {
          maintainAspectRatio: false, // Désactiver le maintien du ratio d'aspect
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            },
            datalabels: {
              // inscription des data au niv du point
              align: 'end',
              anchor: 'end',
              formatter: function (value, context) {
                return value
              }
            }
          },
          elements: {
            point: {
              radius: 5 // largeur pts
            },
            line: {
              borderWidth: 4 // largeur line
            }
          },
          scales: {
            y: {
              display: false,

              suggestedMin: moy - 10,
              suggestedMax: moy + 10,
              grid: {
                display: false
              },
              ticks: {
                display: false, // cache les données d'échelle  y
                stepSize: 50
              }
            },
            x: {
              grid: {
                display: false // supprime grilles
              }
            }
          }
        },
        plugins: [ChartDataLabels] //plugin necessaire pour remplacer les pts par data correspondante
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
  width: 880px;
}
.donut-box {
  width: 100%;
  height: 250px;
}
</style>

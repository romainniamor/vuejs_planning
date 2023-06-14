<template>
  <div class="container meteo-view">
    <meteoHeroBanner
      :period="weatherData[0].period"
      :temperature="weatherData[0].temperature"
      :rain="weatherData[0].precipitation"
      :humidity="weatherData[0].humidite"
      :weatherStatus="weatherData[0].weatherStatus"
    ></meteoHeroBanner>
    <meteoGraphTemp :period="period" :temperature="temperature"></meteoGraphTemp>
    <div class="cards-display">
      <div v-for="data in this.weatherData">
        <meteoCard
          :period="data.period"
          :weather-status="data.weatherStatus"
          :minTemp="data.minTemp"
          :maxTemp="data.maxTemp"
        ></meteoCard>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import meteoHeroBanner from '../components/meteo/meteoHeroBanner.vue'
import meteoGraphTemp from '../components/meteo/meteoGraphTemp.vue'
import meteoCard from '../components/meteo/meteoCard.vue'

export default defineComponent({
  name: 'meteo',
  components: {
    meteoHeroBanner,
    meteoGraphTemp,
    meteoCard
  },
  setup() {
    const selectedPeriod = ref(null)

    const selectPeriod = (data) => {
      selectedPeriod.value = data
    }

    return {
      selectedPeriod,
      selectPeriod
    }
  },

  data() {
    return {
      weatherData: [
        {
          period: 0,
          temperature: 26,
          maxTemp: 28,
          minTemp: 23,
          vent: 15,
          humidite: 30,
          precipitation: 10,
          weatherStatus: 'ciel dégagé'
        },
        {
          period: 1,
          temperature: 24,
          maxTemp: 25,
          minTemp: 21,
          vent: 10,
          humidite: 28,
          precipitation: 5,
          weatherStatus: 'ciel dégagé'
        },
        {
          period: 2,
          temperature: 20,
          maxTemp: 23,
          minTemp: 18,
          vent: 35,
          humidite: 60,
          precipitation: 40,
          weatherStatus: 'légère pluie'
        },
        {
          period: 3,
          temperature: 25,
          maxTemp: 27,
          minTemp: 18,
          vent: 5,
          humidite: 26,
          precipitation: 17,
          weatherStatus: 'partiellement nuageux'
        },
        {
          period: 4,
          temperature: 24,
          maxTemp: 28,
          minTemp: 23,
          vent: 15,
          humidite: 30,
          precipitation: 50,
          weatherStatus: 'pluie modérée'
        },
        {
          period: 5,
          temperature: 22,
          maxTemp: 24,
          minTemp: 20,
          vent: 17,
          humidite: 20,
          precipitation: 30,
          weatherStatus: 'partiellement nuageux'
        },
        {
          period: 6,
          temperature: 28,
          maxTemp: 29,
          minTemp: 23,
          vent: 12,
          humidite: 10,
          precipitation: 10,
          weatherStatus: 'ciel dégagé'
        }
      ]
    }
  },
  computed: {
    period() {
      return this.weatherData.map((item) => item.period)
    },
    temperature() {
      return this.weatherData.map((item) => item.temperature)
    },
    created() {
      this.selectedPeriod = this.weatherData[0]
    }
  }
})
</script>

<style>
.meteo-view {
  background-color: #fce4ec;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cards-display {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;

  width: 880px;
  justify-content: center;
}
</style>

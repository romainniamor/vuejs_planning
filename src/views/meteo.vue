<template>
  <main class="container meteo-view">
    <v-form class="city-search">
      <v-text-field
        density="compact"
        label="Your City"
        type="text"
        variant="outlined"
        v-model="searchQuery"
        @input="getSearchResults"
      ></v-text-field>
      <ul v-if="mapBoxSearchResults" class="search-wrapper">
        <li v-if="searchError">Un problème est survenu. Réessayez ultérieurement</li>
        <li v-if="mapBoxSearchResults.length === 0">Aucun résultat</li>
        <template v-else>
          <li
            v-for="searchResult in mapBoxSearchResults"
            :key="searchResult.id"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </v-form>
    <div class="meteo-component-wrapper" v-if="weatherData">
      <br />
      <MeteoHeroBanner
        :temperature="weatherData.current.temp"
        :pressure="weatherData.current.pressure"
        :weather-status="weatherData.current.weather[0].description"
        :wind="weatherData.current.wind_speed"
        :humidity="weatherData.current.humidity"
        :icon="weatherData.current.weather[0].icon"
        :city="city"
        :day="dayDate"
        :time="dayTime"
      >
      </MeteoHeroBanner>
      <br />
      <MeteoChart
        :chartData="{
          data: hourlyTemp,
          label: hourlyHours
        }"
      ></MeteoChart>
      <br />
      <div class="meteo-cards-wrapper">
        <DailyMeteoCard
          v-for="(day, index) in weatherData.daily.slice(1)"
          :key="day"
          :dayDate="daysDate[index]"
          :min-temp="day.temp.min"
          :max-temp="day.temp.max"
          :icon="day.weather[0].icon"
        ></DailyMeteoCard>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MeteoHeroBanner from '../components/meteo/meteoHeroBanner.vue'
import DailyMeteoCard from '../components/meteo/meteoCard.vue'
import MeteoChart from '../components/meteo/meteoChart.vue'

const mapBoxApiKey = ''

const searchQuery = ref('')
const queryTimeout = ref(null)
const searchError = ref(null)

const mapBoxSearchResults = ref(null)
const weatherData = ref(null)
const city = ref('')

const dayDate = ref('')
const dayTime = ref('')
const daysDate = ref('')
const dayHourly = ref('')
const hourlyTemp = ref('')
const hourlyHours = ref([])

// Recherche de la ville avec l'API Mapbox
const getSearchResults = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== '') {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapBoxApiKey}&types=place`
        )
        mapBoxSearchResults.value = result.data.features
        console.log(mapBoxSearchResults.value)
      } catch (error) {
        searchError.value = true
      }
      return
    }
    mapBoxSearchResults.value = null
  }, 300)
}

const previewCity = (searchResult) => {
  // Récupération du nom de la ville et de la région
  city.value = searchResult.text
  // Récupération des coordonnées géographiques pour l'API OpenWeatherMap
  const cityLat = searchResult.geometry.coordinates[1]
  const cityLong = searchResult.geometry.coordinates[0]

  getWeatherData(cityLat, cityLong)
  searchQuery.value = ''
  mapBoxSearchResults.value = null
}

const getWeatherData = async (cityLat, cityLong) => {
  hourlyHours.value = [] // liste maj
  try {
    console
    const weatherMapApiKey = ''
    const res = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLong}&exclude={part}&lang=fr&units=metric&appid=`
    )

    console.log('api', res.data)

    //calcul heure locale
    const localOffset = new Date().getTimezoneOffset() * 60000
    const utc = res.data.current.dt * 1000 + localOffset
    res.data.currentTime = utc + 1000 * res.data.timezone_offset

    dayDate.value = new Date(res.data.currentTime).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long'
    })

    dayTime.value = new Date(res.data.currentTime).toLocaleTimeString('fr-FR', {
      timeStyle: 'short'
    })

    daysDate.value = res.data.daily.slice(1).map((day) => {
      const date = new Date(day.dt * 1000)

      return date.toLocaleDateString('fr-FR', { weekday: 'short' })
    })

    res.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset
      hour.currentTime = utc + 1000 * res.data.timezone_offset
      const localHour = new Date(hour.currentTime).toLocaleTimeString('fr-FR', {
        timeStyle: 'short'
      })
      hourlyHours.value.push(localHour) // On ajoute l'heure locale au tableau des heures pour forunir les label du chart
    })

    hourlyTemp.value = res.data.hourly.map((hour) => Math.round(hour.temp))
    console.log('temp', hourlyTemp.value)

    weatherData.value = res.data
  } catch (error) {
    console.log(error)
  }
}
</script>

<style>
.meteo-view {
  display: flex;
  flex-direction: column;

  width: 1000px;
}

.city-search {
  position: relative;
}

.search-wrapper {
  position: absolute;
  left: 0;
  top: 42px;
  width: 100%;
  padding: 10px;
  color: #b0b0b0;
  height: auto;
  list-style: none;
  background-color: rgba(45, 45, 45);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
}

.search-wrapper li {
  cursor: pointer;
}

.meteo-cards-wrapper {
  width: 100%;

  display: flex;
  justify-content: space-between;
}
</style>

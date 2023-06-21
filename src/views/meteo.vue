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
      <MeteoHeroBanner
        :temperature="weatherData.current.temp"
        :pressure="weatherData.current.pressure"
        :weather-status="weatherData.current.weather[0].description"
        :wind="weatherData.current.wind_speed"
        :humidity="weatherData.current.humidity"
        :icon="weatherData.current.weather[0].icon"
        :city="city"
      >
      </MeteoHeroBanner>
      <div class="meteo-card-wrapper">
        <DailyMeteoCard
          v-for="(day, index) in weatherData.daily.slice(1, 8)"
          :key="day"
          :period="index"
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

const mapBoxApiKey =
  ''

const searchQuery = ref('')
const queryTimeout = ref(null)
const searchError = ref(null)

const mapBoxSearchResults = ref(null)
const weatherData = ref(null)
const city = ref('')

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
  }, 500)
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
  try {
    console
    const weatherMapApiKey = 'f'
    const res = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLong}&exclude={part}&lang=fr&units=metric&appid=`
    )
    weatherData.value = res.data
    console.log('dataApi:', weatherData.value)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style>
.meteo-view {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
</style>

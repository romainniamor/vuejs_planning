<template>
  <div class="card-box hero-banner-card">
    <div class="left-col">
      <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" />
      <div class="temp">{{ Math.round(temperature) }}</div>
      <div class="meteo-data">
        <li>Pression: {{ Math.round(pressure) }}hPa</li>
        <li>Humidité: {{ Math.round(humidity) }}%</li>
        <li>Vent: {{ Math.round(wind) }}km/h</li>
      </div>
    </div>
    <div class="right-col">
      <h4 class="title">{{ city }}</h4>
      <p class="day-today">{{ dayDate }}</p>
      <p class="meteo-status">{{ weatherStatus }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import soleil from '../../assets/logoMeteo/soleil.svg'
import soleilNuage from '../../assets/logoMeteo/soleil-nuage.svg'
import nuageux from '../../assets/logoMeteo/nuageux.svg'
import pluie from '../../assets/logoMeteo/pluie.svg'
import couvert from '../../assets/logoMeteo/couvert.svg'
import brume from '../../assets/logoMeteo/brume.svg'

export default defineComponent({
  name: 'MeteoHeroBanner',
  props: {
    period: Number,
    temperature: Number,
    wind: Number,
    humidity: Number,
    pressure: Number,
    weatherStatus: String,
    city: String,
    country: String,
    icon: String
  },
  data() {
    return {
      soleil,
      soleilNuage,
      nuageux,
      pluie,
      couvert,
      brume,
      STATUT_API_NUAGEUX: 'nuageux',
      STATUT_API_PEU_NUAGEUX: 'peu nuageux',
      STATUT_API_PARTIELLEMENT_NUAGEUX: 'partiellement nuageux',
      STATUT_API_CIEL_DEGAGE: 'ciel dégagé',
      STATUT_API_LEGERE_PLUIE: 'légère pluie',
      STATUT_API_LEGERE_COUVERT: 'couvert',
      STATUT_API_BRUME: 'brume',
      STATUT_API_PLUIE_MODEREE: 'pluie modérée',
      STATUT_API_FORTE_PLUIE: 'forte pluie'
    }
  },
  computed: {
    dayDate() {
      let d = new Date()
      let months = [
        'Janvier',
        'Fevrier',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre'
      ]
      let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      let day = days[d.getDay()]
      let date = d.getDate()
      let month = months[d.getMonth()]
      let hour = d.getHours()
      hour = hour < 10 ? '0' + hour : hour
      hour = hour + ':' + '00'

      return `${day} ${date} ${month} ${hour}`
    }
  }
})
</script>

<style>
.temp {
  font-size: 4em;
  position: relative;
}

.temp::after {
  content: '°C';
  position: absolute;
  top: 17px;
  right: -15px;
  font-size: 18px;
  font-weight: 600;
}

img {
  width: 90px;
}

.meteo-data {
  list-style: none;
  padding-left: 23px;
  line-height: normal;
  font-size: 1em;
  font-weight: 600;
  color: #7a7a7a;
}
</style>

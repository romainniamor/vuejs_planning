<template>
  <div class="card-box hero-banner-card">
    <div class="left-col">
      <img v-if="this.weatherStatus === this.STATUT_API_NUAGEUX" :src="nuageux" />
      <img v-if="this.weatherStatus === this.STATUT_API_PEU_NUAGEUX" :src="nuageux" />
      <img v-if="this.weatherStatus === this.STATUT_API_PARTIELLEMENT_NUAGEUX" :src="soleilNuage" />
      <img v-if="this.weatherStatus === this.STATUT_API_CIEL_DEGAGE" :src="soleil" />
      <img v-if="this.weatherStatus === this.STATUT_API_LEGERE_PLUIE" :src="pluie" />
      <img v-if="this.weatherStatus === this.STATUT_API_LEGERE_COUVERT" :src="couvert" />
      <img v-if="this.weatherStatus === this.STATUT_API_FORTE_PLUIE" :src="pluie" />
      <img v-if="this.weatherStatus === this.STATUT_API_PLUIE_MODEREE" :src="pluie" />
      <img v-if="this.weatherStatus === this.STATUT_API_BRUME" :src="brume" />
      <div class="temp">{{ this.temperature }}</div>
      <div class="meteo-data">
        <li>Precipitations: {{ this.rain }}%</li>
        <li>Humidité: {{ this.humidity }}%</li>
        <li>Vent: {{ this.wind }}km/h</li>
      </div>
    </div>
    <div class="right-col">
      <h4 class="title">Météo</h4>
      <p class="day-today">{{ this.dayFromPeriod }} {{ this.updatedTime }}</p>
      <p class="meteo-status">{{ this.weatherStatus }}</p>
    </div>
  </div>
</template>

<script>
import soleil from '../../assets/logoMeteo/soleil.svg'
import soleilNuage from '../../assets/logoMeteo/soleil-nuage.svg'
import nuageux from '../../assets/logoMeteo/nuageux.svg'
import pluie from '../../assets/logoMeteo/pluie.svg'
import couvert from '../../assets/logoMeteo/couvert.svg'
import brume from '../../assets/logoMeteo/brume.svg'

export default {
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
  props: {
    period: Number,
    temperature: Number,
    wind: Number,
    humidity: Number,
    rain: Number,
    weatherStatus: String
  },
  computed: {
    dayFromPeriod() {
      if (this.period === -1) return 'jour non défini.'
      if (this.period < -1 || this.period > 7) return 'Période incorrecte'

      //on obtient la date en fonction de la période (J+1, J+2 etc...)
      const today = new Date()
      const dateFromPeriod = new Date()
      dateFromPeriod.setDate(today.getDate() + this.period)

      //on construit le tableau des jours de la semaine pour obtenir
      //la chaine de caractère à retourner
      let jours_semaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

      return jours_semaine[dateFromPeriod.getDay()]
    },
    roundMaxTemp() {
      return parseFloat(this.maxTemp).toFixed(0)
    },
    roundMinTemp() {
      return parseFloat(this.minTemp).toFixed(0)
    },
    updatedTime() {
      const time = new Date()
      let hour = time.getHours()

      // Ajouter un zéro devant les chiffres inférieurs à 10
      hour = hour < 10 ? '0' + hour : hour

      return hour + ':' + '00'
    }
  }
}
</script>

<style>
.temp {
  font-size: 3em;
  position: relative;
}

.temp::after {
  content: '°C';
  position: absolute;
  top: 13px;
  right: -15px;
  font-size: 18px;
  font-weight: 600;
}

img {
  width: 80px;
}

.meteo-data {
  list-style: none;
  padding-left: 23px;
  line-height: normal;
  font-size: 0.7em;
  font-weight: 600;
  color: #7a7a7a;
}
</style>

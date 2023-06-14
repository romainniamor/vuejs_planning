<template>
  <div class="card-box meteo-card" :class="{ 'selected-card': isSelected }" @click="selectPeriod">
    <div class="day">{{ this.dayFromPeriod }}</div>
    <img v-if="this.weatherStatus === this.STATUT_API_NUAGEUX" :src="nuageux" />
    <img v-if="this.weatherStatus === this.STATUT_API_PEU_NUAGEUX" :src="nuageux" />
    <img v-if="this.weatherStatus === this.STATUT_API_PARTIELLEMENT_NUAGEUX" :src="soleilNuage" />
    <img v-if="this.weatherStatus === this.STATUT_API_CIEL_DEGAGE" :src="soleil" />
    <img v-if="this.weatherStatus === this.STATUT_API_LEGERE_PLUIE" :src="pluie" />
    <img v-if="this.weatherStatus === this.STATUT_API_LEGERE_COUVERT" :src="couvert" />
    <img v-if="this.weatherStatus === this.STATUT_API_FORTE_PLUIE" :src="pluie" />
    <img v-if="this.weatherStatus === this.STATUT_API_PLUIE_MODEREE" :src="pluie" />
    <img v-if="this.weatherStatus === this.STATUT_API_BRUME" :src="brume" />

    <div class="temps">
      <div class="max">{{ this.roundMaxTemp }}°</div>
      <div class="min">{{ this.roundMinTemp }}°</div>
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
    maxTemp: Number,
    minTemp: Number,
    weatherStatus: String,
    selectedPeriod: Number
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
      let jours_semaine = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.']

      return jours_semaine[dateFromPeriod.getDay()]
    },
    roundMaxTemp() {
      return parseFloat(this.maxTemp).toFixed(0)
    },
    roundMinTemp() {
      return parseFloat(this.minTemp).toFixed(0)
    },
    isSelected() {
      return this.period === this.selectedPeriod
    }
  },
  methods: {
    selectPeriod() {
      this.$emit('select', this.period)
    }
  }
}
</script>

<style>
.meteo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 150px;
  font-size: 14px;
  cursor: pointer;
}

.day {
  font-weight: 700;
}

.temps {
  display: flex;
  gap: 20px;
}

.max {
  font-weight: 500;
}

.min {
  color: #7a7a7a;
}
</style>

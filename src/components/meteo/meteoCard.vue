<template>
  <div class="card-box meteo-card">
    <div class="day">{{ dayDate }}</div>
    <img :src="`https://openweathermap.org/img/wn/${this.icon}@2x.png`" />
    <div class="temps">
      <div class="max">{{ Math.round(maxTemp) }}°</div>
      <div class="min">{{ Math.round(minTemp) }}°</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    maxTemp: Number,
    minTemp: Number,
    weatherStatus: String,
    icon: String,
    dayDate: String
  },
  computed: {
    dayFromPeriod() {
      if (this.period === -1) return 'jour non défini.'
      if (this.period < -1 || this.period > 7) return 'Période incorrecte'

      //on obtient la date en fonction de la période (J+1, J+2 etc...)
      const today = new Date()
      const dateFromPeriod = new Date()
      // je rajoute 1 à la periode car pour l'usage de l api meteo je veux à partir de demain.
      dateFromPeriod.setDate(today.getDate() + this.period + 1)

      //on construit le tableau des jours de la semaine pour obtenir
      //la chaine de caractère à retourner
      let jours_semaine = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.']

      return jours_semaine[dateFromPeriod.getDay()]
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

<template>
  <div class="card-box hero-banner-meteo">
    <div class="left-col">
      <img :src="soleil" alt="" />
      <div class="temp">21</div>
      <div class="meteo-data">
        <li>Precipitations: 24%</li>
        <li>Humidité: 50%</li>
        <li>Vent: 15km/h</li>
      </div>
    </div>
    <div class="right-col">
      <h4 class="title">Météo</h4>
      <p class="day-today">lundi 20:00</p>
      <p class="meteo-status">Ensoleillé</p>
    </div>
  </div>
</template>

<script>
import soleil from '../../assets/logoMeteo/soleil.svg'
import soleilNuage from '../../assets/logoMeteo/soleil-nuage.svg'

export default {
  data() {
    return {
      soleil,
      soleilNuage
    }
  }
}
</script>

<style>
.hero-banner-meteo {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-col {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.temp {
  font-size: 3em;
  position: relative;
}

.temp::after {
  content: '°C';
  position: absolute;
  top: 13px;
  right: -10px;
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

.right-col {
  direction: rtl;
}

.col-right,
.title {
  font-weight: 700;
  font-size: 2.2em;
}

.col-right,
p {
  font-weight: 500;
  color: #7a7a7a;
  line-height: normal;
}
</style>

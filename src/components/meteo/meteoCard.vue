<template>
  <div class="card-box meteo-card">
    <div class="day">lun.</div>
    <img :src="soleil" alt="" />
    <div class="temps">
      <div class="max">26°</div>
      <div class="min">18°</div>
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
.meteo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  height: 170px;
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

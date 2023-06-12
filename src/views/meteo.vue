<template>
  <div class="container meteo-view">
    <meteoHeroBanner></meteoHeroBanner>
    <meteoGraphTemp></meteoGraphTemp>
    <meteoCard></meteoCard>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import meteoHeroBanner from '../components/meteo/meteoHeroBanner.vue'
import meteoGraphTemp from '../components/meteo/meteoGraphTemp.vue'
import meteoCard from '../components/meteo/meteoCard.vue'

export default defineComponent({
  name: 'meteo',
  components: {
    meteoHeroBanner,
    meteoGraphTemp,
    meteoCard
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
</style>

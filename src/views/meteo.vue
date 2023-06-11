<template>
  <div class="container meteo-view">
    <h1>Météo</h1>
    <donutsGraph></donutsGraph>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'meteo',
  components: {}
})
</script>

<style>
.meteo-view {
  background-color: #fffde7;
}
</style>

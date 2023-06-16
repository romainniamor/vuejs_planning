<template>
  <div class="container home-view">
    <h1>Dasboard</h1>
    <donutsGraph></donutsGraph>
  </div>
</template>

<style>
.home-view {
  background: transparent;
}
</style>

<script>
import { defineComponent } from 'vue'
import donutsGraph from '../components/donutsGraph.vue'

export default defineComponent({
  name: 'home',
  components: {
    donutsGraph
  }
})
</script>

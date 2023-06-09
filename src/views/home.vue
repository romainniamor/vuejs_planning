<template>
  <v-container d-flex class="ma-6">
    <AllTasks></AllTasks>

    <Calendar></Calendar>

    <NextTask></NextTask>

    <ActivityLevel></ActivityLevel>
    <EventsGraph></EventsGraph>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import EventsGraph from '../components/week-activity.vue'
import Calendar from '../components/calendar.vue'
import NextTask from '../components/next-task.vue'
import ActivityLevel from '../components/activity-level.vue'
import AllTasks from '../components/allTasks.vue'

export default defineComponent({
  name: 'home',
  components: {
    EventsGraph,
    Calendar,
    NextTask,
    ActivityLevel,
    AllTasks
  }
})
</script>

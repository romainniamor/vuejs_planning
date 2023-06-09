<template>
  <v-card max-width="448" class="rounded-lg bg-grey-darken-4 pa-5">
    <v-layout>
      <v-app-bar elevation="0" class="bg-grey-darken-4">
        <v-app-bar-title>Prochaine Tâche</v-app-bar-title>
        <v-btn color="light-blue-lighten-3" size="small" variant="tonal" class="mr-2">{{
          items[0].date
        }}</v-btn>
        <v-btn color="light-blue-darken-3" size="small" variant="tonal">{{ items[0].hour }}</v-btn>
      </v-app-bar>
      <v-main>
        <v-row>
          <v-col>
            <v-list-item>
              <v-list-item-subtitle> {{ items[0].description }} </v-list-item-subtitle>
            </v-list-item>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      items: [
        {
          date: '01/07/2023',
          hour: '11h00',
          description: 'coaching commun'
        }
      ]
    }
  }
}
</script>

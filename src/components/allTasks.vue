<template>
  <v-card max-width="448" class="rounded-lg bg-grey-darken-4">
    <v-layout>
      <v-app-bar elevation="0" class="bg-grey-darken-4">
        <v-app-bar-title>Mes Tâches</v-app-bar-title>
        <v-btn color="light-blue-lighten-3" size="small" variant="text"> This Week </v-btn>
        <v-btn color="light-blue-lighten-1" size="small" variant="tonal"> This Month </v-btn>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="item in items" cols="12">
              <v-list-item>
                <template v-slot:default>
                  <v-list-item-title> {{ item.name }} </v-list-item-title>
                  <v-list-item-subtitle> {{ item.date }} à {{ item.hour }} </v-list-item-subtitle>
                </template>
              </v-list-item>
              <v-divider class="border-opacity-20"></v-divider>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          date: '01/07/2023',
          hour: '09h45',
          name: 'rdv pour ...'
        },
        {
          date: '03/07/2023',
          hour: '13h30',
          name: 'appeler ...'
        },
        {
          date: '04/07/2023',
          hour: '13h30',
          name: 'rdv avec M...'
        },
        {
          date: '05/08/2023',
          hour: '19h45',
          name: 'soirée ...'
        },
        {
          date: '05/09/2023',
          hour: '13h00',
          name: 'dejeuner avec ...'
        },
        {
          date: '01/09/2023',
          hour: '09h45',
          name: 'rdv dentiste'
        },
        {
          date: '06/07/2023',
          hour: '06h00',
          name: 'vacances'
        },
        {
          date: '08/07/2023',
          hour: '12h00',
          name: 'dejeuner avec ...'
        },
        {
          date: '19/05/2023',
          hour: '09h45',
          name: 'rdv medecin'
        }
      ]
    }
  }
}
</script>

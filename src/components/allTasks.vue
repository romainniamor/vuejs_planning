<template>
  <v-card max-width="448" class="overflow-y-auto rounded-lg bg-grey-darken-4">
    <v-layout>
      <v-app-bar sticky elevation="0" class="bg-grey-darken-4">
        <v-app-bar-title>Mes Tâches</v-app-bar-title>
        <v-btn color="light-blue-lighten-1" size="small" variant="tonal" class="mr-2">
          This Month
        </v-btn>
        <v-btn color="light-blue-lighten-3" size="small" variant="text"> This Week </v-btn>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-table
            v-scroll.self="onScroll"
            height="400"
            fixed-header
            density="compact"
            theme="dark"
            hover
          >
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>{{ item.date }}</td>
                <td>{{ item.hour }}</td>
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </v-table>
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
        },
        {
          date: '06/07/2023',
          hour: '06h00',
          name: 'vacances'
        },
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
        }
      ]
    }
  }
}
</script>

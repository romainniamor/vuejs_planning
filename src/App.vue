<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" nav app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Planning</v-list-item-title>
          <v-list-item-subtitle>MENU</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list nav color="info">
        <template v-for="item in items">
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
            :to="item.to"
          ></v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="bg-grey-lighten-4 text-center d-flex flex-column" app>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 bg-info"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          value: 'dashboard',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'Planning',
          value: 'planning',
          to: '/planning'
        }
        // plus de selection
      ]
    }
  }
}
</script>

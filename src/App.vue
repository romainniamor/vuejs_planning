<template>
  <v-app id="inspire" app :theme="dark ? 'dark' : 'light'">
    <v-app-bar elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
      <v-btn icon @click="toggleDarkMode">
        <v-icon>{{ dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer width="200" floating v-model="drawer" app>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="dashboard"
          to="/"
          link
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-calendar"
          title="Planning"
          value="planning"
          to="/planning"
          link
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Contacts"
          value="contacts"
          to="/contacts"
          link
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-weather-cloudy"
          title="Météo"
          value="meteo"
          to="/meteo"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <v-row justify="center" no-gutters height="1">
        <v-btn
          v-for="link in links"
          :key="link.text"
          :href="link.url"
          variant="text"
          class="mx-2"
          link
          :target="link.external ? '_blank' : '_self'"
        >
          {{ link.name }}
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: true,
    dark: true,
    links: [
      { name: 'home', url: '/' },
      { name: 'about me', url: '/mon portfolio' },
      { name: 'github', url: 'https://github.com/romainniamor', external: true },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/romain-navoret-559480274/',
        external: true
      }
    ]
  }),
  methods: {
    toggleDarkMode() {
      this.dark = !this.dark
    }
  }
}
</script>

<style>
@import './assets/base.css';
</style>

<template>
  <v-app class="bg-grey-darken-3">
    <v-navigation-drawer expand-on-hover rail app permanent class="bg-grey-darken-4">
      <v-list>
        <v-list-item prepend-icon="mdi-account" title="user" subtitle="user@user.com"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav app>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="dashboard"
          to="/"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

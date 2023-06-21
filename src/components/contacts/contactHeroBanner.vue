<template>
  <div class="card-box hero-banner-card">
    <div class="left-col">
      <v-btn variant="tonal"> + Add Contact </v-btn>
    </div>
    <div class="right-col">
      <h4 class="title">Contacts</h4>
      <p class="day-today">(20)</p>
      <v-form class="contact-search">
        <v-text-field
          v-model="search"
          density="compact"
          label="Contact"
          type="text"
          variant="outlined"
          clearable
          clear-icon="mdi-close-circle"
          @click:clear="clearMessage"
        >
        </v-text-field>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: ''
  }),

  methods: {
    clearMessage() {
      this.search = ''
    }
  }
}
</script>

<style>
.hero-banner-card {
  width: 100%;
}

.contact-search {
  padding: 10px 0;
  width: 200px;
}
</style>

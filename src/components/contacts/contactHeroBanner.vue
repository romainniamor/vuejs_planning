<template>
  <div class="card-box hero-banner-card">
    <div class="left-col">
      <v-btn variant="tonal" @click="toContactForm"> + Add Contact </v-btn>
    </div>
    <div class="right-col">
      <h4 class="title">Contacts</h4>
      <p class="lenght-contacts">({{ lenghtContact }})</p>
      <v-form class="contact-search">
        <v-text-field
          v-model="search"
          density="compact"
          label="Contact"
          type="text"
          variant="outlined"
          clearable
          hide-details="auto"
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
    search: '',
    model: 'Leider'
  }),

  props: {
    lenghtContact: Number
  },

  methods: {
    clearMessage() {
      this.search = ''
    },
    toContactForm() {
      this.$router.push({ name: 'add_contact' })
      console.log('bouton add contact clicked')
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

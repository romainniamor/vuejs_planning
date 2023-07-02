<template>
  <div class="container contact-view">
    <contactHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import contactHeader from '../components/contacts/contactsHeader.vue'

export default defineComponent({
  name: 'contacts',
  components: {
    contactHeader
  }
})
</script>

<style>
.contact-view {
  width: 100%;
}
</style>

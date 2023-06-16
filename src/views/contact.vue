<template>
  <div class="container contact-view">
    <contactBanner></contactBanner>
    <contactHeader></contactHeader>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import contactBanner from '../components/contacts/contactHeroBanner.vue'
import contactHeader from '../components/contacts/contactsHeader.vue'

export default defineComponent({
  name: 'contact',
  components: {
    contactBanner,
    contactHeader
  }
})
</script>

<style>
.contact-view {
  width: 100%;
}
</style>

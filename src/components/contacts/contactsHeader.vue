<template>
  <ContactBanner :lenghtContact="contacts.length" />
  <div class="card-contact-header">
    <br />

    <div v-for="contact in sortedContacts" class="card-box">
      <ContactList
        :cat="contact.cat"
        :firstName="contact.firstName"
        :lastName="contact.lastName"
        :mail="contact.mail"
        :tel="contact.tel"
      ></ContactList>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContactList from './contactsList.vue'
import ContactBanner from './contactHeroBanner.vue'

export default defineComponent({
  name: 'contactHeader',
  components: {
    ContactList,
    ContactBanner
  },
  data() {
    return {
      contacts: [
        {
          cat: 'pro',
          firstName: 'Nikola',
          lastName: 'Jokic',
          mail: 'joker@mail.com',
          tel: 'XXXXXXXXXX'
        },

        {
          cat: 'fam',
          firstName: 'Jamal',
          lastName: 'Murray',
          mail: 'jm@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          cat: '',
          firstName: 'Jimmy',
          lastName: 'Butler',
          mail: 'jimmyB@mail.us',
          tel: 'XXXXXXXXXX'
        },
        {
          cat: 'pro',
          firstName: 'Lebron',
          lastName: 'James',
          mail: 'king@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          cat: 'fam',
          firstName: 'Allen',
          lastName: 'Iverson',
          mail: 'answer@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          cat: 'fam',
          firstName: 'Chris',
          lastName: 'Webber',
          mail: 'webb@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          cat: 'perso',
          firstName: 'Ja',
          lastName: 'Morant',
          mail: 'jam@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          cat: 'pro',
          firstName: 'Luca',
          lastName: 'Doncic',
          mail: 'ldoncic@mail.com',
          tel: 'XXXXXXXXXX'
        }
      ]
    }
  },
  computed: {
    // fonction calculée pour trier les contacts par ordre alphabetique
    sortedContacts() {
      return this.contacts.slice().sort((a, b) => {
        const firstNameA = a.firstName.toLowerCase()
        const firstNameB = b.firstName.toLowerCase()
        if (firstNameA < firstNameB) {
          return -1
        }
        if (firstNameA > firstNameB) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {}
})
</script>

<style>
.card-contact-header {
  width: 100%;
}
</style>

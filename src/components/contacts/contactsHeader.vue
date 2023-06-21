<template>
  <div class="card-contact-header">
    <br />

    <div v-for="contact in contacts" class="card-box">
      <contactList
        :firstName="contact.firstName"
        :lastName="contact.lastName"
        :mail="contact.mail"
        :tel="contact.tel"
      ></contactList>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import contactList from './contactsList.vue'
import contactForm from './contactForm.vue'
import ContactForm from './contactForm.vue'

export default defineComponent({
  name: 'contactHeader',
  components: {
    contactForm,
    contactList,
    ContactForm
  },
  data() {
    return {
      contacts: [
        {
          img: '',
          firstName: 'Nikola',
          lastName: 'Jokic',
          mail: 'joker@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          img: '',
          firstName: 'Elena',
          lastName: 'Sanchez',
          mail: 'elena@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          img: '',
          firstName: 'Jamal',
          lastName: 'Murray',
          mail: 'jm@mail.com',
          tel: 'XXXXXXXXXX'
        },
        {
          img: '',
          firstName: 'Pierre',
          lastName: 'Martin',
          mail: 'pmartin@mail.fr',
          tel: 'XXXXXXXXXX'
        },
        {
          img: '',
          firstName: 'Lebron',
          lastName: 'James',
          mail: 'mariaAl@mail.ch',
          tel: 'XXXXXXXXXX'
        },
        {
          img: '',
          firstName: 'Allen',
          lastName: 'Iverson',
          mail: 'answer@mail.ch',
          tel: 'XXXXXXXXXX'
        },
        {
          img: '',
          firstName: 'Chris',
          lastName: 'Webber',
          mail: 'webb@mail.ch',
          tel: 'XXXXXXXXXX'
        }
      ]
    }
  }
})
</script>

<style>
.card-contact-header {
  width: 100%;
}
</style>

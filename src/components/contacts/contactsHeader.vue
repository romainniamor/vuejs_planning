<template>
  <div v-for="contact in contacts" class="card-box card-contact-header">
    <contactList
      :firstName="contact.firstName"
      :lastName="contact.lastName"
      :mail="contact.mail"
      :tel="contact.tel"
    ></contactList>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import contactList from './contactsList.vue'
import contactForm from './contactForm.vue'

export default defineComponent({
  name: 'contactHeader',
  components: {
    contactForm,
    contactList
  },
  data() {
    return {
      contacts: [
        {
          img: '',
          firstName: 'John',
          lastName: 'Doe',
          mail: 'jd@mail.com',
          tel: '03XXXXXXXX'
        },
        {
          img: '',
          firstName: 'Elena',
          lastName: 'Sanchez',
          mail: 'elena@mail.com',
          tel: '03XXXXXXXX'
        },
        {
          img: '',
          firstName: 'Mike',
          lastName: 'Simpson',
          mail: 'jd@mail.com',
          tel: '03XXXXXXXX'
        },
        {
          img: '',
          firstName: 'Pierre',
          lastName: 'Martin',
          mail: 'pmartin@mail.fr',
          tel: '06XXXXXXXX'
        },
        {
          img: '',
          firstName: 'Lebron',
          lastName: 'James',
          mail: 'mariaAl@mail.ch',
          tel: '03XXXXXXXX'
        },
        {
          img: '',
          firstName: 'Allen',
          lastName: 'Iverson',
          mail: 'mariaAl@mail.ch',
          tel: '03XXXXXXXX'
        },
        {
          img: '',
          firstName: 'Chris',
          lastName: 'Webber',
          mail: 'mariaAl@mail.ch',
          tel: '03XXXXXXXX'
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

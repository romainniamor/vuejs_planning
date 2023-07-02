<template>
  <div class="list-item">
    <div class="content">
      <v-btn
        class="mx-3 font-weight-bold"
        :color="getButtonColor(cat)"
        size="large"
        icon="mdi-account-outline"
        @click="getContactInfo()"
        >{{ getButtonContent(firstName) }}</v-btn
      >

      <div class="name element">
        <p class="first-name">{{ firstName }}</p>
        <p class="last-name">{{ lastName }}</p>
      </div>
      <div class="contact">
        <p class="mail element">{{ mail }}</p>
        <p class="phone element">{{ tel }}</p>
      </div>
    </div>
    <div class="action-btns">
      <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-delete-outline"></v-btn>
        </template>

        <v-card>
          <v-card-text> Are you sure you want to delete this contact? </v-card-text>
          <v-card-actions>
            <v-btn variant="tonal" @click="dialog = false">Cancel </v-btn>
            <v-btn variant="tonal" @click="">Validate </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn icon="mdi-pencil-outline"></v-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'listItem',
  data() {
    return {
      dialog: false
    }
  },
  props: {
    firstName: String,
    lastName: String,
    mail: String,
    tel: String,
    cat: String
  },
  methods: {
    //def de la couleur de l icone en fonction de la categorie du contact
    getButtonColor(cat) {
      if (cat === 'pro') {
        return '#3949AB'
      } else if (cat === 'fam') {
        return '#7C4DFF'
      } else if (cat === 'perso') {
        return '#EF9A9A'
      } else {
        return '#4CAF50'
      }
    },

    // affichage de la premiere lettre du prenom dans l icone
    getButtonContent(firstName) {
      return firstName[0]
    },

    // push vers template contact_card
    getContactInfo() {
      const contactInfo = {
        contactI: this.firstName[0],
        firstName: this.firstName,
        lastName: this.lastName,
        mail: this.mail,
        tel: this.tel,
        color: this.getButtonColor(this.cat)
      }

      console.log(contactInfo.firstName, contactInfo.lastName)

      this.$router.push({ name: 'contactCard', query: contactInfo })
    }
  }
})
</script>

<style>
.list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.img-profile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: green;
  margin-right: 15px;
}

.content {
  display: flex;
  width: 90%;
}

.element {
  width: 300px;
  overflow-x: scroll;
  align-items: center;
  display: flex;
}

.contact {
  gap: 15px;
  display: flex;
}

.name {
  display: flex;
  gap: 5px;
  text-align: left;
}

.action-btns {
  display: flex;
  gap: 15px;
}
</style>

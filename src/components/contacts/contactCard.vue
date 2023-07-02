<template>
  <div class="card-box contact-card">
    <v-btn class="edit-contact-btn" variant="tonal" icon="mdi-pencil-outline"></v-btn>
    <div class="contact-info-title">
      <div class="contact-i" :style="{ backgroundColor: contactInfo.color }">
        {{ contactInfo.contactI }}
      </div>
      <div class="contact-info-content">
        <p class="contact-card-name-title">
          {{ contactInfo.firstName }} {{ contactInfo.lastName }}
        </p>
        <p></p>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="info">
      <p>
        <span class="mdi mdi-email-outline"></span> <span>{{ contactInfo.mail }} </span>
      </p>
      <br />
      <p>
        <span class="mdi mdi-cellphone"></span> <span>{{ contactInfo.tel }} </span>
      </p>
    </div>
    <br />
    <v-btn class="me-4" @click="backPage"> Back </v-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'contactCard',
  setup() {
    const router = useRouter()
    const contactInfo = router.currentRoute.value.query

    const backPage = () => {
      router.go(-1)
    }

    return {
      backPage,
      contactInfo
    }
  }
})
</script>

<style>
.contact-card {
  position: relative;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px;
}

.contact-info-title {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.contact-i {
  width: 60px;
  height: 60px;
  background: rgb(239, 35, 69);
  border-radius: 50%;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.edit-contact-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

.contact-card-name-title {
  font-size: 30px;
}
</style>

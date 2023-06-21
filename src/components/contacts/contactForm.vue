<template>
  <form @keydown.enter.prevent="submit" class="card-box contact-form">
    <div class="contact-form-banner">
      <h1>New Contact</h1>
      <v-btn class="ma-2 upload-btn" color="green" size="x-large" icon="mdi mdi-upload"></v-btn>
    </div>
    <br />
    <v-text-field
      v-for="(fieldData, index) in fields"
      :key="index"
      v-model="fieldData.field.value"
      :error-messages="fieldData.field.errorMessage"
      :label="fieldData.label"
      variant="outlined"
    ></v-text-field>

    <v-btn class="ma-3" type="submit" color="info"> Add </v-btn>
    <v-btn @click="reset"> Clear </v-btn>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'

export default {
  data() {
    const { handleSubmit, reset } = useForm({
      validationSchema: {
        firstName(value) {
          if (value?.length >= 2) return true

          return 'Name needs to be at least 2 characters.'
        },
        lastName(value) {
          if (value?.length >= 2) return true

          return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
          if (value?.length > 0) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
          }
          return true
        },
        email(value) {
          if (value === '') {
            return true
          } else if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        }
      }
    })

    return {
      // inputs
      fields: [
        { field: useField('firstName'), label: 'First Name' },
        { field: useField('lastName'), label: 'Last Name' },
        { field: useField('phone'), label: 'Phone Number' },
        { field: useField('email'), label: 'E-mail' }
      ],
      submit: handleSubmit((values) => {
        alert(JSON.stringify(values, null, 2))
      }),
      reset
    }
  }
}
</script>

<style>
.contact-form {
  width: 100%;
}

.contact-form-banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

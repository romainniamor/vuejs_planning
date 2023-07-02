<template>
  <form class="card-box contact-form">
    <div class="contact-form-banner">
      <h1>New Contact</h1>
    </div>
    <br />
    <v-text-field
      v-model="state.firstName"
      :error-messages="v$?.firstName?.$errors.map((e) => e.$message)"
      label="First Name"
      required
      @input="v$?.firstName?.$touch"
      @blur="v$?.firstName?.$touch"
      variant="solo-inverted"
    ></v-text-field>
    <v-text-field
      v-model="state.lastName"
      :error-messages="v$?.lastName?.$errors.map((e) => e.$message)"
      label="Last Name"
      @input="v$?.lastName?.$touch"
      @blur="v$?.lastName?.$touch"
      variant="solo-inverted"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :error-messages="v$?.email?.$errors.map((e) => e.$message)"
      label="E-mail"
      @input="v$?.email?.$touch"
      @blur="v$?.email?.$touch"
      variant="solo-inverted"
    ></v-text-field>
    <v-text-field
      v-model="state.phone"
      :error-messages="v$?.phone?.$errors.map((e) => e.$message)"
      label="Phone Number"
      @input="v$?.phone?.$touch"
      @blur="v$?.phone?.$touch"
      variant="solo-inverted"
    ></v-text-field>

    <v-select
      v-model="state.select"
      :items="items"
      :error-messages="v$?.select?.$errors.map((e) => e.$message)"
      label="Category"
      @change="v$?.select?.$touch"
      @blur="v$?.select?.$touch"
      variant="solo-inverted"
    ></v-select>

    <v-btn class="me-4" @click="v$?.$validate"> submit </v-btn>
    <v-btn class="me-4" @click="clear"> clear </v-btn>
    <v-btn class="me-4" @click="backPage"> Back </v-btn>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

const router = useRouter()

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  select: null
}

const state = reactive({
  ...initialState
})

const items = ['Business', 'Familly', 'Personal']

const rules = {
  firstName: { required },
  email: { email },
  phone: {}
}

const v$ = useVuelidate(rules, state)

function clear() {
  v$?.value?.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

function backPage() {
  router.go(-1)
}
</script>

<style>
.contact-form {
  width: 600px;
}

.contact-form-banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

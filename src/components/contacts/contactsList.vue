<template>
  <div class="list-item">
    <div class="content">
      <v-btn class="mx-3" color="green" size="x-large" icon="mdi mdi-account-outline"></v-btn>

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
      <v-btn icon="mdi-delete-outline"></v-btn>
      <v-btn icon="mdi-pencil-outline"></v-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'listItem',
  props: {
    firstName: String,
    lastName: String,
    mail: String,
    tel: String
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

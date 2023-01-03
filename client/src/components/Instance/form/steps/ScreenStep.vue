<template>
  <div>
    <h2><label for="name">Name</label></h2>
    <input v-model="name" type="text">

    <h2>Screen</h2>
    {{ JSON.stringify(screen) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { name, screen } } = useNewInstanceFormStore()
</script>

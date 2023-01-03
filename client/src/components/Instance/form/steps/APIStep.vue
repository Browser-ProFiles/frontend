<template>
  <div>
    <h2>API</h2>
    {{ JSON.stringify(api) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { api } } = useNewInstanceFormStore()
</script>

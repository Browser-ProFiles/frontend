<template>
  <div>
    <h2>Devices</h2>
    {{ JSON.stringify(devices) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { devices } } = useNewInstanceFormStore()
</script>

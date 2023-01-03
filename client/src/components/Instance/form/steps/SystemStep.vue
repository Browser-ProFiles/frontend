<template>
  <div>
    <h2>System</h2>
    {{ JSON.stringify(system) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { system } } = useNewInstanceFormStore()
</script>

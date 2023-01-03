<template>
  <div>
    <h2>Security</h2>
    {{ JSON.stringify(security) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { security } } = useNewInstanceFormStore()
</script>

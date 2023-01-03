<template>
  <div>
    <h2>Additional</h2>
    {{ JSON.stringify(additional) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { additional } } = useNewInstanceFormStore()
</script>

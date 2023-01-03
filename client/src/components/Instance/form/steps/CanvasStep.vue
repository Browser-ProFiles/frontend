<template>
  <div>
    <h2>Canvas</h2>
    {{ JSON.stringify(canvas) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { canvas } } = useNewInstanceFormStore()
</script>

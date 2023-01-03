<template>
  <div>
    <h2>JavaScript</h2>
    {{ JSON.stringify(javascript) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { javascript } } = useNewInstanceFormStore()
</script>

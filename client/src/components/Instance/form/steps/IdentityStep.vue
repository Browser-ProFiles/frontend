<template>
  <div>
    <h2>Identity</h2>
    {{ JSON.stringify(identity) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { identity } } = useNewInstanceFormStore()
</script>

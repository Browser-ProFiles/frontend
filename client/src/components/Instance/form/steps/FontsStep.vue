<template>
  <div>
    <h2>Fonts</h2>
    {{ JSON.stringify(fonts) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { fonts } } = useNewInstanceFormStore()
</script>

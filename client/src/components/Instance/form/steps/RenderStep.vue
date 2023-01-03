<template>
  <div>
    <h2>Render</h2>
    {{ JSON.stringify(render) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { render } } = useNewInstanceFormStore()
</script>

<template>
  <div>
    <h2>Proxy</h2>
    {{ JSON.stringify(proxy) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { proxy } } = useNewInstanceFormStore()
</script>

<template>
  <div>
    <h2>Extensions</h2>
    {{ JSON.stringify(extensions) }}
  </div>
</template>

<script setup>
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

const { form: { extensions } } = useNewInstanceFormStore()
</script>

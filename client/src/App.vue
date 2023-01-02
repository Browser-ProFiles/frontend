<template>
  <div>
    <h1>SandBox</h1>

    <hr>

    <InstanceCreate />

    <hr>

    <InstanceList />
  </div>
</template>

<script setup>
import InstanceCreate from './components/Instance/InstanceCreate.vue'
import InstanceList from './components/Instance/InstanceList.vue'
</script>
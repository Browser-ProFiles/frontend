<template>
  <div>
    <router-view />

    <MacosInstallModal />
  </div>
</template>

<script setup>
import MacosInstallModal from '@/components/Modal/MacosInstall.vue'
</script>

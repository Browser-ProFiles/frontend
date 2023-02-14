<template>
  <div>
    <router-view />

    <MacosInstallModal />
    <PaymentMethodModal />
  </div>
</template>

<script setup>
import MacosInstallModal from '@/components/Modal/MacosInstall.vue'
import PaymentMethodModal from '@/components/Modal/PaymentMethod.vue'
</script>

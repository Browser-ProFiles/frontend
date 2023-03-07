<template>
  <div :key="lang">
    <router-view />

    <MacosInstallModal />
    <PaymentMethodModal />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore.js'

import MacosInstallModal from '@/components/Modal/MacosInstall.vue'
import PaymentMethodModal from '@/components/Modal/PaymentMethod.vue'

const store = useAppStore()
const { lang } = storeToRefs(store)
</script>

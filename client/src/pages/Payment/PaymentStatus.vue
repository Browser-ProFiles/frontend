<template>
  <div class="page">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const toast = useToast()
const i18n = useI18n()

const { t } = i18n

const loading = ref(false)

onMounted(() => {
  const type = route.query.type ?? 'fail'
  if (type === 'success') {
    toast.success(t('messages.success.payment'))
  } else {
    toast.error(t('messages.error.payment'))
  }
  router.push('/cabinet')
})
</script>

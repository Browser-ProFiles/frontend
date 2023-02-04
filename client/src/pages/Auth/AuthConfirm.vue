<template>
  <div class="page">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

import { confirmSignUp } from '~/api/auth.js'

const router = useRouter()
const route = useRoute()
const toast = useToast()
const i18n = useI18n()

const { t } = i18n

const loading = ref(false)

const checkToken = async () => {
  loading.value = true
  try {
    const { data } = await confirmSignUp({ token: route.params.token ?? '', });
    if (data.status !== 'success') {
      throw new Error(t('messages.error.emailConfirm'));
    }
    toast.success(t('messages.success.signUpConfirm'))
  } catch (e) {
    console.error(e)
    toast.error(`${t('messages.error.signUpConfirm')}: ${e.response?.data?.message || e.message}`)
  } finally {
    loading.value = false
    router.push('/auth/login')
  }
}

onMounted(() => {
  checkToken()
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-self: center;

  height: 100vh;

  .row {
    width: 300px;

    @media screen and (max-width: 600px) {
      width: 60vw;
    }

    @media screen and (max-width: 400px) {
      width: 80vw;
    }
  }
}
</style>
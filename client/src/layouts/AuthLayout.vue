<template>
  <a-layout :key="lang">
    <a-layout>
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
    </a-layout>
    <slot name="footer">
      <a-layout-footer class="footer">
        <div class="footer__copyright">© {{ new Date().getFullYear() }} Browser ProFiles</div>
        <switch-language class="footer__switch-lang" />
      </a-layout-footer>
    </slot>
  </a-layout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/appStore.js'

import SwitchLanguage from '@/components/Utils/SwitchLanguage.vue'

defineProps({
  title: {
    type: String,
    default: 'Browser ProFiles'
  }
})

const router = useRouter()
const route = useRoute()

const store = useAppStore()
const { lang } = storeToRefs(store)
const { initLang } = store

onMounted(() => {
  initLang()
})
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-self: center;

  overflow-y: scroll;
  min-height: calc(100vh - 55px);

  padding: 15px 50px;

  @media screen and (max-width: 1053px) {
    min-height: calc(100vh - 55px);
  }

  @media screen and (max-width: 400px) {
    padding: 15px 20px;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 55px;

  @media screen and (max-width: 420px) {
    font-size: 13px;

    padding: 15px;
  }

  &:empty {
    display: none;
  }
}
</style>

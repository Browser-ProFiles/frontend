<template>
  <a-select :value="lang" @change="changeLang" class="switch-lang">
    <a-select-option
      v-for="item in APP_LANGUAGES"
      :selected="item.value === lang"
      :key="item.value"
      :value="item.value"
    >
      {{ item.label }}
    </a-select-option>
  </a-select>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/appStore.js'

import { APP_LANGUAGES } from '@/const/appLang.js'

const store = useAppStore()

const { changeLang } = store
const { lang } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.switch-lang {
  width: 150px;

  @media screen and (max-width: 400px) {
    width: 100px;
  }
}
</style>
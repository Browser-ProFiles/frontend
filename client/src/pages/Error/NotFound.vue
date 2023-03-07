<template>
  <main-layout>
    <template #default>
      <div class="not-found">
        <h2 class="not-found__title">
          {{ $t('notFound.title') }}
        </h2>
        <p class="not-found__description">
          {{ $t('notFound.description') }}
        </p>
        <a-button @click="goHome">{{ $t('utils.goHome') }}</a-button>
      </div>
    </template>
  </main-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'

import MainLayout from '~/layouts/MainLayout.vue'

const router = useRouter()

/*const goBack = () => {
  window.history.length > 2 ? router.go(-1) : router.push('/')
}*/

const goHome = () => router.push('/')
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  &__title,
  &__description {
    line-height: 1;
  }

  &__title {
    font-size: 3rem;
  }

  &__description {
    width: 60%;

    margin-bottom: 1rem;

    font-size: 1.5rem;

    @media screen and (max-width: 1280px) {
      width: 70%;
    }

    @media screen and (max-width: 900px) {
      width: 80%;
    }

    @media screen and (max-width: 550px) {
      width: 90%;

      font-size: 1.3rem;
    }
  }
}
</style>

<template>
  <main-layout>
    <template #default>
      <div class="not-found">
        <h2 class="not-found__title">
          {{ $t('error.notFound.title') }}
        </h2>
        <p class="not-found__description">
          {{ $t('error.notFound.description') }}
        </p>
        <a-button>{{ $t('utils.back') }}</a-button>
      </div>
    </template>
  </main-layout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
</script>

<style lang="scss" scoped>
.not-found {
  &__title {
    font-size: 3rem;
  }

  &__description {
    font-size: 1.8rem;
  }
}
</style>

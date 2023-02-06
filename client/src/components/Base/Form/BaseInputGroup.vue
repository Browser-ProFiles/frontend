<template>
  <div
    v-if="!advanced || advancedSettings"
    :key="lang"
    :class="
      `base-input-group ${group === 'row' ? 'base-input-group_row' : ''}
    `"
  >
    <label class="label" :for="name">
      <a-tooltip class="danger" v-if="advanced" placement="topLeft">
        <template #title>
          <p class="danger-light">{{ $t('form.advanced.title') }}</p>
          <p>{{ $t('form.advanced.description') }}</p>
        </template>
        {{ lang === 'en' ? label : $t(`form.fields.${name}`) }} <slot name="afterLabel" />
      </a-tooltip>
      <span v-else>
        {{ lang === 'en' ? label : $t(`form.fields.${name}`) }} <slot name="afterLabel" />
      </span>
    </label>
    <p class="description">
      <slot name="description">
        <slot :name="`${lang}Description`"></slot>
      </slot>
    </p>
    <slot />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/appStore.js'
import { useInstanceFormStore } from '@/stores/instanceFormStore.js'

const store = useInstanceFormStore()
const appStore = useAppStore()

const { advancedSettings } = storeToRefs(store)
const { lang } = storeToRefs(appStore)

defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  advanced: {
    type: Boolean,
  },
  group: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.base-input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  margin-bottom: 10px;

  &.base-input-group_hidden {
    display: none;
  }

  &.base-input-group_row {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 13px;

    .label {
      margin-bottom: 0;
    }
  }

  .label {
    width: 100%;

    font-size: 16px;

    line-height: 1.2;
  }

  .description {
    margin-bottom: 5px;

    font-size: 13px;
    font-weight: 300;

    &:empty {
      display: none;
    }
  }
}
</style>
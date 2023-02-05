<template>
  <div
    v-if="!advanced || advancedSettings"
    :class="
      `base-input-group ${group === 'row' ? 'base-input-group_row' : ''}
    `"
  >
    <label class="label" :for="name">
      <a-tooltip class="danger" v-if="advanced" placement="topLeft">
        <template #title>
          <p class="danger-light">Be careful with advanced features!</p>
          <p>They can break browser profile or replace generated fingerprint, which can add you fraud scores</p>
        </template>
        {{ $t(`form.fields.${name}`) !== `form.fields.${name}` ? $t(`form.fields.${name}`) : label }} <slot name="afterLabel" />
      </a-tooltip>
      <span v-else>
        {{ $t(`form.fields.${name}`) !== `form.fields.${name}` ? $t(`form.fields.${name}`) : label }} <slot name="afterLabel" />
      </span>
    </label>
    <p class="description">
      <slot name="description">
        <slot :name="`${locale}Description`"></slot>
      </slot>
    </p>
    <slot />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

import { useInstanceFormStore } from '@/stores/instanceFormStore.js'

const store = useInstanceFormStore()
const i18n = useI18n()

const { locale } = i18n
const { advancedSettings } = storeToRefs(store)

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
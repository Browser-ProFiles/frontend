<template>
  <div class="screen-step">
    <div class="section">
      <h2 class="title"><label for="name">{{ $t('form.fields.name') }} <span class="required">*</span></label></h2>
      <base-input
        show-count
        type="text"
        @change="onChangeField('name', $event.target.value)"
        :value="form.name"
        :disabled="!!editProfileName"
      />
    </div>

    <div class="section">
      <h2 class="title">{{ $t('form.fields.screen') }}</h2>
      <a-row class="row" :gutter="20">
        <a-col span="12">
          <base-input-group name="width" label="Width">
            <base-input-number
              min="10"
              max="8000"
              @change="onChangeField('screen.width', $event)"
              :value="form.screen.width"
            >
              <template #addonAfter>
                px
              </template>
            </base-input-number>
          </base-input-group>
        </a-col>
        <a-col span="12">
          <base-input-group name="height" label="Height">
            <base-input-number
              min="10"
              max="8000"
              @change="onChangeField('screen.height', $event)"
              :value="form.screen.height"
            >
              <template #addonAfter>
                px
              </template>
            </base-input-number>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group
            name="touchDevices"
            label="Touch devices"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('screen.touchDevices', $event.target.checked)"
                :checked="form.screen.touchDevices"
              />
            </template>

            <template #enDescription>
              Tells chrome to interpret events from these devices as touch events.
              Only available with XInput 2 (i.e. X server 1.8 or above). The id's of the devices can be retrieved from 'xinput list'.
            </template>

            <template #ruDescription>
              Указывает chrome интерпретировать события от этих устройств как события касания.
              Доступно только для XInput 2 (т.е. X server 1.8 или выше). Идентификаторы устройств можно получить из 'xinput list'.
            </template>
          </base-input-group>
        </a-col>
        <a-col span="24">
          <base-input-group
            name="touchEvents"
            label="Touch events"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('screen.touchEvents', $event.target.checked)"
                :checked="form.screen.touchEvents"
              />
            </template>

            <template #enDescription>
              Enable support for touch event feature detection.
            </template>

            <template #ruDescription>
              Включает поддержку обнаружения функций по событию касания.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useInstanceFormStore } from '@/stores/instanceFormStore.js'
import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputNumber from '~/components/Base/Form/BaseInputNumber.vue'
import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form, editProfileName } = storeToRefs(store)
</script>

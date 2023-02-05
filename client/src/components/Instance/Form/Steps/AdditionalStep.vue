<template>
  <div class="additional-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="noExperiments"
            label="No experiments"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.noExperiments', $event.target.checked)"
                :checked="form.additional.noExperiments"
              />
            </template>

            <template #enDescription>
              Disables all experiments set on about:flags.
            </template>
            <template #ruDescription>
              Отключает все эксперименты, установленные в about:flags.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableLowEndDeviceMode"
            label="Enable low end device mode"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.enableLowEndDeviceMode', $event.target.checked)"
                :checked="form.additional.enableLowEndDeviceMode"
              />
            </template>

            <template #enDescription>
              Force low-end device mode when set.
            </template>
            <template #ruDescription>
              Принудительное включение режима low-end устройства, если установлено.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="crosDisksFake"
            label="Cros disks fake"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.crosDisksFake', $event.target.checked)"
                :checked="form.additional.crosDisksFake"
              />
            </template>

            <template #enDescription>
              Enables cros disks fake behavior.
              If the switch is set, fake cros disk D-Bus client is initialized and USB events do not reach chrome.
            </template>
            <template #ruDescription>
              Включает поведение поддельных дисков cros.
              Если переключатель установлен, инициализируется поддельный клиент D-Bus cros disk, и события USB не достигают chrome.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="denyPermissionPrompts"
            label="Deny permission prompts"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.denyPermissionPrompts', $event.target.checked)"
                :checked="form.additional.denyPermissionPrompts"
              />
            </template>

            <template #enDescription>
              Prevents permission prompts from appearing by denying instead of showing prompts.
            </template>
            <template #ruDescription>
              Предотвращает появление подсказок о разрешениях, запрещая их вместо показа.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="deviceScaleFactor"
            label="Device scale factor"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('additional.deviceScaleFactor', $event.target.value)"
                :value="form.additional.deviceScaleFactor"
              />
            </template>

            <template #enDescription>
              Device scale factor passed to certain processes like renderers, etc.
            </template>
            <template #ruDescription>
              Коэффициент масштабирования устройства, передаваемый определенным процессам, таким как рендеринг и т.д.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableHighresTimer"
            label="Deny highres timer"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableHighresTimer', $event.target.checked)"
                :checked="form.additional.disableHighresTimer"
              />
            </template>

            <template #enDescription>
              Disable high-resolution timer on Windows.
            </template>
            <template #ruDescription>
              Отключает таймер высокой точности в Windows.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disablePushstateThrottle"
            label="Disable pushstate throttle"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disablePushstateThrottle', $event.target.checked)"
                :checked="form.additional.disablePushstateThrottle"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableAutoReload"
            label="Disable auto reload"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableAutoReload', $event.target.checked)"
                :checked="form.additional.disableAutoReload"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBackForwardCache"
            label="Disable back forward cache"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableBackForwardCache', $event.target.checked)"
                :checked="form.additional.disableBackForwardCache"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBackgroundNetworking"
            label="Disable background networking"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableBackgroundNetworking', $event.target.checked)"
                :checked="form.additional.disableBackgroundNetworking"
              />
            </template>

            <template #enDescription>
              Disable several subsystems which run network requests in the background.
              This is for use when doing network performance testing to avoid noise in the measurements.
            </template>
            <template #ruDescription>
              Отключает несколько подсистем, выполняющих сетевые запросы в фоновом режиме.
              Это необходимо при тестировании производительности сети, чтобы избежать шума в измерениях.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBackgroundTimerThrottling"
            label="Disable background timer throttling"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableBackgroundTimerThrottling', $event.target.checked)"
                :checked="form.additional.disableBackgroundTimerThrottling"
              />
            </template>

            <template #enDescription>
              Disable task throttling of timer tasks from background pages.
            </template>
            <template #ruDescription>
              Отключает дросселирования задач по таймеру с фоновых страниц.
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

import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>

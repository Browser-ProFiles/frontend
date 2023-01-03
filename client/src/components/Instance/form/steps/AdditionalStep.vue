<template>
  <div class="additional-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="noExperiments"
            label="No experiments"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.noExperiments', $event.target.checked)"
                :value="form.additional.noExperiments"
              />
            </template>

            <template #description>
              Disables all experiments set on about:flags.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableLowEndDeviceMode"
            label="Enable low end device mode"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.enableLowEndDeviceMode', $event.target.checked)"
                :value="form.additional.enableLowEndDeviceMode"
              />
            </template>

            <template #description>
              Force low-end device mode when set.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="crosDisksFake"
            label="Cros disks fake"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.crosDisksFake', $event.target.checked)"
                :value="form.additional.crosDisksFake"
              />
            </template>

            <template #description>
              Enables cros disks fake behavior.
              If the switch is set, fake cros disk D-Bus client is initialized and USB events do not reach chrome.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="denyPermissionPrompts"
            label="Deny permission prompts"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.denyPermissionPrompts', $event.target.checked)"
                :value="form.additional.denyPermissionPrompts"
              />
            </template>

            <template #description>
              Prevents permission prompts from appearing by denying instead of showing prompts.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="deviceScaleFactor"
            label="Device scale factor"
          >
            <template #default>
              <base-input
                @change="onChangeField('additional.deviceScaleFactor', $event.target.value)"
                :value="form.additional.deviceScaleFactor"
              />
            </template>

            <template #description>
              Device scale factor passed to certain processes like renderers, etc.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableHighresTimer"
            label="Deny highres timer"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableHighresTimer', $event.target.checked)"
                :value="form.additional.disableHighresTimer"
              />
            </template>

            <template #description>
              Disable high-resolution timer on Windows.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disablePushstateThrottle"
            label="Disable pushstate throttle"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disablePushstateThrottle', $event.target.checked)"
                :value="form.additional.disablePushstateThrottle"
              />
            </template>

            <template #description>
              Disables throttling of history.pushState/replaceState calls.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableAutoReload"
            label="Disable auto reload"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableAutoReload', $event.target.checked)"
                :value="form.additional.disableAutoReload"
              />
            </template>

            <template #description>
              Disable auto-reload of error pages.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBackForwardCache"
            label="Disable back forward cache"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableBackForwardCache', $event.target.checked)"
                :value="form.additional.disableBackForwardCache"
              />
            </template>

            <template #description>
              Disables the BackForwardCache feature.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBackgroundNetworking"
            label="Disable background networking"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableBackgroundNetworking', $event.target.checked)"
                :value="form.additional.disableBackgroundNetworking"
              />
            </template>

            <template #description>
              Disable several subsystems which run network requests in the background.
              This is for use when doing network performance testing to avoid noise in the measurements.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBackgroundTimerThrottling"
            label="Disable background timer throttling"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('additional.disableBackgroundTimerThrottling', $event.target.checked)"
                :value="form.additional.disableBackgroundTimerThrottling"
              />
            </template>

            <template #description>
              Disable task throttling of timer tasks from background pages.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useNewInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>

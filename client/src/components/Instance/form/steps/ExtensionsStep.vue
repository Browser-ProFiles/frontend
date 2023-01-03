<template>
  <div class="extensions-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensions"
            label="Disable extensions"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableExtensions', $event.target.checked)"
                :value="form.extensions.disableExtensions"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensionsExcept"
            label="Disable extensions except"
          >
            <base-input
              @change="onChangeField('extensions.disableExtensionsExcept', $event.target.value)"
              :value="form.extensions.disableExtensionsExcept"
            />

            <template #description>
              Disable extensions except those specified in a comma-separated list.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
      
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensionsFileAccessCheck"
            label="Disable extensions file access check"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableExtensionsFileAccessCheck', $event.target.checked)"
                :value="form.extensions.disableExtensionsFileAccessCheck"
              />
            </template>

            <template #description>
              Disable checking for user opt-in for extensions that want to inject script into file URLs (ie, always allow it).
              This is used during automated testing
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableExtensionsHttpThrottling"
            label="Disable extensions HTTP throttling"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableExtensionsHttpThrottling', $event.target.checked)"
                :value="form.extensions.disableExtensionsHttpThrottling"
              />
            </template>

            <template #description>
              Disable the net::URLRequestThrottlerManager functionality for requests originating from extensions.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableFeatures"
            label="Disable features"
          >
            <template #default>
              <base-input
                class="checkbox"
                @change="onChangeField('extensions.disableFeatures', $event.target.value)"
                :value="form.extensions.disableFeatures"
              />
            </template>

            <template #description>
              Comma-separated list of feature names to disable. See also kEnableFeatures.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableDefaultApps"
            label="Disable default apps"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableDefaultApps', $event.target.checked)"
                :value="form.extensions.disableDefaultApps"
              />
            </template>

            <template #description>
              Disables installation of default apps on first run.
              This is used during automated testing.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableComponentExtensionsWidthBackgroundPages"
            label="Disable component extensions width background pages"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.disableComponentExtensionsWidthBackgroundPages', $event.target.checked)"
                :value="form.extensions.disableComponentExtensionsWidthBackgroundPages"
              />
            </template>

            <template #description>
              Disable default component extensions with background pages - useful
              for performance tests where these pages may interfere with perf results.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableExperimentalExtensionApis"
            label="Enable experimental extension APIs"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('extensions.enableExperimentalExtensionApis', $event.target.checked)"
                :value="form.extensions.enableExperimentalExtensionApis"
              />
            </template>

            <template #description>
              Enables extension APIs that are in development.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="listApps"
            label="List apps"
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.listApps', $event.target.value)"
                :value="form.extensions.listApps"
              />
            </template>

            <template #description>
              Writes open and installed web apps for each profile to the specified file without launching a new browser
              window or tab. Pass a absolute file path to specify where to output the information.
              Can be used together with optional --profile-base-name switch to only write information for a given profile.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="listAudioDevices"
            label="List audio devices"
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.listAudioDevices', $event.target.value)"
                :value="form.extensions.listAudioDevices"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="loadApps"
            label="Load apps"
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.loadApps', $event.target.value)"
                :value="form.extensions.loadApps"
              />
            </template>

            <template #description>
              Comma-separated list of paths to apps to load at startup. The first app in the list will be launched.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="loadExtension"
            label="Load extension"
          >
            <template #default>
              <base-input
                @change="onChangeField('extensions.loadExtension', $event.target.value)"
                :value="form.extensions.loadExtension"
              />
            </template>

            <template #description>
              Comma-separated list of paths to extensions to load at startup.
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

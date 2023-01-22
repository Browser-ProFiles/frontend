<template>
  <div class="api-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableFileSystem"
            label="Disable File System API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableFileSystem', $event.target.checked)"
                :checked="form.api.disableFileSystem"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableMediaSessionApi"
            label="Disable Media Session API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableMediaSessionApi', $event.target.checked)"
                :value="form.api.disableMediaSessionApi"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableNotifications"
            label="Disable notifications API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableNotifications', $event.target.checked)"
                :checked="form.api.disableNotifications"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disablePermissionsApi"
            label="Disable Permissions API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disablePermissionsApi', $event.target.checked)"
                :checked="form.api.disablePermissionsApi"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disablePresentationApi"
            label="Disable Presentation API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disablePresentationApi', $event.target.checked)"
                :checked="form.api.disablePresentationApi"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableRemotePlaybackApi"
            label="Disable Remote Playback API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableRemotePlaybackApi', $event.target.checked)"
                :checked="form.api.disableRemotePlaybackApi"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableScreenOrientationLock"
            label="Disable Screen Orientation API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableScreenOrientationLock', $event.target.checked)"
                :checked="form.api.disableScreenOrientationLock"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableSharedWorkers"
            label="Disable Shared Workers"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableSharedWorkers', $event.target.checked)"
                :checked="form.api.disableSharedWorkers"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableSpeechApi"
            label="Disable Web Speech API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableSpeechApi', $event.target.checked)"
                :checked="form.api.disableSpeechApi"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableSpeechSynthesisApi"
            label="Disable the speech synthesis part of Web Speech API"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableSpeechSynthesisApi', $event.target.checked)"
                :checked="form.api.disableSpeechSynthesisApi"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabled3DApis"
            label="Disable 3D APIs"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disabled3DApis', $event.target.checked)"
                :checked="form.api.disabled3DApis"
              />
            </template>

            <template #description>
              Disables client-visible 3D APIs, in particular WebGL and Pepper 3D.
              This is controlled by policy and is kept separate from the other enable/disable
              switches to avoid accidentally regressing the policy support for controlling access
              to these APIs
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableTouchDragDrop"
            label="Disable Touch Drag drop"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableTouchDragDrop', $event.target.checked)"
                :checked="form.api.disableTouchDragDrop"
              />
            </template>

            <template #description>
              Disables touch event based drag and drop.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableSystemFontCheck"
            label="Disable system font check"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.disableSystemFontCheck', $event.target.checked)"
                :checked="form.api.disableSystemFontCheck"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableExperimentalWebPlatformFeatures"
            label="Enable Experimental Web Platform Features"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.enableExperimentalWebPlatformFeatures', $event.target.checked)"
                :checked="form.api.enableExperimentalWebPlatformFeatures"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableExperimentalWebassemblyFeatures"
            label="Enable Experimental Webassembly Features"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.enableExperimentalWebassemblyFeatures', $event.target.checked)"
                :checked="form.api.enableExperimentalWebassemblyFeatures"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableExperimentalWebassemblyStackSwitching"
            label="Enable Experimental Webassembly Stack Switching"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.enableExperimentalWebassemblyStackSwitching', $event.target.checked)"
                :checked="form.api.enableExperimentalWebassemblyStackSwitching"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enablePrivacySandboxAdsApis"
            label="Enable Privacy Sandbox Ads APIs"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.enablePrivacySandboxAdsApis', $event.target.checked)"
                :checked="form.api.enablePrivacySandboxAdsApis"
              />
            </template>

            <template #description>
              Enables Privacy Sandbox APIs: Attribution Reporting,Fledge, Topics, Fenced Frames,
              Shared Storage, Private Aggregation, and their associated features.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableUsermediaScreenCapturing"
            label="Enable Usermedia Screen Capturing"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.enableUsermediaScreenCapturing', $event.target.checked)"
                :checked="form.api.enableUsermediaScreenCapturing"
              />
            </template>

            <template #description>
              Enable screen capturing support for MediaStream API.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableBlinkFeatures"
            label="Disable blink features"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('api.disableBlinkFeatures', $event.target.value)"
                :value="form.api.disableBlinkFeatures"
              />
            </template>

            <template #description>
              Disable one or more Blink runtime-enabled features. Use names from
              runtime_enabled_features.json5, separated by commas.
              Applied after kEnableBlinkFeatures, and after other flags that change these features.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="blinkSettings"
            label="Blink settings"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('api.blinkSettings', $event.target.checked)"
                :checked="form.api.blinkSettings"
              />
            </template>

            <template #description>
              Set blink settings. Format is  &lt;name&gt;[=&lt;value],&lt;name&gt;[=&lt;value&gt;],...
              The names are declared in Settings.json5. For boolean type, use "true", "false", or omit '=&lt;value&gt;' part to set to true.
              For enum type, use the int value of the enum value. Applied after other command line flags and prefs.
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

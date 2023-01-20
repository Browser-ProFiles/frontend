<template>
  <div class="proxy-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableRemoteFonts"
            label="Disable remote fonts"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fonts.disableRemoteFonts', $event.target.checked)"
                :checked="form.fonts.disableRemoteFonts"
              />
            </template>

            <template #description>
              Disables remote web font support. SVG font should always work whether this option is specified or not.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableFontSubpixelPositioning"
            label="Disable font subpixel positioning"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fonts.disableFontSubpixelPositioning', $event.target.checked)"
                :checked="form.fonts.disableFontSubpixelPositioning"
              />
            </template>

            <template #description>
              Force disables font subpixel positioning.
              This affects the character glyph sharpness, kerning, hinting and layout.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableLcdText"
            label="Disable LCD text"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fonts.disableLcdText', $event.target.checked)"
                :checked="form.fonts.disableLcdText"
              />
            </template>

            <template #description>
              Disables LCD text.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disablePreferCompositingToLcdText"
            label="Disable prefer compositing to LCD text"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fonts.disablePreferCompositingToLcdText', $event.target.checked)"
                :checked="form.fonts.disablePreferCompositingToLcdText"
              />
            </template>

            <template #description>
              Disable the creation of compositing layers when it would prevent LCD text.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableScrollToTextFragment"
            label="Disable scroll to text fragment"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fonts.disableScrollToTextFragment', $event.target.checked)"
                :checked="form.fonts.disableScrollToTextFragment"
              />
            </template>

            <template #description>
              This switch disables the ScrollToTextFragment feature.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enableFontAntialiasing"
            label="Enable font antialiasing"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fonts.enableFontAntialiasing', $event.target.checked)"
                :checked="form.fonts.enableFontAntialiasing"
              />
            </template>

            <template #description>
              Enable font antialiasing for pixel tests.
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
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>

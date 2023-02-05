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

            <template #enDescription>
              Disables remote web font support.
              SVG font should always work whether this option is specified or not.
            </template>

            <template #ruDescription>
              Отключает поддержку удаленных веб-шрифтов.
              Шрифт SVG должен работать всегда, независимо от того, указан этот параметр или нет.
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

            <template #enDescription>
              Force disables font subpixel positioning.
              This affects the character glyph sharpness, kerning, hinting and layout.
            </template>

            <template #ruDescription>
              Принудительно отключает субпиксельное позиционирование шрифта.
              Это влияет на резкость, кернинг, наводку и расположение глифов.
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

            <template #enDescription>
              Disables LCD text.
            </template>

            <template #ruDescription>
              Отключает текст на ЖК-дисплее.
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

            <template #enDescription>
              Disable the creation of compositing layers when it would prevent LCD text.
            </template>

            <template #ruDescription>
              Отключает создание слоев композитинга, если это помешает отображению ЖК-текста.
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

            <template #enDescription>
              This switch disables the ScrollToTextFragment feature.
            </template>

            <template #ruDescription>
              Эта настройка отключает функцию ScrollToTextFragment.
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

            <template #enDescription>
              Enable font antialiasing for pixel tests.
            </template>

            <template #ruDescription>
              Включает сглаживание шрифтов для пиксельных тестов.
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

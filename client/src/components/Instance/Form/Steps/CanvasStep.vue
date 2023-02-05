<template>
  <div class="canvas-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enabled2DLayers"
            label="Enabled 2D Layers"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.enabled2DLayers', $event.target.checked)"
                :checked="form.canvas.enabled2DLayers"
              />
            </template>

            <template #enDescription>
              Enable in-progress canvas 2d API methods BeginLayer and EndLayer.
            </template>

            <template #ruDescription>
              Включает методы API BeginLayer и EndLayer в процессе работы с canvas 2d.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableCanvasAa"
            label="Disable Canvas AA"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disableCanvasAa', $event.target.checked)"
                :checked="form.canvas.disableCanvasAa"
              />
            </template>

            <template #enDescription>
              Disable antialiasing on 2d canvas.
            </template>
            <template #ruDescription>
              Отключает сглаживание на двухмерном холсте.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabled2DCanvasClipAa"
            label="Disable 2D Canvas clip AA"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabled2DCanvasClipAa', $event.target.checked)"
                :checked="form.canvas.disabled2DCanvasClipAa"
              />
            </template>

            <template #enDescription>
              Disable antialiasing on 2d canvas clips
            </template>
            <template #ruDescription>
              Отключает сглаживание в Canvas 2D
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabled2DCanvasImageChromium"
            label="Disable 2D Canvas image chromium"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabled2DCanvasImageChromium', $event.target.checked)"
                :checked="form.canvas.disabled2DCanvasImageChromium"
              />
            </template>

            <template #enDescription>
              Disables Canvas2D rendering into a scanout buffer for overlay support.
            </template>
            <template #ruDescription>
              Отключает рендеринг Canvas 2D в буфер развертки для поддержки наложения.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableReadingFromCanvas"
            label="Disable reading from canvas"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disableReadingFromCanvas', $event.target.checked)"
                :checked="form.canvas.disableReadingFromCanvas"
              />
            </template>

            <template #enDescription>
              Taints all canvas elements, regardless of origin.
            </template>
            <template #ruDescription>
              Портит все элементы холста, независимо от их происхождения.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabledAccelerated2DCanvas"
            label="Disable accelerated 2D Canvas"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabledAccelerated2DCanvas', $event.target.checked)"
                :checked="form.canvas.disabledAccelerated2DCanvas"
              />
            </template>

            <template #enDescription>
              Disable gpu-accelerated 2d canvas.
            </template>
            <template #ruDescription>
              Отключает ускоренное графическим процессором двухмерное полотно.
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

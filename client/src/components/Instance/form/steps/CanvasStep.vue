<template>
  <div class="canvas-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="enabled2DLayers"
            label="Enabled 2D Layers"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.enabled2DLayers', $event.target.checked)"
                :value="form.canvas.enabled2DLayers"
              />
            </template>

            <template #description>
              Enable in-progress canvas 2d API methods BeginLayer and EndLayer.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableCanvasAa"
            label="Disable Canvas AA"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disableCanvasAa', $event.target.checked)"
                :value="form.canvas.disableCanvasAa"
              />
            </template>

            <template #description>
              Disable antialiasing on 2d canvas.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabled2DCanvasClipAa"
            label="Disable 2D Canvas clip AA"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabled2DCanvasClipAa', $event.target.checked)"
                :value="form.canvas.disabled2DCanvasClipAa"
              />
            </template>

            <template #description>
              Disable antialiasing on 2d canvas clips
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabled2DCanvasImageChromium"
            label="Disable 2D Canvas image chromium"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabled2DCanvasImageChromium', $event.target.checked)"
                :value="form.canvas.disabled2DCanvasImageChromium"
              />
            </template>

            <template #description>
              Disables Canvas2D rendering into a scanout buffer for overlay support.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableReadingFromCanvas"
            label="Disable reading from canvas"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disableReadingFromCanvas', $event.target.checked)"
                :value="form.canvas.disableReadingFromCanvas"
              />
            </template>

            <template #description>
              Taints all canvas elements, regardless of origin.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabledAccelerated2DCanvas"
            label="Disable accelerated 2D Canvas"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabledAccelerated2DCanvas', $event.target.checked)"
                :value="form.canvas.disabledAccelerated2DCanvas"
              />
            </template>

            <template #description>
              Disable gpu-accelerated 2d canvas.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disabledAccelerated2DCanvas"
            label="Disable accelerated 2D Canvas"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('canvas.disabledAccelerated2DCanvas', $event.target.checked)"
                :value="form.canvas.disabledAccelerated2DCanvas"
              />
            </template>

            <template #description>
              Disable gpu-accelerated 2d canvas.
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

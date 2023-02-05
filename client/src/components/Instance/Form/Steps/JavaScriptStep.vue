<template>
  <div class="proxy-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableJavascriptHarmonyShipping"
            label="Disable JavaScript harmony shipping"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('javascript.disableJavascriptHarmonyShipping', $event.target.checked)"
                :checked="form.javascript.disableJavascriptHarmonyShipping"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="javascriptHarmony"
            label="JavaScript harmony"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('javascript.javascriptHarmony', $event.target.checked)"
                :checked="form.javascript.javascriptHarmony"
              />
            </template>

            <template #enDescription>
              Enables experimental Harmony (ECMAScript 6) features
            </template>

            <template #ruDescription>
              Включает экспериментальные функции Harmony (ECMAScript 6)
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="jsFlags"
            label="JavaScript flags"
            advanced
          >
            <base-input
              @change="onChangeField('javascript.jsFlags', $event.target.value)"
              :value="form.javascript.jsFlags"
            />

            <template #enDescription>
              Specifies the flags passed to JS engine.
            </template>

            <template #ruDescription>
              Определяет флаги, передаваемые JS-движку.
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

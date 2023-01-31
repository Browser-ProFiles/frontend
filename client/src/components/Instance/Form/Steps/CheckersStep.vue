<template>
  <div class="checker-step">
    <div class="section">
      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersWhoer" label="Open whoer on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.whoer', $event.target.checked)"
                :checked="form.checkers.whoer"
              />
            </template>
            <template #description>
              <a href="https://whoer.net/" target="_blank" class="link">https://whoer.net/</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersIphey" label="Open iphey on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.iphey', $event.target.checked)"
                :checked="form.checkers.iphey"
              />
            </template>
            <template #description>
              <a href="https://iphey.com/" target="_blank" class="link">https://iphey.com/</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersCreepjs" label="Open creepjs on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.creepjs', $event.target.checked)"
                :checked="form.checkers.creepjs"
              />
            </template>
            <template #description>
              <a href="https://abrahamjuliot.github.io/creepjs/" target="_blank" class="link">https://abrahamjuliot.github.io/creepjs/</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersBotDetection" label="Open bot detection test on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.botDetection', $event.target.checked)"
                :checked="form.checkers.botDetection"
              />
            </template>
            <template #description>
              <a href="https://bot.sannysoft.com/" target="_blank" class="link">https://bot.sannysoft.com/</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersDnsLeak" label="Open whoer dns leak test on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.dnsLeak', $event.target.checked)"
                :checked="form.checkers.dnsLeak"
              />
            </template>
            <template #description>
              <a href="https://whoer.net/dns-leak-test" target="_blank" class="link">https://whoer.net/dns-leak-test</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersWebrtcLeak" label="Open webrtc leak test on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.webrtcLeak', $event.target.checked)"
                :checked="form.checkers.webrtcLeak"
              />
            </template>
            <template #description>
              <a href="https://browserleaks.com/webrtc" target="_blank" class="link">https://browserleaks.com/webrtc</a>
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col colspan="24">
          <base-input-group name="checkersChromeSecurity" label="Open chrome security setting on launch">
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('checkers.chromeSecurity', $event.target.checked)"
                :checked="form.checkers.chromeSecurity"
              />
            </template>
            <template #description>
              <a href="chrome://settings/security" target="_blank" class="link">chrome://settings/security</a>
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

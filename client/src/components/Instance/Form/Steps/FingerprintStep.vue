<template>
  <div class="fingerprint-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="hideWebRtcLeak"
            label="Hide WebRTC leak (recommended)"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('fingerprint.hideWebRtcLeak', $event.target.checked)"
                :checked="form.fingerprint.hideWebRtcLeak"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="fingerprintEnabled"
            label="Enable fake fingerprint (recommended)"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeEnabled($event.target.checked)"
                :checked="form.fingerprint.fingerprintEnabled"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <template v-if="form.fingerprint.fingerprintEnabled">
        <div class="error">
          <div class="danger">
            <b>{{ $t('form.fingerprintGenerator.warning') }}</b>
            <div>{{ $t('form.fingerprintGenerator.description1') }}</div>
            <div>{{ $t('utils.click') }} <a href="#generate">"{{ $t('utils.generate') }}"</a> {{ $t('form.fingerprintGenerator.description2') }}</div>
          </div>
        </div>

        <a-row class="row" :gutter="20">
          <a-col span="12">
            <base-input-group
              name="fingerprintDevice"
              label="Device"
            >
              <base-select
                :items="DEVICES"
                @change="onChangeField('fingerprint.fingerprintDevice', $event)"
                :value="form.fingerprint.fingerprintDevice"
                show-search
              />
            </base-input-group>
          </a-col>
          <a-col span="12">
            <base-input-group
              name="fingerprintOS"
              label="Operation System"
            >
              <base-select
                :items="OS"
                @change="onChangeField('fingerprint.fingerprintOs', $event)"
                :value="form.fingerprint.fingerprintOs"
                show-search
              />
            </base-input-group>
          </a-col>
        </a-row>

        <a-row class="row" :gutter="20">
          <a-col span="12">
            <base-input-group
              name="fingerprintBrowser"
              label="Browser"
            >
              <base-select
                :items="BROWSERS"
                @change="onChangeField('fingerprint.fingerprintBrowser', $event)"
                :value="form.fingerprint.fingerprintBrowser"
                show-search
              />
            </base-input-group>
          </a-col>
          <a-col span="12">
            <base-input-group
              name="fingerprintBrowserVersion"
              label="Browser Version"
            >
              <base-select
                :items="CHROME_VERSIONS"
                @change="onChangeField('fingerprint.fingerprintBrowserVersion', $event)"
                :value="form.fingerprint.fingerprintBrowserVersion"
                show-search
              />
            </base-input-group>
          </a-col>
        </a-row>

        <a-row class="row">
          <a-button
            @click="generateFingerprint"
            class="generate-button"
            id="generate"
            type="primary"
          >
            {{ $t('utils.generate') }}
          </a-button>
        </a-row>

        <a-row class="row">
          <a-col span="24">
            <h3 class="title">{{ $t('utils.generatedFingerprint') }}</h3>
            <pre>{{ generatedFingerprint }}</pre>
          </a-col>
        </a-row>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'

import { generateFingerprint as generateFingerprintRequest } from '~/api/instance.js';

import { useInstanceFormStore } from '~/stores/instanceFormStore.js'

import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseSelect from '~/components/Base/Form/BaseSelect.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

import { OS } from '~/const/os.js'
import { BROWSERS, CHROME_VERSIONS } from '~/const/browser.js'
import { DEVICES } from '~/const/device.js'

const toast = useToast()

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)

const generating = ref(false)
const fingerprintResult = ref({})

const generatedFingerprint = computed(() => {
  try {
    if (!form.value?.fingerprint?.fingerprintResult) {
      return 'None'
    }

    const result = JSON.parse(form.value.fingerprint.fingerprintResult);
    result.fingerprint?.screen && delete result.fingerprint.screen;

    return result
  } catch (e) {
    console.error(e)
    return 'None'
  }
})

const onChangeEnabled = (enabled) => {
  if (enabled) {
    onChangeField('fingerprint.fingerprintEnabled', true)
    onChangeField('identity.userAgent', null)
    generateFingerprint()
  } else {
    onChangeField('fingerprint.fingerprintEnabled', false)
  }
}

const generateFingerprint = async () => {
  try {
    generating.value = true
    fingerprintResult.value = {}
    const { data } = await generateFingerprintRequest(form.value.fingerprint)
    fingerprintResult.value = data.fingerprint
    onChangeField('fingerprint.fingerprintResult', JSON.stringify(data.fingerprint))
  } catch (e) {
    console.error(e)
    toast.error(e.response?.data?.message || e.message)
  } finally {
    generating.value = false
  }
}
</script>

<style lang="scss" scoped>
.generate-button {
  margin-bottom: 10px;
}
</style>
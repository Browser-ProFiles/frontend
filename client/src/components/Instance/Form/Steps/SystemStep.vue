<template>
  <div class="proxy-step">
    <div class="section">
      <h2 class="title">Timezone</h2>
      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group name="timezone" label="Timezone">
            <base-select
              :items="TIMEZONES"
              @change="onChangeField('system.timezone.timezone', $event)"
              :value="form.system.timezone.timezone"
              show-search
            />
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableFineGrainedTimeZoneDetection"
            label="Disable fine grained time zone detection"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.timezone.disableFineGrainedTimeZoneDetection', $event.target.checked)"
                :checked="form.system.timezone.disableFineGrainedTimeZoneDetection"
              />
            </template>

            <template #description>
              Disables fine grained time zone detection.
            </template>
          </base-input-group>
        </a-col>
        <a-col span="24">
          <base-input-group
            name="disablePerUserTimezone"
            label="Disable per user timezone"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.timezone.disablePerUserTimezone', $event.target.checked)"
                :checked="form.system.timezone.disablePerUserTimezone"
              />
            </template>

            <template #description>
              Disables per-user timezone.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group name="timeZoneForTesting" label="Timezone for testing">
            <template #default>
              <base-select
                :items="TIMEZONES"
                @change="onChangeField('system.timezone.timeZoneForTesting', $event)"
                :value="form.system.timezone.timeZoneForTesting"
                show-search
              />
            </template>

            <template #description>
              The time zone to use for testing. Passed to renderers and plugins on startup.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">Language</h2>

      <a-row class="row" :gutter="20">
        <a-col span="4">
          <base-input-group name="acceptLang" label="Accept lang">
            <base-select
              :items="LANGUAGES"
              @change="onChangeField('system.language.acceptLang', $event)"
              :value="form.system.language.acceptLang"
              show-search
            />
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="reduceAcceptLanguage"
            label="Reduce accept language"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.language.reduceAcceptLanguage', $event.target.checked)"
                :checked="form.system.language.reduceAcceptLanguage"
              />
            </template>

            <template #description>
              Reduce the accept-language http header, and only send one language in the request header:
              <a href="https://github.com/Tanych/accept-language." target="_blank">https://github.com/Tanych/accept-language.</a>
            </template>
          </base-input-group>
        </a-col>
        <a-col span="24">
          <base-input-group
            name="defaultCountryCode"
            label="Default country code"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.language.defaultCountryCode', $event.target.checked)"
                :checked="form.system.language.defaultCountryCode"
              />
            </template>

            <template #description>
              Default country code to be used for search engine localization
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

import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseSelect from '~/components/Base/Form/BaseSelect.vue'
import BaseInputNumber from '~/components/Base/Form/BaseInputNumber.vue'
import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

import { TIMEZONES } from '~/const/timezones.js'
import { LANGUAGES } from '~/const/lang.js'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>

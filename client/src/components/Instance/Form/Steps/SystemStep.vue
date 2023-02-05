<template>
  <div class="proxy-step">
    <div class="section">
      <h2 class="title">{{ $t('form.fields.timezone') }}</h2>
      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group name="timezone" label="Timezone">
            <template #default>
              <base-select
                :items="TIMEZONES"
                @change="onChangeField('system.timezone.timezone', $event)"
                :value="form.system.timezone.timezone"
                show-search
              />
            </template>
            <template v-if="form.proxy.proxyEnabled" #enDescription>
              You enabled proxy. If you want to be more secured, please select appropriate timezone.
            </template>
            <template v-if="form.proxy.proxyEnabled" #ruDescription>
              Вы включили прокси-сервер. Если хотите быть более защищенным, пожалуйста, выберите соответствующий часовой пояс.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="disableFineGrainedTimeZoneDetection"
            label="Disable fine grained time zone detection"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.timezone.disableFineGrainedTimeZoneDetection', $event.target.checked)"
                :checked="form.system.timezone.disableFineGrainedTimeZoneDetection"
              />
            </template>
          </base-input-group>
        </a-col>
        <a-col span="24">
          <base-input-group
            name="disablePerUserTimezone"
            label="Disable per user timezone"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.timezone.disablePerUserTimezone', $event.target.checked)"
                :checked="form.system.timezone.disablePerUserTimezone"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group
            name="timeZoneForTesting"
            label="Timezone for testing"
            advanced
          >
            <template #default>
              <base-select
                :items="TIMEZONES"
                @change="onChangeField('system.timezone.timeZoneForTesting', $event)"
                :value="form.system.timezone.timeZoneForTesting"
                show-search
                advanced
              />
            </template>

            <template #enDescription>
              The time zone to use for testing. Passed to renderers and plugins on startup.
            </template>
            <template #ruDescription>
              Часовой пояс, используемый для тестирования. Передается рендерерам и плагинам при запуске.
            </template>
          </base-input-group>
        </a-col>
      </a-row>
    </div>

    <div class="section">
      <h2 class="title">{{ $t('form.fields.language') }}</h2>

      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group name="acceptLang" label="Language">
            <template #default>
              <base-select
                :items="LANGUAGES"
                @change="onChangeField('system.language.acceptLang', $event, (value) => value.join(','))"
                :value="form.system.language.acceptLang.split(',')"
                mode="multiple"
                show-search
              />
            </template>
            <template v-if="form.proxy.proxyEnabled" #enDescription>
              You enabled proxy. If you want to be more secured, please select appropriate language.
            </template>
            <template v-if="form.proxy.proxyEnabled" #ruDescription>
              Вы включили прокси-сервер. Если хотите быть более защищенным, выберите соответствующий язык.
            </template>
          </base-input-group>

          <p>{{ $t('utils.headerExample') }} Accept-Lang: {{ form.system.language.acceptLang }}</p>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="reduceAcceptLanguage"
            label="Reduce accept language"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.language.reduceAcceptLanguage', $event.target.checked)"
                :checked="form.system.language.reduceAcceptLanguage"
              />
            </template>

            <template #enDescription>
              Reduce the accept-language http header, and only send one language in the request header:
              <a href="https://github.com/Tanych/accept-language." target="_blank">https://github.com/Tanych/accept-language.</a>
            </template>

            <template #ruDescription>
              Сократите http-заголовок accept-language и отправляйте только один язык в заголовке запроса:
              <a href="https://github.com/Tanych/accept-language" target="_blank">https://github.com/Tanych/accept-language</a>.
            </template>
          </base-input-group>
        </a-col>
        <a-col span="24">
          <base-input-group
            name="defaultCountryCode"
            label="Default country code"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('system.language.defaultCountryCode', $event.target.checked)"
                :checked="form.system.language.defaultCountryCode"
              />
            </template>

            <template #enDescription>
              Default country code to be used for search engine localization
            </template>
            <template #ruDescription>
              Код страны по умолчанию, который будет использоваться для локализации поисковой системы
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

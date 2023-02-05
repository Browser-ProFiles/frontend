<template>
  <div class="proxy-step">
    <div class="section">
      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group
            name="userAgent"
            label="User Agent"
          >
            <template #default>
              <base-input
                @change="onChangeField('identity.userAgent', $event.target.value)"
                :value="form.identity.userAgent"
                :disabled="form.fingerprint.fingerprintEnabled"
              />
            </template>
            <template v-if="form.fingerprint.fingerprintEnabled" #enDescription>
              Fingerprint generating is enabled. Don't change this value.
            </template>
            <template v-if="form.fingerprint.fingerprintEnabled" #ruDescription>
              Генерация отпечатков пальцев включена. Не изменяйте это значение.
            </template>
          </base-input-group>

          <!--<a-button @click="generateUserAgent" class="submit-button" type="primary">Generate</a-button>-->
        </a-col>
      </a-row>

      <a-row class="row" :gutter="20">
        <a-col span="24">
          <base-input-group
            name="useMobileUserAgent"
            label="Use mobile user agent"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('identity.useMobileUserAgent', $event.target.checked)"
                :checked="form.identity.useMobileUserAgent"
              />
            </template>

            <template #ruDescription>
              Использовать мобильный агент пользователя chrome.
            </template>

            <template #enDescription>
              Set when Chromium should use a mobile user agent.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="reduceUserAgentMinorVersion"
            label="Reduce user agent minor version"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('identity.reduceUserAgentMinorVersion', $event.target.checked)"
                :checked="form.identity.reduceUserAgentMinorVersion"
              />
            </template>

            <template #enDescription>
              Reduce the minor version number in the User-Agent string. This flag implements phase 4 of User-Agent reduction:
              <a href="https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html" target="blank">
                https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html
              </a>.
            </template>

            <template #ruDescription>
              Уменьшить номер минорной версии в строке User-Agent. Этот флаг реализует четвертую фазу сокращения User-Agent:
              <a href="https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html" target="blank">
                https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html
              </a>.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="reduceUserAgentPlatformOscpu"
            label="Reduce user agent platform oscpu"
            advanced
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('identity.reduceUserAgentPlatformOscpu', $event.target.checked)"
                :checked="form.identity.reduceUserAgentPlatformOscpu"
              />
            </template>

            <template #ruDescription>
              Сокращение платформы и oscpu в строке User-Agent рабочего стола. Этот флаг реализует фазу 5 сокращения User-Agent:
              <a href="https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html" target="blank">
                https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html
              </a>.
            </template>

            <template #enDescription>
              Reduce the platform and oscpu in the desktop User-Agent string. This flag implements phase 5 of User-Agent reduction:
              <a href="https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html" target="blank">
                https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html
              </a>.
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
import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)

/*onMounted(() => {
  onChangeField('identity.userAgent', ua.chrome({ version: '108' }))
})*/
</script>

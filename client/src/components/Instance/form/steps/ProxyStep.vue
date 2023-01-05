<template>
  <div class="proxy-step">
    <div class="section">
      <a-row class="row" :gutter="20">
        <a-col span="12">
          <base-input-group
            name="proxyEnabled"
            label="Enabled"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('proxy.proxyEnabled', $event.target.checked)"
                :value="form.proxy.proxyEnabled"
              />
            </template>
          </base-input-group>
        </a-col>
        <a-col span="12">
          <base-input-group
            name="proxyAuthEnabled"
            label="Authorization required"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('proxy.proxyAuthEnabled', $event.target.checked)"
                :value="form.proxy.proxyAuthEnabled"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row" :gutter="20">
        <a-col span="4">
          <base-input-group name="proxyType" label="Type">
            <base-select
              :items="[
                {
                  label: 'HTTP',
                  value: 'http',
                },
                {
                  label: 'Socks5',
                  value: 'socks5',
                }
              ]"
              @change="onChangeField('proxy.proxyType', $event)"
              :value="form.proxy.proxyType"
            />
          </base-input-group>
        </a-col>
        <a-col span="8">
          <base-input-group name="proxyHost" label="Host">
            <base-input
              @change="onChangeField('proxy.proxyHost', $event)"
              :value="form.proxy.proxyHost"
            />
          </base-input-group>
        </a-col>
        <a-col span="4">
          <base-input-group name="proxyPort" label="Port">
            <base-input-number
              min="1"
              max="65535"
              @change="onChangeField('proxy.proxyPort', $event)"
              :value="form.proxy.proxyPort"
            />
          </base-input-group>
        </a-col>
      </a-row>

      <template v-if="form.proxy.proxyAuthEnabled">
        <a-row class="row" :gutter="20">
          <a-col span="12">
            <base-input-group name="proxyUsername" label="Username">
              <base-input
                @change="onChangeField('proxy.proxyUsername', $event)"
                :value="form.proxy.proxyUsername"
              />
            </base-input-group>
          </a-col>
          <a-col span="12">
            <base-input-group name="proxyPassword" label="Password">
              <base-input
                type="password"
                @change="onChangeField('proxy.proxyPassword', $event)"
                :value="form.proxy.proxyPassword"
              />
            </base-input-group>
          </a-col>
        </a-row>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseSelect from '~/components/Base/Form/BaseSelect.vue'
import BaseInputNumber from '~/components/Base/Form/BaseInputNumber.vue'
import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useNewInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>

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
                @change="onChangeProxyEnabled($event)"
                :checked="form.proxy.proxyEnabled"
              />
            </template>
          </base-input-group>
        </a-col>
        <a-col v-if="form.proxy.proxyEnabled" span="12">
          <base-input-group
            name="proxyAuthEnabled"
            label="Authorization required"
          >
            <template #afterLabel>
              <base-checkbox
                class="checkbox"
                @change="onChangeField('proxy.proxyAuthEnabled', $event.target.checked)"
                :checked="form.proxy.proxyAuthEnabled"
              />
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row v-if="form.proxy.proxyEnabled" class="row" :gutter="20">
        <a-col span="6">
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
        <a-col span="14">
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
              :parser="(value) => Number(value)"
              :value="form.proxy.proxyPort"
            />
          </base-input-group>
        </a-col>
      </a-row>

      <a-row v-if="form.proxy.proxyEnabled && form.proxy.proxyAuthEnabled" class="row" :gutter="20">
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
            <base-input-password
              type="password"
              @change="onChangeField('proxy.proxyPassword', $event)"
              :value="form.proxy.proxyPassword"
            />
          </base-input-group>
        </a-col>
      </a-row>
      
      <template v-if="form.proxy.proxyEnabled">
        <h3 class="note">{{ $t('form.dns.title') }}</h3>
        <p>
          {{ $t('form.dns.description1') }}
          <br>
          {{ $t('form.dns.description2') }}
        </p>
        <a-image
          class="image"
          :src="secureDnsImage"
        />
        <p>{{ $t('form.dns.then') }} <a href="https://whoer.net/dns-leak-test">whoer</a></p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useInstanceFormStore } from '@/stores/instanceFormStore.js'
import secureDnsImage from '@/assets/img/dns/1.jpg';

import BaseInput from '~/components/Base/Form/BaseInput.vue'
import BaseInputPassword from '~/components/Base/Form/BaseInputPassword.vue'
import BaseSelect from '~/components/Base/Form/BaseSelect.vue'
import BaseInputNumber from '~/components/Base/Form/BaseInputNumber.vue'
import BaseCheckbox from '~/components/Base/Form/BaseCheckbox.vue'
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)

const onChangeProxyEnabled = (event) => {
  if (event.target.checked) {
    onChangeField('proxy.proxyEnabled', true);
    onChangeField('checkers.chromeSecurity', true);
  } else {
    onChangeField('proxy.proxyEnabled', false);
  }
}
</script>

<style lang="scss">
.proxy-step {
  .ant-image {
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
}
</style>

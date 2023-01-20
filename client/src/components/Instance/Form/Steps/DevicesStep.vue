<template>
  <div class="devices-step">
    <div class="section">
      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="qsAddFakeBluetoothDevices"
            label="Qs add fake bluetooth devices"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('devices.qsAddFakeBluetoothDevices', $event.target.value)"
                :value="form.devices.qsAddFakeBluetoothDevices"
              />
            </template>

            <template #description>
              Adds fake Bluetooth devices to the quick settings menu.
            </template>
          </base-input-group>
        </a-col>
      </a-row>

      <a-row class="row">
        <a-col span="24">
          <base-input-group
            name="qsAddFakeCastDevices"
            label="Qs add fake cast devices"
            advanced
          >
            <template #default>
              <base-input
                @change="onChangeField('devices.qsAddFakeCastDevices', $event.target.value)"
                :value="form.devices.qsAddFakeCastDevices"
              />
            </template>

            <template #description>
              Adds fake Cast devices to the quick settings menu
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
import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

const store = useInstanceFormStore()
const { onChangeField } = store
const { form } = storeToRefs(store)
</script>

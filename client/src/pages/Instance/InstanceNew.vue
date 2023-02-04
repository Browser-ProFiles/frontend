<template>
  <main-layout>
    <template #header>
      <div class="title">
        New Browser Profile - {{ steps[step].title }}
      </div>
      <base-input-group group="row" name="advancedSettings" label="Advanced settings">
        <a-switch class="switch" :checked="advancedSettings" @change="toggleAdvancedSettings" />
      </base-input-group>
      <div class="mock" />
    </template>
    <template #sider>
      <a-button class="back">
        <router-link to="/profiles">Back</router-link>
      </a-button>

      <a-steps @change="onChangeStep" :current="step" direction="vertical">
        <a-step v-for="item in filteredSteps" :key="item.title" :title="item.title" />
      </a-steps>
    </template>
    <template #default>
      <form>
        <div class="steps-action">
          <a-button v-if="step !== 0" type="dashed" @click="firstStep">&lt;&lt;</a-button>

          <a-button v-if="step > 0" type="danger" @click="prevStep">Previous</a-button>

          <a-button
            v-if="step === filteredSteps.length - 1"
            :disabled="loading"
            type="primary"
            @click="onSendForm"
          >
            Done
          </a-button>

          <a-button v-if="step < filteredSteps.length - 1" type="primary" @click="nextStep">Next</a-button>

          <a-button v-if="step !== filteredSteps.length - 1" type="dashed" @click="lastStep">&gt;&gt;</a-button>
        </div>

        <component :is="filteredSteps[step].content" />
      </form>
    </template>
  </main-layout>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useInstanceFormStore } from '@/stores/instanceFormStore.js'

import BaseInputGroup from '~/components/Base/Form/BaseInputGroup.vue'

import MainLayout from '~/layouts/MainLayout.vue'
import ScreenStep from '~/components/Instance/Form/Steps/ScreenStep.vue'
import ProxyStep from '~/components/Instance/Form/Steps/ProxyStep.vue'
import FingerprintStep from '~/components/Instance/Form/Steps/FingerprintStep.vue'
import IdentityStep from '~/components/Instance/Form/Steps/IdentityStep.vue'
import SystemStep from '~/components/Instance/Form/Steps/SystemStep.vue'
import FontsStep from '~/components/Instance/Form/Steps/FontsStep.vue'
import JavaScriptStep from '~/components/Instance/Form/Steps/JavaScriptStep.vue'
import ExtensionsStep from '~/components/Instance/Form/Steps/ExtensionsStep.vue'
import APIStep from '~/components/Instance/Form/Steps/APIStep.vue'
import DevicesStep from '~/components/Instance/Form/Steps/DevicesStep.vue'
import SecurityStep from '~/components/Instance/Form/Steps/SecurityStep.vue'
import CheckersStep from '~/components/Instance/Form/Steps/CheckersStep.vue'
import RenderStep from '~/components/Instance/Form/Steps/RenderStep.vue'
import CanvasStep from '~/components/Instance/Form/Steps/CanvasStep.vue'
import AdditionalStep from '~/components/Instance/Form/Steps/AdditionalStep.vue'

const steps = [
  {
    title: 'Screen',
    content: ScreenStep,
    advanced: false,
  },
  {
    title: 'Proxy',
    content: ProxyStep,
    advanced: false,
  },
  {
    title: 'Fingerprint',
    content: FingerprintStep,
    advanced: false,
  },
  {
    title: 'Identity',
    content: IdentityStep,
    advanced: false,
  },
  {
    title: 'System',
    content: SystemStep,
    advanced: false,
  },
  {
    title: 'Security',
    content: SecurityStep,
    advanced: false,
  },
  {
    title: 'Checkers',
    content: CheckersStep,
    advanced: false,
  },
  {
    title: 'Fonts',
    content: FontsStep,
    advanced: true,
  },
  {
    title: 'JavaScript',
    content: JavaScriptStep,
    advanced: true,
  },
  {
    title: 'Extensions',
    content: ExtensionsStep,
    advanced: true,
  },
  {
    title: 'API',
    content: APIStep,
    advanced: true,
  },
  {
    title: 'Devices',
    content: DevicesStep,
    advanced: true,
  },
  {
    title: 'Render',
    content: RenderStep,
    advanced: true,
  },
  {
    title: 'Canvas',
    content: CanvasStep,
    advanced: true,
  },
  {
    title: 'Additional',
    content: AdditionalStep,
    advanced: true,
  },
]

const filteredSteps = computed(() => {
  return steps.filter((step) => !step.advanced || advancedSettings.value)
})

const store = useInstanceFormStore()
const { step, loading, advancedSettings } = storeToRefs(store)
const { clearEditName, sendForm, nextStep, prevStep, firstStep, changeStep, toggleAdvancedSettings } = store

const router = useRouter()

const onChangeStep = (step) => changeStep(Math.max(0, Math.min(filteredSteps.value.length - 1, step)))

const lastStep = () => changeStep(filteredSteps.value.length - 1)

const onSendForm = async () => {
  const sent = await sendForm()
  sent && router.push('/profiles')
}

onMounted(() => clearEditName())
</script>

<style lang="scss">
.ant-col {
  &:empty {
    padding: 0 !important;
    margin-top: -10px !important;
    margin-bottom: -10px !important;
  }
}

.back {
  width: 100%;

  margin-bottom: 15px;
}

.title {
  @media screen and (max-width: 869px) {
    margin-bottom: 10px;
  }
}

.steps-action {
  margin-bottom: 20px;

  .ant-btn {
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
}
</style>
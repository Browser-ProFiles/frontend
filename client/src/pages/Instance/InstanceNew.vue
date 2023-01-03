<template>
  <main-layout :title="`New Profile - ${steps[step].title}`">
    <template #header>

    </template>
    <template #sider>
      <a-steps @change="onChangeStep" :current="step" direction="vertical">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
    </template>
    <template #default>
      <form @submit.prevent="sendForm">
        <div class="steps-action">
          <a-button v-if="step !== 0" type="dashed" @click="firstStep">&lt;&lt;</a-button>

          <a-button v-if="step > 0" type="danger" @click="prevStep">Previous</a-button>

          <a-button
            v-if="step === steps.length - 1"
            type="primary"
            @click="sendForm"
          >
            Done
          </a-button>

          <a-button v-if="step < steps.length - 1" type="primary" @click="nextStep">Next</a-button>

          <a-button v-if="step !== steps.length - 1" type="dashed" @click="lastStep">&gt;&gt;</a-button>
        </div>

        <component :is="steps[step].content" />
      </form>
    </template>
  </main-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useNewInstanceFormStore } from '~/stores/newInstanceFormStore.js'

import MainLayout from '~/layouts/MainLayout.vue'
import ScreenStep from '~/components/Instance/form/steps/ScreenStep.vue'
import ProxyStep from '~/components/Instance/form/steps/ProxyStep.vue'
import IdentityStep from '~/components/Instance/form/steps/IdentityStep.vue'
import SystemStep from '~/components/Instance/form/steps/SystemStep.vue'
import FontsStep from '~/components/Instance/form/steps/FontsStep.vue'
import JavaScriptStep from '~/components/Instance/form/steps/JavaScriptStep.vue'
import ExtensionsStep from '~/components/Instance/form/steps/ExtensionsStep.vue'
import APIStep from '~/components/Instance/form/steps/APIStep.vue'
import DevicesStep from '~/components/Instance/form/steps/DevicesStep.vue'
import SecurityStep from '~/components/Instance/form/steps/SecurityStep.vue'
import RenderStep from '~/components/Instance/form/steps/RenderStep.vue'
import CanvasStep from '~/components/Instance/form/steps/CanvasStep.vue'
import AdditionalStep from '~/components/Instance/form/steps/AdditionalStep.vue'

const store = useNewInstanceFormStore()
const { step } = storeToRefs(store)
const { sendForm, nextStep, prevStep, firstStep, changeStep } = store

const steps = [
  {
    title: 'Screen',
    content: ScreenStep,
  },
  {
    title: 'Proxy',
    content: ProxyStep,
  },
  {
    title: 'Identity',
    content: IdentityStep,
  },
  {
    title: 'System',
    content: SystemStep,
  },
  {
    title: 'Fonts',
    content: FontsStep,
  },
  {
    title: 'JavaScript',
    content: JavaScriptStep,
  },
  {
    title: 'Extensions',
    content: ExtensionsStep,
  },
  {
    title: 'API',
    content: APIStep,
  },
  {
    title: 'Devices',
    content: DevicesStep,
  },
  {
    title: 'Security',
    content: SecurityStep,
  },
  {
    title: 'Render',
    content: RenderStep,
  },
  {
    title: 'Canvas',
    content: CanvasStep,
  },
  {
    title: 'Additional',
    content: AdditionalStep,
  },
]

const onChangeStep = (step) => changeStep(Math.max(0, Math.min(steps.length - 1, step)))

const lastStep = () => changeStep(steps.length - 1)
</script>

<style lang="scss">
.steps-action {
  margin-bottom: 20px;

  .ant-btn {
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
}
</style>
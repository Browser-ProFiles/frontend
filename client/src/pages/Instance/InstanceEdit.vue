<template>
  <main-layout :title="`Edit Profile - ${editProfileName} - ${steps[step].title}`">
    <template #sider>
      <a-button class="back">
        <router-link to="/profiles">Back</router-link>
      </a-button>
      <a-steps @change="onChangeStep" :current="step" direction="vertical">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
    </template>
    <template #default>
      <form @submit.prevent="sendEditForm">
        <div class="steps-action">
          <a-button v-if="step !== 0" type="dashed" @click="firstStep">&lt;&lt;</a-button>

          <a-button v-if="step > 0" type="danger" @click="prevStep">Previous</a-button>

          <a-button
            v-if="step === steps.length - 1"
            type="primary"
            @click="sendEditForm"
          >
            Done Editing
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
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import safeString from 'safe-string'

import { useInstanceFormStore } from '@/stores/instanceFormStore.js'

import MainLayout from '~/layouts/MainLayout.vue'
import ScreenStep from '~/components/Instance/Form/Steps/ScreenStep.vue'
import ProxyStep from '~/components/Instance/Form/Steps/ProxyStep.vue'
import IdentityStep from '~/components/Instance/Form/Steps/IdentityStep.vue'
import SystemStep from '~/components/Instance/Form/Steps/SystemStep.vue'
import FontsStep from '~/components/Instance/Form/Steps/FontsStep.vue'
import JavaScriptStep from '~/components/Instance/Form/Steps/JavaScriptStep.vue'
import ExtensionsStep from '~/components/Instance/Form/Steps/ExtensionsStep.vue'
import APIStep from '~/components/Instance/Form/Steps/APIStep.vue'
import DevicesStep from '~/components/Instance/Form/Steps/DevicesStep.vue'
import SecurityStep from '~/components/Instance/Form/Steps/SecurityStep.vue'
import RenderStep from '~/components/Instance/Form/Steps/RenderStep.vue'
import CanvasStep from '~/components/Instance/Form/Steps/CanvasStep.vue'
import AdditionalStep from '~/components/Instance/Form/Steps/AdditionalStep.vue'

const store = useInstanceFormStore()
const { step, editProfileName } = storeToRefs(store)
const { sendEditForm, setEditName, nextStep, prevStep, firstStep, changeStep } = store

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

const route = useRoute()
const router = useRouter()

const onChangeStep = (step) => changeStep(Math.max(0, Math.min(steps.length - 1, step)))

const lastStep = () => changeStep(steps.length - 1)

onMounted(() => {
  if (!route.params.name) {
    router.push('/')
  }

  setEditName(safeString(route.params.name))
})
</script>

<style lang="scss">
.back {
  width: 100%;

  margin-bottom: 15px;
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
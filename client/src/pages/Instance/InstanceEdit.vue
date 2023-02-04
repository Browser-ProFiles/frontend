<template>
  <main-layout>
    <template #header>
      <div class="title">
        {{ $t('utils.editing') }}: {{ editProfileName ?? '' }} - {{ filteredSteps[step].title }}
      </div>
      <base-input-group group="row" name="advancedSettings" :label="$t('utils.advancedSettings')">
        <a-switch class="switch" :checked="advancedSettings" @change="toggleAdvancedSettings" />
      </base-input-group>
      <div class="mock" />
    </template>
    <template #sider>
      <a-button class="back">
        <router-link to="/profiles">{{ $t('utils.back') }}</router-link>
      </a-button>
      <a-steps @change="onChangeStep" :current="step" direction="vertical">
        <a-step v-for="item in filteredSteps" :key="item.title" :title="item.title" />
      </a-steps>
    </template>
    <template #default>
      <a-spin :delay="350" :spinning="loading" :tip="$t('utils.loading')">
        <form @submit.prevent="onSendForm">
          <div class="steps-action">
            <a-button v-if="step !== 0" type="dashed" @click="firstStep">&lt;&lt;</a-button>

            <a-button v-if="step > 0" type="danger" @click="prevStep">{{ $t('pagination.prev') }}</a-button>

            <a-button
              v-if="step === filteredSteps.length - 1"
              :disabled="loading"
              type="primary"
              @click="onSendForm"
            >
              {{ $t('utils.doneEditing') }}
            </a-button>

            <a-button v-if="step < filteredSteps.length - 1" type="primary" @click="nextStep">{{ $t('pagination.next') }}</a-button>

            <a-button v-if="step !== filteredSteps.length - 1" type="dashed" @click="lastStep">&gt;&gt;</a-button>
          </div>

          <component :is="filteredSteps[step].content" />
        </form>
      </a-spin>
    </template>
  </main-layout>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

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

const i18n = useI18n()

const { t } = i18n

const steps = [
  {
    title: t('stepsSider.screen'),
    content: ScreenStep,
    advanced: false,
  },
  {
    title: t('stepsSider.proxy'),
    content: ProxyStep,
    advanced: false,
  },
  {
    title: t('stepsSider.fingerprint'),
    content: FingerprintStep,
    advanced: false,
  },
  {
    title: t('stepsSider.identity'),
    content: IdentityStep,
    advanced: false,
  },
  {
    title: t('stepsSider.system'),
    content: SystemStep,
    advanced: false,
  },
  {
    title: t('stepsSider.security'),
    content: SecurityStep,
    advanced: false,
  },
  {
    title: t('stepsSider.checkers'),
    content: CheckersStep,
    advanced: false,
  },
  {
    title: t('stepsSider.fonts'),
    content: FontsStep,
    advanced: true,
  },
  {
    title: t('stepsSider.javascript'),
    content: JavaScriptStep,
    advanced: true,
  },
  {
    title: t('stepsSider.extensions'),
    content: ExtensionsStep,
    advanced: true,
  },
  {
    title: t('stepsSider.api'),
    content: APIStep,
    advanced: true,
  },
  {
    title: t('stepsSider.devices'),
    content: DevicesStep,
    advanced: true,
  },
  {
    title: t('stepsSider.render'),
    content: RenderStep,
    advanced: true,
  },
  {
    title: t('stepsSider.canvas'),
    content: CanvasStep,
    advanced: true,
  },
  {
    title: t('stepsSider.additional'),
    content: AdditionalStep,
    advanced: true,
  },
]

const filteredSteps = computed(() => {
  return steps.filter((step) => !step.advanced || advancedSettings.value)
})

const store = useInstanceFormStore()
const { step, editProfileName, loading, advancedSettings } = storeToRefs(store)
const { sendEditForm, setEditName, nextStep, prevStep, firstStep, changeStep, toggleAdvancedSettings } = store

const route = useRoute()
const router = useRouter()

const onChangeStep = (step) => changeStep(Math.max(0, Math.min(filteredSteps.value.length - 1, step)))

const lastStep = () => changeStep(filteredSteps.value.length - 1)

const onSendForm = async () => {
  const sent = await sendEditForm()
  sent && router.push('/profiles')
}

onMounted(() => {
  if (!route.params.name) {
    router.push('/profiles')
  }

  setEditName(route.params.name)
})
</script>

<style lang="scss">
.ant-steps {
  .ant-steps-item {
    .ant-steps-item-content {
      .ant-steps-item-title {
        line-height: 1.2;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.title {
  @media screen and (max-width: 1053px) {
    padding: 0 20px;

    text-align: center;
  }
}
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
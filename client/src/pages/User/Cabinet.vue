<template>
  <main-layout :title="$t('cabinet.title')">
    <div class="cabinet">
      <a-spin :delay="350" :spinning="loading" :tip="$t('utils.loading')">
        <template v-if="!loading && user">
          <div class="cabinet__field">
            <span class="cabinet__field-title">{{ $t('user.username') }}:</span> {{ user.username }}
          </div>
          <div class="cabinet__field">
            <span class="cabinet__field-title">{{ $t('user.email') }}:</span> {{ user.email }}
          </div>
          <div v-if="user.subscription" class="cabinet__field cabinet__field-spaced">
            <span class="cabinet__field-title">{{ $t('user.subscription') }}</span> <br>
            <span v-html="$t('cabinet.subscriptionInfo', {
              subscriptionName: user?.subscription?.name,
              subscriptionMaxProfiles: user?.subscription?.maxProfiles,
              subscriptionUntilDate: subscriptionUntilDate,
            })"></span>
          </div>
        </template>

        <div class="cabinet__actions">
          <a-button>
            <router-link to="/cabinet/subscriptions">{{ $t('cabinet.manageSubscription') }}</router-link>
          </a-button>
        </div>

        <div class="cabinet__download download">
          <h3 class="download__title">{{ $t('download.title') }}</h3>
          <div class="download__subtitle">{{ $t('download.description') }}</div>
          <div class="download__platforms platforms">
            <div class="platforms__item platform">
              <img :src="theme === THEME_DEFAULT ? windowsIcon : windowsLightIcon" class="platform__icon" alt="Windows" />
              <a-button @click="downloadFile('windows')" class="platform__download">{{ $t('utils.download') }} (v1.0)</a-button>
            </div>
            <div class="platforms__item platform">
              <img :src="theme === THEME_DEFAULT ? macosIcon : macosLightIcon" class="platform__icon" alt="MacOS" />
              <a-button @click="onDownloadMacApp"  class="platform__download">
                {{ $t('utils.download') }} (v1.0)
              </a-button>
              <div @click="setMacosInstallModalOpened(true)" class="platform__note">{{ $t('utils.note') }}</div>
              <!--<a-button @click="downloadFile('macosApple')"  class="platform__download">
                {{ $t('utils.download') }} (Apple Processor) (v1.0)
              </a-button>-->
            </div>
           <div class="platforms__item platform">
              <img :src="theme === THEME_DEFAULT ? linuxIcon : linuxLightIcon" class="platform__icon" alt="Linux" />
              <a-button @click="downloadFile('linux')"  class="platform__download">{{ $t('utils.download') }} (v1.0)</a-button>
            </div>
          </div>
        </div>
      </a-spin>
    </div>
  </main-layout>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'

import { useUserStore } from '@/stores/userStore.js'
import { useModalStore } from '@/stores/modalStore.js'
import { THEME_DEFAULT, useAppStore } from '@/stores/appStore.js'

import { downloadFile } from '@/helpers/download.js'

import windowsIcon from '@/assets/img/platform/windows.svg'
import windowsLightIcon from '@/assets/img/platform/windows_light.svg'
import macosIcon from '@/assets/img/platform/macos.svg'
import macosLightIcon from '@/assets/img/platform/macos_light.svg'
// import linuxIcon from '@/assets/img/platform/linux.svg'
// import linuxLightIcon from '@/assets/img/platform/linux_light.svg'

import MainLayout from '@/layouts/MainLayout.vue'

const modalStore = useModalStore()
const userStore = useUserStore()
const appStore = useAppStore()
const { fetchUser } = userStore
const { setMacosInstallModalOpened } = modalStore
const { loading, user, subscriptionUntilDate } = storeToRefs(userStore)
const { theme } = storeToRefs(appStore)
const toast = useToast()

onMounted(() => {
  fetchUser()
})

const onDownloadMacApp = () => {
  setMacosInstallModalOpened(true)
  downloadFile('macosIntel')
}
</script>

<style lang="scss">
.dark {
  .download {
    background: #000 !important;
    color: #fff !important;
  }
}

.default {
  .download {
    background: #fff !important;
  }
}
</style>

<style lang="scss" scoped>
.cabinet {
  &__field {
    font-size: 16px;

    &-spaced {
      margin-top: 10px;
    }

    &-title {
      margin-right: 5px;

      font-size: 17px;
      font-weight: 600;
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    gap: 15px;

    margin-top: 20px;
  }

  &__download {
    margin: 10px 0;
  }
}

.download {
  margin-top: 20px;
  padding: 20px 40px;

  border-radius: 10px;

  @media screen and (max-width: 400px) {
    padding: 30px 20px;
  }

  &__title {
    font-size: 25px;
    line-height: 1;
  }

  &__subtitle {
    font-size: 17px;
  }
}

.platforms {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;

  margin: 40px 0;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
}

.platform {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 95%;
  }

  &__icon {
    width: 70px;
  }

  &__download {
    margin-top: 10px;

    &:first-of-type {
      margin-top: 20px;
    }
  }

  &__note {
    font-size: 13px;

    color: #1aa7da;

    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

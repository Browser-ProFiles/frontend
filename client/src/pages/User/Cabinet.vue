<template>
  <main-layout title="Cabinet">
    <div class="cabinet">
      <a-spin :delay="350" :spinning="loading" tip="Loading...">
        <template v-if="!loading && user">
          <div class="cabinet__field">
            <span class="cabinet__field-title">Username:</span> {{ user.username }}
          </div>
          <div class="cabinet__field">
            <span class="cabinet__field-title">Email:</span> {{ user.email }}
          </div>
          <div v-if="user.subscription" class="cabinet__field cabinet__field-spaced">
            <span class="cabinet__field-title">Subscription</span> <br>
            Plan <b>"{{ user.subscription.name }}"</b> is activated until
            {{ subscriptionUntilDate }} <br>
            You can create up to <b>{{ user.subscription.maxProfiles }}</b> profiles
          </div>
        </template>

        <div class="cabinet__actions">
          <a-button>
            <router-link to="/cabinet/subscriptions">Manage subscriptions</router-link>
          </a-button>
        </div>

        <div class="cabinet__download download">
          <h3 class="download__title">Download application</h3>
          <div class="download__subtitle">You can launch profiles only from desktop client</div>
          <div class="download__platforms platforms">
            <div class="platforms__item platform">
              <img :src="windowsIcon" class="platform__icon" alt="Windows" />
              <a-button @click="downloadFile('windows')" class="platform__download">Download (v1.0)</a-button>
            </div>
            <div class="platforms__item platform">
              <img :src="macosIcon" class="platform__icon" alt="MacOS" />
              <a-button @click="downloadFile('macosIntel')"  class="platform__download">
                Download (Intel) (v1.0)
              </a-button>
              <a-button @click="downloadFile('macosApple')"  class="platform__download">
                Download (Apple Processor) (v1.0)
              </a-button>
            </div>
            <div class="platforms__item platform">
              <img :src="linuxIcon" class="platform__icon" alt="Linux" />
              <a-button @click="downloadFile('linux')"  class="platform__download">Download (v1.0)</a-button>
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

import { downloadFile } from '@/helpers/download.js'

import windowsIcon from '@/assets/img/platform/windows.svg'
import macosIcon from '@/assets/img/platform/macos.svg'
import linuxIcon from '@/assets/img/platform/linux.svg'

import MainLayout from '@/layouts/MainLayout.vue'

const userStore = useUserStore()
const { fetchUser } = userStore
const { loading, user, subscriptionUntilDate } = storeToRefs(userStore)
const toast = useToast()

onMounted(() => {
  fetchUser()
})
</script>

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
  margin-top: 30px;

  padding: 30px 40px;

  border-radius: 10px;

  background: #fff;

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
}
</style>
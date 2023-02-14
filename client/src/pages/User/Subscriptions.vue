<template>
  <main-layout title="Subscriptions">
    <div class="subscriptions">
      <div class="subscriptions__current">
        {{ $t('subscriptions.current') }}: <b>{{ user?.subscription?.name }}</b>
      </div>

      <a-spin :delay="350" :spinning="loading" :tip="$t('utils.loading')">
        <ul class="subscriptions__list">
        <li
          v-for="item in list"
          class="subscriptions__item subscription"
          :class="{
              'subscription_current': user?.subscription?.name === item.name
            }"
        >
          <h3 class="subscription__name">
            {{ item.name }}
            <template v-if="user?.subscription?.name === item.name">
              ({{ $t('utils.current') }})
            </template>
          </h3>
          <div class="subscription__price">
            <span class="subscription__currency">$</span>
            <span class="subscription__value">{{ item.price }}</span>
          </div>
          <div class="subscription__term">/ {{ $t('utils.month') }}</div>

          <ul class="subscription__features features">
            <li class="features__item feature">
              {{ $t('subscriptions.maxProfiles') }}: <b>{{ item.maxProfiles }}</b>
            </li>
            <li class="features__item feature">
              <template v-if="item.maxProfiles > 25">
                {{ $t('subscriptions.support.priority') }}
              </template>
              <template v-else-if="item.maxProfiles > 5">
                {{ $t('subscriptions.support.basic') }}
              </template>
              <template v-else-if="item.maxProfiles < 3">
                {{ $t('subscriptions.support.no') }}
              </template>
            </li>
          </ul>

          <!--<a-popconfirm
            v-if="user?.subscription?.name === item.name"
            placement="topLeft"
            ok-text="Yes"
            cancel-text="No"
            @confirm="onCancel"
          >
            <template #title>
              {{ $t('utils.areYouSure') }}
            </template>
            <a-button class="subscription__switch">{{ $t('utils.cancel') }}</a-button>
          </a-popconfirm>-->
          <template v-if="user?.subscription?.name !== item.name">
            <p class="subscription__change" v-if="user?.subscription?.id !== 1">
              {{ $t('subscriptions.change') }}
            </p>
            <a-button v-else class="subscription__switch" @click="onSwitch(item.id)">
              {{ $t('utils.switch') }}
            </a-button>
          </template>
          <template v-else>
            <span class="subscription__activated" v-html="$t('cabinet.subscriptionInfoShort', {
              subscriptionUntilDate: subscriptionUntilDate,
            })"></span>
          </template>
        </li>
      </ul>
      </a-spin>
    </div>
  </main-layout>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'

import MainLayout from '@/layouts/MainLayout.vue'

import { useUserStore } from '@/stores/userStore.js'
import { useModalStore } from '@/stores/modalStore.js'
import { useAppStore } from '@/stores/appStore.js'

import { getSubscriptions } from '@/api/user.js'
import {formatDate} from "@/helpers/date.js";

const toast = useToast()

const userStore = useUserStore()
const list = ref([])
const loading = ref(false)

const appStore = useAppStore()
const { setSubscriptionId } = appStore

const modalStore = useModalStore()
const { setPaymentMethodModalOpened } = modalStore

const { fetchUser } = userStore
const { user } = storeToRefs(userStore)

const subscriptionUntilDate = computed(() => {
  return formatDate(Number(user.value?.subscription?.activeUntil) * 1000)
})

const fetchSubscriptions = async () => {
  try {
    loading.value = true
    const { data } = await getSubscriptions()
    list.value = data.filter((item) => item.price > 0)
  } catch (e) {
    console.error(e)
    toast.error(e.response?.data?.message || e.message)
  } finally {
    loading.value = false
  }
}

const onSwitch = (id) => {
  setSubscriptionId(id)
  setPaymentMethodModalOpened(true);
}

const onCancel = () => {}

onMounted(() => {
  fetchUser()
  fetchSubscriptions()
})
</script>

<style lang="scss">
.dark {
  .subscriptions {
    .subscription {
      background: #000 !important;
      color: #fff;
      border: 1px solid darken(#fff, 80%);

      &_current,
      &:hover {
        box-shadow: 5px 5px 5px 0 rgba(255, 255, 255, 0.35) !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.subscriptions {
  &__current {
    font-size: 20px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;

    margin-top: 40px;

    list-style: none;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    }
  }

  .subscription {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    border-radius: 20px;

    background: #fff;
    border: 1px solid lighten(#000, 80%);

    transition: all 0.4s;

    @media screen and (max-width: 500px) {
      text-align: center;
    }

    &_current,
    &:hover {
      transform: translateY(-15px) scale(1.04);

      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.08);

      border: 1px solid lighten(#000, 90%);
    }

    &__activated {
      font-weight: 600;
      text-decoration: underline;
    }

    &__name {
      margin-bottom: 5px;

      font-size: 40px;
      font-weight: 600;
      line-height: 1;

      &_current {
        font-size: 41px;
        font-weight: 700;
      }
    }

    &__change {
      font-size: 14px;
      text-decoration: underline;

      text-align: center;
    }

    &__price,
    &__term {
      line-height: 1;
    }

    &__value {
      font-size: 27px;
    }

    &__currency {
      font-size: 25px;
    }

    &__term {
      margin-bottom: 30px;

      font-size: 20px;
    }

    &__switch {
      width: 150px;
      height: 32px;
    }

    .features {
      margin-bottom: 20px;

      list-style: none;

      font-size: 20px;
    }
  }
}
</style>

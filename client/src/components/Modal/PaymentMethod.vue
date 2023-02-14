<template>
  <a-modal
    class="payment-method-modal"
    @cancel="onClose"
    @close="onClose"
    @ok="onClose"
    :ok-text="$t('modal.paymentmethod.ok')"
    :title="$t('modal.paymentmethod.title')"
    :visible="paymentMethodModalOpened"
    :cancel-button-props="{ style: { display: 'none' } }"
  >
    <div class="payment-method-modal__methods methods">
      <div class="methods__item method">
        <img :src="FreekassaIcon" alt="FreeKassa" class="method__img">
        <div class="method__types">
          <a-button @click="onChoose(PAYMENT_METHOD_FREEKASSA, PAYMENT_TYPE_PAYMENT)" class="method__type">Единоразовый платеж</a-button>
          <a-button class="method__type" disabled>Подписка (недоступно)</a-button>
        </div>
      </div>

      <!--<div class="methods__item method">
        <img :src="YookassaIcon" alt="YooKassa" class="method__img">
        <div class="method__types">
          <a-button @click="onChoose(PAYMENT_METHOD_YOOMONEY, PAYMENT_TYPE_PAYMENT)" class="method__type">Единоразовый платеж</a-button>
          <a-button @click="onChoose(PAYMENT_METHOD_YOOMONEY, PAYMENT_TYPE_SUB)" class="method__type">Подписка</a-button>
        </div>
      </div>-->
    </div>
  </a-modal>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore.js'
import { useAppStore } from '@/stores/appStore.js'
import { getFreekassaPaymentUrl } from '@/api/payment.js'
import {
  PAYMENT_TYPE_SUB,
  PAYMENT_TYPE_PAYMENT,

  PAYMENT_METHOD_FREEKASSA,
  PAYMENT_METHOD_YOOMONEY
} from '@/const/payment.js'

import FreekassaIcon from '~/assets/img/payment/freekassa.png'
import YookassaIcon from '~/assets/img/payment/yookassa.svg'

const appStore = useAppStore()
const { subscriptionId } = storeToRefs(appStore)
const { setSubscriptionId } = appStore

const modalStore = useModalStore()
const { paymentMethodModalOpened } = storeToRefs(modalStore)
const { setPaymentMethodModalOpened } = modalStore

const onChoose = (method, type) => {
  if (method === PAYMENT_METHOD_FREEKASSA) {
    fetchFreekassaPaymentUrl(subscriptionId.value, type)
  }

  if (method === PAYMENT_METHOD_YOOMONEY) {
    fetchYooMoneyPaymentUrl(subscriptionId.value, type);
  }
}

const fetchFreekassaPaymentUrl = async (id) => {
  try {
    const { data } = await getFreekassaPaymentUrl({
      subscriptionId: id,
    })
    setTimeout(() => {
      window.open(data.location, '_blank');
    })
  } catch (e) {
    console.error(e)
    toast.error(e.response?.data?.message || e.message)
  }
}

const fetchYooMoneyPaymentUrl = () => {}

const onClose = () => {
  setSubscriptionId(null)
  setPaymentMethodModalOpened(false)
}
</script>

<style lang="scss">
.payment-method-modal {
  width: 700px !important;

  @media screen and (max-width: 768px) {
    width: 80vw !important;
  }

  @media screen and (max-width: 510px) {
    width: 90vw !important;
  }

  &__code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,Courier, monospace;

    margin: 10px;
  }
}
</style>

<style lang="scss" scoped>
.methods {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .method {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__name {
      font-size: 18px;
      font-weight: 700;
    }

    &__img {
      display: flex;
      justify-content: center;

      width: 150px;
    }

    &__types {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 25px;

      margin: 10px 0;

      @media screen and (max-width: 768px) {
        gap: 10px;
      }
    }

    &__type {
      min-width: 150px;
    }
  }
}
</style>

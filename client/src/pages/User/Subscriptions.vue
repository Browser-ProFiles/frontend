<template>
  <main-layout title="Subscriptions">
    <div class="subscriptions">
      <div class="subscriptions__current">
        Current subscription: {{ user?.subscription?.name }}
      </div>

      <ul class="subscriptions__list">
        <li v-for="item in list" class="subscriptions__item subscription">
          <h3
            class="subscription__name"
            :class="{
              'subscription__name_current': user?.subscription?.name === item.name
            }"
          >
            {{ item.name }}
          </h3>
          <div class="subscription__price">
            <span class="subscription__value">{{ item.price }}</span>
            <span class="subscription__currency">$</span>
          </div>
          <ul class="subscription__features features">
            <li class="features__item feature">
              Max profiles: {{ item.maxProfiles }}
            </li>
            <li class="features__item feature">
              <template v-if="item.maxProfiles > 25">
                Priority Support
              </template>
              <template v-else-if="item.maxProfiles > 5">
                Basic Support
              </template>
              <template v-else-if="item.maxProfiles < 3">
                No Support
              </template>
            </li>
          </ul>
          <a-button :disabled="user?.subscription?.name === item.name" class="subscription__buy">
            <template v-if="user?.subscription?.name === item.name">
              Current
            </template>
            <template v-else>
              Switch
            </template>
          </a-button>
        </li>
      </ul>
    </div>
  </main-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import MainLayout from '@/layouts/MainLayout.vue'

import { useUserStore } from '@/stores/userStore.js'

import { getSubscriptions } from '@/api/user.js'

const userStore = useUserStore()
const list = ref([])

const { fetchUser } = userStore
const { user } = storeToRefs(userStore)

const fetchSubscriptions = async () => {
  const { data } = await getSubscriptions()
  list.value = data.filter((item) => item.price > 0)
}

onMounted(() => {
  fetchUser()
  fetchSubscriptions()
})
</script>

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
  }

  .subscription {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    min-height: 500px;

    padding: 20px;

    border-radius: 20px;

    background: #fff;

    transition: all 0.4s;

    &:hover {
      transform: translateY(-25px) scale(1.04);
    }

    &__name {
      font-size: 30px;
      font-weight: 600;

      &_current {
        font-size: 31px;
        font-weight: 700;
      }
    }

    .features {
      list-style: none;
    }
  }
}
</style>
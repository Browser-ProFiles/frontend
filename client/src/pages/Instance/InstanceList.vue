<template>
  <main-layout :title="$t('profiles.title')">
    <template #sider-wrapper></template>
    <template #default>
      <a-button
        :disabled="user?.subscription?.maxProfiles <= list.length"
        type="submit"
        role="link"
      >
        <router-link to="/profile/new">
          {{ $t('profiles.new') }} ({{ realLength }} / {{ user?.subscription?.maxProfiles }})
        </router-link>
      </a-button>

      <p class="note">
        <template v-if="realLength > user?.subscription?.maxProfiles">
          <b>{{ $t('subscriptions.revenue', {
            realLength,
          }) }}</b>
          <br>
        </template>
        <b>{{ $t('utils.note') }}: {{ $t('download.description') }}.</b>
        {{ $t('utils.downloadIt') }} <router-link to="/cabinet">{{ $t('utils.here') }}</router-link>.
      </p>

      <a-list
        :loading="loading"
        :data-source="list"
        :pagination="{
          pageSize: 5,
          showSizeChanger: false
        }"
        class="list"
        item-layout="horizontal"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <router-link class="title" :to="`/profile/edit/${item.name}`">{{ item.name }}</router-link>
              </template>
              <template #description>
                <div v-if="item.form.fingerprint?.fingerprintEnabled">
                  {{ $t('domainTerms.fingerprint') }}: {{ item.form.fingerprint?.fingerprintOs }} / {{ item.form.fingerprint?.fingerprintBrowser }} {{ item.form.fingerprint?.fingerprintBrowserVersion }}
                </div>
                <div v-else>{{ $t('domainTerms.noFingerprint') }}</div>
                <div v-if="item.form.system?.timezone?.timezone">
                  {{ $t('domainTerms.timezone') }}: {{ item.form.system?.timezone?.timezone }}
                </div>
                <div v-if="item.form.proxy?.proxyEnabled">
                  {{ $t('domainTerms.proxy') }}: {{ item.form.proxy?.proxyHost }}:{{ item.form.proxy?.proxyPort }}
                </div>
              </template>
            </a-list-item-meta>

            <template #actions>
              <a-button class="action-button" type="primary">
                <router-link :to="`/profile/edit/${item.name}`">{{ $t('utils.edit') }}</router-link>
              </a-button>
              <a-button class="action-button" @click="removeInstance(item.name)" type="danger">
                {{ $t('utils.delete') }}
              </a-button>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </template>
  </main-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

import { getInstanceList, deleteInstance } from '@/api/instance.js'

import MainLayout from '@/layouts/MainLayout.vue'
import { useUserStore } from '@/stores/userStore.js'

const toast = useToast()
const i18n = useI18n()

const { t } = i18n

const loading = ref(false)
const realLength = ref(0)
const list = ref([])

const userStore = useUserStore()
const { fetchUser } = userStore
const { user } = storeToRefs(userStore)

const fetchInstances = async () => {
  try {
    loading.value = true
    const { data } = await getInstanceList()
    list.value = data?.profiles.map((profile) => ({
      ...profile,
      form: profile.form ? JSON.parse(profile.form) : {},
    }))
    realLength.value = data.realLength
  } catch (e) {
    console.error(e)
    toast.error(`${t('messages.error.profiles')}: ${e.response?.data?.message || e.message}`)
  } finally {
    loading.value = false
  }
}

const removeInstance = async (name) => {
  try {
    loading.value = true
    await deleteInstance(name)
    list.value = list.value.filter((item) => item.name !== name)
    realLength.value -= 1
    toast.success(`${t('messages.success.instanceRemove')}: ${name}`)
  } catch (e) {
    console.error(e)
    toast.error(`${t('messages.error.instanceRemove')}: ${e.response?.data?.message || e.message}`)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUser()
  fetchInstances()
})
</script>

<style lang="scss">
.ant-list-item-meta-title {
  .title {
    line-break: anywhere;
  }
}

.ant-list-item-action {
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
}
</style>

<style lang="scss" scoped>
.note {
  margin-top: 10px;
  margin-bottom: 15px;
}

.title {
  font-size: 20px;
}
</style>

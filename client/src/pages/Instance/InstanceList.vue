<template>
  <main-layout title="Profiles">
    <template #sider-wrapper></template>
    <template #default>
      <a-button type="submit" role="link">
        <router-link to="/profile/new">New Browser Profile</router-link>
      </a-button>

      <p class="note">
        <b>Note: You can launch profiles only from desktop application.</b>
        Download it <router-link to="/download">here</router-link>.
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
                  Fingerprint: {{ item.form.fingerprint?.fingerprintOs }} / {{ item.form.fingerprint?.fingerprintBrowser }} {{ item.form.fingerprint?.fingerprintBrowserVersion }}
                </div>
                <div v-else>No fingerprint</div>
                <div v-if="item.form.system?.timezone?.timezone">
                  Timezone: {{ item.form.system?.timezone?.timezone }}
                </div>
                <div v-if="item.form.proxy?.proxyEnabled">
                  Proxy: {{ item.form.proxy?.proxyHost }}:{{ item.form.proxy?.proxyPort }}
                </div>
              </template>
            </a-list-item-meta>

            <template #actions>
              <a-button class="action-button" type="primary">
                <router-link :to="`/profile/edit/${item.name}`">Edit</router-link>
              </a-button>
              <a-button class="action-button" @click="removeInstance(item.name)" type="danger">
                Delete
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

import { getInstanceList, deleteInstance } from '@/api/instance.js'

import MainLayout from '@/layouts/MainLayout.vue'

const loading = ref(false)
const list = ref([])
const toast = useToast()

const fetchInstances = async () => {
  try {
    loading.value = true
    const { data } = await getInstanceList()
    list.value = data?.profiles.map((profile) => ({
      ...profile,
      form: profile.form ? JSON.parse(profile.form) : {},
    }))
  } catch (e) {
    console.error(e)
    toast.error(`Failed to fetch profiles: ${e.response?.data?.message || e.message}`)
  } finally {
    loading.value = false
  }
}

const removeInstance = async (name) => {
  try {
    loading.value = true
    await deleteInstance(name)
    list.value = list.value.filter((item) => item.name !== name)
    toast.success(`Successfully removed profile: ${name}`)
  } catch (e) {
    console.error(e)
    toast.error(`Failed to remove profile: ${e.response?.data?.message || e.message}`)
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchInstances())
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
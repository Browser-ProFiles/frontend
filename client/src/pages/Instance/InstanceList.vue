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

      <a-list :loading="loading" :data-source="list" class="list" item-layout="horizontal">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              :description="item.description || 'No description'"
            >
              <template #title>
                <router-link :to="`/profile/edit/${item.name}`">{{ item.name }}</router-link>
              </template>
              <template #avatar>
                <Avatar :size="45" :name="item.name" />
              </template>
            </a-list-item-meta>

            <template #actions>
              <a-button type="primary">
                <router-link :to="`/profile/edit/${item.name}`">Edit</router-link>
              </a-button>
              <a-button @click="removeInstance(item.name)" type="danger">
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
import Avatar from 'vue-boring-avatars'
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
    list.value = data?.profiles
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

<style lang="scss" scoped>
.note {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>
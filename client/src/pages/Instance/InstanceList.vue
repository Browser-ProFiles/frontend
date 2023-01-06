<template>
  <main-layout title="Profiles">
    <template #sider-wrapper></template>
    <template #default>
      <a-button type="submit" role="link">
        <router-link to="/profile/new">New Profile</router-link>
      </a-button>

      <p class="note">
        <b>Note: You can launch profiles only from desktop application.</b>
        Download it <router-link to="/download">here</router-link>.
      </p>

      <a-list class="list" item-layout="horizontal" :data-source="profilesList">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              :description="item.description"
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
              <a-button type="danger">
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
import Avatar from 'vue-boring-avatars'

import MainLayout from '@/layouts/MainLayout.vue'

const profilesList = [
  {
    name: 'Profile_1',
    description: 'Example profile'
  },
]
</script>

<style lang="scss" scoped>
.note {
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>
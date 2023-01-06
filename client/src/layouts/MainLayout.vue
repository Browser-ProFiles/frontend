<template>
  <a-layout>
    <a-layout-header
      :class="{
        'has-sidebar': route.meta.hasSidebar,
      }"
      class="header"
    >
      <slot name="header">{{ title }}</slot>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        v-if="route.meta.hasSidebar"
        class="sider"
        :width="250"
        theme="light"
      >
        <slot name="sider" />
      </a-layout-sider>
      <a-layout-content
        :class="{
          'has-sidebar': route.meta.hasSidebar,
        }"
        class="content"
      >
        <slot />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: 'SandBox'
  }
})

const route = useRoute()
</script>

<style lang="scss" scoped>
.header,
.content {
  &.has-sidebar {
    margin-left: 250px;
  }
}

.header {
  height: 60px;

  font-size: 24px;

  background: #f7f7f7;
}

.sider {
  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  height: 100vh;

  overflow: auto;

  padding: 20px;
}

.content {
  overflow-y: scroll;
  min-height: calc(100vh - 60px - 70px);

  padding: 15px 50px;
}
</style>

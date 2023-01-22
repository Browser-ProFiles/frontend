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
    <a-layout-footer class="footer">
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: 'Browser ProFiles'
  }
})

const route = useRoute()
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
  .ant-layout {
    flex-direction: column !important;
    min-height: calc(100vh - 60px) !important;
  }

  .ant-layout-sider {
    position: static !important;
    width: 100vw !important;
    min-width: 100vw !important;
    max-width: 100vw !important;
    flex: unset !important;

    height: auto !important;
    background-color: inherit !important;
  }

  .header {
    margin-left: 0 !important;
  }

  .ant-layout-content {
    width: 100% !important;
    margin-left: 0 !important;
  }

  .content {
    min-height: unset !important;
  }
}
</style>

<style lang="scss" scoped>
.header,
.content {
  &.has-sidebar {
    margin-left: 250px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  font-size: 24px;

  background: #f7f7f7;

  @media screen and (max-width: 869px) {
    flex-direction: column;

    min-height: 60px;
    height: auto;

    line-height: 1;

    padding: 10px 0;
  }
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
  min-height: calc(100vh - 60px);

  padding: 15px 50px;
}

.footer {
  &:empty {
    display: none;
  }
}
</style>

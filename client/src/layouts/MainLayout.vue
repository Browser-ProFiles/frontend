<template>
  <a-layout>
    <a-layout-header class="header">
      <slot name="header">{{ title }}</slot>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        class="sider"
        :width="250"
        theme="light"
      >
        <slot name="sider" />
      </a-layout-sider>
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <slot name="footer">Footer</slot>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'SandBox'
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 60px;

  margin-left: 250px;

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

  margin-left: 250px;

  padding: 15px 50px;
}
</style>

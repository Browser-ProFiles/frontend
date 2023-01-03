<template>
  <a-select class="base-select" v-bind="$attrs">
    <a-select-option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
  </a-select>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.base-select {
  width: 100%;
}
</style>
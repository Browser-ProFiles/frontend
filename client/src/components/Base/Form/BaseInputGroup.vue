<template>
  <div class="base-input-group">
    <label class="label" :for="name">{{ label }} <slot name="afterLabel" /></label>
    <p class="description"><slot name="description"></slot></p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.base-input-group {
  .label {
    margin-bottom: 10px;

    font-size: 16px;
  }

  .description {
    margin-bottom: 5px;

    font-size: 13px;
    font-weight: 300;

    &:empty {
      display: none;
    }
  }
}
</style>
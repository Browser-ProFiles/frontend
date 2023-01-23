<template>
  <a-input-password class="base-input-password" v-bind="$attrs">
    <!--<template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData"/>
    </template>-->
    <template v-for="(_, name) in $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </a-input-password>
</template>

<style lang="scss">
.base-input-password.ant-input-password-group-wrapper {
  width: 100%;
}
</style>
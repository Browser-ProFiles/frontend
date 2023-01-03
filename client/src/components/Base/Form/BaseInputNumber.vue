<template>
  <div>
    <a-input-number class="base-input-number" v-bind="$attrs">
<!--      <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData"/>
      </template>-->
      <template v-for="(_, name) in $slots" v-slot:[name]>
        <slot :name="name"/>
      </template>
    </a-input-number>
  </div>
</template>

<style lang="scss">
.base-input-number.ant-input-number-group-wrapper {
  width: 100%;
}
</style>
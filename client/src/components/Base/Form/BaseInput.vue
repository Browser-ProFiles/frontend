<template>
  <a-input class="base-input" v-bind="$attrs">
<!--    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData"/>
    </template>-->
    <template v-for="(_, name) in $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </a-input>
</template>

<style lang="scss">
.base-input {

}
</style>
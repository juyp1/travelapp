<template lang='html'>
  <transition>>
    <slot></slot>
  </transition>
</template>

<script type='text/ecmascript-6'>
export default {
  name:'fadeamimation'
};
</script>

<style rel='stylesheet/stylus' lang='stylus' scoped>
  .v-enter, .v-leave-to
     opacity :0
  .v-enter-active, .v-leave-active
    transition: opacity .6s
</style>

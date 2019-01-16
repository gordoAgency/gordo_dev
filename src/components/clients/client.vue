<template lang="html">
  <div @click="show=!show" class="team-member">
    <slot v-if="!show" name="img"></slot>
    <slot name="name"></slot>
    <slot name="job"></slot>
    <slot v-if="show" name="desc"></slot>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      show: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  h3{
    color: #e61c2a;
  }
</style>

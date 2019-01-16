<template lang="html">
  <div @click="photo" class="team-member">
    <slot v-if="!show" name="img-big"></slot>
    <slot v-else="show" name="img-small"></slot>
    <slot name="name"></slot>
    <slot name="job"></slot>
    <slot v-if="show2" name="desc"></slot>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      show: false,
      show2: false,
    }
  },
  methods: {
    photo(){
      this.show = !this.show;
        setTimeout(() => {
          this.show2 = !this.show2;
        },100);
    }
  }
}
</script>

<style lang="scss" scoped>
  h3{
    color: #e61c2a;
  }
</style>

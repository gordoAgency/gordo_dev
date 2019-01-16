<template lang="html">
  <div class="gordo-footer">
    <a>Are u interestend in working with us ? </a>
    <div class="sep"></div>
    <a @click="goToAbout" >Get to know us better</a>
    <div class="sep"></div>
    <a @click="goToContact" >Contact us</a>
  </div>
</template>

<script>
export default {
  methods: {
    goToContact(){
      this.$router.push('/contact')
    },
    goToAbout(){
      this.$router.push('/about')
    },

  }
}
</script>

<style lang="scss" scoped>

  .gordo-footer{
  position: absolute;
  bottom: 0px;
  background-color: black;
  width: 100%
  }

  h1{
    text-align: center;
    padding: 10px;
    margin: 0px;
    color: white !important
  }
  .sep{
    // vertical-align: ;
    display: inline-block;
    width: 10px;
    height: 10px;
    padding: 2px;
    border-radius: 50%;
    margin: 0 20px;
    background-color: white;
  }
  a{
    cursor: pointer;
    padding: 0.5em;
    font-size: 1.3em;
    color: white;
    text-decoration: none;
    &:hover{
      color: white;
      text-decoration: none;
    }
    &:active{
      color: white;
      text-decoration: none;
    }
  }

</style>

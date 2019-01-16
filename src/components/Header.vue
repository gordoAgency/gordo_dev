<template lang="html">
  <div class="gordo-header">
    <AgNavi></AgNavi>
    <h1>Wolimy tworzyć zasady, niż podążać za schematami.</h1>
  </div>
</template>

<script>
import Navi from './Navigation.vue'


export default {
  data: function(){
    return{
    }
  },
  components: {
    AgNavi : Navi
  }
}
</script>

<style lang="scss" scoped>
.gordo-header{
  z-index: 9999;
  height: 6vh;
  // padding: 15em;
  position: relative;
  position: fixed;
  // background-image: url("../assets/head.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  // height: 891px;
}
h1{
  display: none;
  // position: absolute;
  font-size: 3em;
  font-weight: bold;
  color: white;
  top: 50%;
  margin:auto;
  // padding-top: 50vh;
  text-shadow: 0px 0px 10px black;
}
</style>

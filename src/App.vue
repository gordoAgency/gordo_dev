<template>
  <div id="app">
    <img class="logo" alt="logo" src="./assets/gordo-logo.svg">
    <HelloWorld msg="Gordo ! "/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}



</script>

<style lang="scss">
body{
  margin: 0px;
}
.logo{
  width: 60vw;
  path{
    fill: white;
  }
}
#app {
  font-family: 'ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #aa0005;
  color: white;
  width: 100vw;
  height: 100vh;
}
</style>

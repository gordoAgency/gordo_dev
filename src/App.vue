<template>
  <div id="app">
    <AgLogo></AgLogo>
    <AgHello msg="Gordo ! "/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Aglogo from './components/Ag-logo.vue'

export default {
  name: 'app',
  components: {
    AgHello : HelloWorld,
    AgLogo  : Aglogo
  }
}



</script>

<style lang="scss" scoped>
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

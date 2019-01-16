<template>
  <div id="app">
    <div v-if="loading" class="loader">
      <AgLogo></AgLogo>
    </div>
    <div class="site" v-else >
      <transition-group  name="fade" appear>
        <AgHeader key="head"></AgHeader>
        <router-view key="router"></router-view>
        <AgFooter key="foot"></AgFooter>
      </transition-group>
    </div>
  </div>
</template>

<script>
import HelloGordo from './components/HelloGordo.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Clients from './components/Clients.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Logo from './components/Ag-logo.vue'


export default {
  name: 'app',
  components: {
    AgHello : HelloGordo,
    AgLogo  : Logo,
    AgFooter  : Footer,
    AgHeader  : Header,
    AgClients  : Clients,
    AgAbout  : About,
    AgTeam  : Team,
  },
  data: function(){
    return{
    loading: true,
    }
  },
  mounted: function(){
    setTimeout(() => {
      this.loading = false;
    },2000);
  },
  methods:{
  },
}

</script>



<style lang="scss">

[v-cloak]{
  display: none;
}
#app{
}
body{
  margin: 0px;
}
// div {
//   border: solid red 1px;
// }
.logo{
  width: 60vw;
  path{
    fill: white;
  }
}
.logo-img{
  width: 7%;
}
#app {
  font-family: 'ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

//fading syles

.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 1s ;
}

.fade-leave{

}

.fade-leave-active{
  transition: opacity 1s ;
  opacity: 0;
}


</style>

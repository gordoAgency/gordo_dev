<template lang="html">
  <section class="gordo-clients container-fluid">
  <h1>Our Clients</h1>
  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
  <AgClient class="client" :class="client.name" v-for="client in clients">
      <h3 slot="name">  {{client.name}}</h3>
      <img slot="img" :src="client.img" alt="">
      <p slot="job" >{{client.job}}</p>
      <p slot="desc" class="desc" >{{client.description}}</p>
  </AgClient>
</section>
</template>

<script>
import client from './clients/client.vue'

export default {
  components:{
    AgClient : client
  },
  data: function(){
    return{
        clients: [
        {name: 'Jordan', job:'Social Marketing', img:require('../assets/clients-logo/jordan.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Achilles', job:'Social Marketing', img:require('../assets/clients-logo/achilles.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Alkohit', job:'Social Marketing', img:require('../assets/clients-logo/alkohit.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'bio-oil', job:'Social Marketing', img:require('../assets/clients-logo/bio-oil.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'ksw', job:'Social Marketing', img:require('../assets/clients-logo/ksw.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'psl', job:'Social Marketing', img:require('../assets/clients-logo/psl.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        // {name: 'my-fun', job:'Social Marketing', img:require('../assets/clients-logo/myfun.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
      ],
      show: false,
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-family: Staatliches, sans-serif;
}
  img{
    width: 250px;
    // height: 250px;
    // border-radius: 50%;
  }
  .gordo-clients{
    height: 97vh;
  }
  .client{
    margin-top: 30px;
    display: inline-block;
    width: 33%;
  }
  .desc{
    padding: 0 20% ;
  }
</style>

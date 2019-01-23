<template lang="html">
  <div class="navi">
    <button class="btn open" @click="show=!show">Menu</button>
    <transition name="fad" appear>
    <ul  v-if="show">
        <li><router-link @click.native="show=!show" to="/">Home</router-link></li>
        <li  v-for="item in menu"><router-link  @click.native="show=!show" :to="item.name"> {{item.name}}</router-link></li>
        <button class="btn close" @click="show=!show">X</button>
    </ul>
  </transition>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data: function(){
    return{
      show: false,
      mut: "ag",
      menu: [
        // {id: 1 ,name: "Home"},
        {id: 2 ,name: "About"},
        {id: 3 ,name: "Team"},
        {id: 4 ,name: "Clients"},
        {id: 5 ,name: "Contact"},
      ]
    }
  },
    props: ['comp'],
    methods: {
    // changePage : function(event) {
    //     this.comp = [ ];
    //     eventBus.$emit('compWasChanged', this.comp );
    //     let e = "Ag"+ event.target.textContent;
    //     this.comp = e;
    //     eventBus.$emit('compWasChanged', this.comp );
    //     this.show = false;
    //     console.log(this.comp);
    //   }
    },
  }
</script>

<style lang="scss" scoped>
.navi{
  // font-family: 'ubuntu', sans-serif;
  font-family: 'Staatliches', sans-serif;
    // font-family: 'Rewir-Light', sans-serif;
  text-transform: uppercase;
  position: reltive;
  z-index: 9999;
}
ul{
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: black;
  z-index: 9999;
}
li{
  cursor: pointer;
  font-size: 3em;
  display: block;
  // /margin-right: 10px;
  // border: 1px solid black;
  margin: 20px auto;
  padding: 2px 10px;
  color: white;
}
a{
  color:white;
  &:hover{
    text-decoration: none;
  }
  &:active{
    text-decoration: none;
  }
}
.open{
  position: absolute;
  font-size: 1.3em;
  top: 10px;
  right: 30px;
  background-color: black;
  opacity: 0.5;
  color: white;
  border-radius: 2em;
}

.close{
  position: absolute;
  font-size: 1.3em;
  top: 10px;
  right: 30px;
  text-align: center;
  background-color: white;
  border-radius: 2em;
  opacity: 0.5;
  color: black;
  padding: 10px 12px;;
}

.fad-enter{
  opacity: 0;
}

.fad-enter-active{
  transition: opacity 1s ;
}

.fad-leave{
}

.fad-leave-active{
  transition: opacity 1s ;
  opacity: 0;
}

</style>

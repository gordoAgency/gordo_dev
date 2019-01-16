<template lang="html">
  <section class="gordo-team">
  <img @click="backHome" class="logo-img" :src="require('../assets/gordo-only-logo.png')" alt="gordo-logo">
  <h1>Gordo Team</h1>
  <AgMember class="member" :class="member.name" v-for="member in members">
      <h3 slot="name">  {{member.name}}</h3>
      <img slot="img-big" class="img-big" :src="member.img" alt="">
      <img slot="img-small" class="img-small" :src="member.img" alt="">
      <p slot="job" >{{member.job}}</p>
      <p slot="desc" class="desc" >{{member.description}}</p>
  </AgMember>
</section>
</template>

<script>
import member from './team/teamMember.vue'

export default {
  components:{
    AgMember : member
  },
  data: function(){
    return{
        members: [
        {name: 'Kinga', job:'Graphic Designer', img:require('../assets/team-foto/Kinga.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Patrycja', job:'Graphic Designer', img:require('../assets/team-foto/Patrycja.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Katarzyna', job:'Junior Project Specialist', img:require('../assets/team-foto/Kasia.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Artur', job:'Account Specialist', img:require('../assets/team-foto/Artur.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Emil ', job:'Junior Account', img:require('../assets/team-foto/Emil.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Maciej', job:'New Bussines Specialist', img:require('../assets/team-foto/Maciek.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Karol', job:'Front-End-Dev', img: require('../assets/team-foto/Karol.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Karolina', job:'Account Specialist', img: require('../assets/team-foto/Karolina.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        // {name: 'Natalia', job:'Account', img: '../assets/team-foto/Karol.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        // {name: 'Anna', job:'Account', img:'../assets/team-foto/Karol.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
        {name: 'Piotr', job:'New-Bussines-Director', img:require('../assets/team-foto/Piotr.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa'},
      ],
      show: false,
    }
  },
  methods: {
    backHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.gordo-team{
  background-color: #eee;
}
  .img-big{
    transition: ease-in-out 0.20s 0.10s;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    &:hover{
      animation: shake ease-in-out 2s ;
      transition: ease-in-out 0.15s;
    }
  }
  .img-small{
    transition: ease-in-out 0.15s;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .member{
    transition: ease-in-out 0.15s;
    cursor: pointer;
    margin-top: 30px;
    display: inline-block;
    width: 33%;
  }
  .desc{
    animation: textanime ease-in-out 0.15s ;
    // animation-delay: 0.1s;
    padding: 0 20% ;
  }
  @keyframes textanime {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
  }
  @keyframes shake {
    0% {transform: rotateY(0deg); }
    50% {transform: rotateY(180deg); }
    100% {transform: rotateY(0deg); }
  }
</style>

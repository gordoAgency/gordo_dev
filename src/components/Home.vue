<template lang="html">
  <div class="home">
    <img class="logo-img" :src="require('../assets/gordo-only-logo.png')" alt="gordo-logo">
    <h1>Gordo</h1>
  </br>
    <div class="gordo-groups">
      <div  @click="navigateTeam" class="circle1 strategy">
        <h3>Design </br>& strategy</h3>
      </div>
      <div class="circle2 design">
        <h3>Creative</br> works</h3>
      </div>
    </br>
      <div class="circle3 develpment">
        <h3>Digital</br> development</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      run : false,
    }
  },
  methods: {
    jumps(){
      var cr1 = document.getElementsByClassName("circle1");
      var cr2 = document.getElementsByClassName("circle2");
      var cr3 = document.getElementsByClassName("circle3");
      var jmp = Array('circle1', 'circle2', 'circle3');

      window.setInterval(function(){
        var item =  document.getElementsByClassName(jmp[Math.floor(Math.random()*jmp.length)]);
        console.log('--1--');
        console.log(item[0]);
        if (item[0].classList.contains("run1")){
          console.log('--2--');
          console.log(item[0]);
          item[0].classList.remove("run1");
        }else if (item[0].classList.contains("run2")){
          console.log('--2--');
          console.log(item[0]);
          item[0].classList.remove("run2");
        }else if(item[0].classList.contains("run3")){
          console.log('--2--');
          console.log(item[0]);
          item[0].classList.remove("run3");
        }else if(item[0].classList.contains("strategy")){
          console.log('--3--');
          console.log(item);
          item[0].classList.add("run1");
        }else if(item[0].classList.contains("design")){
          console.log('--3--');
          console.log(item);
          item[0].classList.add("run2");
        }else if(item[0].classList.contains("develpment")){
          console.log('--3--');
          console.log(item);
          item[0].classList.add("run3");
        }
      },1500)

    },
    navigateTeam() {
      this.$router.push('/team')
    }
  },
  mounted: function() {
    this.jumps();
  }
}
</script>

<style lang="scss" scoped>

.gordo-groups {
     margin: 40px;
    // width: 98.5vw;
    // background-image:url('../assets/head.png');
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
}

h1 {
    font-weight: bold;
    // margin-bottom: 100px;
}
.design,
.develpment,
.strategy {
    display: inline-block;
    cursor: pointer;
    margin: 0 15px;
    transition: ease-in-out 1s;
    transform-origin: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    font-weight: normal;
    h3 {
      text-transform: uppercase;
      font-family: 'Staatliches', sans-serif;
        font-size: 2.5em;
        margin-top: 37%;
        // font-weight: bold;
        // color: black;
    }
    &:hover {
        transform-origin: center;
        transition: ease-in-out 1s;
        transform: scale(1.30);
        // opacity: 1;
        h3 {
            transition: ease-in-out 1s;
            color: white;
        }
    }
}

.run1{
    transform-origin: center;
    transition: ease-in-out 1s;
    transform: scale(1.35);
    background-color: #E61C2A;
    border: none;
    // opacity: 1;
    h3 {
        transition: ease-in-out 1s;
        color: white;
    }
  }
.run2{
    transform-origin: center;
    transition: ease-in-out 1s;
    transform: scale(1.35);
    background-color: #f4b603;
    border: none;
    // opacity: 1;
    h3 {
        transition: ease-in-out 1s;
        color: white;
    }
  }
.run3{
    transform-origin: center;
    transition: ease-in-out 1s;
    transform: scale(1.35);
    background-color: #00e19d;
    border: none;
    // opacity: 1;
    h3 {
        transition: ease-in-out 1s;
        color: white;
    }
  }
.strategy {
    top: 38.9vh;
    left: 39.5vw;
    background-color: none;
    opacity: 0.5;
    &:hover {
        background-color: #E61C2A;
        border-style: none;
    }
}
.design {
    top: 67.5vh;
    left: 28vw;
    background-color: none;
    opacity: 0.5;
    &:hover {
        background-color: #f4b603;
        border-style: none;
    }
}
.develpment {
    top: 67.5vh;
    right: 25vw;
    background-color: none;
    opacity: 0.5;
    &:hover {
        background-color: #00e19d;
        border-style: none;
    }
}
// .gordo-footer {
//     position: absolute;
// }
</style>

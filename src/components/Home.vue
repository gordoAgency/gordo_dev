<template lang="html">
  <div class="home">
    <img class="logo-img" :src="require('../assets/gordo-only-logo.png')" alt="gordo-logo">
    <h1>Gordo</h1>
  <br>
    <div class="gordo-groups">
      <div  @click="navigateTeam" class="circle1 strategy">
        <h3>Design <br>& strategy</h3>
      </div>
      <div class="circle2 design">
        <h3>Creative<br> works</h3>
      </div>
      <br>
      <div class="circle3 develpment">
        <h3>Digital<br> development</h3>
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
      // var cr1 = document.getElementsByClassName("circle1");
      // var cr2 = document.getElementsByClassName("circle2");
      // var cr3 = document.getElementsByClassName("circle3");
      var jmp = Array('circle1', 'circle2', 'circle3');



      this.time = setInterval(function(){
        var item =  document.getElementsByClassName(jmp[Math.floor(Math.random()*jmp.length)]);
        //console.log('--1--');
        //console.log(item[0]);
          if (item[0].classList.contains("run1")){
            //console.log('--2--');
            //console.log(item[0]);
            item[0].classList.remove("run1");
          }else if (item[0].classList.contains("run2")){
            //console.log('--2--');
            //console.log(item[0]);
            item[0].classList.remove("run2");
          }else if(item[0].classList.contains("run3")){
            //console.log('--2--');
            //console.log(item[0]);
            item[0].classList.remove("run3");
          }else if(item[0].classList.contains("strategy")){
            //console.log('--3--');
            //console.log(item);
            item[0].classList.add("run1");
          }else if(item[0].classList.contains("design")){
            ////console.log('--3--');
            //console.log(item);
            item[0].classList.add("run2");
          }else if(item[0].classList.contains("develpment")){
            //console.log('--3--');
            //console.log(item);
            item[0].classList.add("run3");
          }
      },1000);


    },
    navigateTeam() {
      this.$router.push('/team')
    }
  },
  created: function() {
    this.jumps();
  },
  destroyed(){
    clearInterval(this.time);
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 97vh;
  color: #fff;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  // -webkit-animation: Gradient 15s ease infinite;
  // -moz-animation: Gradient 15s ease infinite;
  // animation: Gradient 15s ease infinite;
}
.gordo-groups {
     margin: 40px;
     // z-index: 9998;
    // width: 98.5vw;
    // background-image:url('../assets/head.png');
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
}

h1 {
    font-weight: bold;
    // font-family: 'Rewir-Light', sans-serif;
    margin-bottom: 0px;
}
.design,
.develpment,
.strategy {
    display: inline-block;
    cursor: pointer;
    margin: 0 15px;
    transition: ease-in-out 0.3s;
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
        // font-family: 'Rewir-Light', sans-serif;
        // font-weight: bold;
        font-size: 2.5em;
        margin-top: 37%;
        // font-weight: bold;
        // color: black;
    }
    &:hover {
        transform-origin: center;
        transition: ease-in-out 0.3s;
        transform: scale(1.30);
        opacity: 1;
        h3 {
            transition: ease-in-out 0.3s;
            color: white;
        }
    }
}

.run1, .run2, .run3{
    transform-origin: center;
    transition: ease-in-out 1s;
    transform: scale(1.30);
    border: none;
    opacity: 0.7;
    h3 {
        transition: ease-in-out 1s;
        color: white;
    }
  }
.run1{
    background-color: #E61C2A;
  }
.run2{
    background-color: #f4b603;
  }
.run3{
    background-color: #00e19d;
  }

.strategy {
    top: 38.9vh;
    left: 39.5vw;
    background-color: none;
    // opacity: 1;
    &:hover {
        z-index: 1;
        background-color: #E61C2A;
        border-style: none;
    }
}
.design {
    top: 67.5vh;
    left: 28vw;
    background-color: none;
    // opacity: 1;
    &:hover {
        z-index: 1;
        background-color: #f4b603;
        border-style: none;
    }
}
.develpment {
    top: 67.5vh;
    right: 25vw;
    background-color: none;
    // opacity: 1;
    &:hover {
        z-index: 1;
        background-color: #00e19d;
        border-style: none;
    }
}


@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

</style>

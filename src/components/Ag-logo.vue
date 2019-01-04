<template >

	<div class="gordo">
		<div @click="morpheus" class="morphdiv">
		<div class="favorite__sprinkle">
	  	<div class="favorite__sprinkle-circle"></div>
		</div>
		<div class="favorite__sprinkle">
		  <div class="favorite__sprinkle-circle"></div>
		</div>
		<div class="favorite__sprinkle">
		  <div class="favorite__sprinkle-circle"></div>
		</div>
		<div class="favorite__sprinkle">
		  <div class="favorite__sprinkle-circle"></div>
		</div>
		<div class="favorite__sprinkle">
		  <div class="favorite__sprinkle-circle"></div>
		</div>
		<div class="favorite__sprinkle">
		  <div class="favorite__sprinkle-circle"></div>
		</div>
		<div class="favorite__sprinkle">
		  <div class="favorite__sprinkle-circle-white"></div>
		</div>
			<svg  id="gordosvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 192 192" style="enable-background:new 0 0 192 192;" xml:space="preserve">
				<defs>
				<mask id="favorite__halo-mask">
					<rect width="100%" height="100%" fill="white"/>
					<circle class="favorite__halo-inner" cx="50%" cy="50%" r="0" fill="black"></circle>
				</mask>
				</defs>
				<circle class="favorite__halo-outer" cx="50%" cy="50%" r="80"  fill="black" mask="url(#favorite__halo-mask)"></circle>
				<g class= "favorite__inactive">
					<rect width="100%" height="100%" fill="white"/>
					<path   d="M96,12c46.3,0,83.9,37.6,83.9,84c0,46.4-37.6,84-83.9,84s-83.9-37.6-83.9-84C12.1,49.6,49.7,12,96,12L96,12z
		 M107.8,32.2H84.2c-0.9,0-1.6,0.7-1.6,1.6V154c0,1.4,1.1,2.5,2.5,2.5h21.8c1.4,0,2.5-1.1,2.5-2.5V33.8
		C109.4,32.9,108.7,32.2,107.8,32.2z M121.2,50.6v90.8c0,0.9,0.7,1.6,1.6,1.6h23.6c0.9,0,1.6-0.7,1.6-1.6V50.6
		c0-0.9-0.7-1.6-1.6-1.6h-23.6C121.9,49,121.2,49.7,121.2,50.6z M44,48.9v90.8c0,0.9,0.7,1.6,1.6,1.6h23.6c0.9,0,1.6-0.7,1.6-1.6
		V48.9c0-0.9-0.7-1.6-1.6-1.6H45.6C44.7,47.3,44,48,44,48.9z"/>
				</g>
				<g class= "favorite__active">
					<path   d="M96,12c46.3,0,83.9,37.6,83.9,84c0,46.4-37.6,84-83.9,84s-83.9-37.6-83.9-84C12.1,49.6,49.7,12,96,12L96,12z
		 M107.8,32.2H84.2c-0.9,0-1.6,0.7-1.6,1.6V154c0,1.4,1.1,2.5,2.5,2.5h21.8c1.4,0,2.5-1.1,2.5-2.5V33.8
		C109.4,32.9,108.7,32.2,107.8,32.2z M121.2,50.6v90.8c0,0.9,0.7,1.6,1.6,1.6h23.6c0.9,0,1.6-0.7,1.6-1.6V50.6
		c0-0.9-0.7-1.6-1.6-1.6h-23.6C121.9,49,121.2,49.7,121.2,50.6z M44,48.9v90.8c0,0.9,0.7,1.6,1.6,1.6h23.6c0.9,0,1.6-0.7,1.6-1.6
		V48.9c0-0.9-0.7-1.6-1.6-1.6H45.6C44.7,47.3,44,48,44,48.9z"/>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    morpheus: function(){

      var BasicTl = this.$anime.timeline();

			BasicTl
			.add({
        targets: '.favorite__inactive',
        scale: {
          value: [1, 0],
          duration: 200,
          delay: 200,
          easing: [.95,-0.54,.29,1.10]
        }
      })
			.add({
		  targets: '.favorite__halo-outer',
		  scale: {
		    value: [0, 1],
		    duration: 700,
		    delay: 300,
		    easing: 'easeOutQuad'
		  },
		  offset: 0
			})
			.add({
			  targets: '.favorite__halo-inner',
			  r: {
			    value: [0, 100],
			    duration: 700,
			    delay: 600,
			    easing: 'easeOutQuad'
			  },
			  offset: 0
			})
			.add({
			  targets: '.favorite__sprinkle',
			  opacity: {
			    value: [0, 1],
			    duration: 50,
			    delay: 1000
			  },
			  offset: 0
			})
			.add({
			  targets: '.favorite__sprinkle-circle',
			  height: {
			    value: [5, 12],
			    duration: 100,
			    delay: 700,
			    easing: 'easeOutQuad'
			  },
			  offset: 0
			})
			.add({
			  targets: '.favorite__sprinkle-circle',
			  height: {
			    value: [12, 5],
			    duration: 100,
			    delay: 800,
			    easing: 'easeOutQuad'
			  },
			  offset: 0
			})
			.add({
			  targets: '.favorite__sprinkle-circle',
			  opacity: {
			    value: [1, 0],
			    duration: 500,
			    delay: 1000,
			    easing: 'easeOutQuad'
			  },
			  offset: 0
			})
			.add({
			  targets: '.favorite__sprinkle-circle',
			  translateY: {
			    value: [0, -100],
			    duration: 500,
			    delay: 1000,
			    easing: 'easeOutQuad'
			  },
			  offset: 0
			})
			.add({
				targets: '.favorite__active',
				opacity: {
					value: [0, 1],
					duration: 100,
					delay: 0,
					easing: [.91,-0.54,.29,1.56]
				}
			})
			.add({
				targets: '.favorite__active',
				scale: {
					value: [0, 1],
					duration: 200,
					delay: 100,
					easing: [.91,-0.54,.29,1.56]
				}
			})


    }
  }
}
</script>



<style lang="scss" scoped>

	svg{
		cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAMAAAAxmgQeAAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAAD5JREFUGNN1j9EKADAIAnP//9GjFq6w7iU4DNRsB06cb44TJ+UzYUcniqnqoA6ag/62JhjKIU0rxx1lKveuXJ5UAQs/G/2vAAAAAElFTkSuQmCC),auto;;
		padding: 20px;
		width: 200px;
}

	path, circle{
	transform-origin: center;
}

.favorite__active,
.favorite__inactive,{
	transform-origin: center;
}


.favorite__active{
	opacity: 0;
	fill: #E61C2A;
}

.gordo,
.morphdiv{
	position: relative;
}

.favorite__sprinkle {
  position: absolute;
  top: 50%;
  left: 50%;
  // transform: rotate(36deg);
}

$rot: 0;

@for $i from 1 through 6 {
		.favorite__sprinkle:nth-child(#{$i}){
		transform: rotate(#{$rot}deg);
		}
	$rot: $rot + 60 ;
}


.favorite__sprinkle-circle {
	opacity: 0;
  position: absolute;
  content: '';
  background: #E61C2A;
  border-radius: 40%;
  width: 10px;
  min-height: 10px !important;
  margin-top: 0px;
}

</style>

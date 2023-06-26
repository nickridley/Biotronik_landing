<template>
	<div class="testimon-wrapper" id="test-wrapper">
		<h1>Take their word for it</h1>
		<div class="testimon-video">
			<video src="https://www.youtube.com/@BIOTRONIKmedia" style="max-height: 68vh; height: 68vh;" controls></video>
		</div>
		<p class="testimon-subtitle">PHYSICIAN TESTIMONIAL</p>
		<p class="testimon-content">How does Oscar change the way to approach your procedures?</p>
		<div class="carousel-section">
			<agile :options="options">
					<div class="slide">
							slide1
					</div>
					<div class="slide">
							slide2
					</div>
			</agile>
		</div>
	</div>
</template>
  
<style scoped>
.testimon-wrapper {
	background-color: black;
	color: white;
	padding-left: 10vw;
	padding-right: 10vw;
	padding-top: 10px;
	padding-top: 30px;
}

.carousel-section {
	margin-top: 80px;
	padding-top: 70px;
	padding-bottom: 70px;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
}

.testimon-wrapper h1 {
	font-size: 70px;
	margin-top: 20px;
}
.testimon-video {
	flex-grow: 1;
}
.testimon-content {
	font-size: 40px;
}
.testimon-subtitle {
	margin-top: 10px;
	color: #EF5923;
}
.slide {
	background-color: aqua;
	height: 200px;
}
</style>
  
<script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
  // var ScrollTrigger = null;
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    components: {
        // agile: VueAgile 
    },
  
    data() {
      return {
				options: {
					infinite: true,
					slidesToShow: 3,
					dots: false
				}
      };
    },
    mounted() {			
			
		}
  };
  
  
  
</script>
  
  
  
  
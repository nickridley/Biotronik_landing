<template>
	<div class="testimon-wrapper" id="test-wrapper">
		<h1>Take their word for it</h1>
		<div class="testimon-video">
			<video id="main-video" src="https://youtu.be/0MqLI3B4fs4" style="max-height: 68vh; height: 40vh;" controls></video>
		</div>
		<div style="padding-left: 5%; padding-right: 5%;">
			<p class="testimon-subtitle">PHYSICIAN TESTIMONIAL</p>
			<p class="testimon-content">How does Oscar change the way to approach your procedures?</p>
		</div>
		<div class="carousel-section">
			<agile :options="options">
					<div class="slide-item">
						<div class="slide">
								<video class="carousel-video" src="https://youtu.be/0MqLI3B4fs4" @click="(e)=>onClickVideo(e, 0)"></video>
								<div class="playing-mask" v-if="videoNo == 0">
								<div>
									<div style="display: flex; justify-content: center; height: 40px;"><triangleSVG style="height: 100%;"></triangleSVG></div>
									<p style="color: #F04E23; font-size: 12px;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3" style="line-height: 17px; height: 46px;">How does Oscar change the way to approach your procedures?</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
					<div class="slide-item">
						<div class="slide">
							<video class="carousel-video" src="https://youtu.be/0MqLI3B4fs4" @click="(e)=>onClickVideo(e, 1)"></video>
							<div class="playing-mask" v-if="videoNo == 1">
								<div>
									<div style="display: flex; justify-content: center; height: 40px;"><triangleSVG style="height: 100%;"></triangleSVG></div>
									<p style="color: #F04E23; font-size: 12px;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3" style="line-height: 17px; height: 46px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
					<div class="slide-item">
						<div class="slide">
							<video class="carousel-video" src="https://youtu.be/0MqLI3B4fs4" @click="(e)=>onClickVideo(e, 2)"></video>
							<div class="playing-mask" v-if="videoNo == 2">
								<div>
									<div style="display: flex; justify-content: center; height: 40px;"><triangleSVG style="height: 100%;"></triangleSVG></div>
									<p style="color: #F04E23; font-size: 12px;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3" style="line-height: 17px; height: 46px;">Proin mattis dolor enim, eget bibendum est feugiat non.</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
			</agile>
		</div>
	</div>
</template>
  
<style scoped>
.testimon-wrapper {
	background-color: black;
	color: white;
	padding-top: 30px;
	padding-bottom: 50px;
}

.carousel-video {
	cursor: pointer;
	height: 100px;
}

.carousel-section {
	margin-top: 30px;
	padding-top: 20px;
	padding-bottom: 20px;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
	margin-left: 5%;
	width: 90%;
}

.testimon-wrapper h1 {
	font-size: 36px;
	margin-top: 20px;
	margin-left: 5%;
}
.testimon-video {
	flex-grow: 1;
}
.testimon-content {
	font-size: 30px;
	line-height: 31px;
}
.testimon-subtitle {
	color: #EF5923;
}
.slide-item {
	padding: 10px;
	color: white;
}
.slide {
	background-color: black;
	height: 100px;
	position: relative;
}
.playing-mask {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute; 
	left: 0; 
	top: 0; 
	height: 100px;
	background-color: white;
	opacity: 0.9;
	width: 100%;
	font-size: 23px;
	font-weight: bold;
}
</style>
  
<script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
	import triangleSVG from '../../assets/img/triangle.svg'
  // var ScrollTrigger = null;
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    components: {
        'triangleSVG': triangleSVG
    },
  
    data() {
      return {
				options: {
					// infinite: true,
					slidesToShow: 3,
					dots: false,
					centerMode: false
				},
				videoNo: 0
      };
    },
    mounted() {			
			
		},

		methods: {
			onClickVideo(e, no) {
				console.log(e.target, e.target.src)
				let url = e.target.src;
				let mainVideo = document.getElementById('main-video')
				mainVideo.src = url;
				mainVideo.load();
				this.videoNo = no;
			}
		}
  };
  
  
  
</script>
  
  
  
  
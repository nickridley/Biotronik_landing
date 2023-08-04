<template>
	<div id="cross-wrapper">
		
		<div class="cross-container">
			<div class="cross-right" style="width: 100%; position: relative;">
				<div class="fix-cross" style="position: relative; ">
					<div class="cross-body">
						<div class="cross-right-1 cross-right-item right-section" style="position: relative;">
							<div class="cross-dilator">
								<div style="display: table;">
									<p class="text-white cross-header font-din-medium">Support Catheter + Dilator</p>
								</div>
								<img src="../../assets/img/cross/Lock grip 1.png" style="margin-top: 20vh;" />
							</div>
						</div>
	
						<div class="cross-right-2 cross-right-item right-section" style="position: relative;">
							<div class="cross-support">
								<img src="../../assets/img/cross/Braided support Cath X2.png" style="position: absolute; top: 44%;  transform: translate(63px, -50%);" />
							</div>
						</div>
	
						<div class="cross-right-3 cross-right-item right-section flex items-center" style="background-color: #EF5923">
							<div class="cross-support-2" style="height: 100%;">
								<video id="cross-video"  src="../../assets/video/cross-video.mp4" style="position: absolute; top: 54%;" muted="true" playsinline></video>
							</div>
						</div>
						<div class="cross-right-4 cross-right-item right-section" style="position: relative;">
							<div style="height: 110vh; position: absolute; width: 100%; background-color: white;"></div>
							<div class="cross-curved" style="position: absolute; width: 100%;">
								<div class="flex justify-end items-center">
									<img src="../../assets/img/cross/curved.jpg" style="width: 100%; max-width: 758px; margin-top: 80px;"/>
								</div>
							</div>
						</div>
					</div>

					<div id="cross-footer" class="px-6 pt-6 pb-24" style="background-color: #FDF1E9; position: fixed; top: 82vh; left: 0; right: 0; height: 18vh;">
						<div class="right-1-footer">
							<p class="cross-content font-din-medium" style="color: #898685;">Easy-to-use Lock Grip</p>
							<p style="font-size: 14px; color: #a49f9c;">Seals and secures for accurate positioning of Oscar Dilator,</p>
							<p style="font-size: 14px; color: #a49f9c;">Oscar PTA Ballon or guide wire.</p>
						</div>
						<div class="right-2-footer">
							<p class="text-white cross-content font-din-medium" style="color: #F68C6F;">Cross</p>
							<p class="text-white font-din-medium" style="font-size: 14px; line-height: 17px; color: #928e8c;">Braided Support Catheter and Extendable Dilator</p>
							<p class="text-white" style="font-size: 14px;line-height: 17px; color: #928e8c;">Position 0:</p>
							<p class="text-white" style="font-size: 14px;line-height: 17px; color: #928e8c;">Strongest support level</p>
						</div>
						<div class="right-3-footer">
							<p class="text-white cross-content font-din-medium" style="color: #F68C6F;">Cross</p>
							<p class="text-white font-din-medium" style="font-size: 14px; line-height: 17px; color: #928e8c;">Braided Support Catheter and Extendable Dilator</p>
							<p class="text-white" style="font-size: 14px;line-height: 17px; color: #928e8c;">Position Contrast:</p>
							<p class="text-white" style="font-size: 14px;line-height: 17px; color: #928e8c;">Slightly extended dilator tip allows local contrast injection</p>
						</div>
						<div class="right-4-footer" style="width: 95%;">
							<p class="cross-content font-din-medium" style="color: #F68C6F;">Cross</p>
							<p class="font-grey font-din-medium" style="font-size: 14px; line-height: 17px;">Extended Dilator</p>
							<p class="font-grey" style="font-size: 14px;line-height: 17px;">Position Max Flex:</p>
							<p class="font-grey" style="font-size: 14px;line-height: 17px;">Most flexible support level with fully extended dilator</p>
							<p class="font-grey" style="font-size: 14px;line-height: 17px; text-align: right;">
								<br>Dilator extends from 0-191 mm
							</p>
						</div>
					</div>
				</div>

			</div>
		
		</div>
	</div>
</template>
  
<style scoped>
	.cross-dilator {
		/* position: absolute; */
		/* top: 100vh; */
	}
	.color-gray {
		color: #6E6E6E;
	}
	.cross-right-item {
		height: calc(100vh - 75px);	
	}
	.cross-left {
		position: relative;
		height: 100vh;
	}
	.cross-section1 {
		position: fixed;
		top: 100vh;
		height: 140vh;
		z-index: 200;
		left: 0;
		right: 60%;
	}
	.cross-left-dilator-body {
		height: 140vh;
		position: absolute;
		top: 0;
		left: 50%;
		z-index: 200;
		transform: translateX(-50%);
	}
	.cross-left-dilator {
		position: absolute;
		z-index: 100;
		bottom: -120px;
		height: 36vh;
		left: 50%;
		transform: translateX(-50%);
	}
	.cross-content {
		color: white;
		font-size: 20px;
		line-height: 23px;
	}
	
	.cross-header {
		border: solid 2px; 
		border-width: 2px 0 0 0; 
		padding-right: 100px; 
		font-size: 19px;
		margin-left: 30px;
		margin-top: 50px;
	}
	.cross-container {
		/* height: 600vh; */
		position: relative;
	}
	.cross-right-item {
		height: 100vh;
	}


	.cross-right-1 {
		background-color: #EF5923; 
		padding-top: 75px;
	}
	.cross-right-2 {
		background-color: #EF5923;
	}
	.cross-right-3 {
		background-color: #ED6C23;
	}
	.cross-right-4 {
		background-color: white;
	}
	.cross-right-5 {
		padding-top: 120px;
		padding-bottom: 120px;
		background-color: white;
	}

	.right-2-footer, .right-3-footer, .right-4-footer {
		opacity: 0;
		position: absolute;
	}

	.right-1-footer {
		position: absolute;
	}

	#cross-footer {
		opacity: 0;
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
    // components: { lottie },
  
    data() {
      return {
		scrolling : {
			enabled: true,
			events: "scroll,wheel".split(","),
			prevent: e => e.preventDefault(),			
		},
        loading: false,
        loaded: false
      };
    },
	computed:{
		isNavClicked(){
			return this.$store.state.isNavClicked
		},
	},
    mounted() {
		const sections = gsap.utils.toArray('.right-section')

		sections.forEach((section, i) => {
			ScrollTrigger.create({
				trigger: section,
				start: "top bottom-=1",
				end: "bottom top+=1",
				onEnter: () => this.goToSection(section),
				
			});
		});

		const animation3 = lottie.loadAnimation({
			container: gsap.utils.toArray("#crossLottie")[0],
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: 'https://assets9.lottiefiles.com/packages/lf20_rJzvFizMU4.json'
		});
		let corssVideo = document.getElementById('cross-video')

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-1',
				start: 'top bottom',
				end: 'top top',
				scrub: true,
			}
		})
		.to('#cross-footer', {opacity: 1})

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-2',
				start: 'top bottom',
				end: 'top top',
				scrub: true,
			}
		})
		.add('cross-first')
		.to('.right-1-footer', {opacity:0, delay: 2, duration: 1}, 'cross-first')
		.to('.right-2-footer', {opacity: 1, delay: 2, duration: 2}, 'cross-first')
		

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-3',
				start: 'top bottom',
				end: 'top top',
				scrub: true,
			}
		})
		.add('cross-second')
		.to('.right-2-footer', {opacity:0, delay: 2, duration: 1,  onComplete: function(){
			corssVideo.muted = true;
			corssVideo.play()
		}}, 'cross-second')
		.to('.right-3-footer', {opacity: 1, delay: 2, duration: 2}, 'cross-second')

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-4',
				start: 'top bottom',
				end: 'top top',
				scrub: true,
			}
		})
		.add('cross-third')
		.to('.right-3-footer', {opacity:0, delay: 2, duration: 1}, 'cross-third')
		.to('.right-4-footer', {opacity: 1, delay: 2, duration: 2}, 'cross-third')
		.to('#cross-footer', {backgroundColor: 'white'}, 'cross-third')

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-5',
				start: 'top bottom',
				end: 'top top',
				scrub: true,
			}
		})
		.to('#cross-footer', {y: '-100vh', duration: 6})

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-5',
				start: 'top 5%',
				scrub: true,
				onEnter: () => {
					animation3.stop();
					animation3.play();
				}
			}
		})
    },
    
    watch: {
  
    },
    methods: {
		goToSection(section, anim, i) {
			if (this.scrolling.enabled && !this.isNavClicked) { // skip if a scroll tween is in progress
				this.disable();
				gsap.to(window, {
					scrollTo: {y: section, autoKill: false},
					onComplete: this.enable,
					duration: 1
				});
			}
		},
		disable() {
			if (this.scrolling.enabled) {
				this.scrolling.enabled = false;
				window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
				this.scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, this.scrolling.prevent, {passive: false}));
			}
		},
		enable() {
			if (!this.scrolling.enabled) {
				this.scrolling.enabled = true;
				window.removeEventListener("scroll", gsap.ticker.tick);
				this.scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, this.scrolling.prevent));
			}
		}
     
    }
  
    
  };
  
  
  
</script>
  
  
  
  
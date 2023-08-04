<template>
	<div style="position: relative;" id="adjust-wrapper">
		<div id="restore-section" style="height: 100vh; background-color: black;">
			<div class="pta-text pb-5">
				<p class="pta-text-1 font-din-medium">Customize your angioplasty to accurately<br> match the ballon length to lesion length</p>
				<p class="pta-text-2 font-din-light">The unique solution allows in-vessel<br> adjustments of the ballon length from 20<br> to 180 mm, designed to dialte various<br> lesion lengths or focal residual stenosis<br> with the same balloon</p>
			</div>
			<div class="pta-section" style="background-color: black;">
				<div style="overflow: hidden;">
					<div class="img-panel" id="img-panel">
						<div class="img-adjust-container">
							<div class="img-adjust" id="img-adjust">
								<img src="../../assets/img/adjust/standard.png" style="width: 100vw; max-width: 100vw;"/>
							</div>
							<div style="background-color: white;">
								<div class="img-bounder" id="img-bounder" style="padding: 1px; position: relative;">
									<div class="img-bar"></div>
									<img src="../../assets/img/Button.png" alt="" class="img-slider" id="img-slider">
								</div>
							</div>
							<div class="p-6" style="background-color: black; color: white; position: relative; height: 300px;">
								<div id="standard-text" style="position: absolute;">
									<p class="font-din-medium" style="font-size: 20px;">Standard PTA Balloon</p>
									<p>Unable to exactly match the length of the <br>lesion, potentially damaging healthy parts<br>of the vessel once inflated</p>
								</div>
								<div id="restore-text" class="font-din-medium" style="font-size: 18px; line-height: 20px; color: #f04e23; position: absolute; opacity: 0;">
									<p  style="font-size: 24px; line-height: 26px;">Adjust</p>
									<p>Oscar PTA Balloon</p>
									<p>Unique adjustable length balloon able to<br>exactly match the length of the lesion</p>
									
									<p class="mt-3" style="font-size: 24px; line-height: 26px;">Restore</p>
									<p>Restoring blood flow quickly and <br>efficently</p>
								</div>
							</div>	
						</div>
						<div class="img-restore" id="img-restore">
							<!-- <restoreSVG></restoreSVG> -->
							<img src="../../assets/img/adjust/restore.png" style="width: 100vw;"/>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
		<div id="metal-section" class="metal-section">
			<div style="height: 60px; background-color: black; position: absolute; left: 0; right: 0;"></div>
			<img class="img-ballon" src="../../assets/img/adjust/vertical_balloon.png" style="width: 77px; margin-top: 60px;" />
			<div class="first-marker">
				<div class="first-marker-arrow"></div>
				<p class="first-marker-title font-din-medium">Proximal marker</p>
				<div class="first-marker-content">
					Metal ring on<br/>
					support catheter<br/> 
					aids visualization<br/>
					and resists tip<br/> 
					deformation<sup>2</sup>
				</div>
			</div>
			<div class="second-marker">
				<div class="second-marker-title font-din-medium" style="margin-right: 71px;">Balloon markers</div>
				<div class="second-marker-content" style="align-items: end;">
					Markers on distal<br/> 
					balloon shoulder<br/>
					and every 60 mm*<br/> 
					may aid accurate<br/>
					balloon-to-lesion<br/>
					measurement<sup>2</sup>
				</div>
				<div class="second-marker-arrow" style="margin-bottom: 20px; margin-top: 14px;"></div>
				<p style="line-height: 18px;">*Balloon ø 7 mm has 2<br>markers, one distal<br>and one at 50 mm</p>
			</div>
		</div>
		<div id="adjust-chart" style="position: relative; background-color: #f45c24; padding-top: 80px;">
			<img class="img-ballon-2" src="../../assets/img/adjust/ballon.png" />
			<div id="main-content">
			</div>
			<div class="adjust-chart-label">
				<p class="font-din-medium">Adjustable ballon length</p>
				<p>Reinflatable balloon can achieve<br/> lengths from 20 to 180 mm</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.adjust-chart-label {
		border-top: 1px solid rgb(236, 208, 208);
		color: white;
		margin-top: -3vw;
		margin-left: 10%;
		width: 76.6%;
		position: relative;
		z-index: 10;
		padding-bottom: 80px;
	}
	#restore-section {
		padding-top: 73px;
		background-color: black;
	}
	#metal-section {
		/* padding-top: 60px; */
	}
	.pta-section {
		position: relative;
		width: 100vw;
		background-color: black;
	}
	.img-panel {
		width: 80vw;
	}
	.img-adjust-container {
		position: absolute;
		right: 0;
		left: 0;
		z-index: 20;

	}
	.img-adjust {
		overflow: hidden;
		margin-right: 89%;
		border-right: 1px solid #b4a499;
	}
	.img-restore {
		position: absolute;
		z-index: 9;
		width: 100vw;
	}
	.img-slider {
		cursor: pointer;
		left: 0;
		height: 100%;
	}
	.img-stick {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 14vw;
		z-index: 100;
	}
	.img-ballon-2 {
		left: 5%;
		right: 0px;
		position: absolute;
		top: 23vw;
		max-width: 120%;
		width: 110%;
		z-index: 15;
	}

	.pta-text {
		color: white;
		width: 100%;
		background-color: black;
		padding-top: 20px;
		padding-left: 20px;
	}
	.pta-text-1 {
		font-size: 18px;
		line-height: 21px;
	}

	.pta-text-2 {
		font-size: 18px;
		line-height: 21px;
	}

	.metal-section {
		background-color: rgb(244, 101, 38);
		position: relative;
		display: flex;
		justify-content: flex-end;
		padding-right: 20%;
	}

	.img-ballon {
		transform: rotateZ(90);
	}

	.first-marker {
		position: absolute;
		color: white;
		top: 157px;
		left: 5%;
	}

	.first-marker-arrow {
		width: 60vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.first-marker-title {
		font-size: 16px;
	}
	.first-marker-content {
		font-size: 16px;
		line-height: 19px;
	}

	.second-marker {
		position: absolute;
		color: white;
		bottom: 91px;
		left: 5%;
	}
	.second-marker-arrow {
		width: 63vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.second-marker-title {
		font-size: 16px;
	}
	.second-marker-content {
		font-size: 16px;
		line-height: 18px;
	}

	.third-marker {
		position: absolute;
		left: -100px;
		opacity: 0;
		bottom: 10%;
		color: white;
		padding-right: 5px;
		border-right: 1px solid white;
	}
	.third-marker-content {
		text-align: right;
		font-size: 20px;
	}

	.img-bounder {
		height: 5vw;
		margin-left: 7%;
		width: 90%;
	}

	.img-bar {
		position: absolute;
		border-top: 1px solid black;
		left: 5%;
		right: 5%;
		bottom: 50%;
	}
	
</style>

<script>
import gsap from 'gsap'
import lottie from 'lottie-web'
import adjustSVG from '../../assets/img/adjust/standard_without_text.svg'
import restoreSVG from '../../assets/img/adjust/restore_without_text.svg'
// var ScrollTrigger = null;
if (process.client) {
	var {ScrollTrigger} = require('gsap/ScrollTrigger');
	var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
	var {Draggable} = require('gsap/Draggable')
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	gsap.registerPlugin(Draggable)
}
export default {
	components: { adjustSVG, restoreSVG },

	data() {
		return {
			scrolling : {
				enabled: true,
				events: "scroll,wheel".split(","),
				prevent: e => e.preventDefault(),			
			},
		};
	},
	computed:{
		isNavClicked(){
			return this.$store.state.isNavClicked
		},
	},
	mounted() {         
		gsap.timeline({repeat: 1000})
		.to('#img-slider', {opacity: 0.3, duration: 0.8})
		.to('#img-slider', {opacity: 1, duration: 0.8})

		const section = gsap.utils.toArray('#restore-section')[0]
		ScrollTrigger.create({
			trigger: section,
			start: "top bottom-=1",
			end: "bottom top+=1",
			onEnter: () => this.goToSection(section),
			
		});

		const section1 = gsap.utils.toArray('#metal-section')[0]
		ScrollTrigger.create({
			trigger: section1,
			start: "top bottom-=1",
			end: "bottom top+=1",
			onEnter: () => this.goToSection(section1),
			
		});

		const section2 = gsap.utils.toArray('#adjust-chart')[0]
		ScrollTrigger.create({
			trigger: section2,
			start: "top bottom-=1",
			end: "bottom top+=1",
			onEnter: () => this.goToSection(section2),
			
		});

		var parentSliderW = document.getElementById('img-adjust').parentElement.clientWidth
		document.getElementById('img-slider').style.transform = `translateX(${parentSliderW*0.93*0.85}px)`
		let style =  window.getComputedStyle(document.getElementById('img-slider'));
		var transformX = new WebKitCSSMatrix(style.transform).m41;
		var parentW = document.getElementById('img-adjust').parentElement.clientWidth
		document.getElementById('img-adjust').style.marginRight = `${parentW-0.11*parentW-transformX}px`
		Draggable.create('#img-slider', {
			type: 'x',
			bounds: document.getElementById('img-bounder'),
			onDrag () {
				let style =  window.getComputedStyle(document.getElementById('img-slider'));
				var transformX = new WebKitCSSMatrix(style.transform).m41;
				var parentW = document.getElementById('img-adjust').parentElement.clientWidth
				document.getElementById('img-adjust').style.marginRight = `${parentW-0.11*parentW-transformX}px`

				var standardText = document.getElementById('standard-text')
				var restoreText = document.getElementById('restore-text')
				standardText.style.opacity = transformX/(parentW-0.1*parentW-transformX)
				restoreText.style.opacity = 1- standardText.style.opacity
			}
		})

		const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#main-content")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://lottie.host/efad5735-45df-4af9-a064-e4f8fa16cc27/1Qjz2xkZ1d.json'
            });

		gsap.timeline({
			scrollTrigger: {
				trigger: '#adjust-chart',
				start: 'top 5%',
				end: '+=2000',
				scrub: true,
				onEnter: ()=> {
					animation3.stop();
					animation3.play();
				}
			}
		})
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
		},
	}
};



</script>
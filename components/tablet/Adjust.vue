<template>
	<div style="position: relative;" id="adjust-wrapper">
		<div class="cross-right-5 right-section">
			<div class="cross-right-rest p-4 color-gray">
				<p class="font-orange font-din-medium" style="font-size: 30px; border-top: 2px solid #ED6C23; display: table;">Achieve the pushability of an 0.035"</p>
				<p class="font-orange font-din-medium" style="font-size: 30px;">system on an 0.018" platform*</p>
				<div style="margin-top: 70px;">
					<p class="font-din-medium" style="border-bottom: 2px solid grey;">Oscar Variale Pushability</p>
					<div class="grid grid-cols-3 gap-4 pr-4">
						<div class="col-span-1">
							<p class="mt-4" style="color: #ED6C23;">Oscar, 0.018" <br>BIOTRONIK</p>
							<p class="mt-3">Ouick-Cross, 0.018" <br>Philips</p>
							<p class="mt-3">Ouick-Cross-Extreme, 0.018" <br>Philips</p>
							<p class="mt-3">CXI, 0.018" <br>Cook Medical</p>
							<p class="mt-3">NaviCross, 0.035" <br>Teruno</p>
							<div class="color-gray" style="margin-top: 50px;">
								<div class="flex">
									<div style="width: 20px; height: 20px; background-color:#F04E23; margin-right: 10px;"></div>
									<p>Position 0</p>
								</div>
								<div class="flex">
									<div style="width: 20px; height: 20px; background-color:#F58B6E; margin-right: 10px;"></div>
									<p>180 mm</p>
								</div>
							</div>
						</div>
						<div class="col-span-2" style="padding-top: 30px;">
							<div id="crossLottie" class="lottie-wrapper" ref="crossChart" style="width: 100%; position: relative;">
								<!-- <img src="../../assets/img/Scale.png" style="position: absolute; left: 0; right: 0; bottom: -100px;"/> -->
							</div>
						</div>
					</div>
					<p class="color-gray mt-3">*Testing performed with Oscar 0.018/6F Support Catheter + Dilator combination</p>
				</div>
			</div>
			<div class="adjust-header" style="background-color: black;">
				<div class="pta-text font-din-medium">
					<p class="pta-text-1">Customize your angioplasty to accurately<br> match the ballon length to lesion length</p>
					<p class="pta-text-2">The uniques solution allows in-vessel<br> adjustments of the ballon length from 20<br> to 180 mm, designed to dialte various<br> lesion lengths or focal residual stenosis<br> with the same balloon</p>
				</div>
				<div class="pta-section" style="background-color: black;">
					<div style="overflow: hidden;">
						<!--  -->
						<div class="img-panel" id="img-panel">
							<div class="img-adjust-container">
								<!-- <adjustSVG style="position: absolute; width: 100vw;"></adjustSVG> -->
								<div class="img-adjust" id="img-adjust">
									<img src="../../assets/img/adjust/standard.png" style="width: 100vw; max-width: 100vw;"/>
								</div>
								<div style="background-color: white;">
									<div class="img-bounder" id="img-bounder" style="padding: 5px; position: relative;">
										<div class="img-bar"></div>
										<img src="../../assets/img/Button.png" alt="" class="img-slider" id="img-slider">
									</div>
								</div>
								<div class="p-6" style="background-color: black; color: white; position: relative; height: 300px;">
									<div id="standard-text" style="position: absolute;">
										<p class="font-din-medium" style="font-size: 18px;">Standard PTA Balloon</p>
										<p>Unable to exactly match the length of the <br>lesion, potentially damaging healthy parts<br>of the vessel once inflated</p>
									</div>
									<div id="restore-text" class="font-din-medium" style="font-size: 18px; line-height: 20px; color: #f04e23; position: absolute; opacity: 0;">
										<p>Adjust</p>
										<p>Oscar PTA Balloon</p>
										<p>Unique adjustable length balloon able to<br>exactly match the length of the lesion</p>
										
										<p class="mt-3">Restore</p>
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
		</div>

		
		<div id="metal-section" class="metal-section">
			<img class="img-ballon" src="../../assets/img/adjust/vertical_balloon.png" style="width: 77px;" />
			<div class="first-marker">
				<div class="first-marker-arrow"></div>
				<p class="first-marker-title font-din-medium">Proximal marker</p>
				<div class="first-marker-content flex" style="align-items: end;">
					Metal ring on support<br/>
					catheter aids visualization<br/>
					ad resists tip deformation<p style="font-size: 13px; margin-bottom: 8px;">2</p>
				</div>
			</div>
			<div class="second-marker">
				<div class="second-marker-arrow"></div>
				<div class="second-marker-title font-din-medium" style="margin-right: 71px;">Balloon markers</div>
				<div class="second-marker-content flex" style="align-items: end;">
					Markers on distal balloon shoulder<br/>
					and every 60 mm aid accurate<br/>
					balloon-to-lesion measurement<p style="font-size: 13px; margin-bottom: 8px; margin-left: -26px;">2</p>
				</div>				
			</div>
			<div class="third-maker">
				<p style="">*Balloon ø 7 mm has 2 markers, one distal and one at 50 mm</p>
			</div>
		</div>
		<div id="adjust-chart" style="position: relative; background-color: #f45c24; padding-top: 80px; padding-bottom: 100px;">
			<img class="img-ballon-2" src="../../assets/img/adjust/ballon.png" />
			<div id="main-content" style="">
				
			</div>
		</div>
	</div>
</template>

<style scoped>
	.cross-right-5 {
	}
	.cross-right-rest {
		padding-top: 120px;
		padding-bottom: 120px;
		background-color: white;
	}
	.color-gray {
		color: #6E6E6E;
	}
	.pta-section {
		position: relative;
		width: 100vw;
		background-color: black;
	}
	.img-panel {
		width: 100%;
	}
	.img-adjust-container {
		width: 100%;
	}
	.img-adjust {
		overflow: hidden;
		margin-right: 89%;
		border-right: 1px solid #b4a499;
		position: relative;
		z-index: 30;
	}
	.img-restore {
		position: absolute;
		top: 0;
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
		max-width: 120%;
		width: 110%;
		z-index: 15;
	}

	.pta-text {
		color: white;
		width: 100%;
		background-color: black;
		padding-top: 80px;
		padding-bottom: 40px;
		padding-left: 40px;
	}
	.pta-text-1 {
		font-size: 22px;
	}

	.pta-text-2 {
		font-size: 22px;
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
		top: 100px;
		left: 10%;
	}

	.first-marker-arrow {
		width: 50vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.first-marker-title {
		font-size: 20px;
	}
	.first-marker-content {
		font-size: 16px;
	}

	.second-marker {
		position: absolute;
		color: white;
		bottom: 67px;
		left: 10%;
	}
	.second-marker-arrow {
		width: 50vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.second-marker-title {
		font-size: 20px;
	}
	.second-marker-content {
		font-size: 16px;
	}

	.third-maker {
		position: absolute;
		bottom: 15px;
		left: 8%;
		color: #f9c2ab;
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

	.adjust-header {
		/* opacity: 0; */
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
				document.getElementById('img-adjust').style.marginRight = `${parentW-0.1*parentW-transformX}px`

				var standardText = document.getElementById('standard-text')
				var restoreText = document.getElementById('restore-text')
				standardText.style.opacity = transformX/(parentW-0.11*parentW-transformX)
				restoreText.style.opacity = 1- standardText.style.opacity
			}
		})

		const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#main-content")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://lottie.host/9cd4b113-6dfb-46f7-aabc-3885304d549e/nmjvDXYrDg.json'
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
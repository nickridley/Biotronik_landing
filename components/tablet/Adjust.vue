<template>
	<div style="position: relative;" id="adjust-wrapper">
					<div class="pta-text">
											<p class="pta-text-1">Customize your angioplasty to accurately<br> match the ballon length to lesion length</p>
											<p class="pta-text-2">The uniques solution allows in-vessel<br> adjustments of the ballon length from 20<br> to 180 mm, designed to dialte various<br> lesion lengths or focal residual stenosis<br> with the same balloon</p>
					</div>
					<div class="pta-section">
							<div style="overflow: hidden;">
											<!-- <img class="img-adjust" src="../assets/img/adjust/standard_adjust.png" /> -->
											<div class="img-panel" id="img-panel">
															<div class="img-adjust" id="img-adjust">
																<adjustSVG style="position: absolute; width: 100vw;"></adjustSVG>
															</div>
															<div class="img-restore" id="img-restore">
																<restoreSVG></restoreSVG>
															</div>
															<div class="img-bounder" id="img-bounder">
																<img src="../../assets/img/adjust/Slider.png" alt="" class="img-slider" id="img-slider">
															</div>
											</div>
							</div>
							
					</div>
					<div class="metal-section-temp">
					</div>
					<div class="metal-section">
									<img class="img-ballon" src="../../assets/img/adjust/ballon.png" />
									<div class="first-marker">
													<div class="first-marker-arrow"></div>
													<p class="first-marker-title">Proximal marker</p>
													<div class="first-marker-content flex" style="align-items: end;">
													Metal ring on support<br/>
													catheter aids visualization<br/>
													ad resists tip deformation<p style="font-size: 13px; margin-bottom: 8px;">2</p>
													</div>
									</div>
									<div class="second-marker">
													<div class="second-marker-arrow"></div>
													<div class="second-marker-title" style="margin-right: 71px;">Balloon markers</div>
													<div class="second-marker-content flex" style="align-items: end;">
																	Markers on distal balloon shoulder<br/>
																	and every 60 mm aid accurate<br/>
																	balloon-to-lesion measurement<p style="font-size: 13px; margin-bottom: 8px; margin-left: -26px;">2</p>
													</div>
									</div>
									<div class="third-marker">
													<p class="third-marker-content">
																	<b>Adjustable ballon length</b><br/>
																	Reinflatable balloon can achieve<br/>
																	lengths from 20 to 180 mm
													</p>
									</div>
					</div>
	</div>
</template>

<style scoped>
	.pta-section {
					position: relative;
					height: 100vh;
					width: 100vw;
					background-color: black;
	}
	.img-panel {
		width: 80vw;
	}

	.img-adjust {
		position: absolute;
		z-index: 10;
		left: 0;
    right: -7%;
    overflow: hidden;
    height: 100vh;
	}
	.img-restore {
					position: absolute;
					z-index: 9;
					width: 100vw;
	}
	.img-slider {
		position: absolute;
    z-index: 11;
    right: -9%;
    top: 8vw;
    height: 40vw;
    cursor: pointer;
	}
	.img-stick {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 14vw;
					z-index: 100;
	}

	.pta-text {
					color: white;
					width: 100%;
					background-color: black;
					padding-top: 40px;
					padding-left: 40px;
	}
	.pta-text-1 {
					font-size: 22px;
	}

	.pta-text-2 {
					font-size: 22px;
	}

	.metal-section-temp {
					background-color: rgb(244, 101, 38);
					height: 100vh;
	}

	.metal-section {
					background-color: rgb(244, 101, 38);
					height: 100vh;
					position: relative;
					overflow: hidden;
	}

	.img-ballon {
					position: absolute;
					top: 50%;
					height: 67vw;
	max-width: 400vw;
	width: 400vw;
					transform: translateY(-50%);
	}

	.first-marker {
					position: absolute;
					color: white;
					opacity: 0;
					top: 55%;
	left: 13vw;
	}

	.first-marker-arrow {
					width: 123px;
	height: 123px;
					border-right: 1px solid white;
					border-bottom: 1px solid white;
	}

	.first-marker-title {
					font-size: 30px;
	}
	.first-marker-content {
					font-size: 20px;
	}

	.second-marker {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: absolute;
					color: white;
					opacity: 0;
					top: 55%;
					right: 10vw;
	}
	.second-marker-arrow {
					width: 40vw;
					height: 8vw;
					border-bottom: 1px solid white;
					border-left: 1px solid white;
	}

	.second-marker-title {
					font-size: 30px;
	}
	.second-marker-content {
					font-size: 20px;
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
		height: 100px;
    margin-left: 17%;
    width: 91%;
	}
	
</style>

<script>
import gsap from 'gsap'
import lottie from 'lottie-web'
	import adjustSVG from '../../assets/img/adjust/standard_adjust.svg'
	import restoreSVG from '../../assets/img/adjust/restore_adjust.svg'
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
			};
	},
	mounted() {         
			Draggable.create('#img-slider', {
				type: 'x',
				bounds: document.getElementById('img-bounder'),
				onDrag () {
					let style =  window.getComputedStyle(document.getElementById('img-slider'));
					var transformX = new WebKitCSSMatrix(style.transform).m41;
					console.log('rightPos', transformX)
					console.log('adust', document.getElementById('img-adjust').style)
					var parentW = document.getElementById('img-adjust').parentElement.clientWidth
					document.getElementById('img-adjust').style.right = `${-0.08*parentW-transformX}px`
					
				}
			})
		}
};



</script>
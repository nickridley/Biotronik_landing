<template>
    <div class="solution-wrapper" id="solution-wrapper">
        <div  class="solution-section" >
            <div id="solution-section" class="solution-section-item solution-section-1">
                <div class="solution1-container" >
                    <div class="solution solution-box-wrapper" >
                        <div class="solution-box solution-box-1" style="color: #fd4f01; border-radius: 20px; background-color: white; text-align: center;">
                            <div style="letter-spacing: -3.5px;">
                                <p>One</p>
                                <p>Solution</p>
                            </div>
                        </div>
                        <img class="solution-box solution-box-2" src="../../assets/img/solution/BIO-OscarLP-M-02-Box02-min.png" />
                        <img class="solution-box solution-box-3" src="../../assets/img/solution/BIO-OscarLP-M-02-Box03-min.png" />
                    </div>
                </div>
            </div>
            <div id="solution2-section" class="solution-section-item solution-section-2" style="overflow: hidden;">
                <div class="solution2-container" >
                    <div style="width: 85%;">
                        <div style="position: absolute; left: -3vw; top: 0vh;">
                            <div id="chartLottie" class="lottie-wrapper" ref="chart" style="width: 150vw; max-width: 1032px;"></div>
                        </div>
                        <div id="chartLottie2" class="lottie-wrapper2" ref="dial" style=""></div>
                        <div style="position: absolute; left: 5%; bottom: 30px;">
                            <p class="font-grey" style="padding-top:20px; padding-left: 20px; font-size: 20px; line-height: 21px;" >An average PTA ballon requires up to<br> 65<sup>◊</sup> stock units to cover a full size range.<br> The Oscar PTA Ballon only needs 11.</p>
                            <p class="font-grey" style=" padding-top: 30px; padding-left: 20px; margin-top: 10px;"><sup>◊</sup>Compared to equivalent available sizes of Passeo<sup>®</sup>-14 and Passeo<sup>®</sup>-18 PTA balloons</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  </template>
  
  <style scoped>

    .solution-wrapper {
        overflow: hidden;
    }
    #solution-section {
        padding-top: 75px;
    }

    .solution-section-item {
        width: 100%;
    }

    .solution1-container {
        position: relative;
        height: calc(100vh - 75px);
        background-color: #F25625;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .solution-box-wrapper {
        width: 100%;
    }

    .solution-box {
        position: absolute;
        height: calc(100vh - 75px);
        width: 100vw;
    }

    .solution-box-1 {
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 130px;
        line-height: 128px;
        font-weight: bold;
        background: linear-gradient(to right, #f4f4f4, #f3f3f3);
    }
    .solution-box-2 {
        z-index: 2;
        opacity: 1;
    }
    .solution-box-3 {
        z-index: 1;
        opacity: 1;
    }
    .solution2 {
        opacity: 0;
    }
    #solution2-section {
        height: 100vh;
        padding-top: 75px;
    }
    .solution2-container {
        position: relative;
        height: 70vh;
        background-color: white;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    #chartLottie2 {
        width: 30vw;
        position: absolute;
        top: 3vh;
        right: 1vw;
    }
  </style>
  
  <script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
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
        const section = gsap.utils.toArray('#solution-section')[0]
			ScrollTrigger.create({
				trigger: section,
				start: "top bottom-=1",
				end: "top top",
				onEnter: () => this.goToSection(section),				
			});

        const section1 = gsap.utils.toArray('#solution2-section')[0]
			ScrollTrigger.create({
				trigger: section1,
				start: "top bottom-=2000",
				onEnter: () => this.goToSection(section1),
				
			});

        const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#chartLottie")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets10.lottiefiles.com/packages/lf20_d6QpT1Rx5T.json'
            });
        const animation2 = lottie.loadAnimation({
                container: gsap.utils.toArray("#chartLottie2")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://lottie.host/49c3f108-43a9-45cc-b363-07c107bfe57b/zwR94Vz9bV.json'
            });

        gsap.to('.solution-box-2', {scale: 0.6, width: '500px'}).play()
        gsap.to('.solution-box-3', {scale: 0.6, width: '500px'}).play()

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution-section',
                start: 'top top',
                scrub: true,
                pin: true,
                end: '+=2000'
            }
        })
        .add('small-scale')
        .to('.solution .solution-box-1', {scale: 0.6, width: '500px', ease: "power2.in"}, 'small-scale')
        .to('.solution-box-wrapper', {width: '500px', ease: "power2.in"}, 'small-scale')
        .to('.solution .solution-box-1', {y: '-150vh', ease: "power2.in"})
        .to('.solution .solution-box-2', {y: '-150vh', ease: "power2.in"})

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution2-section',
                start: 'center 60%',
                scrub: true,
                end: '+=1000',
                onEnter: ()=> {
                    animation2.stop()
                    animation2.play()
                    animation3.stop()
                    animation3.play()
                }
            }
        })
    },
    components: {
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
  
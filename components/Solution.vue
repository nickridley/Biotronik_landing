<template>
    <div class="solution-wrapper" id="solution-wrapper">

        <div id="solution-section" class="solution-section" >
            <div class="solution-section-item solution-section-1">
                <div class="solution1-container" >
                    <div class="solution" >
                        <img class="solution-box solution-box-1" src="../assets/img/BIO-OscarLP-D-02-Box01-min.png" />
                        <img class="solution-box solution-box-2" src="../assets/img/BIO-OscarLP-D-02-Box02-min.png" />
                        <img class="solution-box solution-box-3" src="../assets/img/BIO-OscarLP-D-02-Box03-min.png" />
                    </div>
                </div>
            </div>
            <div class="solution-section-item solution-section-2">
                <div class="solution2-container" >
                    <div class="flex" style="width: 80%;">
                    <div style="position: absolute; left: 0; width: 90vw;">
                        <div id="chartLottie" class="lottie-wrapper" ref="chart" style="width: 100%;"></div>
                    </div>
                    <div style="position: absolute; width: 50%; left: 50%;">
                        <div id="chartLottie2" class="lottie-wrapper2" ref="dial" style=""></div>
                        
                        <p class="font-grey" style="font-weight: bold; padding-top: 30px; padding-left: 50px; font-size: 35px; border: solid 1px; border-width: 1px 0 0 0;" >An average PTA ballon requires up to 65 stock units to cover a full size range. The Oscar PTA Ballon only needs 11.</p>
                        <p class="font-grey" style=" padding-top: 30px; padding-left: 50px; margin-top: 100px;">Compared to equivalent available sizes of Passeo® - 18 PTA balloons</p>
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
    .solution-section {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        width: 200%;
    }

    .solution-section-item {
        width: 100%;
    }

    .solution1-container {
        position: relative;
        height: 100vh;
        background-color: #F25625;
        /* display: flex; */
        width: 100%;
    }

    .solution-box {
        position: absolute;
        width: 100vw;
    }

    .solution-box-1 {
        z-index: 3;
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
    .solution2-container {
        position: relative;
        height: 100vh;
        background-color: white;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        /* display: flex; */
  }
    #chartLottie2 {
        scale: 2;
        height: 50%;
        transform: translate(-25%, 85px); 
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
        loading: false,
        loaded: false
      };
    },
    mounted() {
        const panels = gsap.utils.toArray("#solution-section .solution-section-item");
        let panelsContainer = document.querySelector("#solution-section")
        let playhead = {frame: 0}
        let playhead1 = {frame: 0}
        // this.chartLottieScrollTrigger()
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
                path: 'https://assets1.lottiefiles.com/packages/lf20_bh2Ncy3wJG.json'
                // https://assets2.lottiefiles.com/packages/lf20_dSaBZqLXsv.json
                // https://assets8.lottiefiles.com/packages/lf20_XYswRcqon7.json
                // https://assets4.lottiefiles.com/packages/lf20_wciY22iqor.json
            });

        gsap.to('.solution-box-2', {scale: 0.6}).play()
        gsap.to('.solution-box-3', {scale: 0.6}).play()

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution-section',
                start: 'center center',
                scrub: true,
                pin: true,
                end: '+4000'
            }
        })
        .to('.solution .solution-box-1', {scale: 0.6})
        .to('.solution .solution-box-1', {x: '-100vw'})
        .to('.solution .solution-box-2', {x: '-100vw'})
        .add('move')
        .to('.solution .solution-box-3', {opacity: 0}, 'move')  
        .to(panels, {
            xPercent: -100 * ( panels.length - 1 ),
            ease: "none",
            onComplete: () => {
                animation2.play()
            }
        }, 'move')
        .add('lottie')
        .to(playhead, {
            frame: 58,
            ease: "none",
            onUpdate: (a,b,c) => {
                animation3.goToAndStop(playhead.frame, true)
            },
        },'lottie')
        // .to(playhead1, {
        //     frame: 58,
        //     ease: "none",
        //     Togg
        //     onUpdate: (a,b,c) => {
        //         animation2.goToAndStop(playhead1.frame, true)
        //     },
        // },'lottie');
    },
    components: {
    },
    methods: {
        goToSection (top) {
        let observer = ScrollTrigger.normalizeScroll(true);
        console.log('goTo', top);
        this.scrollTween = gsap.to(window, {
            scrollTo: {y: top, autoKill: false},
            ease: "strong.inOut",
            duration: 1,
            onStart: () => {
            observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
            observer.enable();
            },
            onComplete: () => this.scrollTween = null,
            overwrite: true
        });
        },
        getTopPosition (el, idx) {
            // return (idx - 1) * window.innerHeight;
            // if (el.parentElement.classList.contains('pin-spacer')) return el.parentElement.getBoundingClientRect().top + window.scrollY;
            return el.getBoundingClientRect().top + window.scrollY;
        },
    }
    
  };
  
  
  
  </script>
  
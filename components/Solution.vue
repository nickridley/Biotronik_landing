<template>
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
            <solution2></solution2>
        </div>
    </div>
   
  </template>
  
  <style scoped>
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
  </style>
  
  <script>
  import gsap from 'gsap'
  import Solution1 from '@/components/Solution1'
  import Solution2 from '@/components/Solution2'
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
        }, 'move')

    },
    components: {
        'solution1': Solution1,
        'solution2': Solution2,
    }
    
  };
  
  
  
  </script>
  
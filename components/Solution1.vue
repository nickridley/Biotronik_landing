<template>
  <div class="solution1-container" >
   
    <div class="solution" >
      <img class="solution-box solution-box-1" src="../assets/img/BIO-OscarLP-D-02-Box01-min.png" />
      <img class="solution-box solution-box-2" src="../assets/img/BIO-OscarLP-D-02-Box02-min.png" />
      <img class="solution-box solution-box-3" src="../assets/img/BIO-OscarLP-D-02-Box03-min.png" />
    </div>
  </div>
 
</template>

<style scoped>
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
  }
  .solution2 {
    opacity: 0;
  }
</style>

<script>
import gsap from 'gsap'
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
    gsap.to('.solution-box-2', {scale: 0.6}).play()
    gsap.to('.solution-box-3', {scale: 0.6}).play()

    gsap.timeline({
      scrollTrigger: {
        trigger: '.solution1-container',
        start: 'center center',
        scrub: true,
        pin: true,
        end: '+4000'
      }
    })
    .to('.solution .solution-box-1', {scale: 0.6})
    .to('.solution .solution-box-1', {x: '-100vw'})
    .to('.solution .solution-box-2', {x: '-100vw'})
    .to('.solution .solution-box-2', {opacity:0})
    // .to('')
    // .to(solutions, {
    //     xPercent: -85 * (solutions.length - 1),
    //     scrollTrigger: {
    //       trigger: ".panels",
    //       start: "center center",
    //       pin: true,
    //       scrub: 1,
    //       snap: 1 / (solutions.length - 1),
    //       end: () => `+=4320`
    //     }
    // });

  },
  
  watch: {

  },
  methods: {

  }

  
};



</script>

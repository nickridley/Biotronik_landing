<template>
  <div class="solution2-container" >
    <div class="flex" style="width: 80%;">
      <div style="width: 50%;">
        <img src="../assets/img/solution/chart.png" />
      </div>
      <div style="width: 50%;">
        <img src="../assets/img/solution/83.png" style="width: 500px;" />
        
        <p class="font-grey" style="font-weight: bold; padding-top: 30px; padding-left: 50px; font-size: 35px; border: solid 1px; border-width: 1px 0 0 0;" >An average PTA ballon requires up to 65 stock units to cover a full size range. The Oscar PTA Ballon only needs 11.</p>
        <p class="font-grey" style=" padding-top: 30px; padding-left: 50px; margin-top: 100px;">Compared to equivalent available sizes of Passeo® - 18 PTA balloons</p>
      </div>
    </div>
  </div>
 
</template>

<style scoped>
  .solution2-container {
    position: relative;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    /* display: flex; */
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

  },
  
  watch: {

  },
  methods: {

  }

  
};



</script>

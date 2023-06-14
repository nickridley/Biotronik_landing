<template>
  <div class="solution2-container" >
    <img style="width: 100%;" src="../assets/img/solution/1.jpg" />
  </div>
 
</template>

<style scoped>
  .solution2-container {
    position: relative;
    height: 100vh;
    background-color: #F25625;
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

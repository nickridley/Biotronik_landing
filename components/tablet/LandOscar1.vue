<template>
  <div id="oscar-container" style="height: 100vh; overflow: hidden; position: relative;">
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="items-center container-fluid"
    >
      <div>
        <div :class="'main-img' + (loaded ? ' show' : '')">
          <img src="../../assets/img/oscar/oscar image X2-min.png" style="margin-top: 76px; height: 100vh;" />
        </div>
        <div :class="'oscar-texts' + (loaded ? ' show' : '')" >
          <div class="flex font-din-medium">
            <p class="text-white" style="font-size: 60px; line-height: 64px;">Oscar</p>
            <p class="text-white" style="font-size: 20px; padding-top: 5px">®</p>
          </div>
          <p class="text-white mb-5" style="font-size: 22px;"><span class="font-din-medium">O</span>ne <span class="font-din-medium">S</span>olution: <span class="font-din-medium">C</span>ross. <span class="font-din-medium">A</span>djust. <span class="font-din-medium">R</span>estore.</p>
          <p class="text-white font-din-light" style="font-size: 30px; line-height: 32px;">The all-in-one solution to reach,</p>
          <div class="flex font-din-light">
            <p class="text-white" style="font-size: 30px;">cross and prepare lesions</p>
            <p class="text-white" style="padding-top: 5px;">1</p>
          </div>
        </div>
        <div :class="'contact-form' + (loaded ? ' show' : '')" >
          <iframe src="https://go.demo.pardot.com/l/409163/2023-08-01/21c9" width="100%" height="100%" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-img, .oscar-texts, .contact-form {
    transition: all 1.5s ease-out, opacity 2.5s ease-out;
  }
  .main-img, .oscar-texts {
    opacity: 0;
    transform: translateX(-150px);
  }
  .contact-form {
    opacity: 0;
    transform: translateX(150px);
  }
  .main-img.show, .oscar-texts.show, .contact-form.show {
    opacity: 1;
    transform: translateX(0);
  }
  .oscar-texts {
    position: absolute; 
    left: 4%;
    bottom: 100px;
  }
  .request-btn {
    background-color: #F25625; 
    font-size: 23px;
    border-radius: 30px;
    color: white;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute;
    left: 0;
    top: 25%;
    transition: all .1s;
  }
  .request-btn:hover {
    margin-top: -3px;
    box-shadow: 1px 1px 1px 1px #00000099;
  }
  .oscar-input {
    width: 100%;
    border-color: #727272 !important;
    border: solid 2px;
    border-radius: 10px;
    height: 40px;
    
  } 

  .contact-form {
    background-color: #FFF6F2;
    position: absolute;
    top: 90px;
    right: 10%;
    max-width: 402px;
    width: 400px;
    height: 700px;
  }
  .loading-page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .loading {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border: 4px solid rgba(210, 184, 237, 0.705);
    border-radius: 50%;
    border-top-color: #D2B8ED;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 1300px) {
    .desktop-show {
      display: none;
    }
    .contact-form {
      right: 3%;
    }
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
     
      loading: false,
      loaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 100)
  },
  
  watch: {

  },
  methods: {

  }

  
};



</script>




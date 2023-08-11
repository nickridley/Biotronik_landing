<template>
    <div id="contact-wrapper" class="contact-wrapper">
      <div v-if="loading" class="loading-page">
        <div class="loading"></div>
      </div>
      <div
        class="mx-auto items-center container-fluid"
      >
        <div>
          <div class="main-img">
            <img src="../assets/img/oscar/oscar image X2-min.png" />
          </div>
          <div class="contact-form">
            <iframe src="https://go.demo.pardot.com/l/409163/2023-08-01/21ch" width="100%" height="100%" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
          </div>
          <p style="color: white; position: absolute; bottom: 50px; left: 10%; right: 15%; font-size: 10px;">1. per IFU: Indicated for percutaneous transluminal interventions in the peripheral 
            vasculature to provide support during access into and to dilate stenoses in femoral, 
            popliteal and infrapopliteal arteries. The product is also intended for injection of radiopaque 
            contrast media for the purpose of angiography: 2. BIOTRONIK data on file; 
            3. The real-world user evaluation assessed Oscar's acceptance in the US market 
            and is referred to as Evaluation of Market Acceptance (EMA), BIOTRONIK date on file; 
            4. BIOTRONIK date on file, testing performed with Oscar 0.018/6F Support Catheter + Dilator combination. 
            Oscar and Passeo are trademarks or registered trademarks of the BIOTRONIK Group of Companies. 
            All other trademarks or registered trademarks are the property of their respective owners.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .request-btn {
      background-color: white; 
      font-size: 23px; 
      border-radius: 30px;
      color: #F25625;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      transition: all .1s;
    }
    .request-btn:hover {
        margin-top: -3px;
        box-shadow: 1px 2px 4px 1px rgb(0 0 0 / 48%);
    }
    .oscar-input {
      width: 100%;
      border-color: #727272 !important;
      border: solid 1px;
      border-radius: 10px;
      height: 40px;     
      padding-left: 8px;
    } 
    .oscar-input::placeholder {
        color: #f37453;
    }
    .contact-form {
        position: absolute;
        left: 35%;
        right: 15%;
        top: 12%;
        height: 850px;
    }
    .main-img {
        position: absolute;
    }
    .contact-wrapper {
        background-color: #F25625;
        height: calc(100vh + 200px); 
        overflow: hidden; 
        position: relative;
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
        scrolling : {
          enabled: true,
          events: "scroll,wheel,touchmove,pointermove".split(","),
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
      setTimeout(() => {
        this.loaded = true;
      }, 100)
      const section = gsap.utils.toArray('#contact-wrapper')[0]
			ScrollTrigger.create({
				trigger: section,
				start: "top bottom-=200",
				end: "bottom top+=1",
				onEnter: () => this.goToSection(section),
			});
    },
    
    watch: {
  
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

          // anim && anim.restart();
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
  
  
  
  
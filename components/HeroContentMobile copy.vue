<template>
  <div>
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="mx-auto items-center"  id="smooth-wrapper" ref="{main}"
    >
      <div  id="smooth-content">
        <div id="lottieWindow" class="mobile-wrapper" ref="first" style="background-color: white;" ></div>
        <div id="secondLottie" class="lottie-wrapper mobile-wrapper" ref="second" ></div>
        <div id="thirdLottie" class="lottie-wrapper mobile-wrapper" ref="third" ></div>
        <!-- <div id="fourthLottie" class="lottie-wrapper mobile-wrapper" ref="fourth" style="background-color: #101010;" ></div> -->
        <div id="fifthLottie" class="lottie-wrapper mobile-wrapper" ref="fifth" style="background-color: white;"></div>
        <div id="sixthLottie" class="mobile-wrapper" ref="sixth" style="background-color: white;" ></div>
        <div id="seventhLottie" class="mobile-wrapper" ref="seventh" style="background-color: white;" ></div>
        <!-- <div id="eigthLottie" class="lottie-wrapper" ref="eigth" style="background-color: white;" ></div>
        <div id="ninethLottie" ref="nineth" style="background-color: white;" ></div> -->
      </div>
    </div>
  </div>
</template>

<style>
  .mobile-wrapper {
    padding-top: 54px !important;
  }
  .lottie-wrapper {
    height: 100vh !important;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .lottie-wrapper>svg {
    height: 100% !important;
    object-fit: contain;
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
//https://lottie.host/00cc7db7-13c7-40b9-81e0-63bdba44c234/6AGc0xRwJi.json
// import lottie from 'vue-lottie/src/lottie.vue'
// import * as firstAnimationData from "~/assets/lottie/Page 1-(Full).json";
// import * as secondAnimationData from "~/assets/lottie/Page 2-(Full).json";
//https://lottie.host/67bb6f7e-36d3-4670-915f-cf16f307c55f/7NpYwOwC2z.json
//https://lottie.host/81414737-55a6-4e99-bd7d-e9116f842889/lVXB73xi3i.json
//https://lottie.host/b8cfe65c-12e2-409d-8597-50164d6fc96a/mc90hu87Qs.json
//https://lottie.host/e42cf5be-962a-48ac-9110-c47848d079c9/g5ZAFEGogS.json
// import * as fourthAnimationData from "~/assets/lottie/Page 4-(Full).json";
import gsap from 'gsap'
import lottie from 'lottie-web'
import { ScrollSmoother } from 'gsap-bonus/ScrollSmoother';

// var ScrollTrigger = null;
if (typeof window !== 'undefined') {
  gsap.config({
    trialWarn: false,
  });
}
if (process.client) {
  var {ScrollTrigger} = require('gsap/ScrollTrigger');
  var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
  // var {ScrollSmoother} = require('gsap-trial/ScrollSmoother')
  
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);
}

export default {
  // components: { lottie },
  setup() {
    const main = ref();
    const ctx = ref();
    const smoother = ref();
    onMounted(() => {
      ctx.value = gsap.context(() => {
        // create the smooth scroller FIRST!
        smoother.value = ScrollSmoother.create({
          wrapper: '#__nuxt',
          smooth: 2, // seconds it takes to "catch up" to native scroll position
          effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly,
          smoothTouch: 0.1
        });
      }, main.value);
    });
    onUnmounted(() => {
      ctx.value.revert();
    });

    return { main };
  },
  data() {
    return {
      animation2: null,
      animation3: null,
      animation4: null,
      animation5: null,
      animation6: null,
      animation7: null,
      animation8: null,
      animation9: null,
      animation2Tween: null,
      animation3Tween: null,
      animation5Tween: null,
      animation6Tween: null,
      animation7Tween: null,
      animation8Tween: null,
      loaded: 0,
      loading: true
    };
  },
  mounted() {
  
    document.body.style.overflow = 'hidden';
    this.secondLottieScrollTrigger()
    this.thirdLottieScrollTrigger()
    // this.fourthLottieScrollTrigger()
    this.fifthLottieScrollTrigger()
    this.sixthLottieScrollTrigger()
  },
  
  watch: {
    loaded(val) {
      console.log(val)
      if(val === 1) {
        this.seventhLottieScrollTrigger()
        document.body.style.overflow = 'auto';
        if (process.client) {
          this.firstLottieScrollTrigger({
            target: "#lottieWindow",
            path: "https://lottie.host/46a72cda-c4f4-4237-8d30-ba92451b7dc5/P76c9wRCQS.json",
            speed: "medium",
            scrub: 2 // seconds it takes for the playhead to "catch up"
            // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
          });
        }
      }
    }
  },
  methods: {
    secondLottieScrollTrigger() {
      this.animation2 = lottie.loadAnimation({
          container: gsap.utils.toArray("#secondLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/f39144b5-9c9d-490b-9075-6d67347cdc52/Ps9VvwXNgw.json"
      });
      const selft = this;
      this.animation2.addEventListener("DOMLoaded", () => {
        // selft.animation2.playSegments([0, 30], true)
        this.loaded ++;
        let playhead = {frame: 0},
        st = {trigger: selft.$refs.second, pin: true, start: "top top", end: "+=8000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation2Tween = function() {
          selft.animation2.frameTween = gsap.to(playhead, {
              frame: 275,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation2.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation2.destroy && selft.animation2.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation2Tween) : selft.animation2Tween();
      })
    },
    thirdLottieScrollTrigger() {
      this.animation3 = lottie.loadAnimation({
          container: gsap.utils.toArray("#thirdLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/64827152-1b67-45d1-b0f3-b4a60d2f375f/qBPIccvGZH.json"
      });
      const selft = this;
      this.animation3.addEventListener("DOMLoaded", () => {
        
        let playhead = {frame: 30},
        st = {trigger: selft.$refs.third, pin: true, start: "top top", end: "+=3000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation3Tween = function() {
          selft.animation3.frameTween = gsap.to(playhead, {
              frame: 153,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation3.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation3.destroy && selft.animation3.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation3Tween) : selft.animation3Tween();
      })
    },
    // fourthLottieScrollTrigger() {
    //   this.animation4 = lottie.loadAnimation({
    //       container: gsap.utils.toArray("#fourthLottie")[0],
    //       renderer: "svg",
    //       loop: false,
    //       autoplay: false,
    //       // path: "https://lottie.host/57c2ae16-9a71-47bc-89e6-03dd11e3d0f6/knuJSpWT4K.json"
    //       path: "https://lottie.host/03ee0a4d-1a33-4d11-b6ac-db79ce76136d/BzVZJyGNX0.json"
    //   });
    //   this.animation4.addEventListener("DOMLoaded", () => {
    //     this.loaded ++;
    //   })
    // },
    fifthLottieScrollTrigger() {
      this.animation5 = lottie.loadAnimation({
          container: gsap.utils.toArray("#fifthLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/3594845c-27eb-4121-8d51-96a03f9e1ba0/8nVnLRvgNN.json"
      });
      const selft = this;
      this.animation5.addEventListener("DOMLoaded", () => {
        
        let playhead = {frame: 0},
        st = {trigger: selft.$refs.fifth, pin: true, start: "top top", end: "+=5000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation5Tween = function() {
          selft.animation5.frameTween = gsap.to(playhead, {
              frame: 230,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation5.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation5.destroy && selft.animation5.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation5Tween) : selft.animation5Tween();
      })
    },
    sixthLottieScrollTrigger() {
      this.animation6 = lottie.loadAnimation({
          container: gsap.utils.toArray("#sixthLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/2b57f9b9-a442-4a51-a97b-5b784fef3486/zz4T4IXzEp.json"
      });
      const selft = this;
      this.animation6.addEventListener("DOMLoaded", () => {
        
        let playhead = {frame: 0},
        st = {trigger: selft.$refs.sixth, pin: true, start: "top top", end: "+=8000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation6Tween = function() {
          selft.animation6.frameTween = gsap.to(playhead, {
              frame: 184,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation6.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation6.destroy && selft.animation6.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation6Tween) : selft.animation6Tween();
      })
    },    
    seventhLottieScrollTrigger() {
      this.animation7 = lottie.loadAnimation({
          container: gsap.utils.toArray("#seventhLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/161aa1e8-a844-407c-b693-d4a7a9079dc1/it8J2gR3zt.json"
      });
      const selft = this;
      this.animation7.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 0},
        st = {trigger: selft.$refs.seventh, pin: true, start: "top top", end: "+=10000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation7Tween = function() {
          selft.animation7.frameTween = gsap.to(playhead, {
              frame: 304,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation7.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation7.destroy && selft.animation7.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation7Tween) : selft.animation7Tween();
      })
    },
    firstLottieScrollTrigger(vars) {
      let playhead = {frame: 50},
      target = gsap.utils.toArray(vars.target)[0],

      speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
      st = {trigger: target, pin: true, start: "top top", end: "+=500", scrub: 1},
      ctx = gsap.context && gsap.context(),

      animation = lottie.loadAnimation({
          container: target,
          renderer: vars.renderer || "svg",
          loop: false,
          autoplay: false,
          path: vars.path,
          // rendererSettings: vars.rendererSettings || { preserveAspectRatio: 'xMidYMid slice' }
      });
      
      for (let p in vars) { // let users override the ScrollTrigger defaults
        st[p] = vars[p];
      }
      

      const {nineth, eigth, seventh, sixth, fifth, fourth, third, second, first} = this.$refs;
      const selft = this;
      let observer = ScrollTrigger.normalizeScroll(true),
      scrollTween;

      animation.addEventListener("DOMLoaded", function() {
        selft.loading = false
          animation.playSegments([0, 50], true)
          setTimeout(() => {
            let createTween = function() {
                animation.frameTween = gsap.to(playhead, {
                    frame: 100,
                    ease: "none",
                    onUpdate: (a,b,c) => {
                      animation.goToAndStop(playhead.frame, true)
                    },
                    scrollTrigger: st
                });
                return () => animation.destroy && animation.destroy();
            };
            ctx && ctx.add ? ctx.add(createTween) : createTween();
            // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes

            const goToSection = (top) => {
              console.log('goTo', top);
              scrollTween = gsap.to(window, {
                scrollTo: {y: top, autoKill: false},
                ease: "strong.inOut",
                duration: 1,
                onStart: () => {
                  observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
                  observer.enable();
                },
                onComplete: () => scrollTween = null,
                overwrite: true
              });
            }

            const getTopPosition = (el, idx) => {
              // return (idx - 1) * window.innerHeight;
              // if (el.parentElement.classList.contains('pin-spacer')) return el.parentElement.getBoundingClientRect().top + window.scrollY;
              return el.getBoundingClientRect().top + window.scrollY;
            }

            ScrollTrigger.create({
              trigger: first,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => self.isActive && !scrollTween && goToSection(getTopPosition(first, 1))
            });
            ScrollTrigger.create({
              trigger: second,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !scrollTween && goToSection(getTopPosition(second, 2))
              }
            });
            ScrollTrigger.create({
              trigger: third,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !scrollTween && goToSection(getTopPosition(third, 3))
              }
            });
            // ScrollTrigger.create({
            //   trigger: fourth,
            //   start: "top bottom",
            //   end: "+=150%",
            //   onToggle: self => {
            //     self.isActive && !scrollTween && goToSection(getTopPosition(fourth, 4))
            //     selft.animation4.play();
            //     // animation.playSegments([0, 150], true)
            //   }
            // });
            ScrollTrigger.create({
              trigger: fifth,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !scrollTween && goToSection(getTopPosition(fifth, 5))
              }
            });
            ScrollTrigger.create({
              trigger: sixth,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !scrollTween && goToSection(getTopPosition(sixth, 6))
              }
            });
            ScrollTrigger.create({
              trigger: seventh,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !scrollTween && goToSection(getTopPosition(seventh, 7))
              }
            });
            // const footer = document.getElementsByTagName('footer')[0];
            // ScrollTrigger.create({
            //   trigger: footer,
            //   start: "top bottom",
            //   end: "+=150%",
            //   onToggle: self => {
            //     self.isActive && !scrollTween && goToSection(getTopPosition(footer, 6))
            //   }
            // });
            ScrollTrigger.sort();
            ScrollTrigger.refresh();    
            
          }, 2000);

          // gsap.to(second, { x: 0, opacity:0, duration: 1, ease: "power2.inOut" });
        });
        

      return animation;
    }
  }

  
};



</script>




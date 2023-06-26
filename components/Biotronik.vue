<template>
  <div id="biotronik" style="overflow-x: hidden;">
    <template v-if="mode==='desktop'">
      <div id="oscar-wrapper">
        <div ref="oscar1">
          <oscar1 />
        </div>
        <div ref="oscar2">
          <oscar2 />
        </div>
      </div>
      <div ref="solution">
        <solution />
      </div>
      <div>
        <cross />
      </div>
      <div>
        <adjust />
      </div>
      <div>
        <restore />
      </div>
      <div>
        <testimon />
      </div>
    </template>
    <template v-if="mode==='tablet'">
      <tablet-oscar1 />
    </template>
    <template v-if="mode==='mobile'">
      <hero-content-mobile />
    </template>

  </div>
</template>

<script>
import Oscar1 from '@/components/Oscar1'
import Oscar2 from '@/components/Oscar2'
import Solution from '@/components/Solution'
import Cross from '@/components/Cross'
import Adjust from '@/components/Adjust'
import Restore from '@/components/Restore'
import Testimon from '@/components/Testimon'
import HeroContentMobile from '@/components/HeroContentMobile'
import TabletOscar1 from '@/components/tablet/Oscar1.vue'
import gsap from 'gsap'

if (process.client) {
  var {ScrollTrigger} = require('gsap/ScrollTrigger');
  var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default {
  name: 'Hero',
  
  data () {
    return {
      mode: '',
      scrollTween: null,
    }
  },
  methods: {
    goToSection (top) {
      let observer = ScrollTrigger.normalizeScroll(true);
      console.log('goTo', top);
      this.scrollTween = gsap.to(window, {
        scrollTo: {y: top, autoKill: false},
        // ease: "strong.inOut",
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
  },
  mounted () {

    if (window.innerWidth >= 1300) this.mode = 'desktop';
    else if(window.innerWidth >= 320) this.mode = 'tablet'
    else this.mode = 'mobile';
    setTimeout(() => {
      const {oscar1, oscar2} = this.$refs;
      const selft = this;
      // ScrollTrigger.create({
      //   trigger: oscar1,
      //   start: "top bottom",
      //   end: "+=150%",
      //   onToggle: self => {
      //     self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(oscar1, 1))
      //   }
      // });
      // ScrollTrigger.create({
      //   trigger: oscar2,
      //   start: "top bottom",
      //   end: "+=150%",
      //   onToggle: self => {
      //     self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(oscar2, 2))
      //   }
      // });
    }, [100])
  },
  components: {
    'oscar1': Oscar1,
    'oscar2': Oscar2,
    'solution': Solution,
    'cross': Cross,
    'hero-content-mobile': HeroContentMobile,
    'adjust': Adjust,
    'restore': Restore,
    'testimon': Testimon,
    'tablet-oscar1': TabletOscar1
  }
}
</script>

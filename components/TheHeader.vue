<template>
  <nav :class="headerClassList" class="fixed w-full top-0" style="z-index: 1000000000;">
    <div
      class="mx-auto flex flex-wrap items-center justify-between mt-0 custom-header"
      style="width: 80%; height: 73px;"
    >
        <div class="nav-btn" @click="isOpen=true" v-if="isOpen == false">
          ≡
        </div>
        <div class="nav-btn-clicked" @click="isOpen=false" v-if="isOpen == true" style="width: 35px;">
          <cancelSVG></cancelSVG>
        </div>
      <div class="flex desktop-item" id="navbar">       
        <div :class="'header-item'">
          <a href="#oscar-wrapper" style="display: flex;" class="br-item" @click="clickedItem='oscar'">OSCAR<p style="margin-top: 1px;font-size: 10px;;">®</p></a>
        </div>
        <div :class="'header-item'">
          <a href="#solution-wrapper" class="br-item" @click="clickedItem='solution'">ONE SOLUTION</a>
        </div>
        <div :class="'header-item'">
          <a href="#cross-wrapper" class="br-item" @click="clickedItem='cross'">CROSS</a>
        </div>
        <div :class="'header-item'">
          <a href="#adjust-wrapper" class="br-item" @click="clickedItem='adjust'">ADJUST</a>
        </div>
        <div :class="'header-item'">
          <a href="#restore-wrapper" class="br-item" @click="clickedItem='restore'">RESTORE</a>
        </div>
        <div :class="'header-item'">
          <a href="#test-wrapper" class="br-item" @click="clickedItem='test'">TESTIMONIALS</a>
        </div>
        <div :class="'header-item'">
          <a href="#find-wrapper" style="display: flex; align-items: center; gap: 4px" class="no-border br-item" @click="clickedItem='find'">FIND OUT MORE <outSVG></outSVG></a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="desktop-item">
          <button class="contact-us">Contact us</button>
        </div>
        <!-- <img src="../assets/img/header/logo.svg" /> -->
        <logoSVG></logoSVG>
      </div>
    </div>
      <div id="mobile-navbar" class="mobile-menu" v-if="isOpen == true">
        <div class="w-full">
          <div class="mobile-menu-item"><a href="#oscar-wrapper" style="display: flex;" class="br-item">OSCAR</a></div>
          <div class="mobile-menu-item">ONE SOLUTION</div>
          <div class="mobile-menu-item">CROSS</div>
          <div class="mobile-menu-item">ADJUST</div>
          <div class="mobile-menu-item">RESTORE</div>
          <div class="mobile-menu-item">TESTIMONIALS</div>
          <div class="mobile-menu-item"><a href="#find-wrapper" style="display: flex; align-items: center; gap: 4px" class="no-border br-item">FIND OUT MORE <outSVG></outSVG></a></div>
          <div class="mobile-menu-item">CONTACT</div>
        </div>
        <div class="w-full p-3 mb-2">
          <div class="py-2 mb-10" style="border-bottom: 1px solid #F0F0F0; font-size: 24px;"><p>excellence for life</p></div>
          <div class="flex">
            <div style="margin-right: 100px">
              <p class="ft-title py-1">FOLLOW US</p>
              <P class="ft-content py-1">TWITTER</P>
              <P class="ft-content py-1">YOUTUBE</P>
              <P class="ft-content py-1">LINKEDIN</P>
            </div>
            <div>
              <p class="ft-title py-1">LEARN MORE</p>
              <P class="ft-content py-1">OSCAR</P>
              <P class="ft-content py-1">360 CRT</P>
              <P class="ft-content py-1">HEART MONITORING</P>
            </div>
          </div>
        </div>
        <div class="flex" style="font-size: 12px; width: 100%; padding-left: 10px;">
          <p class="mr-3">GENERAL TEMRS AND CONDITIONS</p>
          <p class="mr-3">COOKIE SETTINGS</p>
          <p class="mr-3">IMPRINT</p>
          <p>LEGAL DISCLAIMER</p>
        </div>
      </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import logoSVG from '../assets/img/header/logo.svg'
import outSVG from '../assets/img/header/a.svg'
import cancelSVG from '../assets/img/header/cancel.svg'
export default {
  name: 'TheHeader',
  components: {
    logoSVG,
    outSVG,
    cancelSVG
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      mode: '',
      clickedItem: 'oscar',
      navbarlinks: null,
    }
  },
  computed: {

    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-greyWhite' : 'bg-greyWhite'
    },
    navSignUpClassList() {
      return this.isSticky ? 'bg-purple text-black' : 'bg-purple text-white'
    },
    navSignInClassList() {
      return this.isSticky ? 'text-white' : ''
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    }
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
      console.log('isOPen', this.isOpen)
    },
    select(el, all = false) {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    },
    on(type, el, listener, all = false){
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      },
    onscroll(el, listener){
      el.addEventListener('scroll', listener)
    },
    navbarlinksActive() {
      let position = window.scrollY + 200
      this.navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = this.select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('clicked')
          navbarlink.parentElement.classList.add('clicked')
        } else {
          navbarlink.classList.remove('clicked')
          navbarlink.parentElement.classList.remove('clicked')
        }
      })
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    if (window.innerWidth >= 1300) this.mode = 'desktop';
    else if(window.innerWidth >= 320) this.mode = 'tablet'
    else this.mode = 'mobile';

    if(this.mode == 'desktop') {
      this.navbarlinks = this.select('#navbar .br-item', true)
    } else {
      this.navbarlinks = this.select('#mobile-navbar .br-item', true)
    }
    window.addEventListener('load', this.navbarlinksActive)
    this.onscroll(document, this.navbarlinksActive)
  },

  beforeDestroy() {
  }
}
</script>

<style scoped>
.no-border {
  border: none !important;
}
.br-item {
  border-right: 1px solid black;
  padding: 0px 10px 0px 10px;
  cursor: pointer;
}
.br-item.clicked {
  color: orange;
}

.header-item.clicked {
  padding: 25px 0px 25px 0px;
  font-size: 14px;
  border-bottom: 1px solid orange;
  color: orange;
}
.header-item {
  padding: 25px 0px 25px 0px;
  font-size: 14px;
}
.bg-greyWhite {
  background-color: #F8F8F8 !important;
}
.bg-purple {
  background-color: #D2B8ED;
}
.bg-black {
  background-color: #2A2A2A;
}
.contact-us {
  color: white;
  background-color: #F25625;
  border-radius: 5px;
  font-weight: bold;
  padding: 3px 15px;
  margin-right: 50px;
}
.nav-btn {
  font-size: 57px;
  line-height: 40px;
  cursor: pointer;
  display: none;
}
.mobile-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  background-color: white;
  font-size: 18px;
  color: #6E6E6E;
  height: calc(100vh - 73px);
  display: none;
  justify-content: space-between;
}
.mobile-menu-item {
  border-top: 2px solid #B7B4B1;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.ft-title {
  font-size: 16px;
}
.ft-content {
  font-size: 14px;
  color: #D4DAE0;
}
.mobile-menu .mobile-menu-item:last-child{
  border-bottom: 2px solid #B7B4B1;
}
.nav-btn-clicked {
  display: none;
  cursor: pointer;
}
@media screen and (max-width: 1299px) {
  .desktop-item {
    display: none;
  }
  .nav-btn, .nav-btn-clicked{
    display: block;
  }
  .mobile-menu {
    display: flex;
  }
  
  .br-item {
    border: none;
  }
}
</style>
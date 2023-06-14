<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0">
    <div
      class="mx-auto flex flex-wrap items-center justify-between mt-0 py-5"
      style="width: 80%;"
    >
      <div>
        
      </div>
      <div class="flex justify-center items-center">
        <div>
          <button class="contact-us">Contact us</button>
        </div>
        <img src="../assets/img/header/logo.png" />
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
// import img from '../assets/img/header/logo.png'

export default {
  name: 'TheHeader',
  components: {
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      mode: ''
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
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
    if (window.innerWidth >= 768) this.mode = 'desktop';
    else this.mode = 'mobile';
  },

  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>

<style scoped>
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
</style>
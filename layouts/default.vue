<template>
  <div class="leading-normal tracking-normal text-black gradient">
    <the-header />
    <div style="min-height: 100vh">
      <nuxt />
    </div>
    <!-- <the-footer /> -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  }
}
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'DINPro';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  background-color: #F25625;
}
.font-orange {
  color: #F25625; 
}
.font-grey {
  color: #6E6E6E;
}
.font-bold {
  font-weight: bold;;
}
</style>

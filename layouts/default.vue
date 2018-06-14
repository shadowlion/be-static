<template>
  <div>
    <nav-bar />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import MainFooter from '@/components/Footer'

export default {
  components: {
    NavBar, MainFooter
  }
}
</script>

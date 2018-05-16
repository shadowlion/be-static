<template>
  <div>
    <navBar />
    <nuxt />
    <footerSection />
  </div>
</template>

<script>
import navBar from '@/components/nav/NavBar'
import footerSection from '@/components/Footer'

export default {
  components: {
    navBar, footerSection
  }
}
</script>

<style>
@import "bulma/css/bulma";
</style>

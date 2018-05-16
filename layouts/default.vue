<template>
  <div>
    <nuxt />
    <footerSection />
  </div>
</template>

<script>
import footerSection from '@/components/Footer'

export default {
  components: {
    footerSection
  }
}
</script>

<style>
@import "bulma/css/bulma";
</style>

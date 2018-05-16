<template>
  <a
    class="navbar-item"
    :href="url">
    {{ title }}
  </a>
</template>

<script>
export default {
  props: [
    'title',
    'url'
  ]
}
</script>

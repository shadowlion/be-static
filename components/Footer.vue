<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          &copy; {{ year }} <a href="https://ballroomeast.com">Ballroom East Dance Studio</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  }
}
</script>

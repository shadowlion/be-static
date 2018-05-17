<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <navLink title="Home" url="/" />
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">About</a>
            <div class="navbar-dropdown is-boxed">
              <navLink title="The Studio" url="/studio" />
              <navLink title="Classes" url="/classes" />
              <navLink title="Lessons" url="/lessons" />
              <navLink title="Judges" url="/teacher" />
            </div>
          </div>
          <navLink title="Calendar" url="/calendar" />
          <navLink title="Gifts" url="/gift" />
          <navLink title="Contact" url="/contact" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import navLink from '@/components/nav/NavLink'

export default {
  components: {
    navLink
  }
}
</script>

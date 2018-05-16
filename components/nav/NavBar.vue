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
          <navLink title="Home" url="https://www.google.com" />
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <navLink title="Overview" url="/" />
              <navLink title="Hello" url="/" />
              <navLink title="Hello" url="/" />
              <navLink title="Hello" url="/" />
              <navLink title="Hello" url="/" />
            </div>
          </div>
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

<script setup>
const links = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Blog', url: '/blog' }
  // { title: 'Projects', url: '/projects' },
  // { title: 'FAQ', url: '/faq' }
]
</script>

<template>
  <section class="px-16">
    <div class="link-group">
      <div class="logo">
        <RouterLink to="/">adcdotpe</RouterLink>
      </div>
      <div v-for="(link, i) in links" :key="i">
        <RouterLink :to="link.url" activeClass="navbar-link__active" class="navbar-link">
          {{ link.title }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 10em 2.5em;
  cursor: default;
  height: 100vh;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  text-align: center;
  top: 0;
  width: 20em;
  z-index: 10000;
  background: none;
}

.link-group {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.link-group > :not(.logo) {
  margin: 0.5em 0;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
}

@media (max-width: 1024px) {
  section {
    height: 4em;
    left: 0;
    line-height: 3.5em;
    overflow: hidden;
    padding: 0;
    top: 0;
    width: 100%;
  }

  .link-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .link-group > div {
    margin: 0 1em !important;
    align-self: flex-end;
  }

  .logo {
    margin-bottom: 0;
  }
}
</style>

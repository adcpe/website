<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <main class="font-plexmono min-h-screen">
    <TheNavbar />
    <div class="page">
      <RouterView />
    </div>
  </main>
</template>

<style>
main {
  background: #cad9ac75;
  color: #222222;
}

main > .page {
  margin: 0 auto 0 20em;
  width: 75%;
}

.title {
  font-weight: 700;
  color: #222222;
}

.subtitle {
  font-weight: 600;
  color: #222222;
  opacity: 0.75;
}

.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.inline-link {
  font-size: 20px;
  color: #c33200;
}

.inline-link:hover,
.inline-link:hover > i::before {
  color: #034923;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.navbar-link {
  font-size: 22px;
  color: #c33200;
  margin: 1em auto;
}

.navbar-link:hover,
.navbar-link:hover > i::before {
  color: #034923;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.navbar-link__active,
.navbar-link__active > i::before {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

@media (max-width: 1024px) {
  main > .page {
    padding-top: 4em;
    margin: 0 auto;
  }

  .content {
    margin-top: 2em;
    min-height: auto;
    align-content: center;
  }

  .navbar-link {
    font-size: 18px;
  }
}
</style>

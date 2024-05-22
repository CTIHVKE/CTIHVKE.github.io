<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Rabbit logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">更多</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <hr>
    到了就不许走了
  </footer>
</template>

<style scoped>
header {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    padding-left: 24px;
}

main{
  position: relative;
  top: 95px;
  min-width: 500px;
}

.logo {
  display: block;
  margin: 0 auto;
  float: left;
}

.wrapper{
  float: left;
  font-size: 28px;
  padding-top: 80px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

footer{
  visibility: visible;
    width: 100%;
    position: fixed;
    z-index: 302;
    bottom: 0;
    left: 0;
    height: 39px;
    padding: 1px 2rem;
    zoom: 1;
    margin: 0;
    line-height: 39px;
    background: #fff;
    text-align: center;
    justify-content: center;
}
/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

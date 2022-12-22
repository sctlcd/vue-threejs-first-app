<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
html {
  background-color: $black;
  margin: 1rem;
  padding: 0rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $off-white;
  background-color: $black;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $off-white;

    &.router-link-exact-active {
      color: $grey;
    }
  }

  a:hover {
    color: $light-burgundy;
  }
}
</style>

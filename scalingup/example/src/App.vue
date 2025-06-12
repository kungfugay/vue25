<template>
  <nav>
    <router-link to="/home">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>
  </nav>

  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  border-bottom: 2px solid black;
  padding-bottom: 15px;
}
nav > a {
  padding: 10px;
}
</style>

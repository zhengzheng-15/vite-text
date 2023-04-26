<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import Title from "./components/Title.vue";
import Nav from "./components/Nav.vue";
// import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="wapper">
    <Nav></Nav>
   
  </div>
  <div class="two">
    <!-- <Title></Title> -->
    <router-view></router-view>
  </div>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <router-link to="home">Home</router-link>
    <br />
    <router-link to="title">Title</router-link>
    <br />
    <router-link to="cultivate">Cultivate</router-link>
    <br />
  </div>

  <!-- <div class="one">
  <HelloWorld msg="Vite + Vue" />
  </div> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
/* #app {
  width: 69%;
  display: flex;
  float: right;
  background-color: lightpink;
} */
.NavTitle{
display: block;
}
.NavItem{
  float: right;
  display: block;
}
.NavList{
  display: block;
}
/* .one {
width: 100px;
}
.two{
width: 100px;
float: right;
} */
</style>
